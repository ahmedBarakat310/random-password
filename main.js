const passwordInput = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
let passwordLength=12;
const upperCase = "ASDFGHJKLQWERTYUIOPZXCVBNM";
const lowerCase = "asdfghjklqwertyuiopzxcvbnm";
const number = "0123456789";
const symbol = "@#$%^&*()?+-";
let collection=upperCase +lowerCase +symbol + number;
function ceartePassword(){
let password = "";
 
    password+=upperCase[Math.floor(Math.random() * upperCase.length) ];
    password+=lowerCase[Math.floor(Math.random()* lowerCase.length) ];
    password+=number[Math.floor(Math.random()* number.length) ];
    password+=symbol[Math.floor(Math.random()* symbol.length) ];
    while(password.length < passwordLength){
        password+=collection[Math.floor(Math.random()* collection.length) ];

    }
    passwordInput.value=password;
}
generateBtn.addEventListener('click',ceartePassword);
copyBtn.addEventListener('click',function() {
    passwordInput.select();
    document.execCommand("copy")
})