import Link from "next/link";
import { usePathname } from "next/navigation";
import variable from "./links.module.scss";
import { Box, Stack, Text } from "@mantine/core";
import { firstPaths, secondPaths, thirdPaths } from "@/utils/data";
import { NavLinkProps } from "@/utils/types";

const Links = () => {
  const currentPath = usePathname();

  const firstLinks = firstPaths.map((item: NavLinkProps) => (
    <Link
      data-active={
        currentPath === item.link ||
        (currentPath.includes("user") && item.active) ||
        undefined
      }
      href={item.link}
      key={item.label}
      className={variable.link}
    >
      {item.icon}
      <span>{item.label}</span>
    </Link>
  ));

  const secondLinks = secondPaths.map((item: NavLinkProps) => (
    <Link
      data-active={currentPath === item.link || undefined}
      href={item.link}
      key={item.label}
      className={variable.link}
    >
      {item.icon}
      <span>{item.label}</span>
    </Link>
  ));
  const thirdLinks = thirdPaths.map((item: NavLinkProps) => (
    <Link
      data-active={currentPath === item.link || undefined}
      href={item.link}
      key={item.label}
      className={variable.link}
    >
      {item.icon}
      <span>{item.label}</span>
    </Link>
  ));
  return (
    <Box>
      <Stack mt={"1rem"} gap={"10px"}>
        <Text className={variable.linkHead}>Customers</Text>
        {firstLinks}
      </Stack>
      <Stack mt={"1.5rem"} gap={"10px"}>
        <Text className={variable.linkHead}>Businesses</Text>
        {secondLinks}
      </Stack>
      <Stack mt={"1.5rem"} gap={"10px"}>
        <Text className={variable.linkHead}>Settings</Text>
        {thirdLinks}
      </Stack>
    </Box>
  );
};
export default Links;
