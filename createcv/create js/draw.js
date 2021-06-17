//Drawin the info of thr cv on the temeplate
const nameof = document.getElementById("name")
const lastName = document.getElementById("lastName")
const ocupation = document.getElementById("ocupation")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const link = document.getElementById("link")
const languages = document.getElementById("languages")
const skill = document.getElementById("skill")

nameof.addEventListener("input",()=>{

    let contName = document.querySelector(".name")
  
    a = nameof.value;
    if(a.length < 10 && a.length > 3){
        contName.innerHTML = `${nameof.value}`
    } 
    

   

})