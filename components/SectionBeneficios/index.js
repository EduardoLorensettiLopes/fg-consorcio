import styles from './index.module.css'
import Image from 'next/image'
import Rentavel from '../../assets/rentavel.png'
import SegEstab from '../../assets/segesta.png'
import Flex from "../../assets/flex.png"
import Equipe from "../../assets/equipe.jpg"
export default function SectionBeneficios() {
    return (
        <div className={styles.Container}>
            <div className={styles.ContainerItems}>
                <div className={styles.ContainerInfo}>
                    <div className={styles.Info}>
                        <h1>Por que escolher FG Consórcios?</h1>
                        <ul>
                            <li>Rentabilidade superior</li>
                            <li>Segurança e estabilidade</li>
                            <li>Flexibilidade e personalização</li>
                            <li>Equipe especializada</li>
                        </ul>
                    </div>
                    <div className={styles.ContainerCards}>
                        <div className={styles.Card}>
                            <Image className={styles.ImagemCard} alt='imagem-rentavel' src={Rentavel}/>
                        </div>
                        <div className={styles.Card}>
                            <Image className={styles.ImagemCard} alt='imagem-rentavel' src={SegEstab}/>
                        </div>
                        <div className={styles.Card}>
                            <Image className={styles.ImagemCard} alt='imagem-rentavel' src={Flex}/>
                        </div>
                        <div className={styles.Card}>
                            <Image className={styles.ImagemCard} alt='imagem-rentavel' src={Equipe}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}