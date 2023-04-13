import React from "react";
//PRIMEIRO PASSO É IMPORTAR A BIBLIOTECA REACT

export default class App extends React.Component {
  //SEGUNDO PASSO É EXPORTAR A BIBLIOTECA REACT

  //State é como se fosse uma bolsa para guardar as informações.
  //No caso eu quero guardar o number que vai se atualizando a cada clicada no botão
  state = {
    number: 0
  };

  //Criei minha função chamada Adicionar, com o intuito de somar +1 número do valor atual
  //Chamei essa função dentro do meu button de adicionar (+) : button onClick={this.Adicionar}

  Adicionar = () => {
    //Nessa condição estou dizendo que quero que ela seja menor < que 10 e não conte mais que 10.
   // Ternário = number:this.state.number < 7 ? (você é menor que 7 ? retorna pra mim ele mesmo +1) this.state.num + 1 : (Senão, retorna ele mesmo) this.state.number
    if (this.state.number < 10) {
      this.setState({
        number: this.state.number + 1
      });
    }
  };

  //Criei minha função chamada Remover, com o intuito de diminuir -1 número do valor atual
  //Chamei essa função dentro do meu button de remover (-) : button onClick={this.Remover}
  Remover = () => {
    //Nessa condição estou dizendo que quero que ela seja maior > que 0 e não conte menos que 0.
    if (this.state.number > 0) {
      this.setState({
        number: this.state.number - 1
      });
    }
  };

  //DENTRO DO RENDER COLOCAR TUDO QUE VOCÊ QUER QUE APAREÇA
  //No caso do contador eu só quero que apareça o número e os botões
  render() {
    return (
      <>
        <h2> {this.state.number} </h2>
        <button onClick={this.Adicionar}> + </button>
        <button onClick={this.Remover}> - </button>
      </>
    );
  }
}
