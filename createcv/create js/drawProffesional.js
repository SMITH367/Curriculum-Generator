const profile = document.getElementById("profile")
const experience = document.getElementById("experience")
const education = document.getElementById("education")


profile.addEventListener("input",()=>{
    let contProfile = document.querySelector(".profile")
    let value = profile.value
    contProfile.innerHTML = ` <h3 class="center">Perfil </h3> <p> ${value} <p> `

})

experience.addEventListener("input",()=>{
  
    let contExperience = document.querySelector(".experience")
    let value = experience.value
    contExperience.innerHTML = ` <h3 class="center">Experiencia</h3> <p> ${value} <p> `

})
education.addEventListener("input",()=>{
    let contEducation = document.querySelector(".education")
    let value = education.value
    contEducation.innerHTML = ` <h3 class="center"> Educacion </h3> <p> ${value} <p>`
})