import style from "./styles.module.css";
import IMG1 from "./m.png";

export function Projects() {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <span>PROJECTOS</span>
                <h1>
                    Veja os nossos projectos
                    <br />
                    para financiamentos
                </h1>
            </div>

            <div className={style.box}>
                <div className={style.item}>
                    <img src={IMG1} alt="" />
                    <h1>Projeto tendeni</h1>
                    <p>
                        Promover a igualdade de género e engajamento social
                        através de conhecimento sobre direitos humanos.
                    </p>
                </div>
                <div className={style.item}>
                    <img src={IMG1} alt="" />
                    <h1>Projeto tendeni</h1>
                    <p>
                        Ser uma organização feminista, de referência nacional
                        com credibilidade, na promoção de equidade de género
                        direitos humanos.
                    </p>
                </div>
                <div className={style.item}>
                    <img src={IMG1} alt="" />
                    <h1>Projeto tendeni</h1>
                    <p>
                        * Contribuir para a promoção de direitos humanos para a
                        melhoria das condições socioeconómicas e políticas nas
                        comunidades.
                    </p>
                </div>
            </div>
        </div>
    );
}
