class FormularioController{
  constructor(){
    this.nome = $("#nome");
    this.email = $("#email");
    this.interesses= new Array();
    this.mensagem = $("#mensagem");

    var teste = $("form");


  }
    geraInscricao(event){
      let disponibilidades = $(".disponibilidade");
      let interesse = $(".interesses");

      event.preventDefault();

      for(let i=0;i < disponibilidades.length;i++){
        if(disponibilidades[i].checked){
          if(disponibilidades[i].value == "personalizar"){
            this.disponibilidade = $("#personalizar").val();
          }else{
            this.disponibilidade = disponibilidades[i].value;
          }
        }
      }

      for (let i=0;i<interesse.length;i++){
           if (interesse[i].checked == true){
             if(interesse[i].value == "outro"){
              this.interesses.push($("#interesseOutro").val());
             }else{
               this.interesses.push(interesse[i].value);
             }
          }
      }

      let objeto = new InscricaoForm(
          this.nome.val(),
          this.email.val(),
          this.disponibilidade,
          this.interesses,
          this.mensagem.val()
        );
      sucesso(this.email);
      let meuJson = JSON.stringify(objeto);

      return console.log(meuJson);

    }


}
