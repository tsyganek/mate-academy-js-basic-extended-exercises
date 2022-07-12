function getRectangleArea(side, diagonal) {
  if (side === 0 || diagonal === 0 || side >= diagonal) {
    return "not a rectangle";
  }

  const side2 = Math.sqrt(diagonal ** 2 - side ** 2);
  const area = (side * side2).toFixed(2);

  return Number(area);
}

getRectangleArea(10, 20);
getRectangleArea(9, 18);
getRectangleArea(100, 98);
