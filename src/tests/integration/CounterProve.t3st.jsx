import { render, screen, fireEvent } from "@testing-library/react";
import  React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

// Test
test("contador incrementa al hacer click", () => {
  render(<Counter />);
  const button = screen.getByRole("button");

  // Verifica valor inicial
  expect(button.textContent).toBe("0");

  // Hace click y verifica incremento
  fireEvent.click(button);
  expect(button.textContent).toBe("1");

  // Hace otro click y verifica
  fireEvent.click(button);
  expect(button.textContent).toBe("2");
});
