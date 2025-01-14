function download() {
    var a = document.createElement('a');
    a.href = 'resume.pdf'; 
    a.download = 'Sai_Manikanta_Resume.pdf';
    a.click();
  }
  let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 3 seconds
}

showSlides();
const sidebar = document.querySelector('.sidebar');
const sidebarBtn = document.querySelector('.sidebar-btn');

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
