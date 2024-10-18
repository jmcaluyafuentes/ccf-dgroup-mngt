import React, { useEffect } from 'react';

const DGroupList = ({ dGroups, onSelectDGroup }) => {
    useEffect(() => {
        const cards = document.querySelectorAll('.card-content');
        const maxHeight = Array.from(cards).reduce((max, card) => Math.max(max, card.clientHeight), 0);
        
        cards.forEach(card => {
            card.style.height = `${maxHeight}px`;
        });
    }, [dGroups]);
    
    return (
        <div className="columns is-multiline">
            {dGroups.sort((a, b) => a.name.localeCompare(b.name)).map((dGroup) => (
                <div className="column is-one-third" key={dGroup.id}>
                    <div className="card-content" id="dgroup-details" onClick={() => onSelectDGroup(dGroup)}>
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
            ))}
        </div>
    );
};

export default DGroupList;
