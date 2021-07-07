import Link from 'next/link';

function Home(){
    return (
    <div>
        <h1>Home Takashi - Estudando meu primeiro site !</h1>
        <div>
        <Link href="/sobre">
            <a>Acessar página Sobre</a>
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

export default Home