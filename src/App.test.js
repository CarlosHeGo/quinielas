import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QuinielaProvider } from '../context/QuinielaContext';
import App from '../App';

describe('App Component', () => {
  it('renders without crashing', async () => {
    render(
      <MemoryRouter>
        <QuinielaProvider>
          <App />
        </QuinielaProvider>
      </MemoryRouter>
    );
    
    
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
      expect(screen.getByTestId('quiniela-provider')).toBeInTheDocument();
  
  });
});
