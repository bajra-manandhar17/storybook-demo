import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';

import { Page } from './Page';

// 👇 Decorator to control styling
// const withMaxWidth = (Story) => (
//   <div style={{ maxWidth: 400, margin: 'auto' }}>
//     <Story />
//   </div>
// );

// const withGreenBackground = (Story) => (
//   <div style={{ maxWidth: 400, backgroundColor: 'green', margin: 'auto' }}>
//     <Story />
//   </div>
// );

const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // decorators: [withMaxWidth, withGreenBackground],

  // 👇 Decorator to control theme
  // decorators: [
  //   (Story) => (
  //     <ThemeProvider theme={theme}>
  //       <Story />
  //     </ThemeProvider>
  //   ),
  // ],
  
  // 👇 Decorator to control states
  // decorators: [
  //   (Story) => (
  //     <StateProvider initialState={loggedIn}>
  //       <Story />
  //     </StateProvider>
  //   ),
  // ],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Get in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Get out/i });
    await expect(logoutButton).not.toBeInTheDocument();
  },
};
