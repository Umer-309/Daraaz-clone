import jest from "jest-mock";
import { render, fireEvent, screen } from "@testing-library/react";
import { Autocomplete, TextField } from "@mui/material";

const top100Films = [
    { name: "Handcrafted Concrete Sausages" },
    { name: "Small Plastic Chair" },
];

const handleChange = jest.fn()

it("should render the input Field", () => {

    render(
        <Autocomplete
            id="highlights-demo"
            options={top100Films}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
                <TextField {...params} label="Search In Daraaz" margin="normal" />
            )}
            onInputChange={handleChange}

        />
    );

    const inputElement = screen.getByLabelText("Search In Daraaz");
    expect(inputElement).toBeInTheDocument();
});



test("Relevant Options are displayed when input has a value", () => {
    render(
        <Autocomplete
            id="highlights-demo"
            options={top100Films}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
                <TextField {...params} label="Search In Daraaz" margin="normal" />
            )}
            onInputChange={handleChange}
        />
    );

    const inputElement = screen.getByLabelText(/search in daraaz/i);
    fireEvent.change(inputElement, { target: { value: "Handcrafted Concrete Sausages" } });
    expect(screen.getByText("Handcrafted Concrete Sausages")).toBeVisible();
});