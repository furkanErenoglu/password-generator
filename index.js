const pasw1 = document.getElementById("pasw-1")
const pasw2 = document.getElementById("pasw-2")
const myInput = document.getElementById("input-id")
const button = document.getElementById("btn")


const passwordCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "r", "s", "t", "u", "ü", "v", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y", "Z", "#", "*", "."];

let passwordLenght;
button.disabled = true

myInput.addEventListener("input", (e) => {
    console.log(e)
    if(e.target.value > 20){
        e.target.value = 20;
        alert("en fazla 20 yapabilirsin")
        
    }
    if(e.target.value <= 0){
        button.disabled = true
        button.style.backgroundColor = 'gray'
    }else{
        button.disabled = false
        button.style.backgroundColor = '#10B981'
    }
    passwordLenght = e.target.value
})


function generateRandomPassword() {
    let password = ""

    for (let i = 0; i < passwordLenght; i++) {
        const yeniRandom = Math.floor(Math.random() * 49);
        password += passwordCharacter[yeniRandom];
    }
    return password;

}



function clickfunc() {
    pasw1.innerText = generateRandomPassword()
    pasw2.innerText = generateRandomPassword()

}



function copy(element) {
    let copyText1 = document.getElementById(element).innerText
    if (!copyText1) {
        alert("")
    } else {
        navigator.clipboard.writeText(copyText1)
        pasw1.innerText = "Copied!"
        setTimeout(() => {
            pasw1.innerText = copyText1
        }, 1000);
    }
}

