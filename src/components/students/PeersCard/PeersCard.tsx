import React from 'react';
import './PeersCard.css'

function PeersCard() {
    return (
        <div className="peers-card">
        <div className="card-image">
            <img src={require('../../../assets/images/users/avatar.jpg')} alt="" />
        </div>
        <div className="info">
            <div className="card-content">
                <p className="label-text">Name: </p>
                <p className="value-text">John Doe</p>
            </div>
            <button className="message-peer-button">Message</button>
        </div>
    </div>
    );
}

export default PeersCard;