import React from 'react'
import { Avatar, Box, Group, Text, UnstyledButton } from "@mantine/core";
import { forwardRef } from "react";
import Svgs from './Svgs';

const Profile = forwardRef(
({ icon, ...others }: any, ref) => (
  <UnstyledButton ref={ref} {...others} aria-label={'Adedeji'}>
    <Group gap="2px" style={{ flexWrap: "nowrap"}}>
      <div
       
      >
        <Avatar
          variant="outline"
          size="md"
          color="blue"
          src={'/avatar.png'}
          radius="xl"
          alt="profile-image"
        />
      </div>

      <Box >
        <Text style={{ color: "#213F7D", fontSize: "16px", textTransform: "capitalize" }} ml={"3px"} display={{lg: 'block', md:'none', sm: 'none'}} size="sm" fw={500}>
          Adedeji
        </Text>

      </Box>
      {icon}

     
    </Group>
  </UnstyledButton>
)
);

Profile.displayName = 'Profile'
const UserButton = () => {
    const {chevDownIcon} = Svgs()
  return (
<Profile icon={chevDownIcon}/>
  )
}

export default UserButton