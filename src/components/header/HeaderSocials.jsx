import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';

const HeaderSocials = () => (
  <div className="header__socials">
    <a href="https://www.linkedin.com/in/evans-kofi-nyamekye-1980a4117" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
    <a href="https://github.com/evansnyamekye" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
    <a href="https://discord.com/channels/@me" target="_blank" rel="noreferrer" aria-label="Discord"><FaDiscord /></a>
    <a href="https://twitter.com/nyamekye2131" target="_blank" rel="noreferrer" aria-label="Dribbble"><FaXTwitter /></a>
  </div>
);

export default HeaderSocials;
