
import React from "react";
import PageWrap from "./PageWrap";
import { UsersProps } from "@/utils/types";





const data = [
  "general details",
  "documents",
  "bank details",
  "loans",
  "savings",
  "app and system",
] as string[];

const page = async({ params }: { params: { slug: string } }) => {
  const {slug} = params

    
    let users= null
  const getUsers = await fetch('https://run.mocky.io/v3/d380ea5c-b4cd-4d9c-a420-8943301c89f7')
  const getUserData = await getUsers.json()
  if(getUserData.statusCode === 200) {

  const filteredArray = getUserData?.results?.find((item: UsersProps) => item.id === slug)
  
    users = filteredArray
  }

  return <PageWrap userProfile={users}/>
};

export default page;
