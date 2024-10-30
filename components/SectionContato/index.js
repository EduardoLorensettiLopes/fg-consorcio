import styles from './index.module.css'
import Image from 'next/image'
import Whatsapp from '../../assets/whatsapp.png'
import Instagram from '../../assets/insta.png'
export default function SectionContato() {
    return (
        <div className={styles.Container} id='contato'>
            <div className={styles.ContainerItems}>
                <div className={styles.ContainerInfo}>
                    <div className={styles.Info}>
                        <h1>Entre em Contato</h1>
                        <div className={styles.Links}>
                            <a href='https://wa.me/554196435296' target='_blank'><Image alt='Whatsapp' src={Whatsapp} className={styles.ImagemContato}/></a>
                            <a href='https://www.instagram.com/fgiconsorcios?igsh=MWNseTFtZ2dvaW5jNw==' target='_blank'><Image alt='Instagram' src={Instagram} className={styles.ImagemContato1}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}