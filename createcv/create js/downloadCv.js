const downloadCv = document.querySelector(".downloadCv")
console.log(downloadCv)

downloadCv.addEventListener("click",(e)=>{
    e.preventDefault()
    const finalcv = document.getElementById("final-cv");
     html2pdf()
     .from(finalcv)
     .save();

})
