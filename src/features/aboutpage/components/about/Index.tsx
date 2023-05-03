import style from "./styles.module.css";
import IMG from "./img.jpg";

export function About() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.left}>
                    <img src={IMG} alt="" />
                </div>

                <div className={style.right}>
                    <h1>
                        AMPDC - Associação de Mulheres Para Promoção de
                        Desenvolvimento Comunitário.
                    </h1>
                    <p>
                        É uma organização não – governamental e Humanitária sem
                        fins lucrativos, que pauta sobre os direitos humanos da
                        mulher e o emponderamento economico feminino.
                    </p>
                    <a href="/sobre">SABER MAIS</a>
                </div>
            </div>
        </div>
    );
}
