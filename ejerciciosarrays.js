class Usuario {constructor(nombre, password, email){
        this.nombre = nombre;
        this.password = password;
        this.email = email;
    }}
    let altausuario =[];
    for ( let i =0; i <3 ; i++){
        let nombreingr = prompt("Ingresar Usuario");
        let passwordingr =prompt ("Ingresar password");
        let emailingr = prompt ("Ingresar email");
        const Usuario1 = new Usuario(nombreingr,passwordingr,emailingr);
        altausuario[i]= Usuario1;
        console.log (Usuario1);}