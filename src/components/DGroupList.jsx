import React from 'react';

const DGroupList = ({ dGroups, onSelectDGroup }) => {
    return (
        <div className="columns is-multiline">
            {dGroups.sort((a, b) => a.name.localeCompare(b.name)).map((dGroup) => (
                <div className="column is-one-third" key={dGroup.id}>
                    <div className="card" id="dgroup-details" onClick={() => onSelectDGroup(dGroup)}>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">{dGroup.name}</p>
                                    <p className="subtitle is-6">
                                        {dGroup.lifeStage} ({dGroup.satellite.name})
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DGroupList;
