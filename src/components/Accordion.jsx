import AccordionBody from "./AccordionBody";
import { useState } from "react";

function Accordion({ itemCards, title }) {
  const [shouldExpand, setShouldExpand] = useState(false);
  console.log(itemCards);

  function handleExpand() {
    if (shouldExpand) {
      setShouldExpand(false);
    } else {
      setShouldExpand(true);
    }
  }

  return (
    <div className="border-b border-gray-300 py-4 cursor-pointer">
      <div className="flex justify-between" onClick={handleExpand}>
        <span className="font-bold text-md ml-2">
          {title} ({itemCards.length})
        </span>
        <span>
          <i className="fa-solid fa-angle-down mr-6"></i>
        </span>
      </div>
      {shouldExpand ? (
        <AccordionBody itemCards={itemCards}></AccordionBody>
      ) : null}
    </div>
  );
}

export default Accordion;
