class Cookie {
  constructor(sugar, flour) {
    this.sugar = sugar;
    this.flour = flour;
    console.log(`a cookie was made with ${this.sugar}g of sugar and ${this.flour}g of flour!`);
  }

  bake() {
    // i want to reduce the sugar amount in my cookies by 50% when they are baked
    this.sugar = this.sugar / 2;
    console.log(`I am baking the cookie with ${this.sugar}g of sugar!`);
  }
  eat() {
    console.log("I am eating the cookie!");
  }
}

const chocolateChip = new Cookie(30, 10);
const oatmeal = new Cookie(20, 20);
const shortbread = new Cookie(50, 30);

chocolateChip.bake();
chocolateChip.eat();

// class Product {
//   constructor() {
//     this.cost;
//     this.description;
//     this.image;
//   }
// }
