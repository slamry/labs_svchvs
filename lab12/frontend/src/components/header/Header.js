import styles from './Header.module.css'


const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <div className={styles.content}>
                    coffee shop
                </div>
            </div>
        </header>
    )
}

export default Header;