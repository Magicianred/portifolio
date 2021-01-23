import React from "react";


class Experiencias extends React.Component {

  render(){
    return(
      <div className={'post-container'}>
        <p><strong>Cargo: </strong>{this.props.cargo}</p>
        <p><strong>Empresa: </strong>{this.props.empresa}</p>
        <p><strong>Descrição:</strong> {this.props.descricao}</p>
      </div>
    )
  }
}

export default Experiencias;
 