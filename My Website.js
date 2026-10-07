// =============================
//        SHOW ABOUT ME
// =============================

function showAboutMe() {

    const homeSection =
        document.getElementById("home-section");

    const aboutSection =
        document.getElementById("about-section");


    // Hide Home
    homeSection.classList.add("hide");


    // Show About Me
    aboutSection.classList.add("show");
}



// =============================
//           SHOW HOME
// =============================

function showHome() {

    const homeSection =
        document.getElementById("home-section");

    const aboutSection =
        document.getElementById("about-section");


    // Hide About Me
    aboutSection.classList.remove("show");


    // Show Home
    homeSection.classList.remove("hide");
}