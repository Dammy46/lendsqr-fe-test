"use client";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { AppShell } from "@mantine/core";
import Svgs from "@/components/Svgs";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();
  const {
    homeIcon,
    bCaseIcon,
    outlineChevDownIcon,
    bellIcon,
    leaveIcon,
    searchIcon,
  } = Svgs();
  return (
    <AppShell
      padding="lg"
      header={{ height: 80 }}
      navbar={{
        width: "283",
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <Header
        opened={opened}
        toggle={toggle}
        searchIcon={searchIcon}
        bellIcon={bellIcon}
      />
      <Navbar
        bCaseIcon={bCaseIcon}
        outlineChevDownIcon={outlineChevDownIcon}
        homeIcon={homeIcon}
        leaveIcon={leaveIcon}
      />
      <AppShell.Main style={{ backgroundColor: "#FBFBFB", zIndex: "1000" }}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
