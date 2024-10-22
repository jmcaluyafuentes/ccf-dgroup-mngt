import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

const DGroupDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { dGroups, selectedSatellite, selectedLifeStage } = location.state || {};

    const dGroupId = location.pathname.split('/').pop();
    const dGroup = dGroups?.find(group => group.id == dGroupId);

    if (!dGroup) {
        return (
            <section className="page section">
                <h1 className="title dgroup-page is-2 has-text-centered">DGroup Information</h1>
                <div className="card-content card-detail">
                    <h2 className="title is-4">Sorry, DGroup not found.</h2>
                    <button className="button is-success" onClick={() => navigate(-1)}>Back</button>
                </div>
            </section>
        )
    }

    return (
        <section className="page section">
            <h1 className="title dgroup-page is-2 has-text-centered">DGroup Information</h1>
            <div className="card-content card-detail">
                <h2 className="title is-4">{dGroup.name}</h2>

                <h3 className="title title-detail is-6 mt-5 mb-1">Life Stage: {dGroup.lifeStage}</h3>
                <h3 className="title title-detail is-6 mt-1">Satellite: {dGroup.satellite.name}</h3>
                <p className="subtitle is-6 mt-3">Description: We encourage and pray for one another. We also do community service and share the gospel.{dGroup.description}</p>

                <p className="subtitle is-6 mt-5">Meeting Day: {dGroup.meetingDay}</p>
                <p className="subtitle is-6 mt-1">Meeting Time: 5 PM</p>
                <p className="subtitle is-6 mt-1">Meeting Frequency: {dGroup.meetingFrequency}</p>

                <p className="subtitle is-6 mt-5">Leader: John Doe{dGroup.leader}</p>
                <p className="subtitle is-6 mt-1">Mobile No.: 123456</p>
                <p className="subtitle is-6 mt-1 mb-5">Email: leader@email.com</p>

                <button className="button is-success" onClick={() => navigate('/dgroups', { state: { selectedSatellite, selectedLifeStage } })}>Back</button>
            </div>
        </section>
    );
};

export default DGroupDetails;
