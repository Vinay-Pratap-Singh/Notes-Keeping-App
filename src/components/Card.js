const Card = (props) => {
    let color = props.item.color;
    console.log(props.index);

  return (
    <>
      <div className="w-60 h-72 p-2" style={{backgroundColor: color}} key={props.index}>
        <textarea
          className="w-full h-[15%] outline-none resize-none p-2 bg-transparent text-sm font-bold border border-black"
                  placeholder="Title"
                  value={props.item.title}
        ></textarea>

        <textarea
          className="w-full h-[75%] outline-none resize-none px-2 bg-transparent text-sm font-semibold border border-black"
                  placeholder="Notes"
                  value={props.item.notes}
        ></textarea>

        <p className="flex items-center justify-between text-sm font-semibold">
          {props.item.date} <span>Delete</span>
        </p>
      </div>
    </>
  );
};

export default Card;
