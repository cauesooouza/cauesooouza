import { Helmet } from 'react-helmet'
import i from '../assets/i.jpeg'
import { GithubLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>
                    Mrz | Pagina inicial
                </title>
            </Helmet>
            <section id="inicio" className='flex flex-col lg:flex-row items-center justify-center lg:px-2  mmob:mt-0 px-8 gap-4 lg:gap-10  container mx-auto h-[91svh] lg:flex-wrap'>
                <div className='lg:w-[50%] flex flex-col font-focus'>
                    <span className='text-[#FD6F00]  text-4xl  font-medium -mb-2 font-cursive'>Cauê Souza</span>
                    <div className='flex flex-col text-4xl md:text-7xl lg:text-5xl xl:text-7xl font-bold uppercase mb-4'>
                        <span>Criador de</span>
                        <span className='self-end'>Soluções</span>
                    </div>
                    <p className='font-display text-justify mb-4'>
                        Após uma década como eletricista,
                        decidi seguir minha paixão pela tecnologia
                        e me tornei desenvolvedor de software.
                        Com uma sólida experiência em resolver
                        problemas no mundo físico, agora utilizo
                        minhas habilidades para criar soluções digitais inovadoras.
                    </p>
                    <button type='button' className='w-fit bg-[#FD6F00] px-5 py-2 rounded-md font-medium self-end lg:self-start'>Contrate me</button>
                </div>
                <div className='flex flex-col gap-2 items-center '>
                    <img src={i} alt="Foto de Cauê Souza" className='rounded-full w-[220px] h-[220px] mmob:w-[280px] mmob:h-[280px] lmob:h-[320px] lmob:w-[320px] md:w-[320px] md:h-[320px] lg:w-[390px] lg:h-[390px] xl:w-[500px] xl:h-[500px] object-cover' />
                    <div className='flex gap-2'>
                        <a href="https://www.youtube.com/channel/UCEQWSJluI3GL_sppXLzuTVw?view_as=subscriber?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
                            <YoutubeLogo size={32} weight='fill' color='white' />
                        </a>
                        <a href="https://www.linkedin.com/in/cauesooouza/" target="_blank" rel="noopener noreferrer">
                            <LinkedinLogo size={32} weight='fill' color='white' />
                        </a>
                        <a href="https://x.com/cauesooouza" target="_blank" rel="noopener noreferrer">
                            <TwitterLogo size={32} weight='fill' color='white' />
                        </a>
                        <a href="https://github.com/cauesooouza/" target="_blank" rel="noopener noreferrer">
                            <GithubLogo size={32} weight='fill' color='white' />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
