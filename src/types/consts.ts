export const CONTAINER =  {
  DRAG_AND_DROP_ICON: 0,
  INTRO_PAGE: 1,
  HOME: 2,
} as const;

export type CONTAINER_IS = typeof CONTAINER[keyof typeof CONTAINER];