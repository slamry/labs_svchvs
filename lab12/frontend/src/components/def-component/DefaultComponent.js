import styles from './DefaultComponent.module.css'
import { NavLink } from 'react-router-dom';



const DefaultComponent = () => {
    return (
            <div className="wrapper">
                <div className={styles.content}>
                    <div>
                    Вы ввели несуществующий адрес
                    </div>
                    <div className={styles.button}>
                        <NavLink to='/'>Вернуться на домашнюю страницу</NavLink>
                    </div>
                </div>
            </div>
    )
}

export default DefaultComponent;