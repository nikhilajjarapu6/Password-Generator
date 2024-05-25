
function passwordGenerator(length){
    const lowercase='abcdefghijklmnOpqrstuvwxyz';
    const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers='0123456789';
    const charechters='!@#$%&*?';
    let password='';

    if(length<8){
        throw new Error("password must be greater than 8");
        return '';
    }
    let allchars=lowercase+numbers;
    password=password+upperCase[Math.floor(Math.random()*upperCase.length)]
    password+=charechters[Math.floor(Math.random()*charechters.length)]
    for(let i=2;i<length;i++){
        password+=allchars[Math.floor(Math.random()*allchars.length)]
    }
    password=password.split('').sort(()=>Math.random()-0.5).join('');
    console.log(password);
    if(password.length>2)
    return password;
}



document.addEventListener('DOMContentLoaded',()=>{
    let btn=document.querySelector('#button-addon2');
    let generatedPassword=document.querySelector('#generated-password');
    let btnCopy = document.querySelector('#button-copy');
    btn.addEventListener('click',()=>{
        let inputValue=document.querySelector('#input');
        let passwordLength=parseInt(inputValue.value)
        if(isNaN(passwordLength) || passwordLength<8){
            alert("Please enter a valid number greater than or equal to 8")
            return '';
        }
       let password= passwordGenerator(passwordLength);
       if(password){
       generatedPassword.value=password
       btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(generatedPassword.value);
        btnCopy.innerHTML='Copied'
        setTimeout(()=>{
            btnCopy.innerText="  Copy"
          },3000)
    });
    }
    })
})