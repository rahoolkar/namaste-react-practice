import AccordionBody from "./AccordionBody";

function Accordion({
  itemCards,
  title,
  shouldExpand,
  setShouldExpandIndex,
  setExpandToNull,
}) {
  function handleAccordionExpand() {
    if (shouldExpand) {
      setExpandToNull();
    } else {
      setShouldExpandIndex();
    }
  }
  return (
    <div className="border-b border-gray-300 py-4 cursor-pointer">
      <div className="flex justify-between" onClick={handleAccordionExpand}>
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
