interface AnimationState {
  y?: number | string;
  opacity?: number;
  scale?: number;
}

interface Transition {
  duration: number;
}

interface AnimationPreset {
  initial: AnimationState;
  animate: AnimationState;
  exit: AnimationState;
  transition: Transition;
}

export const scaleAnimation: AnimationPreset = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
  transition: { duration: 0.2 },
};

export const flyInOutY: AnimationPreset = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
  transition: { duration: 0.2 },
};
