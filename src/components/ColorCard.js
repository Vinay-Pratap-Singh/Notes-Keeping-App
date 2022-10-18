// const ColorCard = (props) => {
//     const item = (color) => {
//         // getting the current date and time
//         let date = new Date();
//         let hr = date.getHours();
//         let min = date.getMinutes();
//         let sec = date.getSeconds();
//         let year = date.getFullYear();
//         let mon = date.getMonth();
//         let day = date.getDate();
    
//         let currDate = `${day} : ${mon} : ${year}`;
//         let currTime = `${hr} : ${min} : ${sec}`;
//         let newDate = `${currDate}  ${currTime}`;
    
//         // the new element which will be stored in array
//         let newItem = {
//           title: "",
//           notes: "",
//           newDate,
//           color,
//         };
    
//         // calling the createCard function to add the newItem in the array
//         props.createCard(newItem);
//       };
//     return (
//         <>
//             <li
//                 style={{backgroundColor:props.color}}
//                 className="h-6 w-6 rounded-[50%] cursor-pointer"
//                 onClick={() => item("#FF6263")}
//             ></li>
//         </>
//     );
// }
// export default ColorCard;