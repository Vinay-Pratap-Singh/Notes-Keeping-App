import { useState } from "react";

const Card = (props) => {
  // accessing the color clicked by the user to change the background color of new card
  let color = props.item.color;

  // using the state to know the text entered in the title input and notes input
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  // updating the title onchange and also updating the array to use the data
  const titleText = (event) => {
    setTitle(event.target.value);
    let cardDetail = [...props.cardItem];
    cardDetail[props.index].title = event.target.value;
    props.setCardItem(cardDetail);
  }
  
  // updating the notes onchange and also updating the array to use the data
  const notesText = (event) => {
    setNotes(event.target.value);
    let cardDetail = [...props.cardItem];
    cardDetail[props.index].notes = event.target.value;
    props.setCardItem(cardDetail);
  }

  return (
    <>
      <div
        className="w-60 h-72 p-2 text-white"
        style={{ backgroundColor: color }}
        key={props.index}
      >
        <textarea
          className="w-full h-[15%] outline-none resize-none p-2 bg-transparent text-sm font-bold border border-black"
          placeholder="Title"
          value={title}
          onChange={titleText}
        ></textarea>

        <textarea
          className="w-full h-[75%] outline-none resize-none px-2 bg-transparent text-sm font-semibold border border-black"
          placeholder="Notes"
          value={notes}
          onChange={notesText}
        ></textarea>

        <p className="flex items-center justify-between text-sm font-semibold">
          {props.item.newDate} <span>Delete</span>
        </p>
      </div>
    </>
  );
};

export default Card;