import React, { useState, useEffect } from 'react';
import useDGroups from '../hooks/useDGroups';
import DGroupList from '../components/DGroupList';
import { fetchDGroups } from '../api/dgroupApi';

const DGroupContainer = () => {
    const { dGroups, loading, error } = useDGroups({ satellite: null, lifeStage: null });

    // Handler for selecting a specific DGroup
    const handleDGroupSelect = (dGroup) => {
        setSelectedDGroup(dGroup);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading groups.</p>;

    return (
        <>
            <DGroupList dGroups={dGroups} onSelectDGroup={handleDGroupSelect} />
        </>
    );
};

export default DGroupContainer;
