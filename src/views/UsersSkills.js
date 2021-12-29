import { Image } from "antd"
import React from "react"
import NavbarComponent from "../components/NavbarComponent"
import { IoMdBicycle} from "react-icons/io"
import {BiRun} from "react-icons/bi"

const UsersSkillsMainComponent = () => {
    return (
        <>
            <div className="navbar">
                <NavbarComponent />
            </div>
            <div className="profile-section">
                <img className="profile" src="https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v1632620013/origin/starrgate/users/profile_0c464da633a7d0d366f868a60fa55d0eec83e61d.jpg" />
            </div>
            <h2 className="user-fullname text-center">Alexander Torrenegra</h2>

            <div className="skills-sections margin_left_10">
                <h1 className="txt_normal skills-interests-header margin_left_10">Skills and interests</h1>
                <div className="d-flex  margin_left_10">
                    <IoMdBicycle color="white"  size={20} />
                    <h3 className="skills-small-header ">Master/ Influencer</h3>
                </div>
                <div className="d-flex margin_left_10">
                    <div className="skills-container">software development</div>
                    <div className="skills-container">software development</div>
                    <div className="skills-container">software development</div>
                    <div className="skills-container">software development</div>
                    <div className="skills-container">software development</div>
                    <div className="skills-container">software development</div>
                </div>

                <div className="d-flex mato16  margin_left_10">
                    <BiRun color="white"  size={20} />
                    <h3 className="skills-small-header ">Proficient</h3>
                </div>
                <div className="d-flex margin_left_10">
                    <div className="skills-container">software development</div>
                    <div className="skills-container">software development</div>
                    <div className="skills-container">software development</div>
                    <div className="skills-container">software development</div>
                    <div className="skills-container">software development</div>
                    <div className="skills-container">software development</div>
                </div>
            </div>
        </>
    )
}

export default UsersSkillsMainComponent