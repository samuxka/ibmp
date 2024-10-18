import React, { useState } from 'react';
import AboutImg from '../../../Assets/Images/about.jpg';

function About() {
    const [activeTab, setActiveTab] = useState('about'); // Define o estado inicial como "about"

    const handleTabClick = (tab) => {
        setActiveTab(tab); // Atualiza o estado com a aba clicada
    };

    return (
        <div className="about" id='about'>
            <div className="about__content">
                <div className="about__content-top">
                    <div className="about__left">
                        <div className="col-lg-6">
                            <img src={AboutImg} className='about-img' />
                        </div>
                    </div>
                    <div className="about__right">
                        <div className="col-lg-6">
                            <div className="section-header">
                                <p>Conheça um pouco da</p>
                                <h2>Igreja Batista Missionária Primitiva</h2>
                            </div>
                            <div className="about-tab">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <button className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} onClick={() => handleTabClick('about')}>
                                            About
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className={`nav-link ${activeTab === 'mission' ? 'active' : ''}`} onClick={() => handleTabClick('mission')}>
                                            Mission
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className={`nav-link ${activeTab === 'vision' ? 'active' : ''}`} onClick={() => handleTabClick('vision')}>
                                            Vision
                                        </button>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    {activeTab === 'about' && (
                                        <div id="tab-content-1">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae pellentesque turpis. Donec in hendrerit dui, vel blandit massa. Ut vestibulum suscipit cursus. Cras quis porta nulla, ut placerat risus. Aliquam nec magna eget velit luctus dictum. Phasellus et felis sed purus tristique dignissim. Morbi sit amet leo at purus accumsan pellentesque. Vivamus fermentum nisi vel dapibus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                    )}
                                    {activeTab === 'mission' && (
                                        <div id="tab-content-2">
                                            Sed tincidunt, magna ut vehicula volutpat, turpis diam condimentum justo, posuere congue turpis massa in mi. Proin ornare at massa at fermentum. Nunc aliquet sed nisi iaculis ornare. Nam semper tortor eget est egestas, eu sagittis nunc sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent bibendum sapien sed purus molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                    )}
                                    {activeTab === 'vision' && (
                                        <div id="tab-content-3">
                                            Aliquam dolor odio, mollis sed feugiat sit amet, feugiat ut sapien. Nunc eu dignissim lorem. Suspendisse at hendrerit enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed condimentum semper turpis vel facilisis. Nunc vel faucibus orci. Mauris ut mauris rhoncus, efficitur nisi at, venenatis quam. Praesent egestas pretium enim sit amet finibus. Curabitur at erat molestie, tincidunt lorem eget, consequat ligula.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about__content-bottom">
                    <div className="service">
                        <div className="container">
                            <div className="section-header">
                                <p>O que fazemos?</p>
                                <h2>Acreditamos que podemos salvar mais vidas com você</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="service-item">
                                        <div className="service-icon">
                                            <i className="fi fi-rr-grocery-basket"></i>
                                        </div>
                                        <div className="service-text">
                                            <h3>Ajuda Alimentar</h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="service-item">
                                        <div className="service-icon">
                                            <i className="fi fi-rr-water-bottle"></i>
                                        </div>
                                        <div className="service-text">
                                            <h3>Água</h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="service-item">
                                        <div className="service-icon">
                                            <i className="fi fi-rr-hand-holding-medical"></i>
                                        </div>
                                        <div className="service-text">
                                            <h3>Assistência Medica</h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="service-item">
                                        <div className="service-icon">
                                            <i className="fi fi-rr-graduation-cap"></i>
                                        </div>
                                        <div className="service-text">
                                            <h3>Educação Primária</h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="service-item">
                                        <div className="service-icon">
                                            <i className="fi fi-rr-house-user"></i>
                                        </div>
                                        <div className="service-text">
                                            <h3>Moradias</h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="service-item">
                                        <div className="service-icon">
                                            <i className="fi fi-rr-people-carry-box"></i>
                                        </div>
                                        <div className="service-text">
                                            <h3>Assistência Social</h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;