import React from 'react';

const Filter = ({
    satellites = [],
    lifeStages = [],
    selectedSatellite,
    selectedLifeStage,
    onSatelliteChange,
    onLifeStageChange,
    }) => {
    return (
        <div className="mb-5">
            <label>
                Satellite:
                <select value={selectedSatellite} onChange={onSatelliteChange} className="ml-2 mr-2">
                    <option value="">All Satellites</option>
                        {satellites.map((satellite, index) => (
                            <option key={index} value={satellite}>
                            {satellite}
                            </option>
                        ))}
                </select>
            </label>
            <label>
                Life Stage:
                <select value={selectedLifeStage} onChange={onLifeStageChange} className="ml-2">
                    <option value="">All Life Stages</option>
                        {lifeStages.map((lifeStage, index) => (
                            <option key={index} value={lifeStage}>
                            {lifeStage}
                            </option>
                        ))}
                </select>
            </label>
        </div>
    );
};

export default Filter;
