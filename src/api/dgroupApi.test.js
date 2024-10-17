import { fetchDGroups } from './dgroupApi'
import axios from 'axios'

vi.mock('axios')

describe('fetchDGroups', () => {
    it('should fetch DGroups data successfully', async () => {
        // Mock the resolved value of axios.get
        const mockData = [
            {
                id: 1,
                name: "Dgroup name"
            }
        ];
        axios.get.mockResolvedValueOnce({ data: mockData });

        const data = await fetchDGroups();

        expect(data).toEqual(mockData);
        expect(axios.get).toHaveBeenCalledWith('https://dgroup-management-api-bepvl.ondigitalocean.app/dgroup');
    })

    it('should handle errors', async () => {
        // Mock the rejected value of axios.get
        const errorMessage = 'Network Error';
        axios.get.mockRejectedValueOnce(new Error(errorMessage));

        await expect(fetchDGroups()).rejects.toThrow(errorMessage);
        expect(axios.get).toHaveBeenCalledWith('https://dgroup-management-api-bepvl.ondigitalocean.app/dgroup');
    })
})
