import './Sidebar.css'

import Logo from '../../Assets/Images/Logo.png'

import { Link } from 'react-router-dom'

function Sidebar(){
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
                      <li><a href="#about">Sobre <i className="fi fi-rr-arrow-right"></i></a></li>
                      <li><a href="#mission">Missões <i className="fi fi-rr-arrow-right"></i></a></li>
                      <li><a href="#event">Eventos <i className="fi fi-rr-arrow-right"></i></a></li>
                      <li><a href="#contact">Contato <i className="fi fi-rr-arrow-right"></i></a></li>
                    </ul>
                  </nav>
                </div>
                <div className="bottom">
                  <div className="social-medias">
                    <div className="social">
                      <a href="#" target="_blank">
                        <i className="fi fi-brands-instagram"></i>
                      </a>
                    </div>
                    <div className="social">
                      <a href="#" target="_blank">
                        <i className="fi fi-brands-facebook"></i>
                      </a>
                    </div>
                    <div className="social">
                      <a href="#" target="_blank">
                        <i className="fi fi-brands-youtube"></i>
                      </a>
                    </div>
                    <div className="social">
                      <a href="#" className='back-to-top'>
                        <i className="fi fi-ss-angle-circle-up"></i>
                      </a>
                    </div>
                  </div>
                </div>
            </header>
        </>
    )
}

export default Sidebar