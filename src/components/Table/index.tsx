"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  TextInput,
  Select,
  Text,
  Button,
  Stack,
  Group,
  Badge,
  Menu,
  MenuTarget,
  MenuDropdown,
  MenuItem,
  ActionIcon,
  Image,
} from "@mantine/core";
import Link from "next/link";
import { DataTable } from "mantine-datatable";
import variable from "./table.module.scss";
import Svgs from "../Svgs";
import { UsersProps } from "@/utils/types";
import { formatDate } from "@/utils/data";

interface UserProps {
  users: UsersProps[];
}
const PAGE_SIZES = [100, 200, 300, 400];
const Table: React.FC<UserProps> = ({ users }) => {
  const { dotsIcon, eyeIcon } = Svgs();
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(users.slice(0, pageSize));

  useEffect(() => {
    setPage(1);

    //eslint-disable-next-line
  }, [pageSize]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(users.slice(from, to));

    //eslint-disable-next-line
  }, [page, pageSize]);

  return (
    <Box mt={"3rem"}>
      <DataTable
        withRowBorders
        records={records}
        columns={[
          {
            accessor: "company",
            title: "Organization",
            noWrap: true,
            render: ({ company }) => (
              <Text className={variable.tableData}>{company}</Text>
            ),
            filter: (
              <form className={variable.formWrap}>
                <Stack gap="10px">
                  <Select label="Organization" data={[]} placeholder="Select" />
                  <TextInput label="Username" placeholder="User" />
                  <TextInput label="Email" placeholder="Email" />
                  <TextInput type="date" label="Date" placeholder="Date" />
                  <TextInput
                    type="tel"
                    label="Phone Number"
                    placeholder="Phone Number"
                  />
                  <Select label="Status" data={[]} placeholder="Select" />
                  <Group className={variable.buttonWrap}>
                    <Button
                      variant="outline"
                      aria-label="reset"
                      className={variable.outline}
                    >
                      Reset
                    </Button>
                    <Button aria-label="filter" className={variable.filled}>
                      filter
                    </Button>
                  </Group>
                </Stack>
              </form>
            ),
          },
          {
            accessor: "username",
            noWrap: true,
            render: ({ username }) => (
              <Text className={variable.tableData}>{username}</Text>
            ),
            filter: (
              <form className={variable.formWrap}>
                <Stack gap="10px">
                  <Select label="Organization" data={[]} placeholder="Select" />
                  <TextInput label="Username" placeholder="User" />
                  <TextInput label="Email" placeholder="Email" />
                  <TextInput type="date" label="Date" placeholder="Date" />
                  <TextInput
                    type="tel"
                    label="Phone Number"
                    placeholder="Phone Number"
                  />
                  <Select label="Status" data={[]} placeholder="Select" />
                  <Group className={variable.buttonWrap}>
                    <Button
                      variant="outline"
                      aria-label="reset"
                      className={variable.outline}
                    >
                      Reset
                    </Button>
                    <Button aria-label="filter" className={variable.filled}>
                      filter
                    </Button>
                  </Group>
                </Stack>
              </form>
            ),
          },
          {
            accessor: "email",
            noWrap: true,
            render: ({ email }) => (
              <Text
                className={variable.tableData}
                style={{ textTransform: "initial" }}
              >
                {email}
              </Text>
            ),
            filter: (
              <form className={variable.formWrap}>
                <Stack gap="10px">
                  <Select label="Organization" data={[]} placeholder="Select" />
                  <TextInput label="Username" placeholder="User" />
                  <TextInput label="Email" placeholder="Email" />
                  <TextInput type="date" label="Date" placeholder="Date" />
                  <TextInput
                    type="tel"
                    label="Phone Number"
                    placeholder="Phone Number"
                  />
                  <Select label="Status" data={[]} placeholder="Select" />
                  <Group className={variable.buttonWrap}>
                    <Button
                      variant="outline"
                      aria-label="reset"
                      className={variable.outline}
                    >
                      Reset
                    </Button>
                    <Button aria-label="filter" className={variable.filled}>
                      filter
                    </Button>
                  </Group>
                </Stack>
              </form>
            ),
          },
          {
            accessor: "phoneNumber",
            noWrap: true,
            render: ({ phoneNumber }) => (
              <Text className={variable.tableData}>{phoneNumber}</Text>
            ),
            filter: (
              <form className={variable.formWrap}>
                <Stack gap="10px">
                  <Select label="Organization" data={[]} placeholder="Select" />
                  <TextInput label="Username" placeholder="User" />
                  <TextInput label="Email" placeholder="Email" />
                  <TextInput type="date" label="Date" placeholder="Date" />
                  <TextInput
                    type="tel"
                    label="Phone Number"
                    placeholder="Phone Number"
                  />
                  <Select label="Status" data={[]} placeholder="Select" />
                  <Group className={variable.buttonWrap}>
                    <Button
                      variant="outline"
                      aria-label="reset"
                      className={variable.outline}
                    >
                      Reset
                    </Button>
                    <Button aria-label="filter" className={variable.filled}>
                      filter
                    </Button>
                  </Group>
                </Stack>
              </form>
            ),
          },

          {
            accessor: "joinedDate",
            title: "Date Joined",
            noWrap: true,
            render: ({ joinedDate }) => (
              <Text className={variable.tableData}>
                {formatDate(joinedDate)}
              </Text>
            ),
            filter: (
              <form className={variable.formWrap}>
                <Stack gap="10px">
                  <Select label="Organization" data={[]} placeholder="Select" />
                  <TextInput label="Username" placeholder="User" />
                  <TextInput label="Email" placeholder="Email" />
                  <TextInput type="date" label="Date" placeholder="Date" />
                  <TextInput
                    type="tel"
                    label="Phone Number"
                    placeholder="Phone Number"
                  />
                  <Select label="Status" data={[]} placeholder="Select" />
                  <Group className={variable.buttonWrap}>
                    <Button
                      variant="outline"
                      aria-label="reset"
                      className={variable.outline}
                    >
                      Reset
                    </Button>
                    <Button aria-label="filter" className={variable.filled}>
                      filter
                    </Button>
                  </Group>
                </Stack>
              </form>
            ),
          },
          {
            accessor: "status",
            render: ({ status }) => (
              <Badge
                variant="light"
                color={
                  status === "inactive"
                    ? "#545F7D"
                    : status === "pending"
                    ? "#E9B200"
                    : status === "active"
                    ? "#39CD62"
                    : "#E4033B"
                }
                className={variable.badge}
                size="md"
              >
                {status}
              </Badge>
            ),
            filter: (
              <form className={variable.formWrap}>
                <Stack gap="10px">
                  <Select label="Organization" data={[]} placeholder="Select" />
                  <TextInput label="Username" placeholder="User" />
                  <TextInput label="Email" placeholder="Email" />
                  <TextInput type="date" label="Date" placeholder="Date" />
                  <TextInput
                    type="tel"
                    label="Phone Number"
                    placeholder="Phone Number"
                  />
                  <Select label="Status" data={[]} placeholder="Select" />
                  <Group className={variable.buttonWrap}>
                    <Button
                      variant="outline"
                      aria-label="reset"
                      className={variable.outline}
                    >
                      Reset
                    </Button>
                    <Button aria-label="filter" className={variable.filled}>
                      filter
                    </Button>
                  </Group>
                </Stack>
              </form>
            ),
          },
          {
            accessor: "",
            render: (users) => (
              <Menu>
                <MenuTarget>
                  <ActionIcon aria-label="user-options" variant="transparent">
                    {dotsIcon}
                  </ActionIcon>
                </MenuTarget>
                <MenuDropdown>
                  <Link
                    href={`/dashboard/user/${users.id}?tab=general details`}
                    onClick={() =>
                      localStorage.setItem("userDetail", JSON.stringify(users))
                    }
                  >
                    <MenuItem
                      leftSection={eyeIcon}
                      className={variable.menuItem}
                    >
                      View Details
                    </MenuItem>
                  </Link>
                  <Link href={""}>
                    <MenuItem
                      className={variable.menuItem}
                      leftSection={<Image src="/reject.png" alt="reject" />}
                    >
                      Blacklist User
                    </MenuItem>
                  </Link>
                  <Link href={""}>
                    <MenuItem
                      className={variable.menuItem}
                      leftSection={<Image src="/verify.png" alt="reject" />}
                    >
                      Activate User
                    </MenuItem>
                  </Link>
                </MenuDropdown>
              </Menu>
            ),
          },
        ]}
        paginationText={({ from, to, totalRecords }) =>
          `out of ${totalRecords}`
        }
        totalRecords={users.length}
        recordsPerPage={pageSize}
        recordsPerPageLabel="Showing"
        page={page}
        onPageChange={(p) => setPage(p)}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={setPageSize}
      />
    </Box>
  );
};

export default Table;
