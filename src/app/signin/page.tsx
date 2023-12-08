"use client";
import React from "react";
import {
  Box,
  Image,
  Text,
  Stack,
  TextInput,
  PasswordInput,
  Button
} from "@mantine/core";
import variable from "./signin.module.scss";
import Link from "next/link";
const page = () => {
  return (
    <Box className={variable.wrapper}>
      <Box className={variable.companyImage}>
        <Image
          src={"/lendsqr.svg"}
          alt="lendsqr"
          className={variable.companyLogo}
        />
        <Box>
            <Image src="/welcome.svg" alt="welcome" width={"100%"} height={'100%'}/>
        </Box>
      </Box>
      <Box className={variable.formWrap}>
        <Box className={variable.formContainer}>

        <Box>
          <Text className={variable.title}>Welcome!</Text>
          <Text className={variable.desc}>Enter details to login.</Text>
        </Box>
        <form >
          <Stack gap={'1rem'}>
            <TextInput aria-label="email" placeholder="Email" />
            <PasswordInput
                
                aria-label="Password"
              placeholder="Password"
              rightSectionWidth={70}
              visibilityToggleIcon={({ reveal }) =>
                reveal ? <Text className={variable.toggle}>HIDE</Text> : <Text className={variable.toggle}>SHOW</Text>
              }
            />
            <Link href="" className={variable.link}>forgot password?</Link>
            <Button size="md" aria-label="log in" className={variable.btn}>Log in</Button>
          </Stack>
        </form>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
