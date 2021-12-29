import SkillsNavbarComponent from "../components/SkillsNavbarComponent"
import { IoMdBicycle} from "react-icons/io"
import { Divider } from "antd"
import {MdVerified} from "react-icons/md"

const SkillsDetailsMainComponent = () => {
    return (
        <>
            <div className="navbar">
                <SkillsNavbarComponent />
            </div>

            <div className="d-flex margin_left_10 skills-details ">
                <h3 className="proficient-header">Profecient: </h3>
                <IoMdBicycle color="white"  size={20} />
                <h3 className="skills-small-header ">Master/ Influencer</h3>
            </div>

            <div className="d-flex margin_left_10 recommendations ">
                <h3 className="proficient-header">Recommendations: </h3>
                <h3 className="skills-small-header ">7</h3>
            </div>

            <Divider />

            <div className="margin_left_10 skills-details ">
                <h3 className="proficient-header">Alexander's related experiences: </h3>
                <div className="experience-container">
                    <h3 className="proficient-header color-yellow">Funding member and Tech Lead </h3>
                    <h3 className="proficient-header">Executive Company </h3>
                    <h3 className="proficient-header">Feb 2015 - Dec 2017 </h3>
                </div>

                <div className="experience-container">
                    <h3 className="proficient-header color-yellow">Funding member and Tech Lead </h3>
                    <h3 className="proficient-header">Executive Company </h3>
                    <h3 className="proficient-header">Feb 2015 - Dec 2017 </h3>
                </div>
            </div>

            <Divider />

            <div className="margin_left_10 skills-details ">
                <h3 className="proficient-header">Other people with this skill: </h3>
                
                <div className="d-flex other-related-people-container">
                    <img alt="" src={'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} className="people-profile" />
                    <div>
                        <div className="d-flex people-description">
                            <h3 className="proficient-header color-yellow">Khan Yu </h3>
                            <MdVerified color="white"/>
                        </div>
                        <h3 className="proficient-header">Web Developer </h3>
                    </div>
                </div>

                <div className="d-flex other-related-people-container">
                    <img alt="" src={'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} className="people-profile" />
                    <div>
                        <div className="d-flex people-description">
                            <h3 className="proficient-header color-yellow">Khan Yu </h3>
                            <MdVerified color="white"/>
                        </div>
                        <h3 className="proficient-header">Web Developer </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillsDetailsMainComponent