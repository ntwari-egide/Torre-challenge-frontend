import {IoMdClose} from "react-icons/io"
import { useHistory } from "react-router-dom"


const SkillsNavbarComponent = () => {

    const history = useHistory()

    return (
        <div className="d-flex margin_left_10 ">
            <div className="menu-icon-2 cursor_pointer"><IoMdClose  color="white" size={20} onClick={() => {
                history.push("/")
            }} /></div> 
            <h1 className="margin_left_10 text-center pure_white_color text-sm font-sm">Software Develpment</h1> 
        </div>
    )
}

export default SkillsNavbarComponent