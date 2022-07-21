import Image from 'next/image'
import Leftnav from '../menu/Leftnav'
import Socialicons from '../social icons/Socialicons'
import styles from './Aside.module.css'

export default function Aside() {
    return (
        <div className={styles.aside}>
            <div className={styles.image}>
                <Image
                    src="/Logo.svg"
                    alt=""
                    width={162}
                    height={58}
                    priority
                />
            </div>
            <div className={styles.group1}>
                <div className={styles.group1Title}>
                    <span>Hello There</span>
                    <hr />
                </div>

                <div className={styles.group1Text}>
                    <p>breathing pixels</p>
                </div>

            </div>
            <Socialicons />
            <Leftnav />
        </div>
    )
}