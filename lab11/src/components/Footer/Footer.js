import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css'


const Footer = () => {
    return (
        <header>
            <div className="wrapper">
                <div className={styles.content}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/aboutus'>About us</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Footer;