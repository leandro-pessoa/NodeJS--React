interface Props {
    modo: boolean
}

export default function background(){
    if((props: Props) => props.modo){
        return '#fff'
    }
    else{
        return '#2B2D33'
    }
}
