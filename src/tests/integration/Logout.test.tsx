import { render, screen, fireEvent } from "@testing-library/react";
import { Logout } from "src/components/pages/Profile/Logout";

test("renders logout button and triggers logout flow", () => {
  const trigger = document.createElement("button");
  trigger.className = "cl-userButtonTrigger cl-button";
  trigger.setAttribute("aria-label", "Open user button");
  let triggerClicked = false;
  trigger.onclick = () => {
    triggerClicked = true;
  };
  document.body.appendChild(trigger);

  const signout = document.createElement("button");
  signout.className =
    "cl-userButtonPopoverActionButton cl-button cl-userButtonPopoverActionButton__signOut cl-button__signOut";
  signout.setAttribute("role", "menuitem");
  let signoutClicked = false;
  signout.onclick = () => {
    signoutClicked = true;
  };
  document.body.appendChild(signout);

  render(<Logout />);
  const logoutButton = screen.getByRole("button", { name: /logout/i });
  expect(logoutButton).toBeDefined();
  fireEvent.click(logoutButton);

  expect(triggerClicked).toBe(true);
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      expect(signoutClicked).toBe(true);
      resolve();
    }, 50);
  });
});
