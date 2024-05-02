const button = document.querySelector(".login__button" );
const input = document.querySelector(".login__input" );
const form = document.querySelector(".login-form");


//valida o login

function validaInput({target}){
    
    if(target.value.length > 2 ){
        button.removeAttribute('disabled');
        

    } else{
        button.setAttribute('disabled', '');
    
    }

    console.log(target.value);
}


function handleSubmit(event){
    event.preventDefault();
    localStorage.setItem( "player", input.value );    
    window.location="./game.html";

}


//listening
input.addEventListener('input', validaInput);
form.addEventListener('submit', handleSubmit);

function alert(){
    confirm("Funciona!")
}
