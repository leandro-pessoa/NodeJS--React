// imports dos módulos
import React, { ChangeEvent } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

// import dos estilos
import { DivEnviar, Div, ButtonSend, StyledIoMdSend, Logue } from '../estilos/MainPage-style'
import { TextArea, InputTittle } from '../estilos/Estilos-gerais'

// tipagem dos props
interface Props {
    dados: object[]
    setDados: (arg: object[]) => void
}

export default class Enviar extends React.Component<Props>{
    // tipagem dos states
    state: {
        titulo: string,
        msg: string,
        user: string
    }

    // declaração do construtor e dos states
    constructor(props: Props){
        super(props)
        this.state = {
            titulo: '',
            msg: '',
            user: ''
        }
    }

    // pega o usuário logado do sessionStorage e o coloca no state 'user'
    getUsuarioLogado(): void{
        if(sessionStorage.getItem('usuario_logado')){
          this.setState({
            user: JSON.parse(String(sessionStorage.getItem('usuario_logado')))[0]
          })
        }
    }

    // roda a função 'getUsuarioLogado' quando o componente é criado
    componentDidMount(): void {
        this.getUsuarioLogado()
    }

    // função de setagem dos states dos inputs
    setValores(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> ){
        const { name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    // envia os posts para o backend
    enviarPost(): void{

        // caso um dos inputs esteja vazio, retornará um toast (feedback)
        if(this.state.titulo == '' || this.state.msg == ''){
            toast.error('Preencha todos os campos!', {
                theme: 'dark',
                icon: false
            })
        }
        else{

            // declaração de constantes que serão usadas no envio
            const user: any = this.state.user

            // parte destinada à inserção das horas e da data atual no post
            const data: Date =  new Date()
            const mesAtual: number = data.getMonth() + 1
            const minutos: number | string = data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()
            const date: string = data.getDate() + '/' + mesAtual + '/' + data.getFullYear()
            const tempoAtual: string = data.getHours() + ':' + minutos
            
            // geração do id do post
            let id: number = Math.random() * 999999999

            // envio em si para o backend
            axios.post('http://localhost:3000/enviar-post', {
                id: String(id),
                usuario: user.usuario,
                email: user.email,
                titulo: this.state.titulo,
                msg: this.state.msg,
                data: date,
                hora: tempoAtual,
                editado: false
            })

            // renderiza o post na tela sem a necessidade de recarregar a página
            const novosDados: object[] = this.props.dados
            
            novosDados.push({
                id: String(id),
                usuario: user.usuario,
                email: user.email,
                titulo: this.state.titulo,
                msg: this.state.msg,
                data: date,
                hora: tempoAtual,
                editado: false
            })
            this.props.setDados(novosDados)
            
            // apaga os inputs
            this.setState({
                titulo: '',
                msg: ''
            })
        }
    }

    // renderiza a caixa de postagem somente se houver um usuário logado
    renderDiv(): JSX.Element | undefined{
        if(this.state.user == ''){
            return (
                <Logue>
                    Cadastre-se ou faça login para poder fazer posts
                </Logue>
            )
        }
        else{
            return (
                <>
                    <DivEnviar>
                        <Div>
                            <InputTittle 
                                placeholder="Título"
                                name="titulo"
                                value={this.state.titulo}
                                onChange={(e)=>this.setValores(e)}
                                autoComplete="off"
                            />
                        </Div>
                        <Div>
                            <TextArea
                                maxLength={300}
                                placeholder="Digite a sua mensagem aqui"
                                name="msg"
                                value={this.state.msg}
                                onChange={(e)=>this.setValores(e)}
                                autoComplete="off"
                            />
                            <ButtonSend>
                                <StyledIoMdSend
                                    size={25}
                                    color="#41A7BD"
                                    onClick={()=>this.enviarPost()}
                                />
                            </ButtonSend>
                        </Div>
                    </DivEnviar>
                </>
            )
        }
    }

    render(): React.ReactNode {
        return (
            <>  
                <ToastContainer/>
                {this.renderDiv()}
            </>
        )
    }
}