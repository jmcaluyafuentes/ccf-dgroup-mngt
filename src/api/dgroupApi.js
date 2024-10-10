import axios from 'axios';

const BASE_URL = 'https://dgroup-management-api-bepvl.ondigitalocean.app/dgroup';

// Fetch all DGroups
export const fetchDGroups = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching DGroups:", error);
        throw error;
    }
};

// Fetch a single DGroup by ID
export const fetchDGroupById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching DGroup with id ${id}:`, error);
        throw error;
    }
};