const fruits = ["mango", "guava", "peach", "lychee", "strawberries"];

function RenderFruits() {
  return <ul>{fruits.map((fruit, index) => fruit)}</ul>;
}
