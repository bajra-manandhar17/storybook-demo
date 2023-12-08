import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Common/Button',
  tags: ['autodocs'],
  args: {
    label: 'Button',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta

type Story = StoryObj<typeof Button>;


export const Primary: Story = {
  args: {
    primary: true,
  },
};

export const Secondary: Story = {};

export const RedButtonLarge: Story =  {
  args: {
    size: 'large',
  }
}

RedButtonLarge.argTypes = {
  backgroundColor: { control: 'inline-radio', options: ['red', 'blue'] },
}