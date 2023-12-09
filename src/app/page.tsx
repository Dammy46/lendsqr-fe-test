import React from "react";
import { Box, Image, Text } from "@mantine/core";
import variable from "./page.module.scss";
import FormWrap from "./FormWrap";

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
          <Image
            src="/welcome.svg"
            alt="welcome"
            width={"100%"}
            height={"100%"}
          />
        </Box>
      </Box>
      <Box className={variable.formWrap}>
        <Box className={variable.formContainer}>
          <Box>
            <Text className={variable.title}>Welcome!</Text>
            <Text className={variable.desc}>Enter details to login.</Text>
          </Box>
          <FormWrap />
        </Box>
      </Box>
    </Box>
  );
};

export default page;
