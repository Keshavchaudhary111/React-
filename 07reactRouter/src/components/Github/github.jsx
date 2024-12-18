import React, { useState } from "react";
import { useEffect } from "react";

function Github(){
  const [data, setData] = useState([])
  useEffect(()=>{
   fetch('http://api.github.com/users/hiteshchoudhary')
   .then(Response =>Response.json())
   .then(data =>{
    console.log(data);
    setData(data)
   })
  },[])

  return (
    <div className="text-center m-4 bg-gray-600 text-center">Github followers: {data.followers}
    <img src={data.avatar_url} alt="git picture" width={300}/>
    </div>
  )
}
export default Github