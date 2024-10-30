import styles from './index.module.css'
import SectionPrincipal from '../SectionPrincipal'
import SectionIntro from '../SectionIntro'
import SectionContato from '../SectionContato'
import Logo from '../../assets/logo.png'
import Image from 'next/image'
export default function NavBar(){
    return(
        <div className={styles.Container}>
            <div className={styles.ContainerLinks}>
                <div className={styles.Logo}>
                    <Image src={Logo} alt='logo' className={styles.ImgLogo}/>
                    <h2>FG Consórcios</h2>
                </div>

                <div className={styles.Links}>
                    <a href='#home' className={styles.Link}>Home</a>
                    <a href='#sobre' className={styles.Link}>Sobre</a>
                    <a href='#contato' className={styles.Link}>Contato</a>
                </div>
            </div>
        </div>
    )
}