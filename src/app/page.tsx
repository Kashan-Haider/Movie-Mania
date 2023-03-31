// "use client";
// import React from "react";
// import Movies from "./(components)/Movies";
// import Sidebar from "./(components)/Sidebar";
// import { useState } from "react";

// const page = () => {
//   let navClicked 
//   let recieveFromSideBar = (data: any) => {
//   };
//   let recieveFromNav = (data: any) => {
//     navClicked = data;
//   };
//   return (
//     <div className="overflow-hidden flex bg-[#575656]">
//       <Sidebar 
//       isNavClicked= {navClicked}
//       dataFromSideBar={recieveFromSideBar} />
//       <div className="w-full">
//         <Movies dataFromNav={recieveFromNav} />
//       </div>
//     </div>
//   );
// };

// export default page;


 "use client";
import React, { useState } from "react";
import Movies from "./(components)/Movies";
import Sidebar from "./(components)/Sidebar";

const Page = () => {
  const [gener, setGener] = useState("");
  const [closeButtonClicked, setCloseButtonClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let handleClick = (data)=>{
    setIsOpen(data)
  }
  let movieGener = (data)=>{
     setGener(data)
    }
  return (
    <div className="overflow-hidden h-screen flex bg-[#100c22] relative">
      <Sidebar className ="absolute sm:relative" movieGenerFromSideBar = {movieGener} crossHandleClick={handleClick} data = {isOpen} />
      <div className="w-full">
        <Movies barsHandleClick={handleClick} movieGener = {gener} sideBarOpened = {!closeButtonClicked} />
      </div>
    </div>
  );
};

export default Page;
