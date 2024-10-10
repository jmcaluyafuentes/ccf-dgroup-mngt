import React from 'react';

const DGroupDetails = ({ dGroup, onBack }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h2 className="title is-4">{dGroup.name}</h2>
                <p className="subtitle is-6 mt-5 mb-1">
                    Life Stage: {dGroup.lifeStage}
                </p>
                <p className="subtitle is-6 mt-1">
                    Satellite: {dGroup.satellite.name}
                </p>
                <div>
                    <p className="subtitle is-6 mt-1 mb-1">Leader: {dGroup.leader}</p>
                    <p className="subtitle is-6 mt-1 mb-3">Meeting Schedule: {dGroup.schedule}</p>
                </div>
                <button className="button is-link" onClick={onBack}>Back</button>
            </div>
        </div>
    );
};

export default DGroupDetails;
