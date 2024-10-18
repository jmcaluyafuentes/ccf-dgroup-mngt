import '@testing-library/jest-dom'
import { render, screen, act } from '@testing-library/react';
import useDGroups from './useDGroups';
import React from 'react';
import axios from 'axios';

vi.mock('axios');

describe('useDGroups custom hook', () => {
    it('fetches and filters DGroups correctly', async () => {
        const mockData = [
            { id: 1, name: 'DGroup 1', satellite: { name: 'Satellite 1' }, lifeStage: 'Couples' },
            { id: 2, name: 'DGroup 2', satellite: { name: 'Satellite 2' }, lifeStage: 'Singles' },
        ];

        axios.get.mockResolvedValueOnce({ data: mockData });

        const TestComponent = () => {
            const { dGroups, loading, error } = useDGroups({ satellite: 'Satellite 1', lifeStage: 'Couples' });
            return (
                <>
                    {loading && <div>Loading...</div>}
                    {error && <div>Error: {error.message}</div>}
                    <ul>
                        {dGroups.map(dGroup => (
                            <li key={dGroup.id}>{dGroup.name}</li>
                        ))}
                    </ul>
                </>
            );
        };

        await act(async () => {
            render(<TestComponent />);
        });

        expect(screen.getByText('DGroup 1')).toBeInTheDocument();
        expect(screen.queryByText('DGroup 2')).not.toBeInTheDocument();
    });

    it('displays all DGroups when no filters are applied', async () => {
        const mockData = [
            { id: 1, name: 'DGroup 1', satellite: { name: 'Satellite 1' }, lifeStage: 'Couples' },
            { id: 2, name: 'DGroup 2', satellite: { name: 'Satellite 2' }, lifeStage: 'Singles' },
        ];
    
        axios.get.mockResolvedValueOnce({ data: mockData });
    
        const TestComponent = () => {
            const { dGroups } = useDGroups({ satellite: '', lifeStage: '' });
            return (
                <ul>
                    {dGroups.map(dGroup => (
                        <li key={dGroup.id}>{dGroup.name}</li>
                    ))}
                </ul>
            );
        };
    
        await act(async () => {
            render(<TestComponent />);
        });
    
        expect(screen.getByText('DGroup 1')).toBeInTheDocument();
        expect(screen.getByText('DGroup 2')).toBeInTheDocument();
    });    

    it('displays loading state when fetching DGroups', async () => {
        axios.get.mockImplementationOnce(() => new Promise(() => {})); // Simulate an unresolved promise
    
        const TestComponent = () => {
            const { loading } = useDGroups({ satellite: '', lifeStage: '' });
            return loading ? <div>Loading...</div> : null;
        };
    
        render(<TestComponent />);
        
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
    
    it('handles error when fetching DGroups', async () => {
        const mockError = new Error('Network error');
        axios.get.mockRejectedValueOnce(mockError);
    
        const TestComponent = () => {
            const { error } = useDGroups({ satellite: '', lifeStage: '' });
            return error ? <div>Error: {error.message}</div> : null;
        };
    
        await act(async () => {
            render(<TestComponent />);
        });
    
        expect(screen.getByText('Error: Network error')).toBeInTheDocument();
    });
    
    it('displays message when no DGroups are available', async () => {
        const mockData = [];
        axios.get.mockResolvedValueOnce({ data: mockData });
    
        const TestComponent = () => {
            const { dGroups } = useDGroups({ satellite: '', lifeStage: '' });
            return (
                <>
                    <ul>
                        {dGroups.length === 0 ? <li>No DGroups available.</li> : null}
                        {dGroups.map(dGroup => (
                            <li key={dGroup.id}>{dGroup.name}</li>
                        ))}
                    </ul>
                </>
            );
        };
    
        await act(async () => {
            render(<TestComponent />);
        });
    
        expect(screen.getByText('No DGroups available.')).toBeInTheDocument();
    });    
});
