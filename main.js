console.log('test')
const pass = document.querySelector("#password")
const confirmPass = document.querySelector("#confirm-password")
const placeholder = document.getElementsByName('placeholder');

function checkPassword() {
    if (pass.value != "" && pass.value === confirmPass.value){
        styleValid(pass)
        styleValid(confirmPass)
    } else if (pass.value != "" && pass.value != confirmPass.value) {
        styleInvalid(pass)
        styleInvalid(confirmPass)
        }
}

function styleValid(input) {
    input.style.backgroundColor = "#c6b8ef";
    input.style.border = "1px solid #c6b8ef";
}
function styleInvalid(input) {
    input.style.backgroundColor = "#f0c5c5";
    input.style.border = "1px solid #f0c5c5";
}

confirmPass.addEventListener("input", checkPassword);
pass.addEventListener("input", checkPassword);