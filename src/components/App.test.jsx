import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the header and default landing route without crashing', async () => {
    render(<App />);

    expect(await screen.findByAltText('company logo')).toBeInTheDocument();
  });
});
