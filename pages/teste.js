import {useState} from 'react';
import Link from 'next/link';

function Teste(){
    return (
    <div>
        <h2><CapsLock>Este é meu primeiro componente CapsLock</CapsLock></h2>
        <div>Este é meu primeiro botão de contagem:</div>
        <Contador/>
        <div>
        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
        </div>
        <div>
        <Link href="/">
            <a>Acessar página Home</a>
        </Link>
        </div>
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

export default Teste