export default function({user} : {
    user: string;
}){
    return (
        <>
        <div className="flex flex-col m-2 h-fit">
          <video
          className="rounded-xl w-full h-full border border-black"
            src="https://assets.codepen.io/6093409/river.mp4"
            autoPlay
          ></video>
          <div className="relative bottom-6 left-3 w-fit shadow-2xl text-blacks bg-gray-700 px-2 py-1  rounded-lg">
            <div className="">
            {user}
            </div>
          </div>
        </div>
        </>
    )
}