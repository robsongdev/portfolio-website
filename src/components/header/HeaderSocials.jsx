import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/robson-gabriel-rodrigues" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="http://github.com/robsongdev" target="_blank" rel="noreferrer"><FaGithub/></a>
            {/* <a href="http://linkedin.com" target="_blank"></a> */}
        </div>
    )
}

export default HeaderSocials;