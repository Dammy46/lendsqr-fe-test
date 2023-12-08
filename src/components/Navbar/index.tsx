import React from 'react'
import {AppShellNavbar, Box, MenuTarget, Menu, Divider, Stack, Text, Button} from '@mantine/core'
import Link from 'next/link'
import variable from './navbar.module.scss'
import Links from '../NavLinks'
import { NavbarProps } from '@/utils/types'

const Navbar: React.FC<NavbarProps> = ({bCaseIcon, outlineChevDownIcon, homeIcon, leaveIcon}) => {
  return (
        <AppShellNavbar py="md"  className={variable.navbar}>
        <Box>
          <Menu>
            <MenuTarget>
              <Button
              py={"7px"}
              pl={"30px"}
              pr={"20px"}
                aria-label="switch organization"
                variant="transparent"
                color="#213F7D"
                leftSection={bCaseIcon}
                rightSection={outlineChevDownIcon}
              >
                Switch Organization
              </Button>
            </MenuTarget>
          </Menu>
          <Link href=""     className={variable.homeLink} >{homeIcon} Dashboard</Link>
            <Links/>
            <Divider mt={"2rem"} mb={"1rem"}/>
            <Stack>

            <Text className={variable.logout}>{leaveIcon}Logout</Text>
            <Text className={variable.version}>v1.2.0</Text>
            </Stack>
        </Box>
      </AppShellNavbar>
  )
}

export default Navbar