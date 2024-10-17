import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './HomePage'

describe('HomePage Component', () => {
    // Helper function to render the component with Router
    const renderHomePage = () => {
        return render(
                <BrowserRouter>
                <HomePage />
                </BrowserRouter>
        );
    }

    describe('Headings', () => {
        it('should render the h1 heading', () => {
            renderHomePage();
            const h1 = screen.getByRole('heading', { level: 1, name: /Welcome to CCF Australia/i })
            expect(h1).toBeInTheDocument();
        });
        
        it('should render the h2 sub-heading', () => {
            renderHomePage();
            const h2 = screen.getByRole('heading', { level: 2, name: /Join a DGroup and grow together./i })
            expect(h2).toBeInTheDocument();
        });
    });
        
    it('should render the call-to-action button', () => {
        renderHomePage();
        const button = screen.getByRole('link', { name: /find a dgroup/i })
        expect(button).toBeInTheDocument();
    })
})
