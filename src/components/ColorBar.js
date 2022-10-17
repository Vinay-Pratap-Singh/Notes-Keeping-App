const ColorBar = (props) => {
    const item = (color) => {
        let date = new Date();
        date = date.toLocaleString;
        return {
            title: "",
            notes: "",
            date: {date},
            color: {color},
          }
    }
  return (
    <>
      <div className="flex gap-4">
        <i class="fa-solid fa-plus"></i>
        {/* colors section to select the background color of card */}
        <ul className="list-none flex gap-2">
                  <li className="bg-red-500 h-6 w-6 rounded-[50%]"
                      onClick={()=>item("red") }></li>
          <li className="bg-blue-500 h-6 w-6 rounded-[50%]"></li>
          <li className="bg-yellow-500 h-6 w-6 rounded-[50%]"></li>
          <li className="bg-cyan-500 h-6 w-6 rounded-[50%]"></li>
          <li className="bg-purple-500 h-6 w-6 rounded-[50%]"></li>
        </ul>
      </div>
    </>
  );
};

export default ColorBar;