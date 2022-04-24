import React from "react";

const main = () => {
  return (
    <div className="bg-yellow-300 h-full">
      <div className="flex flex-wrap mx- my-4">
      <div class="w-full lg:w-1/2 px-2 mb-4">
         <div class=" h-auto text-sm text-grey-dark flex items-center justify-center font-serif">
        <div className="flex flex-col items-center">
           <h1 className="p-4 text-8xl" >Claim Your Discounts</h1>
           <h3 className="text-2xl py-4" >One stop for your discounts</h3>
           <button className=" border-4 border-black w-32" >Find Out More</button>
           </div>
         </div>
      </div>
      <div class="w-full lg:w-1/2 px-2 mb-4">
         <div class=" h-auto text-sm text-grey-dark flex items-center justify-center">
         <img className="w-[600px] h-96" src="https://picsum.photos/400" alt="banner"/>
         </div>
      </div>
      
      </div>
      </div>
    
  );
};
export default main;
