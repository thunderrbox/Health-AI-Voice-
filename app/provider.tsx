"use client"; // Required so that useEffect and useUser can run in this component

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/context/UserDetailContext";

export type UsersDetail = {
  name: string;
  email: string;
  credits: number;
};

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState<any>();

  // React hook used on client side
  // Whenever want to add logic we have to add them inside useEffect function
  // because useEffect will execute every instance
  useEffect(() => {
    user && CreateNewUser();
  }, [user]);
  // if we want to execute UseEffect function only once then we will write there "[]"
  // and if want to execute it many time then write inside this "[........]"

  const CreateNewUser = async () => {
    try {
      const result = await axios.post("/api/users");
      console.log(result.data);
      setUserDetail(result.data);
    } 
    catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {children}
      </UserDetailContext.Provider>
    </div>
  );
}

export default Provider;
