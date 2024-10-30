import styles from './index.module.css'
import Image from 'next/image'
import Casa from '../../assets/casa.jpg'
import Carro from '../../assets/carro.jpg'
import Empresa from "../../assets/empresa.jpg"
import Financeiro from "../../assets/financeiro.jpg"
export default function SectionSobre() {
    return (
        <div className={styles.Container}>
            <div className={styles.ContainerItems}>
                <div className={styles.ContainerInfo}>
                    <div className={styles.Info}>
                        <h1>Nossos consórcios</h1>
                       <ul>
                        <li>Imobiliário</li>
                        <li>Automotivo</li>
                        <li>Empresarial</li>
                        <li>Financeiro</li>
                       </ul>
                    </div>
                    <div className={styles.ContainerCards}>
                        <div className={styles.Card}>
                            <Image className={styles.ImagemCard} alt='imagem-rentavel' src={Casa}/>
                        </div>
                        <div className={styles.Card}>
                            <Image className={styles.ImagemCard} alt='imagem-rentavel' src={Carro}/>
                        </div>
                        <div className={styles.Card}>
                            <Image className={styles.ImagemCard} alt='imagem-rentavel' src={Empresa}/>
                        </div>
                        <div className={styles.Card}>
                            <Image className={styles.ImagemCard} alt='imagem-rentavel' src={Financeiro}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}