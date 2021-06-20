const downloadCv = document.querySelector(".downloadCv");

downloadCv.addEventListener("click",(e)=>{
    e.preventDefault()
    const finalcv = document.getElementById("final-cv");
      html2pdf()
     .from(finalcv)
     .save()
})
