import './History.css'
import work from '../../Assets/Images/work.png'

function History(){
    return(
        <>
            <section className="history">
                <div className="empty"></div>
                <div className="content">
                    <div
                        style={{
                            height: "100vh",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                        >   
                        <img 
                            src={work}
                            style={{
                                maxWidth: "700px",
                                width: "100%",
                            }}
                            />
                        <p 
                            style={{
                                fontSize: "3rem"
                            }}
                        ><strong>PAGINA EM CONSTRUÇÃO, VOLTE MAIS TARDE</strong></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default History