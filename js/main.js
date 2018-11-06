var navbarToggle = document.querySelector(".navbar-toggle");
var navItem = document.querySelectorAll(".nav-item");
var exitButton = document.querySelector("#exit");
var brand = document.querySelector(".navbar-brand");
var contentClass = document.querySelector(".content");

brand.onclick = function() {
  if (contentClass.classList.contains("fadeIn")) {
    contentClass.classList.toggle("fadeIn");
    contentClass.style.zIndex = "-1";
  }
}

navbarToggle.onclick = function() {
  document.querySelector(".navbar-collapse").classList.toggle("right");
  navbarToggle.classList.toggle("indexcity");
};

for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', navItemClick);
}
exitButton.addEventListener('click', exitContentView);

function navItemClick() {
  var content = this.textContent.trim();
  var contentClass = document.querySelector(".content");
  if (contentClass.style.zIndex !== "1") {
    contentClass.style.zIndex = "1";
    contentClass.classList.toggle("fadeIn");
    if (window.innerWidth < 767) {
      document.querySelector(".navbar-collapse").classList.toggle("fadeOut");
      document.querySelector(".navbar-toggler").style.display = "none";
    }
  }
  if (content === "Ongoing Projects") {
    document.querySelector(".innerContent").innerHTML = ongoingProjects();
  } else if (content === "Completed Projects") {
    document.querySelector(".innerContent").innerHTML = completedProjects();
  } else if (content === "Future Projects") {
    document.querySelector(".innerContent").innerHTML = futureProjects();
  } else if (content === "Contact") {
    document.querySelector(".innerContent").innerHTML = contact();
  } else if (content === "About") {
    document.querySelector(".innerContent").innerHTML = about();
  }
}

function exitContentView() {
  contentClass.style.zIndex = "-1";
  contentClass.classList.toggle("fadeIn");
  if (window.innerWidth < 767) {
    document.querySelector(".navbar-collapse").classList.toggle("fadeOut");
    document.querySelector(".navbar-toggler").style.display = "block";
  }
}

function ongoingProjects() {
  return `
    <div class="shard">
      <h1>Ongoing Projects</h1>
    </div>
    <div class="shard">
      <h1>Website</h1>
    </div>
    <div class="shard">
      <h1>Plannit</h1>
    </div>
  `;
}

function completedProjects() {
  return `
    <div class="shard">
      <h1>Completed Projects</h1>
    </div>
  `;
}

function futureProjects() {
  return `
    <div class="shard">
      <h1>Future Projects</h1>
    </div>
  `;
}

function contact() {
  return `
    <div class="shard">
      <h1>Contact</h1>
    </div>
  `;
}

function about() {
  return `
    <div class="shard">
      <h1>About</h1>
    </div>
  `;
}
