import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Login } from "@/components/pages/Login/Login";

describe("Login", () => {
  it("renders heading and description", () => {
    render(<Login />);

    const heading = screen.getByRole("heading", { name: "Login For TikTok" });
    const description = screen.getByText(
      "Create a profile, follow other accounts, make your own videos, and more."
    );

    expect(heading).not.toBeNull();
    expect(description).not.toBeNull();
  });

  it("renders google, twitch and github buttons", () => {
    render(<Login />);

    const google = screen.getByRole("button", { name: /Continue With Google/i });
    const twitch = screen.getByRole("button", { name: /Continue With Twitch/i });
    const github = screen.getByRole("button", { name: /Continue With GitHub/i });

    expect(google).not.toBeNull();
    expect(twitch).not.toBeNull();
    expect(github).not.toBeNull();
  });

  it("clicks google button", async () => {
    render(<Login />);
    const user = userEvent.setup();

    const google = screen.getByRole("button", { name: /Continue With Google/i });
    await user.click(google);

    // check side effects if needed
    expect(google).not.toBeNull();
  });

  it("clicks twitch button", async () => {
    render(<Login />);
    const user = userEvent.setup();

    const twitch = screen.getByRole("button", { name: /Continue With Twitch/i });
    await user.click(twitch);

    expect(twitch).not.toBeNull();
  });

  it("clicks github button", async () => {
    render(<Login />);
    const user = userEvent.setup();

    const github = screen.getByRole("button", { name: /Continue With GitHub/i });
    await user.click(github);

    expect(github).not.toBeNull();
  });

  it("renders footer terms and privacy", () => {
    render(<Login />);

    const terms = screen.getByText(/Terms of Use/i);
    const privacy = screen.getByText(/Privacy Policy/i);

    expect(terms).not.toBeNull();
    expect(privacy).not.toBeNull();
  });
});
