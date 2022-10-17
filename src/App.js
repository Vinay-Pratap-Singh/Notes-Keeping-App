import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ColorBar from "./components/ColorBar";

function App() {
  // array to store all the card items details
  const [cardItem, setCardItem] = useState([
    {
      title: "vinay",
      notes: "pandu",
      date: "23:239",
      color: "red",
    },
    {
      title: "hasrhita",
      notes: "pandu",
      date: "23:239",
      color: "cyan",
    },
    {
      title: "harvi",
      notes: "pandu",
      date: "23:239",
      color: "blue",
    },
  ]);

  // function to add a new card
  const createNewCard = (newItemDetail) => {
    let newCardItems = cardItem;
    newCardItems.push(newItemDetail);
    setCardItem(newCardItems);
  };

  return (
    <>
      {/* content section */}
      <div className="border border-black h-screen w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold">Notes App</h1>
        <ColorBar createCard={createNewCard} />

        <div className="flex gap-4 flex-wrap">
          {cardItem.map((element, index) => {
            return <Card item={element} index={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
