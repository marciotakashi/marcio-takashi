import {useState} from 'react';

function Home(){
    return (
    <div>
        <h1><CapsLock>Home Takashi - Estudando meu primeiro site !</CapsLock></h1>
        <Contador/>
    </div>
    )
}

function Contador(){
    const [contador,setContador] = useState(1);
    function adicionarContador(){
        setContador(contador+1);
    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

function CapsLock(props){
    const textoInserido = props.children;
    const textoEmCapsLock = textoInserido.toUpperCase();
    return <div>{textoEmCapsLock}</div>
}

export default Home