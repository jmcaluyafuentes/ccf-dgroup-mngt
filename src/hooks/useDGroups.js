import { useState, useEffect } from 'react';
import { fetchDGroups } from '../api/dgroupApi';

const useDGroups = ({ satellite, lifeStage }) => {
    const [dGroups, setDGroups] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const getDGroups = async () => {
            setLoading(true);
            try {
                // Fetch DGroups from the API
                const data = await fetchDGroups();
                
                // Filter the data based on the provided satellite and lifeStage parameters
                const filteredData = data.filter(dGroup =>
                    (!satellite || dGroup.satellite.name === satellite) &&
                    (!lifeStage || dGroup.lifeStage === lifeStage)
                );
                setDGroups(filteredData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getDGroups();
    }, [satellite, lifeStage]);

    return { dGroups, loading, error };
};

export default useDGroups;
