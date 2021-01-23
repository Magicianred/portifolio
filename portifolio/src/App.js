import './App.css';
import React, { useRef } from "react";
import styled from 'styled-components'
import Experiencias from './components/Experiencias'
import Projeto from './components/Projeto'
import Trabalhando from './imagens/trabalhando.png'
import SiteProjeto from '../src/imagens/site-gif.gif'
import Labefy from '../src/imagens/labefy.gif' //ate aqui meu
import ProjetoFeito from '../src/imagens/projeto-feito.gif'
import Dinheiro from '../src/imagens/desenho5.png'
import Macbook from '../src/imagens/macbook.png'
import Graduacao from '../src/imagens/graduacao.png'
import Working from '../src/imagens/working.png'
import Code from '../src/imagens/code.png'
import LinearProgress from '@material-ui/core/LinearProgress';

const ImgProject = styled.img`
  height: 400px;
  @media (max-width: 650px) {
    width: 100%;
    height: 200px;
  }
`

const ImgProjectFooter = styled.img`
  height: 300px;
  @media (max-width: 650px) {
    width: 100%;
    height: 200px;
  }
`

const ImgProjectEducation = styled.img`
  height: 300px;
  @media (max-width: 650px) {
    width: 100%;
    height: 200px;
  }
`

const ImgCode = styled.img`
  height: 200px;
  @media (max-width: 650px) {
    width: 100%;
    height: 200px;
  }
`

const ImgAvar = styled.img`
  height: 200px;
  width: 500px;
  @media (max-width: 650px) {
    width: 100%;
    height: 200px;
  }
`


