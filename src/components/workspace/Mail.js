import React from 'react'
import '../../styles/Workspace.scss'
import { IconContext } from "react-icons";
import { BiPaperclip } from "react-icons/bi";
import { GoReply } from "react-icons/go";
import { ImArrowRight } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import pdf from '../../assets/pdf.png';


export default function Mail() {
  return (
    <div className='workspaceMail'>
        <div className='mailSubject'>
            Invitation to join our organisation as a member of the board
        </div>
        
        <IconContext.Provider value={{size: '1.1rem'}}>
            <div className='senderInfo'>
                <div className='personalDetails'>
                    <div className='nameIcon'>
                        <div className='senderName'>Aymeric Vanbock</div>
                        <div className='icon'><BiPaperclip/></div>
                    </div>
                    <div className='senderMail'>amaud.renet@allaince-info.com</div>
                </div>
                <div className='mailDetails'>
                    <div className='dateTime'>Today 10:39AM</div>
                    <div className='icons'>
                        <div><GoReply/></div>
                        <div><ImArrowRight/></div>
                        <div className='redIcon'><MdDelete/></div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>

        <div className='mailBody'>
            Greetings 

            <br/><br/>
            Hope this message finds you well. I'm reaching out today because I'm managing an application
             redesign project here at ABC Company and seeking a skilled UX research contractor to help
             analyze several sets of usability testing data.
            
            <br/><br/>
            This is a three-month project beginning February 1st, and we estimate it will take roughly 15 hours 
            per week. All work can be completed remotely, but you're welcome to use our workspace.

            <br/><br/>
            Please let me know if you're interested in this project and we can set up some time to discuss
             the details further. I look forward to hearing from you.
        </div>

        <div className='pdfContainer'>
            <img src={pdf} alt='pdf'/>
            <div>Invoice.pdf</div>
        </div>

        <div className='button'>
            Reply
        </div>
    </div>
  )
}
