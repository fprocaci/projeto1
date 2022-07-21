import styles from './Cont.module.css'
import Navbar from './navbar/Navbar'
import NavContainer from './navContainer/NavContainer'

export default function Cont(){
    return(
        <div className={styles.cont}>
            <Navbar />
            <NavContainer />
        </div>
    )
}