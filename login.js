const mensagem = document.querySelector(".mensagem");
const email = document.getElementById("email");
const senha= document.getElementById("senha");
const formulario = document.getElementById("formulario");

formulario.onsubmit = (evento) =>{
    let dados = JSON.parse(localStorage.getItem("dados"));
    dados.forEach((element) => {
        if (element.email == email.value && element.senha == senha.value) {
            evento.preventDefault();
            mensagem.innerHTML = "Aguarde você será redirecionado..."

            let dados = JSON.parse(sessionStorage.getItem("logado")) ||[];
            dados.push(
                {
                    email:email.value
                }
            )
            sessionStorage.setItem("logado",JSON.stringify(dados));
            setTimeout(()=>{
                window.location.assign("catalogo.html")
            }, 3000)
            return true;
        } else{
            evento.preventDefault();
            mensagem.innerHTML = "Senha ou E-mail Incorreto";
        }
       
    });
}

