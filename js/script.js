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
      if (pDecID == container.querySelector("#dqueez-desc")) {
        pText = "web-based quiz platform designed to streamline the process of creating," + 
                " distributing, and managing quizzes in educational environments. " +
                "Teachers can create custom quizzes with multiple question types, " +
                "manage student access through unique URLs, and track responses in real-time.";
      }

      // Course list db
      if (pDecID == container.querySelector("#courselist-desc")) {
        pText = "A SQL and Java-based system for tracking" + 
            " computer science courses and prerequisites," + 
            " featuring advanced SQL techniques(views," + 
            " triggers, procedures) and a Java app for" + 
            " efficient data management."
      }
      if (pDecID == container.querySelector("#musicLibrary-desc")) {
        pText = "This project implements a comprehensive Music Record Library" +
                " management system using RESTful Web Services. The application" +
                " allows users to manage clients, records, and rentals through" +
                " REST APIs, offering full CRUD functionality, JSON responses, and HTML forms."
      }

      if (pDecID == container.querySelector("#recipe-desc")) {
        pText = "Smart Recipe Planner is a user-friendly desktop app to organize" +
                " your recipes and plan meals—featuring a Minecraft-inspired interface" +
                " with blocky aesthetics and earthy colors. Built with Python and PyQt6," +
                " it offers an intuitive experience for home cooks and programming learners alike." 
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
      if (pDecID == container.querySelector("#dqueez-desc")) {
        pDecID.textContent = "";
      }
      // <!--Course List Database -->
      if (pDecID == container.querySelector("#courselist-desc")) {
        pDecID.textContent = "";
      }
      // <!--Movie Rental Database -->
      if (pDecID == container.querySelector("#musicLibrary-desc")) {
        pDecID.textContent = "";
      }
      // <!-- Projects Membership Fee Calculator -->
      if (pDecID == container.querySelector("#recipe-desc")) {
        pDecID.textContent = "";
      }
      // Exchange Rate Calculator
      if (pDecID == container.querySelector("#exchange-desc")) {
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

});
