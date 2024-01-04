'use client';

import Image from "next/image";

const Avatar = () => {
  return ( 
    <Image 
      className="rounded-full" 
      height="34" 
      width="34" 
      alt="Avatar" 
      src={"/images/placeholder.jpg"}
    />
   );
}
 
export default Avatar;