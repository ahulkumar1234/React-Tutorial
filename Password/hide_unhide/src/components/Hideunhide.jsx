import { useState } from "react"


const Hideunhide = () => {

    const [isshow, setisshow] = useState (false);

    const showpass = ()=>{
      setisshow(!isshow);
    }

  return (
    <>
    <h1>Password Show Hide</h1>
     <div className="container flex justify-center items-center ">
        <input type={isshow ? "text" : "password"} placeholder="Enter password" className="border border-gray-600 p-3 px-7 w-1/2 rounded"/>
        <button onClick={showpass} className="m-2 bg-slate-500 p-3 rounded cursor-pointer">{isshow ? "Hide" : "Show"}</button>
     </div>
    </>
  )
}

export default Hideunhide