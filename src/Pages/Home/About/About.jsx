import React, { useState } from 'react';
// import AboutImg from '/Images/about.jpg';
import '../../../mediaqueries.css'
import '../Home.css'

function About() {
    const [activeTab, setActiveTab] = useState('about');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="about" id='about'>
            <div className="about__content">
                <div className="about__content-top">
                    <div className="about__left">
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
                                            Sobre
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className={`nav-link ${activeTab === 'mission' ? 'active' : ''}`} onClick={() => handleTabClick('mission')}>
                                            Missão
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className={`nav-link ${activeTab === 'vision' ? 'active' : ''}`} onClick={() => handleTabClick('vision')}>
                                            Visão
                                        </button>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    {activeTab === 'about' && (
                                        <div id="tab-content-1">
                                            <p>Somos uma equipe missionária com coração ardente por missões. Fomos inundados com o texto de Atos 6, onde os discípulos se propuseram a escolher sete para atender a mesa do Senhor. Hoje representamos esses sete em todas as esferas da sociedade, servimos a mesa do Senhor, quando preciso ficamos calados ao lado de quem sente a dor ou ouvir seus lamentos e alimentar suas esperanças e seu espírito com a palavra de Deus bem como sua carne com o pão, trazer alegria aos que precisam de uma visita, sermos o socorro do necessitado, somos aqueles que SERVEM A MESA DO SENHOR.
                                            </p>
                                        </div>
                                    )}
                                    {activeTab === 'mission' && (
                                        <div id="tab-content-2">
                                            <p>Ide por todo mundo e pregai o evangelho a toda criatura... A religião pura e imaculada para com Deus e Pai, é esta: Visitar os órfãos e as viúvas nas suas tribulações... (Marcos 16:15 e Tiago 1:27). Eis aí a base de nossa missão, pois cremos que este sim é o verdadeiro evangelho e esta é a missão que nos foi designada para fazermos. Mesmo de longe é possível sim executar o ide do Senhor. Temos colaboradores que tem nos ajudado financeiramente o que torna isso possível.

                                            </p>
                                        </div>
                                    )}
                                    {activeTab === 'vision' && (
                                        <div id="tab-content-3">
                                            <p>E, perseverando unânimes todos os dias no templo, e partindo o pão em casa, comiam juntos com alegria e singeleza de coração, louvando a Deus, e caindo na graça de todo o povo. E todos os dias acrescentava o Senhor à igreja aqueles que se haviam de salvar (Atos 2:46 e 47). Crendo que este é o verdadeiro evangelho, seguimos em oração e com o coração ardente pra que cada objetivo, cada meta seja alcançada para que possamos proporcionar cada vez mais sorrisos no rosto, alegria no coração e salvação nas almas oprimidas. 
                                            </p>
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
                                            <p>Criamos uma cadeia sustentável unindo produção agrícola e alimentar.</p>
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
                                            <p>Garantimos água com poços para sustentar projetos e moradores.</p>
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
                                            <p>Parcerias criam centros de saúde em áreas remotas e afetadas.</p>
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
                                            <p>Criamos um infantário para apoiar crianças sem acesso à educação.</p>
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
                                            <p>Produzimos blocos para apoiar construções e moradias em risco.</p>
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
                                            <p>"O atendimento social atua onde houver necessidade e urgência.</p>
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
