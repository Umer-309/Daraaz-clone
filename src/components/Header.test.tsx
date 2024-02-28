import { render, fireEvent, screen } from "@testing-library/react";
import { Autocomplete, TextField } from "@mui/material";

const top100Films = [
    { name: "The Shawshank Redemption" },
    { name: "The Godfather" },
];

const handleChange = jest.fn()

it("should call handleChange when input value changes", () => {
 
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
    fireEvent.change(inputElement, { target: { value: "test input" } });
    expect(inputElement.value).toHaveBeenCalledWith("test input");
});
