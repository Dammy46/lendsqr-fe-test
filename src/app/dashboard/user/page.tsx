
import {
  Box,
  Text
} from "@mantine/core";
import React from "react";
import variable from "./page.module.scss";
import Cards from "@/components/Cards";
import Table from "@/components/Table";


const page = async() => {
  let users= null
  const getUsers = await fetch('https://run.mocky.io/v3/e0853b3d-7a36-41da-b891-2cb488962cd6')
  const getUserData = await getUsers.json()
  if(getUserData.statusCode === 200) {

    users = getUserData.results
  }


  return (
    <Box>
      <Text className={variable.pageTitle}>Users</Text>
      <Cards />
      <Table users={users}/>
    </Box>
  );
};

export default page;
