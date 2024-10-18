import React from 'react';

const DGroupDetails = ({ dGroup, onBack }) => {
    return (
        <div className="card-content card-detail">
            <h2 className="title is-4">{dGroup.name}</h2>

            <h3 className="title is-6 mt-5 mb-1">Life Stage: {dGroup.lifeStage}</h3>
            <h3 className="title is-6 mt-1">Satellite: {dGroup.satellite.name}</h3>
            <p className="subtitle is-6 mt-1">Description: {dGroup.description}</p>

            <p className="subtitle is-6 mt-5">Meeting Day: {dGroup.meetingDay}</p>
            <p className="subtitle is-6 mt-1">Meeting Time: 5 PM</p>
            <p className="subtitle is-6 mt-1">Meeting Frequency: {dGroup.meetingFrequency}</p>

            <p className="subtitle is-6 mt-5">Leader: {dGroup.leader}</p>
            <p className="subtitle is-6 mt-1">Mobile No.: 123456</p>
            <p className="subtitle is-6 mt-1 mb-5">Email: leader@email.com</p>

            <button className="button is-success" onClick={onBack}>Back</button>
        </div>
    );
};

export default DGroupDetails;
