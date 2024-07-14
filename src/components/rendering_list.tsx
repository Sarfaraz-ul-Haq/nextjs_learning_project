import React from "react";

const products = [
  { title: "tea", id: 1 },
  { title: "coffee", id: 2 },
  { title: "dates", id: 3 },
  { title: "milk", id: 4 },
  { title: "cheese", id: 5 },
  { title: "pizza", id: 6 },
  { title: "porridge", id: 7 },
  { title: "yogurt", id: 8 },
];

function RenderingList() {
  return (
    <div className="p-5">
      RenderingList
      <div>
        {products.map((item) => {
          return (
            <div key={item.id} className="bg-green-100 mt-3">
              Title: {item.title} | id: {item.id}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RenderingList;
