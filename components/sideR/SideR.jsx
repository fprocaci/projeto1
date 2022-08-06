import Link from 'next/link'
import styles from './SideR.module.scss'

export default function SideR() {
    return (
        <div className={styles.sideR}>
            <div className={styles.content}>
                <div className={styles.titulo}>
                    <h1>Meet Mathelda</h1>
                    <hr />
                </div>
                <div className={styles.text}>
                    <p>Ham followed now ecstatic use speaking exercise may repeated. Himself he evident oh greatly my on inhabit general concern.</p>
                </div>
                <div className={styles.link}>
                    <Link href="/">Learn More</Link>
                </div>
            </div>
        </div>
    )
}