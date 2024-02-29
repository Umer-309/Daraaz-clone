
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

const MockComponent = {
  
    <BrowserRouter>
      <Header />
    </BrowserRouter>
 
}

  it("should have Daraaz", () => {
      render(<MockComponent/>)
      const message = screen.getByLabelText("Search In Daraaz");
      expect(message).toBeInTheDocument();
  });