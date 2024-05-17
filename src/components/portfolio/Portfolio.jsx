import React from 'react';
import './portfolio.scss';

const TeamMember = () => {
  return (
    <div className="wrapper">
      <div className="title">
        <h4>Our Team</h4>
      </div>

      <div className="card_Container">
        <div className="card">
          <div className="imbBx">
            <img src="./vaidruti_mishra.jpeg" alt="" />
          </div>
          <div className="content">
            <div className="contentBx">
              <h3>
                Vaidruti Mishra <br />
                <span>Adv. Ashwain mishra
                  Expertise -government cases , family law , criminal law
                  Pratice in high court as well as supreme.</span>
              </h3>
            </div>
            <ul className="sci">
              <li style={{ '--i': 1 }}>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </li>
              <li style={{ '--i': 2 }}>
                <a href="#"><i className="fab fa-github"></i></a>
              </li>
              <li style={{ '--i': 3 }}>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="imbBx">
            <img src="./ashwain_mishra.jpeg" alt="" />
          </div>
          <div className="content">
            <div className="contentBx">
              <h3>
                Ashiwan mishra <br />
                <span>
                  Expertise -government cases , family law , criminal law
                  Pratice in high court as well as supreme</span>
              </h3>
            </div>
            <ul className="sci">
              <li style={{ '--i': 1 }}>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </li>
              <li style={{ '--i': 2 }}>
                <a href="#"><i className="fab fa-github"></i></a>
              </li>
              <li style={{ '--i': 3 }}>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
        </div>

       

        <div className="card">
          <div className="imbBx">
            <img src="./rakesh_soni.jpeg" alt="" />
          </div>
          <div className="content">
            <div className="contentBx">
              <h3>
               Rakesh Soni <br />
                <span>Adv. Ashwain mishra
                  Expertise-government cases , family law , criminal law
                  Pratice in high court as well as supreme</span>
              </h3>
            </div>
            <ul className="sci">
              <li style={{ '--i': 1 }}>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </li>
              <li style={{ '--i': 2 }}>
                <a href="#"><i className="fab fa-github"></i></a>
              </li>
              <li style={{ '--i': 3 }}>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="imbBx">
            <img src="./sharad_rai.jpeg" alt="" />
          </div>
          <div className="content">
            <div className="contentBx">
              <h3>
                Sharad Rai <br />
                <span>Expertise -coporate law and financial  law
                  Practice  in both courts</span>
              </h3>
            </div>
            <ul className="sci">
              <li style={{ '--i': 1 }}>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </li>
              <li style={{ '--i': 2 }}>
                <a href="#"><i className="fab fa-github"></i></a>
              </li>
              <li style={{ '--i': 3 }}>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
