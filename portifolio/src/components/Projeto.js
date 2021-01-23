import react from "react";
import styled from "styled-components"

const ImgProject = styled.img`
  width: 300px;
  object-fit: cover;
  @media (max-width: 650px) {
    width: 100%;
    height: 200px;
  }
`

class Projetos extends react.Component{
    render(){
        return(
            <div>
            <p><strong>Projeto:</strong> {this.props.nomeProjeto}</p>
            <p><strong>Descrição:</strong>{this.props.descricaoProjeto}</p>
            <p><strong>Feito em: </strong>{this.props.requisitosProjeto}</p>
            <ImgProject src={this.props.imagem}/>
        </div>
        )
    }
    
}

export default Projetos
