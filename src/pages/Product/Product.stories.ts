import type { Meta, StoryObj } from '@storybook/react';
import Product from './Product';

const meta = {
  title: 'pages/Product',
  component: Product,
} satisfies Meta<typeof Product>;

export default meta;

type Story = StoryObj<typeof Product>;

export const Default: Story = {};
