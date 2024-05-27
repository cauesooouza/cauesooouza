import { Helmet } from 'react-helmet'
import me from '../assets/me.webp'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>
                    Mrz | Pagina inicial
                </title>
            </Helmet>
            <section id="inicio" className='flex flex-col items-center container h-svh'>
                <div className='flex flex-col text-center mt-20'>
                <span className='z-10 text-7xl font-bold font-display italic text-[#FD853A]'>Cauê Souza</span>
                <span className='z-10 text-6xl font-bold font-display italic '>Criador de <span className='text-[#FD853A]'>soluções</span></span>
                </div>
                <img src={me} className='z-0 w-[450px] absolute bottom-0 self-center' alt="Foto de Caue Souza" />
            </section>
        </>
    )
}
