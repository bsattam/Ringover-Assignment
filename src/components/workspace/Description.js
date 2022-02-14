import React, { useState, useEffect } from 'react'
import Mail from './Mail'
import Call from './Call'
import Videocall from './Videocall'
import Chat from './Chat'
import Calendar from './Calendar'
import Blank from './Blank'
import { IconContext } from "react-icons"
import { AiOutlineClose } from "react-icons/ai"
import '../../styles/Workspace.scss'

import { useSelector, useDispatch } from 'react-redux'
import { removeTab } from '../../redux/workspaceSlice'

export default function Description() {
    const value = useSelector((state) => state.workspaceTabHandler.value)
    const [mainContent, setMainContent] = useState();
    const [active, setActive] = useState();
    useEffect(() => {
        if (value.length > 0){
            setMainContent(value.at(-1).type);
            setActive(value.at(-1).id);
        }
    }, [value])
    
    const dispatch = useDispatch();

    const closeHandler = (id) => {
        dispatch(removeTab(id));
    }

    const handleTabClick = (el) => {
        const id = el.id;
        const type = el.type;
        setMainContent(type);
        setActive(id);
    }

    return (
        <>
            <div className='workspaceDescription'>
            { value.length > 0 &&
                <div className='tabsContainer'>
                    <IconContext.Provider value={{size: '1.1rem'}}>
                        { value.map((el) => {
                            let activeStyle;
                            activeStyle = (el.id === active) ? 'dark' : 'light';
                                
                            return (
                            <div className={`tab ${activeStyle}`} key={el.id} onClick={()=>handleTabClick(el)}>
                                <div className='tabName'>{el.type}</div>
                                <div className='tabClose' onClick={() => closeHandler(el.id)}>
                                    <AiOutlineClose/>
                                </div>
                            </div>
                            )}
                        )}
                    </IconContext.Provider>
                </div>
            }
            { value.length > 0 &&
                <div className='main'>
                    { mainContent==='mail' && <Mail/>}
                    { mainContent==='call' && <Call/>}
                    { mainContent==='videoCall' && <Videocall/>}
                    { mainContent==='chat' && <Chat/>}
                    { mainContent==='calendar' && <Calendar/>}
                </div>
            }

            {value.length===0 && <Blank/>}
                
            </div>
        </>
    )
}
