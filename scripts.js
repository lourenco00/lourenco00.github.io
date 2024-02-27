// Add any custom JavaScript for your portfolio
function initializeParticles() {
  const particlesconfig = {
    "particles": {
      "number": {
        "value": 80
      },
      "color": {
        "value": "#f5f5f5"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5
      },
      "size": {
        "value": 3
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#f5f5f5",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 80,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };
  particlesJS('particles-js', particlesconfig);
}

document.addEventListener("DOMContentLoaded", function () {

  const helpInput = document.getElementById("help-input");

  helpInput.addEventListener("click", function () {
    this.focus();
  });

  helpInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const inputValue = this.value.trim();

      if (validateInput(inputValue)) {
        clearInterval(window.interval);
        clearAllSections();
        processCommand(inputValue);
        this.value = "";

      } else {
        showError("Invalid command. Please enter one of the following: --help, --about, --skills, --projects, --contact");
      }
    }
  });

  const backgroundMusic = document.getElementById("background-music");
  const musicButton = document.getElementById("music-button");

  musicButton.addEventListener("click", function () {
    if (backgroundMusic.paused) {
      backgroundMusic.volume = 0.2; 
      backgroundMusic.play();
      musicButton.innerHTML = "<i class='fa fa-pause'></i>"; 
    } else {
      backgroundMusic.pause();
      musicButton.innerHTML = "<i class='fa fa-music'></i>"; 
    }
  });

});

const aboutSubtitleElements = document.querySelectorAll(".about-subtitle");
aboutSubtitleElements.forEach(subtitle => {
  subtitle.addEventListener("click", () => {
    const clicks = parseInt(subtitle.getAttribute("data-clicks"));
    const content = subtitle.nextElementSibling;
    if (clicks % 2 === 0) {
      content.classList.remove("hidden");
      subtitle.classList.add("active");
    } else {
      content.classList.add("hidden");
      subtitle.classList.remove("active");
    }
    subtitle.setAttribute("data-clicks", clicks + 1);
  });
});

function initializeAboutSectionEventListeners() {

  const educationButton = document.querySelector("#education-button");
  const experienceButton = document.querySelector("#experience-button");
  const hobbiesButton = document.querySelector("#hobbies-button");
  const traitsButton = document.querySelector("#traits-button");

  const educationContent = document.getElementById("education-content");
  const experienceContent = document.getElementById("experience-content");
  const hobbiesContent = document.getElementById("hobbies-content");
  const traitsContent = document.getElementById("traits-content");

  function hideAllContents() {
    educationContent.style.display = "none";
    experienceContent.style.display = "none";
    hobbiesContent.style.display = "none";
    traitsContent.style.display = "none";
  }

  educationButton.addEventListener("click", () => {
    hideAllContents();
    educationContent.style.display = "block";
  });

  experienceButton.addEventListener("click", () => {
    hideAllContents();
    experienceContent.style.display = "block";
  });

  hobbiesButton.addEventListener("click", () => {
    hideAllContents();
    hobbiesContent.style.display = "block";

  });

  traitsButton.addEventListener("click", () => {
    hideAllContents();
    traitsContent.style.display = "block";
  });
}


// ##########################     HELP      #################################

