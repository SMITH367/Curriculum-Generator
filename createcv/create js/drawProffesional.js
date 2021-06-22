const profile = document.getElementById("profile")
const experience = document.getElementById("experience")
const education = document.getElementById("education")


profile.addEventListener("input",()=>{
    let contProfile = document.querySelector(".profile")
    let value = profile.value
    contProfile.innerHTML = ` <h3> 
    <i class="fa fa-user-plus" aria-hidden="true"></i> Perfil </h3> <p> ${value} <p> `

})

experience.addEventListener("input",()=>{
  
    let contExperience = document.querySelector(".experience")
    let value = experience.value
    contExperience.innerHTML = ` <h3> 
    <i class="fa fa-address-card" aria-hidden="true"></i> Experiencia</h3> <p> ${value} <p> `

})
education.addEventListener("input",()=>{
    let contEducation = document.querySelector(".education")
    let value = education.value
    contEducation.innerHTML = ` <h3>  <i class="fa fa-university" aria-hidden="true"></i> Educacion </h3> <p> ${value} <p>`
})