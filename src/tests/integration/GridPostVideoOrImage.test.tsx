import { render, screen } from "@testing-library/react";
import { PostVideoOrImage } from "@/components/pages/Profile/GridPostVideoOrImage";
import { MODE_GRID } from "@/store/useUserCreator";
import type { postProps } from "@/components/pages/SliderPosts/types.d";

test("renders video element when videoSrc is provided", () => {
  const post: postProps = {
    videoSrc: "video.mp4",
    arrayImages: [],
    description: "Video test",
    tags: ["tag1"],
    dateOfPublication: "2025-09-05",
    totalViewsOfThePost: 10,
    hearts: 1,
    comments: 0,
    saved: 0,
    shared: 0,
    isSaved: false,
    isLiked: false,
    idPost: "post1"
  };

  const { container } = render(<PostVideoOrImage post={post} modeGrid={MODE_GRID.userCreatedPosts} />);
  const contentDiv = container.querySelector(".content-post");
  expect(contentDiv).toBeDefined();
  const video = container.querySelector("video");
  expect(video).toBeDefined();
});

test("renders image element when arrayImages is provided", () => {
  const post: postProps = {
    videoSrc: undefined,
    arrayImages: ["image1.png"],
    description: "Image test",
    tags: ["tag1"],
    dateOfPublication: "2025-09-05",
    totalViewsOfThePost: 5,
    hearts: 0,
    comments: 0,
    saved: 0,
    shared: 0,
    isSaved: false,
    isLiked: false,
    idPost: "post2"
  };

  const { container } = render(<PostVideoOrImage post={post} modeGrid={MODE_GRID.userCreatedPosts} />);
  const contentDiv = container.querySelector(".content-post");
  expect(contentDiv).toBeDefined();
  const img = screen.getByAltText("Post image") as HTMLImageElement;
  expect(img).toBeDefined();
  expect(img.src).toContain("image1.png");
});
