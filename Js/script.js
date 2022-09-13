
const btnSignIn = document.querySelector('.sign-in-btn');
const btnSignUp = document.querySelector('.sign-up-btn');
const signUp = document.querySelector('.sign-up');
const signIn = document.querySelector('.sign-in');


document.addEventListener('click', e => {
    if(e.target === btnSignIn || e.target === btnSignUp){
        signIn.classList.toggle('active');
        signUp.classList.toggle('active');
    }
});

let formulario = document.querySelector('#form1')
let formLogin = document.querySelector('#form2')
let promedio = document.getElementById('registrado');

console.log(promedio);

function login(e){
    e.preventDefault();

    if(formulario.usuario.value && formulario.password.value && formulario.email.value){


    let valueUser = formulario.usuario.value;
    let valuePass = formulario.password.value;
    let valueEmail = formulario.email.value;
    
    
    const objetoUsuario = {
        usuario: valueUser,
        password: valuePass,
        email: valueEmail
    };
    
    const token = generateToken(objetoUsuario.usuario, objetoUsuario.password, objetoUsuario.email)
    localStorage.setItem("token", token)
    promedio.innerText = "Te has registrado con exito"
    
    }else{
        alert("Debes rellenar todos los campos")
    }
}

function generateToken(usuario, password, email) {
    const user = {
    usuario,
    password,
    email,
    };
    return JSON.stringify(user);
};

function authUser(e){
    e.preventDefault();

    let valueName = formLogin.usuario.value;
    let valuePass = formLogin.password.value;
    let valueEmail = formLogin.email.value;
    
    const userLogin = {
        usuario: valueName,
        password: valuePass,
        email: valueEmail
    };

    const userLog = generateUser(userLogin.usuario, userLogin.password, userLogin.email)
    localStorage.setItem("user", userLog)

    if (localStorage.getItem("token") == userLog) {
        let link = document.querySelector('#linkLogin');
        link.className = "showContent"
        let inputVal = document.querySelector('#inputValidar');
        inputVal.className = "hideContent"
    } else {
        alert("Usuario o contraseña incorrectos")
    }
};

function generateUser(usuario, password, email) {
    const userLogin = {
    usuario,
    password,
    email,
    };
    return JSON.stringify(userLogin);
};