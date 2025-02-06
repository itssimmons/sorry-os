// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Number {
  clamp(min: number, max: number): number;
}

Number.prototype.clamp = function (this: number, min: number, max: number) {
  // return Math.min(Math.max(this, min), max);
  return Math.max(min, Math.min(max, this));
};
