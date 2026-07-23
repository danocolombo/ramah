import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';
import { describe, expect, it, vi } from 'vitest';
import Contact from './contactme';
import theme from '../theme';

vi.mock('@emailjs/browser', () => ({
  default: { send: vi.fn().mockResolvedValue({ status: 200 }) },
}));

function renderContact() {
  return render(
    <ThemeProvider theme={theme}>
      <Contact />
    </ThemeProvider>
  );
}

describe('Contact form', () => {
  it('keeps submit disabled until required fields, a valid email, and the captcha are all satisfied', async () => {
    const user = userEvent.setup();
    renderContact();

    const submit = screen.getByRole('button', { name: /send message/i });
    expect(submit).toBeDisabled();

    await user.type(screen.getByLabelText(/Full Name/i), 'Ada Lovelace');
    await user.type(screen.getByLabelText(/Email Address/i), 'ada@example.com');
    await user.type(screen.getByLabelText(/Message/i), 'Hello there!');
    expect(submit).toBeDisabled();

    const [a, b] = screen.getByText(/What is \d+ \+ \d+\?/).textContent!
      .match(/\d+/g)!
      .map(Number);
    await user.type(screen.getByRole('spinbutton'), String(a + b));

    expect(submit).not.toBeDisabled();
  });

  it('flags an invalid email address', async () => {
    const user = userEvent.setup();
    renderContact();

    const emailField = screen.getByLabelText(/Email Address/i);
    await user.type(emailField, 'not-an-email');

    expect(await screen.findByText(/Invalid email address/i)).toBeInTheDocument();
  });
});
