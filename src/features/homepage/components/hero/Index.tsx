import style from "./styles.module.css";

export function Hero() {
    return (
        <div className={style.hero}>
            <div className={style.content} data-aos="fade-up">
                <h1>
                    Associação de Mulheres Para Promoção de Desenvolvimento
                    Comunitário
                </h1>

                <a href="/sobre">Ver mais</a>
            </div>
        </div>
    );
}
