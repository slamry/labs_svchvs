import styles from './Cards.module.css'
import React, { useEffect, useState } from 'react'

// let testfunc = () => {
//     localStorage.removeItem("items")
//     var data = require('./items.json')
//     localStorage.setItem("items", JSON.stringify(data))
//     data = JSON.parse(localStorage.getItem("items"))
//     data.push({
//         "id": 4,
//         "name": "Раф",
//         "price": 0,
//         "img": "https://www.dolce-gusto.ru/m/media/wysiwyg/mygento/recipes/latte-macchiato-2-caramel-latte-macchiatto.jpg",
//         "count": 0
//     })
//     console.log(data)

//     localStorage.setItem("items", JSON.stringify(data))
//     data = JSON.parse(localStorage.getItem("items"))
//     console.log(data)
// }

///////////////////////////////////

// let testfunc = () => {
//     localStorage.removeItem("items")
//     var data = require('./items.json')
//     localStorage.setItem("items", JSON.stringify(data))
//     console.log(data)
// }

// testfunc()

const ADD_ITEM = 'ADD-ITEM'
const UPDATE_ITEM = 'UPDATE-ITEM'
const DELETE_ITEM = 'DELETE-ITEM'

const ItemForm = (props) => {

    // const Buttondiv = {
    //     disabled: false
    // }
    var items = JSON.parse(localStorage.getItem("items"))

    const [data, setData] = useState({
        name: '',
        isNameValid: false,
        price: '',
        isPriceValid: false,
        img: '',
        isImgValid: false,
        count: '',
        isCountValid: false,
        isButtonActive: false
    })
    const [getId, setId] = useState(4)


    var addItemNameRef = React.createRef()
    var addItemPriceRef = React.createRef()
    var addItemImgRef = React.createRef()
    var addItemCountRef = React.createRef()
    var addButtonRef = React.createRef()

    let validateStringValue = (value) => {
        if (typeof value === "string") {
            return true
        }
        else {
            return false
        }
    }

    let validateIntValue = (value) => {
        value = parseInt(value)
        console.log(Number.isInteger(value))
        if (Number.isInteger(value)) {
            return true
        }
        else {
            return false
        }
    }

    let validateUrl = (value) => {
        var httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/; console.log(httpRegex.test(value))
        // console.log(httpRegex.test(value))
        if (httpRegex.test(value)) {
            return true
        }
        else {
            return false
        }

        // console.log(typeof value)
        // console.log(value)
        // console.log(value.search('https://'))
        // if (value.search('https://') >= 0) { return true }
        // else { return false }
    }

    let addItem = () => {
        setId(getId => getId + 1)
        console.log(`id is ${getId}`)
        items.push({
            "id": getId,
            "name": `${data.name}`,
            "price": `${data.price}`,
            "img": `${data.img}`,
            "count": `${data.count}`
        })
        console.log(items)
        data.id++
        localStorage.setItem("items", JSON.stringify(items))
    }

    if (!props.show) {
        return null;
    }
    else {
        switch (props.action) {
            case ADD_ITEM: {
                return (
                    <div className={styles.item_form}>
                        <div className={styles.form_wrapp}>
                            <div className={styles.form_content}>
                                <input type="text"
                                    placeholder='Название'
                                    ref={addItemNameRef}
                                    onChange={() => {
                                        var value = addItemNameRef.current.value
                                        if (validateStringValue(value)) {
                                            data.name = value
                                            data.isNameValid = true
                                        }
                                        else { data.isNameValid = false }
                                    }}
                                />

                                <input type="text"
                                    placeholder='Цена'
                                    ref={addItemPriceRef}
                                    onChange={() => {
                                        var value = addItemPriceRef.current.value
                                        if (validateIntValue(value)) {
                                            data.price = value
                                            data.isPriceValid = true
                                        }
                                        else { data.isPriceValid = false }
                                    }}
                                />

                                <input type="text"
                                    placeholder='Ссылка на фото'
                                    ref={addItemImgRef}
                                    onChange={() => {
                                        var value = addItemImgRef.current.value
                                        if (validateUrl(value)) {
                                            data.img = value
                                            data.isImgValid = true
                                        }
                                        else { data.isImgValid = false }
                                    }}
                                />

                                <input type="text"
                                    placeholder='Количество'
                                    ref={addItemCountRef}
                                    onChange={() => {
                                        var value = addItemCountRef.current.value
                                        if (validateIntValue(value)) {
                                            data.count = value
                                            data.isCountValid = true
                                        }
                                        else { data.isCountValid = false }
                                    }}
                                />
                            </div>
                            <div className={styles.form_buttons}>
                                <button
                                    ref={addButtonRef}
                                    // style={Buttondiv}
                                    // disabled={data.isButtonActive}
                                    onClick={() => {
                                        if (data.isNameValid && data.isPriceValid
                                            && data.isCountValid && data.isImgValid) {
                                            // data.isButtonActive = true
                                            console.log('ну, я удивлена')
                                            addItem()
                                            props.onClose()
                                        }
                                        else {
                                            // data.isButtonActive = false
                                            console.log('что-то не так')
                                        }
                                    }}
                                >
                                    Добавить
                                </button>
                                <button onClick={props.onClose}>Отмена</button>
                            </div>
                        </div>
                    </div>
                )
            }
            case UPDATE_ITEM: {
                return (
                    <div>
                        {UPDATE_ITEM}
                    </div>
                )
            }
            case DELETE_ITEM: {
                return (
                    <div>
                        {DELETE_ITEM}
                    </div>
                )
            }
            default: {
                return (
                    <div>
                        oops
                    </div>
                )
            }
        }
    }
}

