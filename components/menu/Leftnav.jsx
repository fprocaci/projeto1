import styles from './Leftnav.module.css'
import Link from 'next/link'
export default function Leftnav(){
    return(
        <div className={styles.leftnav}>
            <Link href="/"><a className='leftnav1'>my proccess</a></Link>
            <Link href="/"><a className='leftnav2'>my clients</a></Link>
            <Link href="/"><a className='leftnav3'>pricing</a></Link>
        </div>
    )
}