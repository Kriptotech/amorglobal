import style from "./styles.module.css";
import IMG from "./boosting.png";

export function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.row}>
                <div>
                    <img src={IMG} width="250px" alt="Logo" />
                    <p>Todos os direitos reservados</p>
                </div>
                <div>
                    <span>Sobre</span>
                    <a href="/sobre">A empresa</a>
                    <a href="/projetos">Nossos projetos</a>
                </div>
                <div>
                    <span>Contactos</span>
                    <a href="/#">Whatsapp</a>
                </div>
                <div>
                    <span>Dúvidas</span>
                    <a href="#">Central de ajuda</a>
                </div>
            </div>
        </footer>
    );
}
