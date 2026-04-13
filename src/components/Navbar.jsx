import { useState, useEffect } from "react"

const Navbar = () => {
    const [active, setActive] = useState(false)

    useEffect(() => {
        const  handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true)
                
            }else {
                setActive(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])
    

  return (
    <div className="navbar py-7 flex items-center justify-between">
        <div className="logo">
            <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-black">
                Portofolio 
            </h1>
        </div>
      <ul className={`menu flex flex-wrap items-center gap-3 
        fixed md:static 
        top-0 left-0 w-full md:w-auto 
        md:transform-none
        z-50
        transition-all duration-300
        bg-white/30 backdrop-blur-md p-4 
        rounded-b-2xl md:rounded-none md:bg-transparent
        justify-center md:justify-start
        ${active ? "opacity-100" : "opacity-0 md:opacity-100"}`}>
                <li>
                    <a href="#" className="sm:text-lg text-base font-bold text-violet-700">Home</a>
                </li>
                <li>
                    <a href="#tentang" className="sm:text-lg text-base font-bold text-violet-700">About</a>
                </li>
                <li>
                    <a href="#proyek" className="sm:text-lg text-base font-bold text-violet-700">Project</a>
                </li>
                <li>
                    <a href="#skills" className="sm:text-lg text-base font-bold text-violet-700">Skills</a>
                </li>
                <li>
                    <a href="#kontak" className="sm:text-lg text-base font-bold text-violet-700">Contact</a>
                </li>
            </ul>
    </div>
  )
}

export default Navbar