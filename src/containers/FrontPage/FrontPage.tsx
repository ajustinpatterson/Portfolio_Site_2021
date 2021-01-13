import React from 'react';
import profile from '../../assets/Profile.jpg';
import './FrontPage.scss';

const FrontPage = () => {
  return (
    <div className="container">
      <div className="text">
        <h1 className="my-name">Justin Patterson</h1>
        <h4>FULL STACK SOFTWARE DEVELOPER</h4>
        <p style={{ padding: '0 10% 0 5%' }}>
          Hi! I'm Justin, a developer living in Barcelona, Spain. I specialize
          in React and Node.js, with an emphasis on clean, modern design.{' '}
        </p>
      </div>
      <img
        src={profile}
        className="profile-pic"
        alt="profile"
        title="Photo by Berta Vilanova :)"
      />
    </div>
  );
};

export default FrontPage;
