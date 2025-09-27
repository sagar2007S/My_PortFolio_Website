



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPaste, updateToPaste } from '../features/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch()

  const allPastes=useSelector((state)=>state.paste.pastes)

  const pasteId = searchParams.get("pasteId");


  useEffect(() => {
if(pasteId){
  const paste= allPastes.find((p)=>p._id=== pasteId)
  console.log(paste)
  setTitle(paste.title);
setValue(paste.value)
}

  //
}, [pasteId])



const createPaste = () =>{
 const paste= {
   title:title,
   value:value,
   _id:pasteId  || Date.now().toString(36) + Math.random().toString(36).substring(2), //Date.now().toString(36), // or is odd case when we do not have the id 
  createdAt : new Date().toLocaleString()
  }






  if(pasteId){
   // update 
   dispatch(updateToPaste(paste))
  }else{
// create 
dispatch(addToPaste(paste))
  }

  setTitle('')
setValue('')
setSearchParams({})
}



  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-blue-400 p-6 flex flex-col items-center gap-6">
      
      {/* Input for Title */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter your text"
        className="w-full max-w-xl border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 px-4 py-2 text-lg bg-transparent"
      />

      {/* Glassmorphic Button */}
      <button
        className="bg-[#98cef11e] backdrop-blur-md text-black px-6 py-2 rounded-xl shadow-lg border border-white/20 hover:bg-[#2b9ce8f2] transition duration-300"  onClick={createPaste}
      >
        {pasteId ? "Update Paste" : "Create Paste"}
      </button>

      {/* Textarea for Content */}
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter content"
        rows={15}
        className="w-full max-w-xl p-4 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
      />
    </div>
  );
};

export default Home;
