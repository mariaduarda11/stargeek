const mensagem = document.querySelector(".mensagem");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha= document.getElementById("senha");
const formulario = document.getElementById("formulario");

formulario.onsubmit = (evento) =>{
    if(
        nome.value==""

    )
    {
        mensagem.innerHTML="digite seu nome";
        evento.preventDefault();
        return null;
    }
    
    if (
        email.value==""
    )
    {
        mensagem.innerHTML="digite o email";
        evento.preventDefault();
        return null;
    }
    
    if(
        senha.value==""
    )
    {
        mensagem.innerHTML="digite o senha";
        evento.preventDefault();
        return null;
    }

    let dados = JSON.parse(localStorage.getItem("dados")) || [];
    dados.push({
    nome: nome.value,
    email: email.value,
    senha: senha.value
    })
    localStorage.setItem("dados", JSON.stringify(dados)
    );evento.preventDefault();
    mensagem.innerHTML = "<p> Parabéns, cadastro feito com sucesso </p>";
    setTimeout(() => {
        window.location.assign("login.html");
    }, 3000);
}
