import React, { useState } from "react";
 const HookStatless =() => {
     const [count,setCount] = useState (0);
  

 return (
     <div className="p-hook">
         <p> Nilai saya adalah : {count}</p>
         <button onClick={() => setCount(count + 1)}> Update Nilai</button>

     </div>
 )
}
export default HookStatless;