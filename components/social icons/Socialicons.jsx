import styles from './Socialicons.module.css'
import Link from 'next/link'


export default function Socialicons(){
    return(
        <div className={styles.social}>
            <div className={styles.socialicons}>
                <Link href="/"><a><i className="fa-brands fa-twitter"></i></a></Link>
                <Link href="/"><a><i className="fa-brands fa-dribbble"></i></a></Link>
                <Link href="/"><a><i className="fa-brands fa-behance-square"></i></a></Link>
                <Link href="/"><a><i className="fa-brands fa-vimeo-v"></i></a></Link>
                <Link href="/"><a><i className="fa-brands fa-linkedin"></i></a></Link>
            </div>
        </div>
    )
}