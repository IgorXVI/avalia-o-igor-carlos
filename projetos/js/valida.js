let nome = $("#nome");
let email = $("#email");
let mensagem = $("#mensagem");
let temPersonalizar = false;

$( ()=>{
  mostraErroNomeNoInput();
  mostraErroEmailNoInput();
  mostraPersonalizar();
  mostraOutros();
  mostraErroNoInputMenssagem();
  mostraErroOutros();
  mostraErroNoPersonalizar();
  botaoSubmit();
});

function validaNome(){
  let valor = nome.val();
  let verifyInt = /\d+/g;
  let teste = valor.split(/\S+/).length - 1;

  if(teste >= 2 && $(nome).val().match(verifyInt) == null){
    nome.removeClass("borda-vermelha");
    nome.addClass("borda-verde");

    return true;

  }else{
    nome.removeClass("borda-verde");
    nome.addClass("borda-vermelha");
    return false;
  }
}

function mostraErroNomeNoInput(){
  nome.on("input", function(){
    validaNome();
  });
}


function validaEmail(){
  let valor = email.val();

  let parse_email = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])/;


  if(parse_email.exec(valor)){
    email.removeClass("borda-vermelha");
    email.addClass("borda-verde");

    return true;

  }else{
    email.removeClass("borda-verde");
    email.addClass("borda-vermelha");
    return false;
  }
}

function mostraErroEmailNoInput(){
  email.on("input", function(){
    validaEmail();
  });
}

function mostraErroNoPersonalizar(){
  $("#personalizar").on("input", ()=>{
    validaPersonalizar();
  });
}

function validaPersonalizar(){
  if($("#personalizar").val().length != 0){
    $("#personalizar").removeClass("borda-vermelha");
    $("#personalizar").addClass("borda-verde");
    return true;
  }
  else{
    $("#personalizar").removeClass("borda-verde");
    $("#personalizar").addClass("borda-vermelha");
    return false;
  }
}

function mostraPersonalizar(){
  let personalizar = $("input[name=disponibilidade]:radio");

  personalizar.on("change", function() {
    if($("#disponibilidade-personalizar").is(":checked")){
      $("#personalizar").attr("hidden", false);
      return true;

    }else{
      $("#personalizar").attr("hidden", true);
      return false;
    }
  });
}

function mostraErroOutros(){
  $("#interesseOutro").on("input", ()=>{
    validaOutros();
  });
}

function validaOutros(){
  if($("#interesseOutro").val().length != 0){
    $("#interesseOutro").removeClass("borda-vermelha");
    $("#interesseOutro").addClass("borda-verde");
    return true;
  }
  else{
    $("#interesseOutro").removeClass("borda-verde");
    $("#interesseOutro").addClass("borda-vermelha");
    return false;
  }
}

function mostraOutros(){
  var outro = $("#interesse4");
  outro.on("click", function(){
    if(outro.is(":checked")) {
      $("#interesseOutro").attr("hidden", false);

    } else {
      $("#interesseOutro").attr("hidden", true);
    }
  });
}

function mostraErroNoInputMenssagem(){
  mensagem.on("input", function(){
    validaMensagem();
  });
}

function validaMensagem(){
  var valor = mensagem.val();
  var teste = valor.length;

  if(teste >= 140){
    mensagem.removeClass("borda-vermelha");
    mensagem.addClass("borda-verde");

    return true;

  }
  else{
    mensagem.removeClass("borda-verde");
    mensagem.addClass("borda-vermelha");

    return false;
  }
}

function validaInteresses(){
  let interesses = $('input[type=checkbox]');
  interesses.each( (interesse)=>{
    if(interesse.checked){
      return true;
    }
  });

  alert("Ao menos um interesse deve ser selecionada.");
  return false;
}

function validaDisponibilidade(){
  let disponibilidades = $('input[name=disponibilidade]:radio');
  disponibilidades.each( (disponibilidade)=>{
    if(disponibilidade.checked){
      return true;
    }
  });
  alert("Ao menos uma disponibilidade deve ser selecionada.");
  return false;
}

function botaoSubmit(){

  let botao = $("#botao-submit");
  botao.on("mouseover", ()=>{
    let nomeEhValido = validaNome();
    let emailEhValido = validaEmail();
    let mensagemEhValida = validaMensagem();
    let personalizarEhValido = validaPersonalizar() || !($("#disponibilidade-personalizar").is(":checked"));
    let outrosEhValido = validaOutros() || !($("#interesse4").is(":checked"));
    let disponibilidadesSaoValidas = validaDisponibilidade();
    let interessesSaoValidos = validaInteresses();

    let funciona = 
    nomeEhValido && 
    emailEhValido && 
    mensagemEhValida  && 
    personalizarEhValido && 
    outrosEhValido && 
    disponibilidadesSaoValidas && 
    interessesSaoValidos;

    botao.prop("disabled", !funciona);
  });

}


function sucesso(email){
  let formulario = $("form");
  let formulario1 =$("#formulariodps");
  let p = document.getElementById("campo1");
  formulario.addClass("formularioGugu");
  formulario1.removeClass("formularioGugu");
  let text = email.val();
  p.innerHTML = "Inscrição enviada. Aguarde novos detalhes em seu e-mail "+ text;
}


