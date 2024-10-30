import styles from './index.module.css'

export default function SectionPrincipal() {
    return (
        <div className={styles.Container} id='home'>
            <div className={styles.ContainerItems}>
                <div className={styles.ContainerInfo}>
                    <div className={styles.Info}>
                        <h1>Invista com segurança e tranquilidade com FG Consórcios</h1>
                        <p>Desbloqueie seu potencial financeiro com nossos consórcios personalizados</p>
                    </div>
                    <div className={styles.Video}>
                        <video
                            src="/video.mp4"
                            width="501"
                            height="276."
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={styles.SVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}