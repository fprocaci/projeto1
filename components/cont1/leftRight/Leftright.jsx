import styles from './Leftright.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Leftright(props){
    if(props.esquerda){
        return(
            <div className={styles.esquerda}>
                <div className={styles.hero}>
                    <span className={styles.span1}>eat <hr /></span>
                    <span>breath.</span>
                    <span>design.</span>
                </div>
                <div className={styles.heroimg}>
                    <Image 
                        src="/young.png"
                        alt=""
                        width={409}
                        height={496}
                        priority
                    />
                </div>
            </div>
        )
    }else{
        return(
            <div className={styles.direita}>
                <div className={styles.group4}>
                    <span>Meet Mathelda</span>
                    <hr />
                    <p>Ham followed now ecstatic use speaking exercise may repeated. Himself he evident oh greatly my on inhabit general concern.</p>

                    <Link href="/"><a>Learn More</a></Link>
                </div>
            </div>
        )
    }
    
}