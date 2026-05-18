import Accordion from "./Accordion";
import { useState } from "react";

function AccordionTab({ categories, title }) {
  const [shouldExpandIndex, setShouldExpandIndex] = useState(null);

  return (
    <div className="mb-6 bg-white">
      <h1 className="font-bold text-2xl mx-2 mt-4">{title}</h1>
      <div>
        {categories.map((category, index) => {
          return (
            <Accordion
              key={category.categoryId}
              itemCards={category.itemCards}
              title={category.title}
              shouldExpand={index === shouldExpandIndex ? true : false}
              setShouldExpandIndex={() => {
                setShouldExpandIndex(index);
              }}
              setExpandToNull={() => {
                setShouldExpandIndex(null);
              }}
            ></Accordion>
          );
        })}
      </div>
    </div>
  );
}

export default AccordionTab;
