
import React from "react";
import PageWrap from "./PageWrap";





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
  const getUsers = await fetch('https://run.mocky.io/v3/e0853b3d-7a36-41da-b891-2cb488962cd6')
  const getUserData = await getUsers.json()
  if(getUserData.statusCode === 200) {
  const fitlerArray = getUserData?.results?.filter(
        (item: any) => item.id === slug
      );
    users = fitlerArray
  }

  return <PageWrap userDetails={users}/>
};

export default page;
