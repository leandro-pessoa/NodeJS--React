import React, { ReactNode }  from 'react'
import axios from 'axios'
import './App.css'

interface Props {

}

export default class App extends React.Component<Props>{
  state: {
    teste: any
  }
  constructor(props: Props){
    super(props)
    this.state = {
      teste: ''
    }
  }
  componentDidMount(): void {
    axios.get('http://localhost:3000/api')
      .then(res => {
        const dados = res.data
        this.setState({teste: dados})
    })
  }
    
  render(): ReactNode{
    return(
      <>
        <main>
          <section className='registro'>
            <div>
              <label htmlFor="nome">Nome:</label><br/>
              <input type="text" id="nome" autoComplete='off'/>
            </div>
            <div>
              <label htmlFor="cat">Categoria:</label><br/>
              <input type="text" id="cat" />
            </div>
            <div>
              <label htmlFor="ano">Ano:</label><br/>
              <input type="text" id="ano" />
            </div>
            <div>
              <button>
                Cadastrar
              </button>
            </div>
          </section>
          <section className='display'>
            aaaa
          </section>
        </main>
      </>
    )
  }
}
