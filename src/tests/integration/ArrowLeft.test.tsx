import { render, fireEvent } from "@testing-library/react";
import { ArrowLeft } from "@/components/pages/ProfileCreator/ArrowLeft";
import { useCurrentPage, IS_ACTIVE_BUTTON } from "@/store/useCurrentPage";
import { useLastPagedVisited } from "@/store/userLastPageVisited";

describe("ArrowLeft", () => {
  beforeEach(() => {
    useCurrentPage.setState({ currenPage: IS_ACTIVE_BUTTON.LOGIN_PAGE });
    useLastPagedVisited.setState({
      arrayOfPagesVisited: [IS_ACTIVE_BUTTON.HOME, IS_ACTIVE_BUTTON.PROFILE],
    });
  });

  it("renderiza un SVG con la clase pasada por props", () => {
    const { container } = render(<ArrowLeft className="test-class" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
    expect(svg?.getAttribute("class")).toBe("test-class");
  });

  it("al hacer click cambia currenPage al penultimatePage", () => {
    const { container } = render(<ArrowLeft className="test-class" />);
    const svg = container.querySelector("svg");
    if (!svg) throw new Error("SVG no encontrado");

    fireEvent.click(svg);

    const { currenPage } = useCurrentPage.getState();
    expect(currenPage).toBe(IS_ACTIVE_BUTTON.HOME);
  });

  it("si solo hay una página visitada, vuelve a HOME", () => {
    useLastPagedVisited.setState({
      arrayOfPagesVisited: [IS_ACTIVE_BUTTON.STORY],
    });

    const { container } = render(<ArrowLeft className="test-class" />);
    const svg = container.querySelector("svg");
    if (!svg) throw new Error("SVG no encontrado");

    fireEvent.click(svg);

    const { currenPage } = useCurrentPage.getState();
    expect(currenPage).toBe(IS_ACTIVE_BUTTON.HOME);
  });
});
