// import jest from "jest-mock";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";


const MockComponent = () => {
    return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
    )
  }
  
  
 

// const top100Films = [
//     { name: "Handcrafted Concrete Sausages" },
//     { name: "Small Plastic Chair" },
// ];

// const handleChange = jest.fn()

test('renders Header component', () => {
  render(<MockComponent />);
});

it("should have Daraaz", () => {
    render(<MockComponent />)
    const message = screen.getByLabelText("Search In Daraaz");
    expect(message).toBeInTheDocument();
  });

it("should render the input Field", () => {

    render(
       <MockComponent />
    );

    const inputElement = screen.getByLabelText("Search In Daraaz");
    expect(inputElement).toBeInTheDocument();
});



test("Relevant Options are displayed when input has a value", () => {
    render(
       <MockComponent />
    );

    const inputElement = screen.getByLabelText(/search in daraaz/i);
    fireEvent.change(inputElement, { target: { value: "Handcrafted Concrete Sausages" } });
    expect(screen.getByText("Handcrafted Concrete Sausages")).toBeVisible();
});

test('updates search input value', () => {
  render(<MockComponent />);
  const searchInput = screen.getByLabelText('Search In Daraaz');
  fireEvent.change(searchInput, { target: { value: 'Handcrafted Concrete Sausages' } });
  expect(searchInput).toHaveValue('Handcrafted Concrete Sausages');
});