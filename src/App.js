import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ColorBar from "./components/ColorBar";

function App() {
  // array to store all the card items details
  const [cardItem, setCardItem] = useState([]);

  // function to add a new card
  const createNewCard = (newItemDetail) => {
    let newCardItems = [...cardItem];
    newCardItems.push(newItemDetail);
    setCardItem(newCardItems);
  };

  return (
    <>
      {/* content section */}
      <div className="border border-black h-screen w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold">Notes App</h1>
        <ColorBar createCard={createNewCard} setCardItem={setCardItem} />

        <div className="flex gap-4 flex-wrap">
          {cardItem.map((element, index) => {
            return (
              <Card
                item={element}
                index={index}
                setCardItem={setCardItem}
                cardItem={cardItem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
