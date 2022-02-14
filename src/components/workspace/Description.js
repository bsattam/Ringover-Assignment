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
    useEffect(() => {
        if (value.length > 0)
            setMainContent(value.at(-1).type);
    }, [value])
    
    const dispatch = useDispatch();

    const closeHandler = (id) => {
        dispatch(removeTab(id));
    }

    return (
        <>
            <div className='workspaceDescription'>
                
            {value.length > 0 && 
                <div className='tabsContainer'>
                    <IconContext.Provider value={{size: '1.1rem'}}>
                        { value.map((el) => 
                            <div className='tab' key={el.id} onClick={()=>setMainContent(el.type)}>
                                <div className='tabName'>{el.type}</div>
                                <div className='tabClose' onClick={() => closeHandler(el.id)}>
                                    <AiOutlineClose/>
                                </div>
                            </div>
                        )}
                    </IconContext.Provider>
                </div>
            }
                
            {value.length > 0 && 
                <div className='main'>
                    { mainContent=='mail' && <Mail/>}
                    { mainContent=='call' && <Call/>}
                    { mainContent=='videoCall' && <Videocall/>}
                    { mainContent=='chat' && <Chat/>}
                    { mainContent=='calendar' && <Calendar/>}
                </div>
            }

            {value.length == 0 && <Blank/>}
                
            </div>
        </>
    )
}
