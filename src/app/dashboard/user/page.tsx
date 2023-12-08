
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
  const getUsers = await fetch('https://run.mocky.io/v3/d380ea5c-b4cd-4d9c-a420-8943301c89f7')
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
