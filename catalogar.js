const botaomodal = document.getElementById("btn");
const nome= document.getElementById("nome");
const descricao=document.getElementById("descricao");
const foto=document.getElementById("foto");
const cadastrar=document.getElementById("cadastrar");
const botaocadastrar = document.querySelector(".btncadastrar");
const botaoeditar = document.querySelector(".btneditar");
const botaofechar = document.querySelector(".btnclose");

var emaillogado;
femaillogado();

var url = new URL(window.location.href);
var peditar = url.searchParams.get("peditar");
var pindice = url.searchParams.get("indice");

if (peditar == "true"){
  editar(pindice);
}

botaocadastrar.onclick = (evento)=>{
  
  if ((peditar != "true") || (peditar == null)){
    evento.preventDefault();
    fenvio().then(result =>{
                     if(result){
                        let dados = JSON.parse(localStorage.getItem("catalogo"))||[];
                        dados.push(
                                      {
                                        nome: nome.value,
                                        descricao: descricao.value,
                                        foto: nomeArq,
                                        email:emaillogado
                                        }
                                     )
                        localStorage.setItem("catalogo", JSON.stringify(dados));
                        window.location.assign("catalogo.html");
                        
                     }else{
                        alert("Houve erro no envio do arquivo");
                     }

                    });
      }else
      {
        editarenvio(evento);
        
      }
    
}
function editar(indice){
  nome.value = "editar";
  descricao.value = "editar";
  foto.files[0] = null;  
  let dados = JSON.parse(localStorage.getItem("catalogo"));
  nome.value = dados[indice].nome;
  descricao.value = dados[indice].descricao;
  fotoa= dados[indice].foto;
 
}
var fotoa;
function editarenvio(evento){
     evento.preventDefault();
    if ((fotoa != foto.value)&&(foto.value != "")){
 
    fenvio()
    .then(result =>{
                    if(result){
                      salvaEdicao(nomeArq);
                       }
                    });
   }
   else
   {
        salvaEdicao(fotoa);
   } 
}

var nomeArq;
async function fenvio() { 
    const url = 'http://localhost:3005/upload';
    const arquivo = document.getElementById("foto").files[0];
    const formData = new FormData();
    formData.append('arquivo', arquivo);
    console.log(JSON.stringify(formData));
    try{
         
         var resp = await fetch(url, {
                                       method: 'POST',
                                       body: formData,
                                     }
                               ) 
         if (resp.ok){
           let respText = await resp.text();
           nomeArq = respText;
           return true;
         }
         else{
              return false;
         }
       }
    catch (error) {
        console.error(error);
        return false;
      }
}


function salvaEdicao(pfoto){
   let dados = JSON.parse(localStorage.getItem("catalogo"));
   dados[pindice].nome = nome.value;
   dados[pindice].descricao = descricao.value;
   dados[pindice].foto = pfoto;
   dados[pindice].email = emaillogado;
   localStorage.setItem("catalogo", JSON.stringify(dados));
    window.location.assign("catalogo.html");
}
function femaillogado(){
   let dados = JSON.parse(sessionStorage.getItem("logado"));
   if(dados==null){
      window.location.assign("login.html");
   }
   else{
      emaillogado = dados[0].email;
   }
}