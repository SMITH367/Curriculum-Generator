function createpdf () {

    const z = document.getElementById("final-cv");
     html2pdf()
     .from(z)
     .save();
 }