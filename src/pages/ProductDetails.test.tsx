import { render, fireEvent, screen } from "@testing-library/react";
import ProductDetails from "./ProductDetails";
import jest from 'jest-mock'


test('renders ProductDetails component', () => {
  render(<ProductDetails />);
});

test('increment product quantity', () => {
  render(<ProductDetails />);
  const incrementButton = screen.getByText('+');
  const quantity = screen.getByDisplayValue('1');

  fireEvent.click(incrementButton);
  expect(quantity).toHaveValue('2');
});

test('decrements quantity when the - button is clicked', () => {
  render(<ProductDetails />);
  const decrementButton = screen.getByText('-');
  const incrementButton = screen.getByText('+');
  const quantityInput = screen.getByDisplayValue('1');

  fireEvent.click(incrementButton);
  fireEvent.click(decrementButton);

  expect(quantityInput).toHaveValue('1');
});


test('adds product to cart with the correct quantity', () => {
  const top100Films = {
    id: 1,
    name: "Handcrafted Concrete Sausages"
  };
  render(<ProductDetails />);
  const addToCartButton = screen.getByText('Add to cart');
  const quantityInput = screen.getByTestId('quantity-input') as HTMLInputElement;
  const alertSpy = jest.spyOn(window, 'alert');
  
  fireEvent.click(addToCartButton);
  
  expect(alertSpy).toHaveBeenCalledWith(`Added ${quantityInput.value} ${top100Films.name} to the cart`);
});

