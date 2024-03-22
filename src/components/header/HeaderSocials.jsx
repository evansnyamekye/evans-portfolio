import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com" terget="_blank"><FaGithub/></a>
        <a href="https://discord.com" terget="_blank"><FaDiscord/></a>
        <a href="https://dribble.com" terget="_blank"><FaDribbble/></a>
    </div>
  )
}

export default HeaderSocials


