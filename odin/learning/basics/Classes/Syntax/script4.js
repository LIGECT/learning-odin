let CircleClass = class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
};

const area = new CircleClass(10);

console.log(area.getArea());
