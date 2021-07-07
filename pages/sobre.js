import Link from 'next/link';

function Sobre(){
    return (
    <div>
        <h2>Sobre o Takashi</h2>
        <div>Takashi é Assessor microfinanças na MCFO, Engenheiro Civil, mestrando em Engenharia Urbana, apaixonado por planilhas</div>
        <div>
        <Link href="/">
            <a>Acessar página Home</a>
        </Link>
        </div>
        <div>
        <Link href="/teste">
            <a>Acessar página Teste</a>
        </Link>
        </div>
    </div>
    )
}

export default Sobre