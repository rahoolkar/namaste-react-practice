import MenuFoodCard from "./MenuFoodCard";

function AccordionBody({ itemCards }) {
  return (
    <div>
      {itemCards.map((item) => {
        return (
          <MenuFoodCard
            key={item.card.info.id}
            data={item.card.info}
          ></MenuFoodCard>
        );
      })}
    </div>
  );
}

export default AccordionBody;
