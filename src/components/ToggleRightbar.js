import React, { useState, useEffect } from 'react'
import Topbuttons from './rightbar/Topbuttons';
import Tabs from './rightbar/Tabs';
import Activities from './rightbar/Activities'
import '../styles/Rightbar.scss'

import { useSelector } from 'react-redux'

export default function Rightbar() {
    const [style, setStyle] = useState('rightbar2 hide');

    const value = useSelector((state) => state.toggler.value);

    useEffect(()=>{
        if (value === 0)
            setStyle('rightbar2 hide');
        else
            setStyle('rightbar2 show');
    }, [value])

    return (
        <div className={style}>
            <Topbuttons/>
            <Tabs/>
            <Activities/>
        </div>
    )
}