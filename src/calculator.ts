const add = (input: string): number => {
  if (!input || !input.trim()) return 0;

  const delimiters = [",", "\n"];
  const regex = new RegExp(`[${delimiters.join("")}]`);
  const numbers = input
    .split(regex)
    .filter((n) => n.length > 0)
    .map((n) => parseInt(n, 10));

  return numbers.reduce((sum, n) => sum + n, 0);
};

export { add };
