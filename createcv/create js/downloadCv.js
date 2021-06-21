const downloadCv = document.querySelector(".downloadCv");

downloadCv.addEventListener("click",(e)=>{
    e.preventDefault()
    const conf = confirm("¿Desea guardar el curriculum?")

    if(conf === true){
      const finalcv = document.getElementById("final-cv");
      html2pdf()
     .from(finalcv)
     .save()
    }
})
