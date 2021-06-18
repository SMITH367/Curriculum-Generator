const profile = document.getElementById("profile")

profile.addEventListener("input",()=>{
    let contProfile = document.querySelector(".profile")
    let value = profile.value
    contProfile.innerHTML = ` <h4>Perfil </h4> <p> ${value} <p> `

})