import { React, useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

import { FiBook } from 'react-icons/fi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <button type="button" aria-label="#" onClick={() => { setActiveNav('#'); window.location.href = '#'; }} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></button>
      <button type="button" aria-label="About" onClick={() => { setActiveNav('#about'); window.location.href = '#about'; }} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></button>
      <button type="button" aria-label="Expereince" onClick={() => { setActiveNav('#experience'); window.location.href = '#experience'; }} className={activeNav === '#experience' ? 'active' : ''}><FiBook /></button>
      <button type="button" aria-label="Services" onClick={() => { setActiveNav('#services'); window.location.href = '#services'; }} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></button>
      <button type="button" aria-label="Contact" onClick={() => { setActiveNav('#contact'); window.location.href = '#contact'; }} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></button>
    </nav>
  );
};
export default Nav;
