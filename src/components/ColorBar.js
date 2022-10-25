import { useState } from "react";

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
      id:Date.now(),
      newDate,
      color,
    };

    // calling the createCard function to add the newItem in the array
    props.createCard(newItem);
  };

  // creating a useState to check hide and show the colors button to add card
  const [condition, setCondition] = useState(true);
  const [value, setValue] = useState("none");
  const toggle = () => {
    if (condition) {
      setValue("flex");
      setCondition(false);
    }
    else {
      setValue("none");
      setCondition(true);
    }
  }

  // color array
  const colors = ["#FF6263", "#b3ffb3", "#EDBF69", "#D9D55B", "#ffcccc", "#ecb3ff", "#ffd9b3", "#fff", "#b3ffff", "#b3d9ff"];

  return (
    <>
      <div className="flex items-center justify-center gap-4 bg-gray-800 hover:bg-gray-900 text-white hover:text-green-700 px-4 py-1 rounded-lg">
        <i className="fa-solid fa-plus text-lg font-bolder cursor-pointer" onClick={toggle}></i>
        {/* colors section to select the background color of card */}
        <ul className="list-none gap-2" style={{display : value}}>
          <li
            className="bg-[#FF6263] h-6 w-6 rounded-[50%] cursor-pointer"
            onClick={() => item("#FF6263")}
          ></li>
          <li
            className="bg-[#b3ffb3] h-6 w-6 rounded-[50%] cursor-pointer"
            onClick={() => item("#b3ffb3")}
          ></li>
          <li
            className="bg-[#EDBF69] h-6 w-6 rounded-[50%] cursor-pointer"
            onClick={() => item("#EDBF69")}
          ></li>
          <li
            className="bg-[#D9D55B] h-6 w-6 rounded-[50%] cursor-pointer"
            onClick={() => item("#D9D55B")}
          ></li>
          <li
            className="bg-[#ffcccc] h-6 w-6 rounded-[50%] cursor-pointer"
            onClick={() => item("#ffcccc")}
          ></li>
          <li
            className="bg-[#ecb3ff] h-6 w-6 rounded-[50%] cursor-pointer"
            onClick={() => item("#ecb3ff")}
          ></li>
          <li
            className="bg-[#ffd9b3] h-6 w-6 rounded-[50%] cursor-pointer"
            onClick={() => item("#ffd9b3")}
          ></li>
          <li
            className="bg-[#b3d9ff] h-6 w-6 rounded-[50%] cursor-pointer"
            onClick={() => item("#b3d9ff")}
          ></li>
          <li
            className="bg-[#b3ffff] h-6 w-6 rounded-[50%] cursor-pointer"
            onClick={() => item("#b3ffff")}
          ></li>
          <li
            className="bg-[#fff] h-6 w-6 rounded-[50%] cursor-pointer"
            onClick={() => item("#fff")}
          ></li>
        </ul>
      </div>
    </>
  );
};

export default ColorBar;
