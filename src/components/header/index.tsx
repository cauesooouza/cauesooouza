export default function Header() {
  return (
    <header>
        <nav className="bg-[#171717] flex items-center p-[10px] text-white rounded-full justify-between top-4 sticky w-fit gap-8 z-20 mx-auto
      ">
        <ul className="flex gap-2">
          <li className="py-3 px-8 rounded-full bg-[#FD853A] font-bold">Inicio</li>
          <li className="py-3 px-8 rounded-full transition duration-150 hover:bg-[#FD853A]">Sobre</li>
          <li className="py-3 px-8 rounded-full transition duration-150 hover:bg-[#FD853A]">Projetos</li>
        </ul>
        <span className="font-bold text-2xl decoration-wavy underline underline-offset-2 tracking-wide">
          Mrz
        </span>
        <ul className="flex gap-2">
          <li className="py-3 px-8 rounded-full transition duration-150 hover:bg-[#FD853A]">Serviços</li>
          <li className="py-3 px-8 rounded-full transition duration-150 hover:bg-[#FD853A]">Curriculo</li>
          <li className="py-3 px-8 rounded-full transition duration-150 hover:bg-[#FD853A]">Contrate</li>
        </ul>
      </nav>
    </header>
  )
}
