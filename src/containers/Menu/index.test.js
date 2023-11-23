import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "./index";

describe("When the Menu component is rendered", () => {
  it("should display a list of mandatory links and the logo", () => {
    render(<Menu />);
    expect(screen.getByText("Nos services")).toBeInTheDocument();
    expect(screen.getByText("Nos réalisations")).toBeInTheDocument();
    expect(screen.getByText("Notre équipe")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  describe("and the contact button is clicked", () => {
    it("should change the document location href", () => {
      render(<Menu />);
      const contactButton = screen.getByText("Contact");
      fireEvent.click(contactButton);
      expect(window.document.location.hash).toEqual("#contact");
    });
  });
});
