
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPaste, updateToPaste } from '../features/pasteSlice';
import { toast } from 'react-toastify';
const ViewPaste = () => {


  const {id}=useParams();

  const allPastes= useSelector((state)=> state.paste.pastes)

  // const paste =allPastes.filter((p)=>p.id==id);
  const paste = allPastes.find((p) => String(p._id) === String(id));

  const handleClick =()=>{
navigator.clipboard.writeText(paste?.value)
toast.success("Copied to Clipboard")
  }

  console.log(paste)
  return (
  <div className="min-h-screen bg-gradient-to-br from-pink-200 to-blue-400 p-6 flex flex-col items-center gap-6">
      
      {/* Input for Title */}
      <input
        type="text"
        value={paste.title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter your text"
        className="w-full max-w-xl border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 px-4 py-2 text-lg bg-transparent"
          disabled
     />

      {/* Glassmorphic Button */}
      {/* <button
        className="bg-[#98cef11e] backdrop-blur-md text-black px-6 py-2 rounded-xl shadow-lg border border-white/20 hover:bg-[#2b9ce8f2] transition duration-300"  onClick={createPaste}
      >
        {pasteId ? "Update Paste" : "Create Paste"}
      </button> */}

      {/* Textarea for Content */}
      <textarea
        value={paste.value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter content"
        rows={15}
        className="w-full max-w-xl p-4 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
      disabled   
         />

         <button onClick={handleClick} className="bg-[#98cef11e] backdrop-blur-md text-black px-6 py-2 rounded-xl shadow-lg border border-white/20 hover:bg-[#2b9ce8f2] transition duration-300">Copy</button>
    </div>
  )
}

export default ViewPaste
