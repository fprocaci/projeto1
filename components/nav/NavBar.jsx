import Link from 'next/link'
import styles from "./NavBar.module.scss"

export default function NavBar(props) {
    if (props.left) {
        return (
            <div className={styles.navbarLeft}>
                <Link href="/"><a>my process</a></Link>
                <Link href="/"><a>my clients</a></Link>
                <Link href="/"><a>pricing</a></Link>
            </div>
        )
    } else {
        return (
            <div className={styles.navbarRight}>
                <Link href="/"><a>last work</a></Link>
                <Link href="/"><a>blog</a></Link>
                <Link href="/"><a>schedule call</a></Link>
            </div>
        )
    }

}