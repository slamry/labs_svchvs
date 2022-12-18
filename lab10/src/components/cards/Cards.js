import styles from './Cards.module.css'

// let testfunc = () => {
//     var data = require('./items.json')
//     localStorage.setItem("items", JSON.stringify(data))
//     data = JSON.parse(localStorage.getItem("items"))
//     data.push({
//         "id": 4,
//         "name": "4",
//         "price": 0,
//         "img": "./images/4.jpg",
//         "count": 0
//     })
//     console.log(data)

//     localStorage.setItem("items", JSON.stringify(data))
//     data = JSON.parse(localStorage.getItem("items"))
//     console.log(data)
// }

// testfunc()

const CardArea = (props) => {
    var img = require(`${props.img}`)

    return (
        <div className={styles.content}>
            <div className={styles.rect}>
                <div className={styles.grid_wrapp}>
                    <div className={styles.img}>
                        <img src={img} alt="" />
                    </div>
                    <div className={styles.text_content}>
                        <div className={styles.title}>
                            Название: {props.name}
                        </div>
                        <div className={styles.price}>
                            Цена: {props.price}
                        </div>
                        <div className={styles.count}>
                            Количество: {props.count}
                        </div>
                    </div>
                    <div className={styles.item_buttons}>
                        <button className={styles.item_butt}>Обновить</button>
                        <button className={styles.item_butt}>Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

let getData = () => {
    var data = JSON.parse(localStorage.getItem("items"))
    return data
}

const CardComponents = getData().map((item) =>
    <CardArea
        key={item.id}
        img={item.img}
        name={item.name}
        price={item.price}
        count={item.count}
    />
)

const Cards = () => {
    return (
        <div className="wrapper">
            {CardComponents}
            <div className={styles.button}>
                <button>Добавить</button>
            </div>
        </div>
    )
}

export default Cards