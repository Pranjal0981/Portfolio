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
              <h1>
                Adv. Vaidruti Mishra <br />
                <span>Advocate On Record
                  Supreme Court Of India
                  Expertises- In Coporate settlements , Family Law,Criminal Cases, Civil Cases and Dispute Resolution matters and Arbitration cases.</span>
              </h1>
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
              <h1>
              Adv.  Ashiwan mishra <br />
                <span>
                  Expertise -Government Matters , family law , criminal law Pratices In  Supreme Court Of India as well as all the Courts all over India</span>
              </h1>
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
              <h1>
             Adv.  Rakesh Soni <br />
                <span>Expertise -Dispute settlement expert and financial law Practices in all courts
</span>
              </h1>
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
              <h1>
                Adv. Sharad Rai <br />
                <span>Expertise -Coporate law and financial law as well as Taxation Matters Practice in all the tribunals and Distict Courts</span>
              </h1>
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
            <img src="./slide9.jpeg" alt="" />
          </div>
          <div className="content">
            <div className="contentBx">
              <h1>
                Adv. Ritu Renewal
 <br />
                <span>Expertise -coporate law and financial  law
                  Practice  in both courts</span>
              </h1>
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
