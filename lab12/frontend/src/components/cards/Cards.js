import styles from './Cards.module.css'
import React, {createRef, useEffect, useState} from 'react'
import ClickAwayListener from '@mui/base/ClickAwayListener';
import data from '../../data/items.json';

///////////////////// reboot //////////////////////

// let testfunc = () => {
//     localStorage.removeItem("items")
//     var data = require('./items.json')
//     localStorage.setItem("items", JSON.stringify(data))
//     console.log(data)
// }

// testfunc()