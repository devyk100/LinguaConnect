import { useState } from "react";

export default function({user, src} : {
    user?: string;
    src: string;
}){
    return (
        <>
        <div className="flex flex-col m-2 h-fit">
          <video
          className="rounded-xl w-full h-full border border-black"
            src={src}
            autoPlay
          ></video>
          <div className="relative bottom-6 left-3 w-fit shadow-2xl text-blacks bg-gray-700 px-2 py-1  rounded-lg">
            <div className="">
            {user? user: "Waiting.."}
            </div>
          </div>
        </div>
        </>
    )
}

// return (
//   <>
//     <div className="flex flex-col lg:flex-row w-lvw justify-around items-center">
//       <Video user="Yash Ramesh Kumar" src={"https://assets.codepen.io/6093409/river.mp4"}/>
//       <Video src="https://assets.codepen.io/6093409/river.mp4"/>
//     </div>
//     <input
//       type="number"
//       className="bg-white text-black border m-2 p-2"
//       onChange={(e) => setId1(e.target.value)}
//       value={id1}
//     />
//     <input
//       type="number"
//       className="bg-white text-black border m-2 p-2"
//       onChange={(e) => setId2(e.target.value)}
//       value={id2}
//     />
//   </>
// );