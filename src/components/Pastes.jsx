import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromPastes } from "../features/pasteSlice";
import { toast } from "react-toastify";


const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  const [seacrhTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(seacrhTerm.toLowerCase())
  );
  console.log(filteredData);

const handleDlete =(pasteId)=>{
dispatch(removeFromPastes(pasteId));
}

const handleShare = async (paste)=>{
if (navigator.share) {
    try {
      await navigator.share({
        title: paste.title,
        text: paste.value,
        url: `${window.location.origin}/pastes/${paste._id}`, // optional
      });
      toast.success("Shared successfully!");
    } catch (err) {
      toast.error("Error sharing: " + err.message);
    }
  } else {
    toast.warning("Sharing not supported on this browser.");
  }
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-blue-400 p-6 flex flex-col items-center gap-6">
      <input
        type="search"
        placeholder="search here"
        value={seacrhTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 rounded-2xl min-w-[600px] mt-5"
      />
      <div className="flex flex-col gap-5">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return( 
             <div className="border" key={paste?._id}>
             <h1 className="text-2xl font-bold text-gray-800">
              {paste.title}
              </h1>
              <h3 className="text-1xl font-medium text-gray-800">
                {paste.value}
              </h3>
              <div className="flex flex-row gap-6 place-content-evenly">
                <button>
                  <Link to={`/?pasteId=${paste?._id}`}  className="bg-[#98cef11e] backdrop-blur-md text-black px-6 py-2 rounded-xl shadow-lg border border-white/20 hover:bg-[#2b9ce8f2] transition duration-300"> Edit</Link>
                  </button>
                 <button>
                  <Link to={`/pastes/${paste?._id}`}  className="bg-[#98cef11e] backdrop-blur-md text-black px-6 py-2 rounded-xl shadow-lg border border-white/20 hover:bg-[#2b9ce8f2] transition duration-300">View</Link>
                  </button>
                  <button onClick={() =>handleDlete(paste?._id)}  className="bg-[#98cef11e] backdrop-blur-md text-black px-6 py-2 rounded-xl shadow-lg border border-white/20 hover:bg-[#2b9ce8f2] transition duration-300">Delete</button>
                   <button onClick={()=>  {navigator.clipboard.writeText(paste?.value), toast.success("copied")}} className="bg-[#98cef11e] backdrop-blur-md text-black px-6 py-2 rounded-xl shadow-lg border border-white/20 hover:bg-[#2b9ce8f2] transition duration-300" >Copy</button>
                    <button  className="bg-[#98cef11e] backdrop-blur-md text-black px-6 py-2 rounded-xl shadow-lg border border-white/20 hover:bg-[#2b9ce8f2] transition duration-300" onClick={(()=> handleShare(paste))}>Share</button>
              </div>
              <div>
                {paste.createdAt}
              </div>
              </div>

            )
          })}
      </div>
    </div>
  );
};

export default Pastes;
