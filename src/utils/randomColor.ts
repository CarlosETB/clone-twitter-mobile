export function randomColor() {
  const hex = (Math.random() * 0xFFFFFF << 0).toString(16);

  return `#${hex}`
}