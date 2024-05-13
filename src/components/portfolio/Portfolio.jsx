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
            <img src="./ashwain_mishra.jpeg" alt="" />
          </div>
          <div className="content">
            <div className="contentBx">
              <h3>
                Ashwain Mishra <br />
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, fugiat quidem! Nemo sequi minima maiores assumenda iusto rem perspiciatis sunt.</span>
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
            <img src="./vaidruti_mishra.jpeg" alt="" />
          </div>
          <div className="content">
            <div className="contentBx">
              <h3>
               Vaidruti Mishra <br />
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas eligendi facilis itaque earum hic obcaecati sequi dolor a quia voluptatibus.</span>
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
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores ducimus facilis velit pariatur repellendus temporibus voluptatum, rem delectus animi.</span>
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
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse in laboriosam, commodi voluptas at excepturi maiores quibusdam qui! Commodi, quo?</span>
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
