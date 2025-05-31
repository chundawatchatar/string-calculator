const add = (input: string): number => {
  if (!input || !input.trim()) return 0;

  return Number(input.trim())
};

export { add };
