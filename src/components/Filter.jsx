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
        <div className="labels mb-5">
            <label>
                <span className="label-name">
                    Satellite:
                </span>
                <div className="custom-select ml-2 mr-2">
                    <select value={selectedSatellite} onChange={onSatelliteChange} className="ml-2 mr-2">
                        <option value="">All Satellites</option>
                            {satellites.map((satellite, index) => (
                                <option key={index} value={satellite}>
                                {satellite}
                                </option>
                            ))}
                    </select>
                </div>
            </label>
            <label className="label-next">
                <span className="label-name">
                    Life Stage:
                </span>
                <div className="custom-select ml-2 mr-2">
                    <select value={selectedLifeStage} onChange={onLifeStageChange} className="ml-2">
                        <option value="">All Life Stages</option>
                            {lifeStages.map((lifeStage, index) => (
                                <option key={index} value={lifeStage}>
                                {lifeStage}
                                </option>
                            ))}
                    </select>
                </div>
            </label>
        </div>
    );
};

export default Filter;
