import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export const stackIcon = (language) => {
    if (language == 'Java') {
        return <span className='lang-icon'><FaJava className='icon' /></span>
    } else if (language == 'JavaScript') {
        return <span className='lang-icon'><IoLogoJavascript className='icon' /></span>
    }
}
