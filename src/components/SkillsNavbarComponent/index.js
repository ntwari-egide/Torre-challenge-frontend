import { Button } from "antd"
import {HiMenu} from "react-icons/hi"
import {BiSearch} from "react-icons/bi"


const SkillsNavbarComponent = () => {
    return (
        <div className="d-flex margin_left_10 ">
            <div className="menu-icon"><HiMenu  color="white" size={16} /></div> 
            <h1 className=" text-center pure_white_color text-sm font-sm">Software Develpment</h1> 
        </div>
    )
}

export default SkillsNavbarComponent