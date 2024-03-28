import React from 'react';
import { FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa6';

const HeaderSocials = () => (
  <div className="header__socials">
    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
    <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
    <a href="https://discord.com" target="_blank" rel="noreferrer" aria-label="Discord"><FaDiscord /></a>
    <a href="https://dribble.com" target="_blank" rel="noreferrer" aria-label="Dribbble"><FaDribbble /></a>
  </div>
);

export default HeaderSocials;
