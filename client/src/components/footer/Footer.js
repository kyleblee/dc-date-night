import React from 'react';
import FooterInfo from './FooterInfo';
import LogoDiv from '../LogoDiv';
import SocialIcons from '../SocialIcons';

const Footer = props => {
  return (
    <div className="footer">
      <LogoDiv />
      {/* <FooterInfo /> */}
      <SocialIcons />
    </div>
  )
}

export default Footer;
