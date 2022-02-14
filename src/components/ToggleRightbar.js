import React, { useState, useEffect } from 'react'
import Topbuttons from './rightbar/Topbuttons';
import Tabs from './rightbar/Tabs';
import Activities from './rightbar/Activities'
import Tasks from './rightbar/Tasks'
import Progress from './rightbar/Progress'
import '../styles/Rightbar.scss'

import { useSelector } from 'react-redux'

export default function Rightbar({tab, setTab}) {
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
            <Tabs tab={tab} setTab={setTab}/>
            
            {tab === 'activities' && <Activities/>}
            {tab === 'tasks' && <Tasks/>}
            {tab === 'progress' && <Progress/>}
        </div>
    )
}