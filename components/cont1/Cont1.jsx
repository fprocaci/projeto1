import styles from './Cont1.module.css'
import Leftright from './leftRight/Leftright'


export default function Cont1(){
    return(
        <div className={styles.cont1}>
            <Leftright esquerda/>
            <Leftright esquerda={false}/>
        </div>
    )
}