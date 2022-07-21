import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <div className={styles.menu}>
                <Link href="/"><a>latest work</a></Link>
                <Link href="/"><a>blog</a></Link>
                <Link href="/"><a>schedule call</a></Link>
            </div>
        </div>
    )
}