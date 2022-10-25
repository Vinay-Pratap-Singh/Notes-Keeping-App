import { useState } from "react";

const Card = (props) => {
  // accessing the color clicked by the user to change the background color of new card
  let color = props.item.color;

  // using the state to know the text entered in the title input and notes input
  const [title, setTitle] = useState(
    // if value of title is in the item then assign it else make it blank
    props.item.title || ""
  );
  const [notes, setNotes] = useState(
    // if value of notes is in the item then assign it else make it blank
    props.item.notes || ""
  );

  // updating the title onchange and also updating the array to use the data
  const titleText = (event) => {
    setTitle(event.target.value);
    let cardDetail = [...props.cardItem];
    cardDetail[props.index].title = event.target.value;
    props.setCardItem(cardDetail);
  };

  // updating the notes onchange and also updating the array to use the data
  const notesText = (event) => {
    setNotes(event.target.value);
    let cardDetail = [...props.cardItem];
    cardDetail[props.index].notes = event.target.value;
    props.setCardItem(cardDetail);
  };

  // function to delete the element from the list
  const deleteItem = (index) => {
    console.log(index);
    let newCardItemList = props.cardItem.filter((element, i) => {
      // console.log(element, i);
      if (i !== index) {
        return element;
      }
    });

    // updating the card item list with new one
    props.setCardItem(newCardItemList);
  };

  return (
    <>
      <div
        className="w-60 h-72 p-2 flex flex-col gap-1 rounded-lg"
        style={{ backgroundColor: color }}
      >
        <textarea
          rows={1}
          className="w-full outline-none resize-none bg-transparent text-sm font-bold"
          placeholder="Title"
          value={title}
          onChange={titleText}
        ></textarea>

        <textarea
          className="w-full outline-none resize-none bg-transparent text-sm font-semibold flex-grow"
          placeholder="Notes"
          value={notes}
          onChange={notesText}
        ></textarea>

        <p className="flex items-center justify-between text-sm font-semibold">
          {props.item.newDate}{" "}
          <span
            onClick={() => {
              deleteItem(props.index);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </span>
        </p>
      </div>
    </>
  );
};

export default Card;
