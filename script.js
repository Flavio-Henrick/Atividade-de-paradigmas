let butmenu = document.querySelector(".butmenu");
let butmenu = document.querySelector(".imagem");
let decisao= false;
imagem.style.marginLeft= "-150%";

funcion menuToggle(){
  if(decisao== false){
      imagem.style.marginLeft= "auto";
      decisao=true;
  } 
  else if(decisao==true){
    imagem.style.marginLeft= "-150%";
    statmenu=false;
  }
    
}
butmenu.onclick= menuToggle;