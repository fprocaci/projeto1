import styles from './Conteudo.module.css'
import Aside from '../aside/Aside'
import Maincont from '../mainCont/Maincont'

export default function Subdivisao(){
    return(
        <div className={styles.conteudo}>
            <Aside />
            <Maincont />
        </div>
    )
}