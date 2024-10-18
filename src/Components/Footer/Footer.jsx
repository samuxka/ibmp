import './Footer.css'

import { Link } from 'react-router-dom'

function Footer(){
    return(
        <>
            <footer>
                <div className="empty"></div>
                <div className="content">
                    <div className="footer__top">
                        <div className="info">
                            <div className="head">
                                <h2>Informações</h2>
                            </div>
                            <div className="info__infos c">
                                <a href="#" className="uil uil-map-marker-alt"> Nome da rua, Cidade, País</a>
                                <a href="#" className="uil uil-phone"> +55 75 00000-0000</a>
                                <a href="#" className="uil uil-envelope"> ibm.primitiva@gmail.com</a>
                                <div className="socials">
                                    <a href="#" target="_blank">
                                        <i className="fi fi-brands-instagram"></i>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i className="fi fi-brands-facebook"></i>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i className="fi fi-brands-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pages">
                            <div className="head">
                                <h2>Páginas</h2>
                            </div>
                                <div className="info__pages c">
                                    <Link to='/History' className='link'><i className="fi fi-rr-arrow-turn-down-right"></i> Historia</Link>
                                    <Link to='/History' className='link'><i className="fi fi-rr-arrow-turn-down-right"></i> Missões</Link>
                                    <Link to='/History' className='link'><i className="fi fi-rr-arrow-turn-down-right"></i> Doação</Link>
                                    <Link to='/History' className='link'><i className="fi fi-rr-arrow-turn-down-right"></i> Página1</Link>
                                    <Link to='/History' className='link'><i className="fi fi-rr-arrow-turn-down-right"></i> Página2</Link>
                                </div>
                        </div>
                        <div className="support">
                            <div className="head">
                                <h2>Suporte</h2>
                            </div>
                            <div className="info__support c">
                                <Link to='/History' className='link'>FAQ</Link>
                                <Link to='/History' className='link'>Página1</Link>
                                <Link to='/History' className='link'>Página2</Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                    <div className='hr'></div>
                        <div className="copyright">
                            <p><i className="fi fi-rr-circle-c"></i>Igreja Batista Missionaria Primitiva<span>, Todos os direitos reservados.</span></p>
                            <p><span>Feito por</span> <a href="https://www.instagram.com/sso_webflow" className='link'>SSO  - Webflow</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer