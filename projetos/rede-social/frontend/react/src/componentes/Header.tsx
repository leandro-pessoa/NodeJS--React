// imports de módulos
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

//import do estilo
import { Body, SectionTittle, DivLinks, SectionUser, DivUser, H2, StyledLink, StyledCiMenuBurger, Button } from '../estilos/HeaderStyle'

// tipagem dos props
interface Props{
  setImgSize: () => void
}

export default class Header extends React.Component<Props>{
  // tipagem dos states
  state: {
    user: object | string
  }

  // declaração do construtor e dos states
  constructor(props: Props){
    super(props)

    this.state = {
      user: ''
    }
  }

  // pega o usuario logado do sessionStorage e o coloca no state user
  getUsuarioLogado(): void{
    if(sessionStorage.getItem('usuario_logado')){
      this.setState({
        user: JSON.parse(String(sessionStorage.getItem('usuario_logado')))[0]
      })
    }
  }

  // quando o compnente é montado, a função getUsuarioLogado é executada
  componentDidMount(): void {
    this.getUsuarioLogado()
  }

  // serve para a renderização do canto direito
  // caso não exista usuário logado, aparecerão os links
  // caso contrário, aparecerá o usuário e o email dele
  renderUsuario(): JSX.Element{
    const user: any = this.state.user
    if(user == ''){
      return (
        <DivLinks>
          <StyledLink to='/login'>Entrar</StyledLink>
          <StyledLink to='/cadastro'>Cadastrar</StyledLink>
        </DivLinks>
      )
    }
    else{
      return (
        <SectionUser>
          <DivUser
            style={{
              color: '#80C3B2'
            }}
          > 
            {user.usuario}
          </DivUser>
          <DivUser 
            style={{
              color: 'white',
              fontSize: '0.8em',
              marginTop: '3px'
            }}
          >
            {user.email}
          </DivUser>
        </SectionUser>
      )
    }
  }

  render(): React.ReactNode {
    return(
      <Body>
        <SectionTittle
          style={{
            display: 'flex'
          }}
        >
          <Button onClick={()=>this.props.setImgSize()}>
            <StyledCiMenuBurger
              size={25}
              color='#80C3B2'
            />
          </Button>
          <H2>Rede social</H2>
        </SectionTittle>
        {this.renderUsuario()}
      </Body>
    )
  }
}


