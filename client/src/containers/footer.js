import React from 'react';
import FooterInfo from '../components/footer/FooterInfo';
import LogoDiv from '../components/LogoDiv';
import SocialIcons from '../components/SocialIcons';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <LogoDiv />
        <FooterInfo />
        <SocialIcons />
      </div>
    )
  }
}

export default Footer;
