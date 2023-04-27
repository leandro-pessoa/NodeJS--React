import axios from "axios"

let values: object[] = []
const getDados = (): object[] => {
    axios.get('http://localhost:3000/get')
        .then((res)=>{
            values = res.data
        })
        .catch((err)=>{
            console.log('!!!ERRO: ' + err)
        })
    return values
}

export default getDados