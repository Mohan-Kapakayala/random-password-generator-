const passwordBox=document.getElementById("Password");
const allChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$<>+-_=";
const lenght=10;
function createPassword(){
    let password=""
    while(lenght > password.length){
        password +=allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value=password; 
}
function copyPassword(){
    passwordBox.select();
    document.contentEditable("copy");
}