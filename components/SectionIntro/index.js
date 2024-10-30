import styles from './index.module.css'
import Image from 'next/image'
import Grafico from "../../assets/grafico.jpg"

export default function SectionIntro() {
    return (
        <div className={styles.Container} id='sobre'>
            <div className={styles.ContainerItems}>
                <div className={styles.ContainerInfo}>
                    <div className={styles.Info}>
                        <h1>O que é um consórcio?</h1>
                        <p>Um consórcio é uma forma de investimento coletivo que permite a você alcançar seus objetivos financeiros de forma segura e rentável.</p>
                    </div>
                    <div>
                        <Image src={Grafico} className={styles.Img} alt='Imagem-grafico' />
                    </div>
                </div>
            </div>
        </div>
    )
}