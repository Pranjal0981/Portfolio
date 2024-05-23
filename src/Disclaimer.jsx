import React from 'react';
import './disclaimer.scss';

const Disclaimer = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="disclaimer-backdrop">
            <div className="disclaimer-modal">
                <h2>Disclaimer</h2>
                <p>
                    As per the rules of the Bar Council of India, ACV LEGAL (the "Firm") is prohibited from soliciting work or advertising. By clicking on the “I Agree” button below and accessing this website , the User acknowledges the following:
                </p>
                <ul>
                    <li>The User is seeking information relating to ACV LEGAL of her/his/its own accord and that there has been no form of solicitation, advertisement or inducement by ACV LEGAL or any of its members;</li>
                    <li>This website does not seek to create or invite any lawyer-client relationship;</li>
                    <li>No material/information provided on this website should be construed as legal advice;</li>
                    <li>ACV LEGAL shall not be liable for consequences arising out of any action taken by the user relying on material/ information provided under this website; and</li>
                    <li>In cases where the User has any legal issues, he/she in all cases must seek independent legal advice.</li>
                </ul>
                <button onClick={onClose}>I AGREE</button>
            </div>
        </div>
    );
};

export default Disclaimer;
