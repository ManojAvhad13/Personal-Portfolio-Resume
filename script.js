console.log("Welcome to Manoj Avhad's Portfolio Website!");

function showResume() {
    const resumePreview = document.getElementById("resume-preview");
    if (resumePreview.style.display === "none") {
        resumePreview.style.display = "block";
    } else {
        resumePreview.style.display = "none";
    }
}
