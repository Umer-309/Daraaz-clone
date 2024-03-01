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
test("Options are displayed when input is focused or has a value", () => {
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
    fireEvent.focus(inputElement);

    top100Films.forEach((film) => {
        expect(screen.getByText(film.name)).toBeVisible();
    });
});