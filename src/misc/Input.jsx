 import React from "react";

 export function Input({value, onChange, idVal, placeholder, width}){
     return (
         <input
             type="text"
             placeholder={placeholder}
             id={idVal}
             value={value}
             onChange={onChange}
             className={`p-4 placeholder:text-xs w-${width} focus:outline-0`}
         />
     )
 }