function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className ==="nav-menu") {
        menuBtn.className += 'nav-menu';
    }else{
        menuBtn.className = "nav-menu";
    }
}

window.onscroll = function() {headerShadow()}

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop>50 || document.documentElement.scrollTop>50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)"
        navHeader.style.height = "70px"
        navHeader.style.lineHeight = "70px"
        
    }else{
        navHeader.style.boxShadow = "none"
        navHeader.style.height = "90px"
        navHeader.style.lineHeight = "90px"
    }
}

var typingEffect = new Typed(".typedText",{
    strings:["Dot Net Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})

const sr = ScrollReveal({
    origin: 'top',
    distance:'80px',
    duration: 2000,
    reset: true
})

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay:100})
sr.reveal('.featured-text-info',{delay:200})
sr.reveal('.featured-text-btn',{delay:200})
sr.reveal('.social_icons',{delay:200})
sr.reveal('.featured-image',{delay:300})

sr.reveal('.project-box',{interval:200})

sr.reveal('.top-header',{})

const SrLeft = ScrollReveal({
    origin:'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

SrLeft.reveal('.about-info',{delay:100})
SrLeft.reveal('.contact-info',{delay:100})


const SrRight = ScrollReveal({
    origin:'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

SrRight.reveal('.skills-box',{delay:100})
SrRight.reveal('.form-control',{delay:100})



const sections = document.querySelectorAll('section[id]')


function scrollActive (){
    const scrollY = window.scrollY;

    sections.forEach(current=>{
        const sectionHeight= current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY<= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.remove('active-link')
        }
    });
};

window.addEventListener('scroll', scrollActive);


var pdfUrl = "./Md_Faizul_Haque_CV.pdf";

function downloadPdf() {
    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        // Create a blob URL for the PDF data
        var url = window.URL.createObjectURL(blob);
  
        // Create a link element to trigger the download
        var a = document.createElement("a");
        a.href = url;
        a.download = "Md_Faizul_Haque_CV.pdf"; // Set the desired file name
        document.body.appendChild(a);
  
        // Trigger a click event on the link element to initiate the download
        a.click();
  
        // Clean up by revoking the blob URL and removing the link element
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch(error => {
        console.error("Failed to download the PDF file: ", error);
      });
  }
  
  // Call the downloadPdf() function when needed, e.g., in response to a button click
  document.getElementById("btn").addEventListener("click", downloadPdf);




 
function sendEmail() {
    var params = {
     from_name : document.getElementById('uname').value,
     user_email : document.getElementById('email').value,
     message : document.getElementById('message').value,
    }
        emailjs.send("service_s9eda9b","template_zhmjiog",params).then(function (res) 
        {
            alert("Email Sent Successfully"+  res.status)
          },
          reason => {
            alert("Error Occur");
          });
}