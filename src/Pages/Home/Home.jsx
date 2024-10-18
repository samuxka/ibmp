import './Home.css';
import 'swiper/css';
import 'swiper/css/pagination';
import database from "../../database/database.json";
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import About from './About/About';
import Missions from './Missions/Missions';
import Contact from './Contact/Contact';
import Events from './Events/Events';
import { useEffect, useRef } from 'react';

const slides = database.slides;

function Home() {
    const factsRef = useRef(null); // Usamos ref para a seção facts
    const observerRef = useRef(null); // Para garantir que o observer seja removido após a primeira ativação

    useEffect(() => {
        const counters = document.querySelectorAll('.counter');

        const runCounters = () => {
            const speed = 200; // Velocidade da contagem

            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    const increment = target / speed;

                    if(count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 10);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
            });
        };

        const observerCallback = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                runCounters(); // Executa o contador quando a área entra na viewport
                if (observerRef.current) {
                    observerRef.current.disconnect(); // Desconecta o observer após a primeira execução
                }
            }
        };

        observerRef.current = new IntersectionObserver(observerCallback, {
            root: null, // Usa a viewport como root
            threshold: 0.5, // Ativa quando 50% da área estiver visível
        });

        if (factsRef.current) {
            observerRef.current.observe(factsRef.current); // Observa a seção `facts`
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect(); // Limpa o observer quando o componente for desmontado
            }
        };
    }, []);

    return (
        <>
            <section className="home">
                <div className="empty"></div>
                <div className="content">
                    <div className="home__carrossel">
                        <SwiperComponent 
                            pagination={{ clickable: true }}
                            navigation
                            loop={true}
                            grabCursor={true}
                            modules={[Pagination]}
                            slidesPerView={1}
                            className='swiper-container'>
                            {slides.map(slide => (
                                <SwiperSlide key={slide.id}>
                                    <div className="slide-content">
                                        <img src={slide.image} alt={slide.title} />
                                        <div className="slide-content__info">
                                            <h2>{slide.title}</h2>
                                            <p>{slide.content}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </SwiperComponent>
                    </div>
                    <About />
                    <div className="facts" ref={factsRef} data-parallax="scroll" data-image-src="/Images/slide1.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="facts-item">
                                        <i className="fi fi-rr-earth-americas"></i>
                                        <div className="facts-text">
                                            <h3 className="counter facts-plus" data-target="150">0</h3>
                                            <p>Países</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="facts-item">
                                        <i className="fi fi-rr-volunteer-vest"></i>
                                        <div className="facts-text">
                                            <h3 className="counter facts-plus" data-target="400">0</h3>
                                            <p>Voluntários</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="facts-item">
                                        <i className="fi fi-rr-hands-heart"></i>
                                        <div className="facts-text">
                                            <h3 className="counter facts-dollar" data-target="10000">0</h3>
                                            <p>Nossa Meta</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="facts-item">
                                        <i className="fi fi-rr-coins"></i>
                                        <div className="facts-text">
                                            <h3 className="counter facts-dollar" data-target="5000">0</h3>
                                            <p>Alcançado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Missions />
                    <Events />
                    <Contact />
                </div>
            </section>
        </>
    );
}

export default Home;
