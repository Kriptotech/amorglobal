import style from "./styles.module.css";
import IMG1 from "./m.png";
import IMG2 from "./v.png";
import IMG3 from "./o.png";

export function Mission() {
    return (
        <div className={style.container}>
            <div className={style.item}>
                <img src={IMG1} alt="" />
                <h1>Missão</h1>
                <p>
                    Promover a igualdade de género e engajamento social através
                    de conhecimento sobre direitos humanos, acesso aos meios de
                    vida e participação nos processos de tomada de decisão, para
                    a redução da vulnerabilidade social em Moçambique.
                </p>
            </div>
            <div className={style.item}>
                <img src={IMG2} alt="" />
                <h1>Visão</h1>
                <p>
                    Ser uma organização feminista, de referência nacional com
                    credibilidade, na promoção de equidade de género direitos
                    humanos e engajamento social tornando-se um parceiro
                    estratégico para implementação de projetos sociais em
                    Moçambique em estreita colaboração com vários actores
                    nacionais e internacionais.
                </p>
            </div>
            <div className={style.item}>
                <img src={IMG3} alt="" />
                <h1>Objectivos</h1>
                <p>
                    * Contribuir para a promoção de direitos humanos para a
                    melhoria das condições socioeconómicas e políticas nas
                    comunidades com ênfase nas pessoas socialmente vulneráveis,
                    * Contribuir para a inclusão de mulheres e jovens em órgãos
                    e espaços de tomada de decisão para a governação comunitária
                    face as mudanças socioeconómicas e ambientais.
                </p>
            </div>
        </div>
    );
}
