const ColorBar = (props) => {
  const item = (color) => {
    // getting the current date and time
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let year = date.getFullYear();
    let mon = date.getMonth();
    let day = date.getDate();

    let currDate = `${day} : ${mon} : ${year}`;
    let currTime = `${hr} : ${min} : ${sec}`;
    let newDate = `${currDate}  ${currTime}`;

    // the new element which will be stored in array
    let newItem = {
      title: "",
      notes: "",
      newDate,
      color,
    };

    // calling the createCard function to add the newItem in the array
    props.createCard(newItem);
  };
  return (
    <>
      <div className="flex gap-4">
        <i className="fa-solid fa-plus"></i>
        {/* colors section to select the background color of card */}
        <ul className="list-none flex gap-2">
          <li
            className="bg-red-500 h-6 w-6 rounded-[50%] cursor-pointer"
            onClick={() => item("red")}
          ></li>
          <li
            className="bg-blue-500 h-6 w-6 rounded-[50%] cursor-pointer"
            onClick={() => item("blue")}
          ></li>
          <li
            className="bg-yellow-500 h-6 w-6 rounded-[50%] cursor-pointer"
            onClick={() => item("yellow")}
          ></li>
          <li
            className="bg-cyan-500 h-6 w-6 rounded-[50%] cursor-pointer"
            onClick={() => item("cyan")}
          ></li>
          <li
            className="bg-purple-500 h-6 w-6 rounded-[50%] cursor-pointer"
            onClick={() => item("purple")}
          ></li>
        </ul>
      </div>
    </>
  );
};

export default ColorBar;
