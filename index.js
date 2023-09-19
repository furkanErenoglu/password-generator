const pasw1 = document.getElementById("pasw-1")
const pasw2 = document.getElementById("pasw-2")


const passwordCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "r", "s", "t", "u", "ü", "v", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O" ,"P", "R", "S", "T", "U", "V", "Y", "Z", "#", "*", "."];
console.log(passwordCharacter.length)
// aldığın her rastgele karakteri yeni oluşturduğun bir array'in içerisine atacaksın
// en son o array'i döneceksin

function generateRandomPassword (){
    let password = ""

    for (let i = 0; i < 7; i++) {
        const yeniRandom = Math.floor(Math.random() * 49);
        password += passwordCharacter[yeniRandom];
    }
    return password;
    
}



function clickfunc(){
    pasw1.innerHTML = generateRandomPassword()
    pasw2.innerHTML = generateRandomPassword()
    
}

