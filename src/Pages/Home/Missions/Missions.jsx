import database from '../../../database/database.json';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useRef, useEffect } from 'react';

const missions = database.acoes;

function Missions() {
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const AcoesCard = ({ title, content, image, objetive, objetiveNow }) => {
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
                    <a className="btn btn-custom">Ler mais</a>
                    <a className="btn btn-custom">Doar Agora</a>
                </div>
            </div>
        );
    };

    return (
        <div className="causes" id="mission" ref={missionRef}>
            <div className="container">
                <div className="section-header text-center">
                    <p>missões</p>
                    <h2>Ajude nossos missionários em campo</h2>
                </div>
                <SwiperComponent
                    pagination={{ clickable: true }}
                    navigation
                    loop={true}
                    grabCursor={true}
                    slidesPerView={3}
                    className="causes-container"
                    modules={[Pagination, Navigation]}
                    spaceBetween={30}
                >
                    {missions.map((acao) => {
                        return (
                            <SwiperSlide key={acao.id}>
                                <AcoesCard
                                    title={acao.title}
                                    content={acao.content}
                                    image={acao.image}
                                    objetive={acao.objetive}
                                    objetiveNow={acao.objetiveNow}
                                />
                            </SwiperSlide>
                        );
                    })}
                </SwiperComponent>
            </div>
        </div>
    );
}

export default Missions