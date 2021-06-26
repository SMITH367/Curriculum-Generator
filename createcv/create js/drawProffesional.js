const profile = document.getElementById("profile")
const experience = document.getElementById("experience")
const education = document.getElementById("education")

class drawAbout {
    constructor() {}

    drawProfile() {
        let contProfile = document.querySelector(".profile")
        let value = profile.value
        contProfile.innerHTML = ` <h3> 
        <i class="fa fa-address-card" aria-hidden="true"></i> Perfil </h3> <br> <p> ${value} <p> `
    }
    drawExperience() {
        let contExperience = document.querySelector(".experience")
        let value = experience.value
        contExperience.innerHTML = ` <h3> 
        <i class="fa fa-address-card" aria-hidden="true"></i> Experiencia</h3> <br> <p> ${value} <p> `
    }
    drawEducation(){
        let contEducation = document.querySelector(".education")
    let value = education.value
    contEducation.innerHTML = ` <h3>  <i class="fa fa-university" aria-hidden="true"></i> Educacion </h3> <br> <p> ${value} <p>`
    }
}

const drawProffesional = new drawAbout()

profile.addEventListener("input", () => drawProffesional.drawProfile())

experience.addEventListener("input", () => drawProffesional.drawExperience())

education.addEventListener("input", () => drawProffesional.drawEducation())

