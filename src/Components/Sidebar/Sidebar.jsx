import { ChevronUp, Facebook, Instagram, MoveRight, Youtube } from 'lucide-react'
import './Sidebar.css'
import '../../mediaqueries.css'

import Logo from '/Images/Logo.png'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Sidebar(){
  useEffect(() => {
    const header = document.querySelector("header")
    const menu = document.querySelector('#menu-icon')
    const navlist = document.querySelector('.navlist')

    const handleScroll = () => {
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 60)
      }
    }

    const handleMenuClick = () => {
      if (header && menu && navlist) {
        header.classList.toggle('head')
        menu.classList.toggle('bx-x')
        navlist.classList.toggle('open')
      }
    }

    const handleWindowScroll = () => {
      if (menu && header && navlist) {
        menu.classList.remove('bx-x')
        header.classList.remove('head')
        navlist.classList.remove('open')
      }
    }

    window.addEventListener("scroll", handleScroll)
    menu?.addEventListener('click', handleMenuClick)
    window.addEventListener('scroll', handleWindowScroll)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      menu?.removeEventListener('click', handleMenuClick)
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [])
    return(
        <>
            <header>
                <div className="top">
                  <div className="logo">
                    <Link to='/'>
                      <img src={Logo} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="middle">
                  <nav>
                    <ul className="navlist">
                      <li><a href="#about">Sobre <MoveRight/></a></li>
                      <li><a href="#mission">Missões <MoveRight/></a></li>
                      <li><a href="#events">Eventos <MoveRight/></a></li>
                      <li><a href="#contact">Contato <MoveRight/></a></li>
                    </ul>
                  </nav>
                </div>
                <div className="bottom">
                  <div className="social-medias">
                    <div className="social">
                      <a href="#" target="_blank">
                        <Instagram/>
                      </a>
                    </div>
                    <div className="social">
                      <a href="#" target="_blank">
                        <Facebook/>
                      </a>
                    </div>
                    <div className="social">
                      <a href="#" target="_blank">
                        <Youtube/>
                      </a>
                    </div>
                    <div className="social">
                      <a href="#" className='back-to-top'>
                        <ChevronUp/>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bx bx-menu" id='menu-icon'></div>
            </header>
        </>
    )
}

export default Sidebar