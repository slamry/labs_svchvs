import styles from './ContactUs.module.css'

const ContactUs = () => {
    return (
        <div className="wrapper">
            <div className={styles.content}>
                <div className={styles.text__content}>
                    <div className={styles.title}>
                    Контакты для связи с нами
                </div>
                <div className={styles.text}>
                    <ul>
                        <li>coffeeshop@gmail.com</li>
                        <li>coffee111@gmail.com</li>
                        <li>+375 29 111 11 11</li>
                    </ul>
                </div>
                </div>
                <div className={styles.img}>
                    <img src="https://i.etsystatic.com/6192372/r/il/6d37b3/1530188513/il_794xN.1530188513_tk81.jpg" alt="" />
                </div>                
            </div>
        </div>
    )
}

export default ContactUs;