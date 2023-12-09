import React from "react";
import variable from "./header.module.scss";
import {
  AppShellHeader,
  Group,
  Image,
  TextInput,
  Flex,
  Button,
  ActionIcon,
  Burger,
} from "@mantine/core";
import Link from "next/link";
import UserButton from "../UserButton";
import { HeaderProps } from "@/utils/types";
const Header: React.FC<HeaderProps> = ({
  searchIcon,
  bellIcon,
  toggle,
  opened,
}) => {
  return (
    <AppShellHeader className={variable.header} withBorder={false}>
      <Group
        h="100%"
        justify="space-between"
        style={{ flexWrap: "nowrap" }}
        align="center"
        px="md"
      >
        <Group
          justify="space-between"
          align="center"
          className={variable.headerTitle}
        >
          <Image src={"/lendsqr.svg"} alt="lendsqr" width={'144px'} height={'auto'}/>
          <Flex align={"center"} className={variable.flexWrap}>
            <TextInput
              aria-label="search-input"
              placeholder="Search for anything"
            />
            <Button
              color="#39CDCC"
              style={{ backgroundColor: "#39CDCC" }}
              aria-label="search"
            >
              {searchIcon}
            </Button>
          </Flex>
        </Group>
        <Group
          align="center"
          className={variable.headerLinks}
          justify="flex-end"
          style={{ flex: 1 }}
        >
          <Link href={""}>Docs</Link>
          <ActionIcon variant="transparent" aria-label="notification">
            <Image src="/bell.png" alt="bell"/>
          </ActionIcon>
          <UserButton />
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          aria-label="open-menu"
          size="sm"
        />
      </Group>
    </AppShellHeader>
  );
};

export default Header;
