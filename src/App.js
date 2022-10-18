import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ColorBar from "./components/ColorBar";

function App() {
  // array to store all the card items details
  const [cardItem, setCardItem] = useState(
    // fetching the data from the local storage if available else value will be blank array
    JSON.parse(localStorage.getItem("detail")) || []
  );

  // function to add a new card
  const createNewCard = (newItemDetail) => {
    let newCardItems = [...cardItem];
    newCardItems.push(newItemDetail);
    setCardItem(newCardItems);
  };

  // using useEffect to monitor the changes in cardItem to save it in local storage
  useEffect(() => {
    localStorage.setItem("detail", JSON.stringify(cardItem));
  }, [cardItem]);

  return (
    <>
      {/* content section */}
      <div className="h-screen w-full flex flex-col gap-4 items-center bg-gray-700 pt-4">
        <h1 className="text-2xl font-bold">NOTES APP</h1>
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