const CardArea = (props) => {
    const [show, setShow] = useState(false)
    const [action, setAction] = useState()

    return (
        <div className={styles.content}>
            <div className={styles.rect}>
                <div className={styles.grid_wrapp}>
                    <div className={styles.img}>
                        <img src={`${props.img}`} alt="" />
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
                        <button className={styles.item_butt}
                            onClick={() => {
                                setShow(true)
                                setAction(UPDATE_ITEM)
                            }}
                        >
                            Обновить
                        </button>
                        <button className={styles.item_butt}
                            onClick={() => {
                                setShow(true)
                                setAction(DELETE_ITEM)
                            }}
                        >
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
            <ItemForm action={action} show={show} />
        </div>
    )
}

// let getData = () => {
//     var data = JSON.parse(localStorage.getItem("items"))
//     return data
// }

// let CardComponents = getData().map((item) =>
//     <CardArea
//         key={item.id}
//         img={item.img}
//         name={item.name}
//         price={item.price}
//         count={item.count}
//     />
// )

const Cards = () => {
    var state = JSON.parse(localStorage.getItem("items"))
    const [show, setShow] = useState(false)
    //чтобы менялось нормально
    const [action, setAction] = useState()

    let [itemsData, setItemsData] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setItemsData(JSON.parse(localStorage.getItem("items")).map((item) =>
                <CardArea
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    count={item.count}
                />
            ))
        }, 1)

        // var t = JSON.parse(localStorage.getItem("items"))
        // itemsData = t.map((item) =>
        //     <CardArea
        //         key={item.id}
        //         img={item.img}
        //         name={item.name}
        //         price={item.price}
        //         count={item.count}
        //     />
        // )
        // setItemsData(itemsData)
    }, [state])

    return (
        <div className="wrapper">
            {itemsData}
            <div className={styles.button}>
                <button
                    onClick={() => {

                        setShow(true)
                        setAction(ADD_ITEM)
                    }}
                >
                    Добавить
                </button>
            </div>
            <ItemForm action={action} show={show} onClose={() => { setShow(false) }} />
        </div>
    )
}

export default Cards