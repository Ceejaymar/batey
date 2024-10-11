import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './Navigation';

const meta = {
  title: 'Navigation',
  component: Navigation,
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {};
