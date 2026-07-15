export const springTransition = {
  type: "spring" as const,
  damping: 20,
  stiffness: 100,
};

export const smoothTransition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
};

export const springStiff = {
  type: "spring" as const,
  damping: 12,
  stiffness: 150,
};

export const springBouncy = {
  type: "spring" as const,
  damping: 8,
  stiffness: 120,
};
