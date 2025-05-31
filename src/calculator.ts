const add = (input: string): number => {
  if (!input || !input.trim()) return 0;

  let delimiters = [",", "\n"];
  let numbersPart = input;

  if (input.startsWith('//')) {
    const match = input.match(/^\/\/(.+)\n(.*)/);
    if (match) {
      const customDelimiter = match[1];
      delimiters = [customDelimiter];
      numbersPart = match[2];
    }
  }

  const regex = new RegExp(`[${delimiters.join("")}]`);
  const numbers = numbersPart
    .split(regex)
    .filter((n) => n.length > 0)
    .map((n) => parseInt(n, 10));

  return numbers.reduce((sum, n) => sum + n, 0);
};

export { add };
