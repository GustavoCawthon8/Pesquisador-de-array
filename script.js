const p_array = document.getElementById("array");
const pesquisa = document.getElementById("pesquisar");
const btn = document.getElementById("pesquisarBTN");
const r_array = document.getElementById("resultadoArr");

const  elementos = [287, 478, 379,20, 30];
p_array.innerHTML = elementos;
btn.addEventListener("click", ()=>{
  r_array.innerHTML = "valor não achado";
  
  const ret = elementos.find((e,i) =>{
    if(e==pesquisa.value){
      r_array.innerHTML = e;
    }
  });
  
});