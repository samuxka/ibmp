import { MoveLeft } from 'lucide-react'
import './missionPage.css'
import { useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import database from "../../../database/database.json";

const missions = database.acoes

function MissionPage() {
    const { id } = useParams()
    const mission = database.acoes.find((acao) => acao.id === id)

    if (!mission) {
        return <p>Missão não encontrada.</p>
    }

    const recommendedMissions = database.acoes.filter((acao) => acao.id !== id)

    const missionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const missionTop = missionRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (missionTop < windowHeight) {
                document.querySelectorAll('.progress-bar').forEach(bar => {
                    const percentage = bar.dataset.percentage;
                    bar.style.width = `${percentage}%`;
                });
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const AcoesCard = ({ id, title, content, image, objetive, objetiveNow }) => {
        const progressPercentage = (objetiveNow / objetive) * 100 || 0;

        return (
            <div className="causes-item">
                <div className="causes-img">
                    <img src={image} alt={title} />
                </div>
                <div className="causes-progress">
                    <div className="progress">
                        <div
                            className="progress-bar"
                            style={{ width: 0 }}
                            data-percentage={progressPercentage}
                        >
                            <span>{progressPercentage.toFixed(1)}%</span>
                        </div>
                        <div className="progress-text">
                            <p>
                                <strong>Objetivo:</strong> {objetive} <strong className="eur">EUR</strong>
                            </p>
                            <p>
                                <strong>Alcançado:</strong> {objetiveNow} <strong className="eur">EUR</strong>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="causes-text">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
                <div className="causes-btn">
                    <Link to={`/Mission/${id}`} className="btn btn-custom">Ler mais</Link>
                    <a className="btn btn-custom">Doar Agora</a>
                </div>
            </div>
        );
    };

    return (
        <>
            <section className="missionPage">
                <div className="empty"></div>
                <div className="content">
                    <div className="missionPage__header">
                        <Link to='/'><MoveLeft /> Back to home</Link>
                    </div>
                    <div className="missionPage__main">
                        <div className="mission__main-content">
                            <div className="main__content-image">
                                <img src={mission.image} alt="" />
                            </div>
                            <div ref={missionRef} className="main__content-content">
                                <h1>{mission.title}</h1>
                                <p className='contentPage'>{mission.contentPage}</p>
                                <div className="content__content-accountability">
                                    <h2>Prestação de contas</h2>
                                    <div className="accountability">
                                        {mission.accountability && mission.accountability.length > 0 ? (
                                            <ul>
                                                {mission.accountability.map((entry, index) => (
                                                    <li key={index}>
                                                        <p><strong>Data:</strong> {entry.date}</p>
                                                        <p><strong>Descrição:</strong> {entry.description}</p>
                                                        <p><strong>Valor:</strong> {entry.amount} EUR</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>Nenhuma prestação de contas disponível no momento.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mission__main-recomendations">
                            <h1>Veja também</h1>
                            {recommendedMissions.map((acao) => (
                                <div key={acao.id} className="recommendation-card">
                                    <AcoesCard
                                        id={acao.id}
                                        title={acao.title}
                                        content={acao.content}
                                        image={acao.image}
                                        objetive={acao.objetive}
                                        objetiveNow={acao.objetiveNow}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MissionPage