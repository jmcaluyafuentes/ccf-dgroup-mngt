import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import DGroupPage from './DGroupPage'

// Mock the DGroupContainer component
vi.mock('../containers/DGroupContainer', () => ({
    default: () => <div>Mocked DGroupContainer</div>
}));

describe('DGroupPage component', () => {
    it('should render h1 heading', () => {
        render(<DGroupPage />);
        const h1 = screen.getByRole('heading', { name: /DGroup Information/i });
        expect(h1).toBeInTheDocument();
    })

    it('should render the DGroupContainer component', () => {
        render(<DGroupPage />);
        const mockedDGroupContainer = screen.getByText(/Mocked DGroupContainer/i);
        expect(mockedDGroupContainer).toBeInTheDocument();
    })
})