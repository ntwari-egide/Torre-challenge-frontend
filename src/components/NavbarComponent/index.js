import { Button } from "antd"
import {HiMenu} from "react-icons/hi"
import {BiSearch} from "react-icons/bi"


const NavbarComponent = () => {
    return (
        <div className="d-flex margin_left_10 ">
            <div className="menu-icon"><HiMenu  color="white" size={16} /></div> 
            <h1 className=" text-center pure_white_color text-sm font-sm">torre<span className="color-yellow">.CO</span> </h1> 
            <div className="navbar-right-components d-flex">
                <div className="menu-icon"><BiSearch  color="white" size={16} /></div> 
                <Button className="sign-in-button">SIGN IN</Button>
            </div>
        </div>
    )
}

export default NavbarComponent