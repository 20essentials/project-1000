import { useState } from "react";

export function useModePhoto(initialValue: boolean = true) {
  const [modePhoto, setModePhoto] = useState(initialValue);

  const isModePhoto = (mode: boolean) => () => setModePhoto(mode);

  return { modePhoto, isModePhoto };
}
