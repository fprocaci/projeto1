import styles from './Maincont.module.css'
import Cont from '../cont/Cont'
import Cont1 from '../cont1/Cont1'

export default function Maincont(){
    return(
        <div className={styles.maincont}>
            <Cont />
            <Cont1 />
        </div>
    )
}