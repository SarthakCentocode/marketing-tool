"use client"
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
const Page = () => {

  const route = useRouter()

  useEffect(()=>{
    route.push("/auth")
  },[route])
  
  return (
    <div>
    
    </div>
  );
};

export default Page;
