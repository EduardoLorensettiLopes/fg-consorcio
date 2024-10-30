import styles from './index.module.css'

export default function SectionTitle({title}) {
    return (
        <div className={styles.Container}>
            <div className={styles.Logo}>
                <h2 className={styles.title}>{title}</h2>
            </div>
        </div>
    )
}