import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from './ProductCard';

const exampleProduct = {
  productId: 1,
  name: 'Product 1',
  description: 'Description of product 1',
  images: ['https://via.placeholder.com/150'],
  price: 100,
};

const meta = {
  title: 'ProductCard',
  component: ProductCard,
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    product: exampleProduct,
  },
};
