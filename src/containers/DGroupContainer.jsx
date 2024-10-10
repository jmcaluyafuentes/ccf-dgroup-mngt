import React, { useState, useEffect } from 'react';
import useDGroups from '../hooks/useDGroups';
import DGroupList from '../components/DGroupList';
import Filter from '../components/Filter';
import { fetchDGroups } from '../api/dgroupApi';

const DGroupContainer = () => {
    const [selectedSatellite, setSelectedSatellite] = useState('');
    const [selectedLifeStage, setSelectedLifeStage] = useState('');
    const [allSatellites, setAllSatellites] = useState([]);
    const [allLifeStages, setAllLifeStages] = useState([]);

    const { dGroups, loading, error } = useDGroups({ satellite: selectedSatellite, lifeStage: selectedLifeStage });

    useEffect(() => {
        // Fetch available options for satellites and life stages
        const fetchOptions = async () => {
        try {
            // Fetch all DGroups
            const data = await fetchDGroups();

            // Extract unique satellite names and life stages
            const satellites = Array.from(new Set(data.map((group) => group.satellite.name)));
            const lifeStages = Array.from(new Set(data.map((group) => group.lifeStage)));

            setAllSatellites(satellites);
            setAllLifeStages(lifeStages);
        } catch (err) {
            console.error(err);
        }
        };

        fetchOptions();
    }, []);

    // Handler for changing the selected satellite filter
    const handleSatelliteChange = (event) => {
        setSelectedSatellite(event.target.value);
    };

    // Handler for changing the selected life stage filter
    const handleLifeStageChange = (event) => {
        setSelectedLifeStage(event.target.value);
    };

    // Handler for selecting a specific DGroup
    const handleDGroupSelect = (dGroup) => {
        setSelectedDGroup(dGroup);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading groups.</p>;

    return (
        <>
            <Filter 
                satellites={allSatellites}
                lifeStages={allLifeStages}
                selectedSatellite={selectedSatellite} 
                selectedLifeStage={selectedLifeStage} 
                onSatelliteChange={handleSatelliteChange} 
                onLifeStageChange={handleLifeStageChange} 
            />
            <DGroupList dGroups={dGroups} onSelectDGroup={handleDGroupSelect} />
        </>
    );
};

export default DGroupContainer;
