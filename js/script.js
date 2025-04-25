document.addEventListener("DOMContentLoaded", function () {

  // footer current yr
  const currentYR = document.getElementById('currentYR');
  var currentYear = new Date().getFullYear();
  currentYR.textContent = currentYear;

  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  // Set light mode as default
  document.body.classList.remove("dark-mode");
  themeIcon.classList.add("bi-sun"); // Sun icon for light mode

  // Toggle light/dark mode
  themeToggle.addEventListener("click", function () {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      themeIcon.classList.remove("bi-moon"); //removes moon icon
      themeIcon.classList.add("bi-sun"); //adds sun icon
      console.log("Switched to light mode");
    } else {
      document.body.classList.add("dark-mode");
      themeIcon.classList.remove("bi-sun"); //removes sun icon
      themeIcon.classList.add("bi-moon"); //adds moon icon
      console.log("Switched to dark mode");
    }
  });

  // funtion for arrow to the top
  const backToTopButton = document.getElementById("arrowTop");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  };

  //hover on the project logos
  const projContainers = document.getElementsByClassName("proj-cont"); 
  Array.from(projContainers).forEach((container, index) => {
    //hovering on 
    container.addEventListener("mouseover", function () {
      let pDecID = projContainers[index].children[1].children[1];
      let pText = "";

      // Course Manager Web App
      if (pDecID == container.querySelector("#comp-desc")) {
        pText = "Built with Python, Flask, Oracle, and REST API," +
            " this app manages users and displays course" + 
            " competencies. It features secure login," + 
            " data visualization, and CRUD functionalities," + 
            " designed for scalability and smooth user interaction."
      }
      // record store
      if (pDecID == container.querySelector("#record-desc")) {
        pText = "Created a record store app using Java," + 
            " JavaFX, and SQL. Managed records by artist, " + 
            " title, genre, and availability, while" + 
            " optimizing database queries for performance" + 
            " and testing features with JUnit."
      }

      // Course Manager Web App
      if (pDecID == container.querySelector("#tindog-desc")) {
        pText = "A responsive web app built with HTML5," + 
          " CSS, and Bootstrap that helps dog owners " +
          " connect their pets with nearby companions in a " +
          " fun, user-friendly interface."
      }

      // Course list db
      if (pDecID == container.querySelector("#courselist-desc")) {
        pText = "A SQL and Java-based system for tracking" + 
            " computer science courses and prerequisites," + 
            " featuring advanced SQL techniques(views," + 
            " triggers, procedures) and a Java app for" + 
            " efficient data management."
      }
      if (pDecID == container.querySelector("#movie-desc")) {
        pText = "Using PostgreSQL to develop a movie rental system designed" +  
            " to manage memberships, rentals, and movie" +  
            " inventory. The system ensures proper handling" +  
            " of rental transactions, membership benefits," +  
            " and overdue penalties."
      }

      if (pDecID == container.querySelector("#memFee-desc")) {
        pText = "Windows Forms application in C#" +  
              " that allows users to enter personal details," + 
              " select membership types, choose additional options," + 
              " calculate fees, and save membership details to a CSV " +
              " file, with the ability to view registered memberships " +
              " in a separate form"
      }

      if (pDecID == container.querySelector("#exchange-desc")) {
        pText = "Developed using HTML, CSS, and JavaScript, this" +  
              " project retrieves and displays real-time data " + 
              " from an external API"
      }

      pDecID.textContent = pText;
      pDecID.style.fontSize = "15px";
    });

    container.addEventListener("mouseout", function () {
      pDecID = projContainers[index].children[1].children[1];
      // <!-- Course Manager Web App -->
      if (pDecID == container.querySelector("#comp-desc")) {
        pDecID.textContent = "";
      }
      // <!-- CRecord Store Appp -->
      if (pDecID == container.querySelector("#record-desc")) {
        pDecID.textContent = "";
      }
      // <!-- Tindog Website -->
      if (pDecID == container.querySelector("#tindog-desc")) {
        pDecID.textContent = "";
      }
      // <!--Course List Database -->
      if (pDecID == container.querySelector("#courselist-db")) {
        pDecID.textContent = "";
      }
      // <!--Movie Rental Database -->
      if (pDecID == container.querySelector("#movie-desc")) {
        pDecID.textContent = "";
      }
      // <!-- Projects Membership Fee Calculator -->
      if (pDecID == container.querySelector("#memFee-desc")) {
        pDecID.textContent = "";
      }
      // Exchange Rate Calculator
      if (pDecID == container.querySelector("#exchange-db")) {
        pDecID.textContent = "";
      }
    });
  });


  // change photo when hover
  const portphoto = document.getElementById("port-photo");
  portphoto.addEventListener("mouseenter", (event) =>{
    event.target.src = "images/port-photo.png";
    event.target.alt = "portfolio-person"
  });
  portphoto.addEventListener("mouseleave", (event) =>{
    event.target.src = "images/portforlio.png";
    event.target.alt = "portfolio-ghibli"
  });


  // for background image scroll
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollY / docHeight;
    
    // Set vertical background position based on scroll
    document.body.style.backgroundPosition = `center ${scrollPercent * 100}%`; 
  });

});
