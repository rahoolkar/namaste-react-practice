import Accordion from "./Accordion";

function AccordionTab({ categories, title }) {
  console.log(categories);
  return (
    <div className="mb-6 bg-white">
      <h1 className="font-bold text-2xl mx-2 mt-4">{title}</h1>
      <div>
        {categories.map((category) => {
          return (
            <Accordion
              key={category.categoryId}
              itemCards={category.itemCards}
              title={category.title}
            ></Accordion>
          );
        })}
      </div>
    </div>
  );
}

export default AccordionTab;
