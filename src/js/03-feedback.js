import throttle from "lodash.throttle"
const form = document.querySelector(".feedback-form")
const email = document.querySelector("input")
const message = document.querySelector('textarea')

const messageData = {
    email: "",
    message: ""
}

const loadLustFormData = () => {
    let localData = localStorage.getItem("feedback-form-state")
    if (localData != null) {
        const dataObject = JSON.parse(localData)
        messageData.email = dataObject.email
        messageData.message = dataObject.message
        email.value = dataObject.email
        message.value = dataObject.message
    }
}

const saveData = throttle(() => {
    localStorage.setItem("feedback-form-state", JSON.stringify(messageData)) 
}, 500)

loadLustFormData()

form.addEventListener("input", (event) => {
    event.preventDefault()
    if (event.target.getAttribute("name") === "email") {
        messageData.email = event.target.value
    }
    if (event.target.getAttribute("name") === "message") {
        messageData.message = event.target.value
    }
    saveData()
})

form.addEventListener("click", (event) => {
    event.preventDefault()
    if (event.target.getAttribute("type") === "submit") {
        console.log(messageData)
        email.value = null
        message.value = null
        localStorage.removeItem("feedback-form-state")
    }
})