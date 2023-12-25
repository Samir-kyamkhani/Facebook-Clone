const settingMenu = document.querySelector(".settings-menu");
const navUserIcon = document.querySelector(".nav-user-icon");
const darkBtn = document.getElementById("dark-btn");

navUserIcon.addEventListener("click", settingMenuTogle);
darkBtn.addEventListener("click", darkMod)



function settingMenuTogle() {
  settingMenu.classList.toggle("settings-menu-height");
}

function darkMod() {

    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    
}

if (localStorage.getItem("theme") == "dark") {

    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");

} else if(localStorage.getItem("theme") == "light"){

    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");

} else {
    localStorage.setItem("theme", "light");
}