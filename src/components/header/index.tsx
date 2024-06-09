import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { DotsThreeOutlineVertical, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(window.scrollY);
  const [previousScrollY, setPreviousScrollY] = useState<number>(0);
  const [scrollUp, setScrollUp] = useState<boolean>(false);

  const handleScroll = () => {
    setPreviousScrollY(scrollY);
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    setOpenMenu(false);
    if (scrollY < previousScrollY && scrollY > 180) {
      setScrollUp(true)
    } else {
      setScrollUp(false)
    }
  }, [scrollY, previousScrollY]);


  return (
    <header className={`flex ${scrollUp ? 'top-0 sticky translate-y-2' : 'relative mt-4 top-0'}`}>
      <nav className="bg-[#171717] items-center p-[10px] rounded-full justify-between  w-fit gap-8 z-20 mx-auto max-h-[70px] lg:flex hidden">
        <ul className="flex gap-2">
          <a href="/#inicio">
            <li className="py-3 px-8 rounded-full bg-[#FD853A] font-bold">
              Inicio
            </li>
          </a>
          <a href="/#sobre">
            <li className="py-3 px-8 rounded-full transition duration-150 hover:bg-[#FD853A]">Sobre</li>
          </a>
          <a href="/#projetos">
            <li className="py-3 px-8 rounded-full transition duration-150 hover:bg-[#FD853A]">Projetos</li>
          </a>
        </ul>
        <div>
          <Link to='/'>
            <img src={logo} alt="logo tipo caue souza" className="h-[70px] rounded-full" />
          </Link>
        </div>
        <ul className="flex gap-2">
          <Link to="/servicos">
            <li className="py-3 px-8 rounded-full transition duration-150 hover:bg-[#FD853A]">Serviços</li>
          </Link>
          <Link to="/servicos">
            <li className="py-3 px-8 rounded-full transition duration-150 hover:bg-[#FD853A]">Curriculo</li>
          </Link>
          <Link to="/contrate">
            <li className="py-3 px-8 rounded-full transition duration-150 hover:bg-[#FD853A]">Contrate</li>
          </Link>
        </ul>
      </nav>
      <div className="bg-[#171717] w-[98%] rounded-full mx-auto flex lg:hidden justify-between items-center py-1 px-10">
        <Link to='/'>
          <img src={logo} alt="logo tipo caue souza" className="h-[70px] rounded-full" />
        </Link>
        <button type="button" className="cursor-pointer">
          {openMenu ?
            <>
              <X size={48} color="#FD853A" onClick={() => setOpenMenu(!openMenu)} />
            </> :
            <>
              <DotsThreeOutlineVertical size={48} weight="fill" color="#FD853A" onClick={() => setOpenMenu(!openMenu)} />
            </>
          }
        </button>
      </div>
      <nav className={`bg-[#171717] items-center py-[60px] px-8 md:px-20
       z-20 flex-col lg:hidden fixed -top-4 h-[105svh] transition-all ease-in-out duration-300 flex ${openMenu ? ' translate-x-0' : '-translate-x-80'} `} >
        <ul className="flex flex-col gap-2" >
          <a href="/#inicio" onClick={() => setOpenMenu(!openMenu)}>
            <li className="py-3 px-8 rounded-full underline underline-offset-4 decoration-wavy decoration-[#FD853A] font-bold">
              Inicio
            </li>
          </a>
          <a href="/#sobre" onClick={() => setOpenMenu(!openMenu)}>
            <li className="py-3 px-8 rounded-full transition duration-150">Sobre</li>
          </a>
          <a href="/#projetos" onClick={() => setOpenMenu(!openMenu)}>
            <li className="py-3 px-8 rounded-full transition duration-150">Projetos</li>
          </a>
          <Link to="/servicos" onClick={() => setOpenMenu(!openMenu)}>
            <li className="py-3 px-8 rounded-full transition duration-150">Serviços</li>
          </Link>
          <Link to="/servicos" onClick={() => setOpenMenu(!openMenu)}>
            <li className="py-3 px-8 rounded-full transition duration-150">Curriculo</li>
          </Link>
          <Link to="/contrate" onClick={() => setOpenMenu(!openMenu)}>
            <li className="py-3 px-8 rounded-full transition duration-150">Contrate</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
