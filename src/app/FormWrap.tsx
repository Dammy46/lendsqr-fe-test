"use client";
import { Button, PasswordInput, Stack, Text, TextInput } from "@mantine/core";
import Link from "next/link";
import React from "react";
import variable from "./page.module.scss";

const FormWrap = () => {
  return (
    <form>
      <Stack gap={"1rem"}>
        <TextInput
          aria-label="email"
          size="md"
          placeholder="Email"
          type="email"
        />
        <PasswordInput
          aria-label="Password"
          placeholder="Password"
          size="md"
          rightSectionWidth={70}
          visibilityToggleIcon={({ reveal }) =>
            reveal ? (
              <Text className={variable.toggle}>HIDE</Text>
            ) : (
              <Text className={variable.toggle}>SHOW</Text>
            )
          }
        />
        <Link href="" className={variable.link}>
          forgot password?
        </Link>
        <Button
          size="md"
          aria-label="log in"
          className={variable.btn}
          component="a"
          href="/dashboard/user"
        >
          Log in
        </Button>
      </Stack>
    </form>
  );
};

export default FormWrap;
