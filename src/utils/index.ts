export const getHeight = (val: number) => {
  const height = val.toString()
  const lastNum = height[height.length - 1]
  return lastNum === '2' || lastNum === '3' || lastNum === '4'
    ? height + ' метра'
    : lastNum === '1'
      ? height + ' метр'
      : height + ' метров'
}
