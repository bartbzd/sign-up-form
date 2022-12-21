const pass = document.querySelector("#password")
const checkPass = document.querySelector("#check-password")
const passes = document.querySelectorAll('[type="password"]')
const toggle = document.querySelector(".theme-button")
const themeIcon = document.querySelector("#themeIcon")
const colors = ["#c6b8ef", "#f0c5c5"];

function checkPassword() {
    if (pass.value != "" && pass.value.length > 5 && pass.value === checkPass.value){
        for (let i = 0; i < passes.length; i++) {
        passes[i].style.backgroundColor = colors[0]
        passes[i].style.border = `1px solid ${colors[0]}`
        }
    } else if (pass.value.length < 5 || pass.value != "" && pass.value != checkPass.value) {
        for (let i = 0; i < passes.length; i++) {
          passes[i].style.backgroundColor = colors[1]
          passes[i].style.border = `1px solid ${colors[1]}`
        }
        }
}

checkPass.addEventListener("input", checkPassword);
pass.addEventListener("input", checkPassword);
toggle.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    let targetTheme = 'light';
    if (theme === "light") {
        targetTheme="dark"
    }
    document.documentElement.setAttribute("data-theme", targetTheme);

    themeIcon.classList.toggle("fa-sun");
    themeIcon.classList.toggle("fa-moon")
})