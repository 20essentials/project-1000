import { render, screen, fireEvent } from "@testing-library/react";
import { HeartContainer } from "@/components/pages/SliderPosts/AsideRight/HeartContainer";
import { userUserLikedPosts } from "@/store/useUserLikedPosts";
import {
  diego_poncelet_array_of_posts,
  diego_poncelet_commonProps
} from "@/publicData/001-100/user-100-diego-poncelet";
import type { arrayOfPosts } from "@/components/pages/SliderPosts/types";


const firstPostMock = {
  ...diego_poncelet_commonProps,
  ...diego_poncelet_array_of_posts[0]
};

describe("<HeartContainer /> integración con Zustand", () => {
  beforeEach(() => {
    // resetear el store antes de cada test
    userUserLikedPosts.setState({
      arrayOfSavedPostOfTheUser: [] as arrayOfPosts,
    });
  });

  it("renderiza un post real y muestra hearts", () => {
    render(<HeartContainer hearts={123} post={firstPostMock} />);
    expect(screen.getByText("123")).toBeDefined();
  });

  it("añade post a guardados al click si no estaba guardado", () => {
    render(<HeartContainer hearts={10} post={firstPostMock} />);
    const section = screen.getByText("10").closest("section")!;
    fireEvent.click(section);

    const savedPosts = userUserLikedPosts.getState().arrayOfSavedPostOfTheUser;
    expect(savedPosts.length).toBe(1);
    expect(savedPosts[0][0].userId).toBe(firstPostMock.userId); 
    expect(savedPosts[0][1][0].idPost).toBe(firstPostMock.idPost); 
  });

  it("elimina post de guardados si ya estaba guardado", () => {
    // pre-cargar estado con estructura real: [commonProps, [postProps]]
    userUserLikedPosts.setState({
      arrayOfSavedPostOfTheUser: [
        [diego_poncelet_commonProps, [firstPostMock]],
      ] as arrayOfPosts,
    });

    render(<HeartContainer hearts={50} post={firstPostMock} />);
    const section = screen.getByText("50").closest("section")!;
    fireEvent.click(section);

    const savedPosts = userUserLikedPosts.getState().arrayOfSavedPostOfTheUser;
    expect(savedPosts).toEqual([]);
  });

  it("aplica clase this-post-is-liked si ya está en el store", () => {
    userUserLikedPosts.setState({
      arrayOfSavedPostOfTheUser: [
        [diego_poncelet_commonProps, [firstPostMock]],
      ] as arrayOfPosts,
    });

    render(<HeartContainer hearts={1} post={firstPostMock } />);
    const section = screen.getByText("1").closest("section")!;
    expect(section.classList).toContain("this-post-is-liked");
  });
});