function processCommand(command) {
  document.getElementById("output").innerHTML = "";
  if (command === "--help") {
    const helpText = "Welcome to my portfolio!\n\n" +
      "Here are some commands you can try:\n" +
      "  --about    Display info about me\n" +
      "  --skills   Display my skills\n" +
      "  --projects Display my projects\n" +
      "  --contact  Display my contact info\n";
    const outputElement = document.getElementById("output");
    outputElement.classList.remove("hidden");
    outputElement.innerHTML = "";
    const letters = helpText.split("");
    let i = 0;
    window.interval = setInterval(function () {
      if (i < letters.length) {
        outputElement.innerHTML += letters[i];
        i++;
      } else {
        clearInterval(window.interval);
      }
    }, 50);
    const projectsSection = document.getElementById("projects-section");
    projectsSection.style.display = "none";
    document.getElementById("about-section").style.display = "none";


    // ##########################     ABOUT      #################################


  } else if (command === "--about") {
    document.getElementById("projects-section").style.display = "none";
    const aboutSection = document.getElementById("about-section");
    const educationContent = document.getElementById("education-content");
    const experienceContent = document.getElementById("experience-content");
    const hobbiesContent = document.getElementById("hobbies-content");
    const traitsContent = document.getElementById("traits-content");

    if (aboutSection.style.display === "none") {
      aboutSection.style.display = "block";
      educationContent.style.display = "none";
      experienceContent.style.display = "none";
      hobbiesContent.style.display = "none";
      traitsContent.style.display = "none";

    } else {
      aboutSection.style.display = "none";

    }
    initializeAboutSectionEventListeners();
  
    const infographic = document.querySelector(".infographic");
    infographic.style.animation = "infographic-animation 1s ease-in-out";

  
    // ##########################     CONTACT      #################################

  } else if (command === "--contact") {
    // Display the contact information with animations
    document.getElementById("projects-section").style.display = "none";
    const outputElement = document.getElementById("output");
    outputElement.classList.remove("hidden");
    outputElement.innerHTML = "<div class='contact-info' style='font-family: Arial, sans-serif; color: white;'>" +
    "<p style='margin: 0; padding: 5px;'><strong>Lourenço Santos</strong></p>" +
    "<p style='margin: 0; padding: 5px;'><i class='fa fa-envelope' style='width: 24px; text-align: center;'></i> E-mail: <a href='mailto:lourencoramossantos@gmail.com' style='color: white;'>lourencoramossantos@gmail.com</a></p>" +
    "<p style='margin: 0; padding: 5px;'><i class='fa fa-linkedin' style='width: 24px; text-align: center;'></i> LinkedIn: <a href='https://www.linkedin.com/in/lourenco00/' target='_blank' style='color: white;'>lourenco00</a></p>" +
    "<p style='margin: 0; padding: 5px;'><i class='fa fa-github' style='width: 24px; text-align: center;'></i> Github: <a href='https://github.com/lourenco00' target='_blank' style='color: white;'>lourenco00</a></p>" +
    "<p style='margin: 0; padding: 5px;'><img src='htb.png' alt='HackTheBox Icon' style='vertical-align: middle; width: 22px; height: 22px;'> HackTheBox: <a href='https://app.hackthebox.com/profile/overview' target='_blank' style='color: white;'>lourenco00</a></p>" +
    "</div>";
    const contactInfo = document.querySelector(".contact-info");
    contactInfo.style.animation = "contact-animation 1s ease-in-out";
    const head = document.querySelector("head");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
    head.appendChild(link);
    const projectsSection = document.getElementById("projects-section");
    projectsSection.style.display = "none";
    document.getElementById("about-section").style.display = "none";


    // ##########################     PROJECTS      #################################

  } else if (command === "--projects") {
    const projectsSection = document.getElementById("projects-section");
    const middleContent = document.querySelector(".middle-content");
    document.getElementById("about-section").style.display = "none";

    if (projectsSection.style.display === "none") {
      projectsSection.style.display = "block";
      const enigmaMachinePreview = document.querySelector("#enigma-machine-preview");
      const thesisPreview = document.querySelector("#shift-left-security-preview");
      const pkesPreview = document.querySelector("#securing-pkes-preview");
      loadPDFPreview("projects/Enigma Machine.pdf", enigmaMachinePreview);
      loadPDFPreview("projects/Shift-Left Security.pdf", thesisPreview);
      loadPDFPreview("projects/Securing PKES.pdf", pkesPreview);
    } else {
      projectsSection.style.display = "none";
      middleContent.style.display = "block";
    }




    // ##########################     SKILLS      #################################


  } else if (command === "--skills") {
    const skills = [
      { technology: 'Java', score: 6 },
      { technology: 'Python', score: 6 },
      { technology: 'Bash', score: 4 },
      { technology: 'C', score: 3 },
      { technology: 'Github Actions', score: 7 },
      { technology: 'Ansible', score: 7 },
      { technology: 'Splunk', score: 2 },
      { technology: 'x86 Assembly', score: 2 },
      { technology: 'Angular', score: 3 },
      { technology: 'SQL/NoSQL', score: 3 },
      { technology: 'Jenkins', score: 5 },
      { technology: 'Penetration Testing', score: 7 },
      { technology: 'Git', score: 7 },
      { technology: 'Linux', score: 6 },
      { technology: 'Django', score: 7 },
    ];


    const outputElement = document.getElementById("output");
    outputElement.classList.remove("hidden");

    const skillsSection = document.createElement("div");
    skillsSection.id = "skills";
    skillsSection.innerHTML = "<h2>Skills:</h2>";

    const skillsContainer = document.createElement("div");
    skillsContainer.classList.add("skills-container");
    skills.forEach((skill) => {
      const skillCard = createSkillCard(skill.technology, skill.score);
      skillsContainer.appendChild(skillCard);
    });

    skillsSection.appendChild(skillsContainer);
    outputElement.innerHTML = '';
    outputElement.appendChild(skillsSection);
    document.getElementById("about-section").style.display = "none";

    const projectsSection = document.getElementById("projects-section");
    projectsSection.style.display = "none";
  }

  function createSkillCard(skillName, skillScore) {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");

    const skillLabel = document.createElement("span");
    skillLabel.classList.add("skill-label");
    skillLabel.textContent = skillName;
    skillCard.appendChild(skillLabel);

    const progressBarContainer = document.createElement("div");
    progressBarContainer.classList.add("progress-bar-container");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.style.width = `${skillScore * 10}%`;
    progressBarContainer.appendChild(progressBar);

    skillCard.appendChild(progressBarContainer);

    return skillCard;

  }

}


// ############################ OTHER FUNCTIONS #############################################

function loadPDFPreview(pdfUrl, container) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

  pdfjsLib.getDocument(pdfUrl).promise.then(function (pdf) {
    pdf.getPage(1).then(function (page) {
      const desiredWidth = container.clientWidth;
      const unscaledViewport = page.getViewport({ scale: 1 });
      const scale = desiredWidth / unscaledViewport.width;
      const scaledViewport = page.getViewport({ scale: scale });


      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = scaledViewport.width;
      canvas.height = scaledViewport.height;

      const renderContext = {
        canvasContext: context,
        viewport: scaledViewport
      };

      container.innerHTML = "";
      container.appendChild(canvas);

      page.render(renderContext);
    });
  });
}


function displayOutput(text) {
  const output = document.getElementById("output");
  output.classList.remove("hidden");
  output.innerHTML += "<p class='output-text'>" + text + "</p>";
}

function clearAllSections() {
  const outputElement = document.getElementById("output");
  const projectsSection = document.getElementById("projects-section");
  outputElement.innerHTML = "";
  outputElement.classList.add("hidden");
  projectsSection.style.display = "none";
}

function validateInput(inputValue) {
  const allowedCommands = ["--help", "--about", "--skills", "--projects", "--contact"];
  return allowedCommands.includes(inputValue.toLowerCase());
}

function showError(errorMessage) {
  const errorElement = document.createElement("p");
  errorElement.style.color = "red";
  errorElement.textContent = errorMessage;

  const inputElement = document.getElementById("help-input");
  inputElement.parentElement.insertBefore(errorElement, inputElement.nextSibling);

  setTimeout(() => {
    errorElement.remove();
  }, 3000);
}

window.onload = initializeParticles;
