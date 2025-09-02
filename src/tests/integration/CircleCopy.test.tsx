import { render, screen } from "@testing-library/react";
import { CircleCopy } from "@/components/pages/ProfileCreator/CircleCopy";

describe("CircleCopy", () => {
  it("renderiza todas las letras de 'Copied'", () => {
    render(<CircleCopy />);
    // Verificar que cada letra aparece en el documento
    expect(screen.getByText("C")).toBeTruthy();
    expect(screen.getByText("o")).toBeTruthy();
    expect(screen.getByText("p")).toBeTruthy();
    expect(screen.getByText("i")).toBeTruthy();
    expect(screen.getByText("e")).toBeTruthy();
    expect(screen.getByText("d")).toBeTruthy();
  });

  it("contiene un elemento con la clase 'loader'", () => {
    render(<CircleCopy />);
    const loader = document.querySelector(".loader");
    expect(loader).toBeTruthy();
  });

  it("envuelve todo en un contenedor con la clase 'loader-wrapper'", () => {
    render(<CircleCopy />);
    const wrapper = document.querySelector(".loader-wrapper");
    expect(wrapper).toBeTruthy();
  });
});
