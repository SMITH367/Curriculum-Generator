//Drawin the info of thr cv on the temeplate
const nameof = document.getElementById("name")
const lastName = document.getElementById("lastName")
const ocupation = document.getElementById("ocupation")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const link = document.getElementById("link")
const languages = document.getElementById("languages")
const addLanguage = document.getElementById("addLanguage")
const skill = document.getElementById("skill")
const addSkill = document.getElementById("addSkill")



nameof.addEventListener("input", () => {

    let contName = document.querySelector(".first")
    let value = nameof.value

    if (value.length < 17 && value.length > 3) {
        contName.innerHTML = ` <h4> ${value} <h4> `
    }

})

lastName.addEventListener("input", () => {

    let contLast = document.querySelector(".last")
    let value = lastName.value

    if (value.length < 17 && value.length > 3) {
        contLast.innerHTML = `<h4> ${value} </h4> `
    }

})


ocupation.addEventListener("input", () => {

    let contOcupation = document.querySelector(".ocupation")
    let value = ocupation.value

    if (value.length < 25 && value.length > 3) {
        contOcupation.innerHTML = ` <p> ${value} <p> `
    }

})


phone.addEventListener("input", () => {

    let contPhone = document.querySelector(".phone")
    let value = phone.value
    if (value.length < 12 && value.length > 3) {
        contPhone.innerHTML = ` <p> ${value} <p> `
    }

})
email.addEventListener("input", () => {
    let contEmail = document.querySelector(".email")
    let value = email.value
    if (value.length < 32 && value.length > 7) {
        contEmail.innerHTML = ` <p style="word-wrap: break-word;"> ${value} <p> `
    }
})

link.addEventListener("input", () => {
    let contLink = document.querySelector(".link")
    let value = link.value

    if (value.length < 25 && value.length > 3) {
        contLink.innerHTML = ` <p> ${value} <p> `

    }
})


addLanguage.addEventListener("click", (e) => {
   
    e.preventDefault()
    let contLanguage = document.querySelector(".languages")
    let value = languages.value
    let language = document.createElement("P")
    language.innerHTML = ` <p class="separation"> ${value} <p> `
    contLanguage.appendChild(language)

})


addSkill.addEventListener("click", (e) => {
    
    e.preventDefault()
    let value = skill.value;


    if (value.length < 20 && value.length > 1) {
        let skilln = document.createElement("P")
        skilln.innerHTML = ` <p class="separation"> ${value} </p>`
        let contSkill = document.querySelector(".skill")
        contSkill.appendChild(skilln)
    }
})

window.addEventListener("keypress", (e)=>{
    if (e.keyCode == 13){
        e.preventDefault();
    }
}, false);
