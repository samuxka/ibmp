import database from '../../../database/database.json'

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const eventos = database.eventos;

function Events() {
    return (
        <div className="event" id='events'>
            <div className="container">
                <div className="section-header text-center">
                    <p>Próximos eventos</p>
                    <h2>Esteja pronto para nossos próximos eventos de caridade
                    </h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <SwiperComponent
                            pagination={{ clickable: true }}
                            navigation
                            loop={true}
                            grabCursor={true}
                            breakpoints={{
                                2560: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1440: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 15,
                                },
                                480: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                            }}
                            className="events-container"
                            modules={[Pagination, Navigation]}
                            >
                            {eventos.map(event => (
                                <SwiperSlide key={event.id}>
                                    <div className="event-item">
                                        <img src={event.image} alt={event.title} />
                                        <div className="event-content">
                                            <div className="event-meta">
                                                <p><i className="fi fi-rr-calendar-lines"></i>{event.data}</p>
                                                <p><i className="fi fi-rr-clock-three"></i>{event.horario}</p>
                                                <p><i className="fi fi-rr-map-marker"></i>{event.local}</p>
                                            </div>
                                            <div className="event-text">
                                                <h3>{event.title}</h3>
                                                <p>
                                                    {event.content}
                                                </p>
                                                <a className="btn btn-custom" href="">Participar</a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </SwiperComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events;
