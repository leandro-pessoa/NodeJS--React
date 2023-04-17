// imports dos módulos
import React, { ChangeEvent } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"

// import de outro componente
import Header from './componentes/Header'
import Enviar from './componentes/Enviar'
import RenderPosts from './componentes/RenderPosts'

// import dos estilos
import { Body, SectionImg, SectionContent } from "./estilos/MainPage-style"
import './App.css'

// tipagem dos props
interface Props {

}


export default class MainPage extends React.Component<Props>{
    // tipagem dos states
    state: {
        sectionImgSize: boolean,
        dados: object[]
    }

    // declaração do construtor e dos states
    constructor(props: Props){
        super(props)

        this.state = {
            sectionImgSize: false,
            dados: []
        }
    }
    
    setSectionImgSize(): void {
        this.setState({sectionImgSize: !this.state.sectionImgSize})
    }
    setDados(arg: object[]): void{
        this.setState({
            dados: arg
        })
    }

    // pega os posts salvos no banco de dados
    getPosts(): void{
        axios.get('http://localhost:3000/get-post')
            .then((res)=>{
                this.setState({dados: res.data})
            })
            .catch((err)=>{
                toast.error('Não foi possível carregar os posts',{
                    theme: 'dark',
                    icon: false
                })
            })
    }

    componentDidMount(): void {
        this.getPosts()
    }

    render(): React.ReactNode {
        return (
            <>
                <ToastContainer/>
                <Header
                    setImgSize={()=>this.setSectionImgSize()}
                />
                <Body>
                    <SectionImg
                        tam={this.state.sectionImgSize ? '250px' : '0px'}
                    >
                    </SectionImg>
                    <SectionContent>
                        <RenderPosts
                            dados={this.state.dados}
                            setDados={(e)=>this.setDados(e)}
                        />
                        <Enviar
                            dados={this.state.dados}
                            setDados={(e)=>this.setDados(e)}
                        />
                    </SectionContent>
                </Body>
            </>
        )
    }
}