export default function App() {

  const myRefQuemSou = useRef(null)
  const executeScroll = () => myRefQuemSou.current.scrollIntoView()
  const myRefProjetos = useRef(null)
  const executeScroll1 = () => myRefProjetos.current.scrollIntoView()
  const myRefContato = useRef(null)
  const executeScroll2 = () => myRefContato.current.scrollIntoView()

  return (
    <div className="App">
      <header className="cabecalho">
        <div>
        </div>

        <div className="cabecalho-links">
          <p onClick={executeScroll} className="quem-sou">Sobre mim</p>
          <p onClick={executeScroll1} className="quem-sou">Projetos</p>
          <p onClick={executeScroll2} className="quem-sou">Contato</p>
        </div>
      </header>

      <div className="sobre-mim">
        <h1>Carolaine Viana</h1>
        <h2>Fullstack Web Developer</h2>
        <p ref={myRefQuemSou} className="sobre-mim-text">
          <h1>Sobre mim</h1>
              Meu nome é Carolaine, tenho 23 anos, me formei a pouco tempo em Sistema de informação pela Unisales.
              Moro no estado do Espirito Santo, em Vitória.
              Minha carreira em tecnologia começou a muitos anos atrás, mas só enxerguei que era isso que queria para minha vida quando
              ingressei na faculdade, no ano de 2016. Desde então, fiz vários estágios na área de tecnologia, margitoriamente em Suporte.
              Tentei ingressar em alguns estágios na área de desenvolvimento, mas os requisitos eram muito maiores do que fato eu vinha aprendendo.
              A faculdade me ajudou a ter uma noção de lógica, e vi linguagens como: Java, PHP, e bastante de C.
              Como a faculdade apenas me deu o caminho das pedras para o desenvolvimento, estou atualmente me especializando na Labenu,
              uma escola voltada para isso. Sendo assim, estou buscando uma oportunidade para demonstrar tudo que aprendi ao longo desses anos.
              </p>
        <ImgProject src={Trabalhando} />
      </div>

      <div className="habilidades">
        <div className="intro">
          <h1>Habilidades/Competências</h1>
        </div>
        <div className="habilidades1">
          <h2>Desenvolvimento de aplicações web utilizando React, HTML, CSS e JavaScript.</h2>
        </div>
        <ImgProject src={Macbook} />
        <div className="habilidades2">
          <ol>
            <li><h2>Banco de dados MYSQL.</h2></li>
            <li><h2>Git-hub, Git-lab, versionamento de código.</h2></li>
            <li><h2>Python - fundamentos</h2></li>
            <li><h2>Linguagem C.</h2></li>
            <li><h2>Integrações com API Postman.</h2></li>
          </ol>
        </div>
      </div>


      <div className="formacoes">
        <div className="education1">
          <ImgProjectEducation src={Graduacao} />
        </div>
        <div className="formacoe1">
          <ol>
            <li><h2>Bacharel em Sistema da informacao</h2></li>
            <li><h2>Certificacao Scrum Foundation</h2></li>
            <li><h2>Web Full Stack na Labenu - Em curso</h2></li>
            <li><h2>Inglês avançado</h2></li>
          </ol>

        </div>

      </div>

      <div className="experiencias">
        <ImgProjectFooter src={Working} />
        <div className="card">
          <Experiencias
            cargo={'Estágiaria'}
            empresa={'Alta Rail Technology'}
            descricao={'Pesquisa de erros no sistema de logs do controle ferroviário da empresa, atualizações em banco de dados, envio de relatórios de SLA para a diretoria, experiência no time de Qualidade (testes) de software, usando a ferramenta test-link para testar componentes do sistema.'}
          />
        </div>
        <div className="card">
          <Experiencias
            cargo={'Estágiaria'}
            empresa={'Time-Now Engenharia SA'}
            descricao={'Geração de querys em SQL atendendo ou apoiando demandas de RM; preparação de máquinas para contrato de clientes externos; geração ou busca de alguma informação dentro do RM totvs; cotação de máquinas e requisitos para envio nos contratos; soluções para chamados abertos de usuário; soluções em acesso remoto a usuários a distância; busca de ferramentas para atendimento a alguma solicitação e melhoria no processo da empresa; mapeamento em fluxogramas para documentar todos os processos de TI dentro da empresa;'}
          />
        </div>
        <div className="card">
          <Experiencias
            cargo={'Analisa de processos JR'}
            empresa={'Nexa Tecnologia'}
            descricao={'Experiência no processo de Report, utilizando query para abordagens no banco de dados da Vale; experiência no processo como gestora por um período em Asset Management, atuando no gerenciamento de todos os ativos da Vale Brasil e Vale mundo; experiência no processo de Knowledge Management, atuando na base de conhecimento de artigos de conhecimento; experiência no processo de Configuration Management na parte de networking de Acess Point, Roteadores, UPS, Switch da Vale Brasil e Vale mundo.'}
          />
        </div>

        <div className="card">
          <Experiencias
            cargo={'Estágiaria'}
            empresa={'Universidade Catolica Salesiana'}
            descricao={'Estagiária em análise de projetos da instituição, levantamento de requisitos e entrevista a usuários para levantamentos de necessidade de software.'}
          />
        </div>


        <div ref={myRefProjetos} className="projetos-intro">
          <div className="intro">
            <h1>Projetos</h1>
            <h2>Estou me desenvolvimento ao longo da minha carreira e aprendendo mais e mais.</h2>
            <LinearProgress /><LinearProgress color="secondary" />
            <br />
          </div>
          <ImgCode src={Code} />
        </div>

        <div className="projetos">
          <div className="cardProjetos">
            <Projeto
              nomeProjeto=' Labefy'
              descricaoProjeto=' Construção de uma playlist de músicas utilizando API'
              requisitosProjeto=' React.JS, API Postman, Material-UI.'
              imagem={Labefy}
            />
          </div>

          <div className="cardProjetos">
            <Projeto
              nomeProjeto=' E-commerce'
              descricaoProjeto=' Projeto em grupo de criação de um site de alugel voltado para universitários'
              requisitosProjeto=' HTML5, CSS, puro.'
              imagem={SiteProjeto}
            />
          </div>

          <div className="cardProjetos">
            <Projeto
              nomeProjeto=' E-commerce II'
              descricaoProjeto=' Projeto de criação de um site de produtos usados/seminovos'
              requisitosProjeto=' React, integração com API Postman, e material-UI. '
              imagem={ProjetoFeito}
            />
          </div>

        </div>

        <div ref={myRefContato} className="footer">
          <ImgProjectFooter src={Dinheiro} />
          <h1>Contrate-me</h1>
          <p>Procuro uma oportunidade onde eu possa iniciar minha carreira em desenvolvimento.</p>
          <p>Email para contato: carolsantos14@hotmail.com</p>
          <p>Telefone: (27) 995086910</p>
          <p>Tipo de contrato: PJ e CLT</p>

          <a href="https://github.com/carolaine-viana/meus-projetos">
            <img src="https://img.icons8.com/clouds/80/000000/github.png" />
          </a>

          <a href="https://www.linkedin.com/in/carolaineviana/">
            <img src="https://img.icons8.com/clouds/80/000000/linkedin.png" />
          </a>

          <a href="https://api.whatsapp.com/send?phone=5527995086910&text=Estive no seu portfólio!">
            <img src="https://img.icons8.com/clouds/80/000000/whatsapp.png" />
          </a>

        </div>

        {/* div final */}
      </div>

    </div>
  )

}


