class InscricaoForm {
  constructor(nome, email, disponibilidade, interesses, mensagem) {
    this.nome = nome;
    this.email = email;
    this.disponibilidade = disponibilidade;
    this.interesses= interesses;
    this.mensagem = mensagem;
  }
  nome(){
    return this.nome;
  }
  email(){
    return this.email;
  }
  disponibilidade(){
    return this.disponibilidade;
  }
  interesses(){
    return this.interesses;
  }
  mensagem(){
    return this.mensagem;
  }

}
