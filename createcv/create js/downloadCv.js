const downloadCv = document.querySelector(".downloadCv");



downloadCv.addEventListener("click",(e)=>{
    e.preventDefault()
    const conf = confirm("¿Desea guardar el curriculum?")

    if(conf === true){
      const finalcv = document.getElementById("final-cv")
      finalcv.classList.replace("final-cv","font-normal")
      html2pdf()
     .from(finalcv)
     .save()
     setTimeout(function(){ finalcv.classList.replace("font-normal","final-cv") }, 100);

    }

    
})
