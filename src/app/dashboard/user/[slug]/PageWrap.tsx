"use client";
import Svgs from "@/components/Svgs";
import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Group,
  Text,
  Flex,
  Button,
  Card,
  Avatar,
  Divider,
  Grid,
  GridCol,
} from "@mantine/core";
import variable from "./slug.module.scss";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Link from "next/link";
import { UsersProps } from "@/utils/types";


const data = [
  "general details",
  "documents",
  "bank details",
  "loans",
  "savings",
  "app and system",
] as string[];
interface  DetailsProps {
    userDetails: UsersProps[]
}
const PageWrap:React.FC<DetailsProps> = ({userDetails}) => {

  const { fullStarIcon, outlineStarIcon, profileIcon } = Svgs();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const { slug } = params;

  const searchParams = useSearchParams();
  const { arrowLeftIcon } = Svgs();
  const search = searchParams.get("tab");
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  
  return (
    <Box className={variable.pageWrap}>
      <Text
        className={variable.backWrap}
        onClick={() => router.push("/dashboard/user")}
      >
        {arrowLeftIcon} Back to Users
      </Text>
      <Group justify={"space-between"} align={"center"} mt="xl">
        <Text className={variable.pageTitle}>User Details</Text>
        <Group className={variable.actionsButton}>
          <Button
            variant="outline"
            color="#E4033B"
            radius="md"
            style={{ letterSpacing: "1.4px", textTransform: "uppercase" }}
            aria-label="blacklist-user"
          >
            Blacklist User
          </Button>
          <Button
            variant="outline"
            color="#39CDCC"
            radius="md"
            style={{ letterSpacing: "1.4px", textTransform: "uppercase" }}
            aria-label="activate-user"
          >
            Activate User
          </Button>
        </Group>
      </Group>
      <Card className={variable.profileCard}>
        <Flex
          justify={"flex-start"}
          align={"center"}
          gap={"20px"}
          className={variable.profileContainer}
        >
          <Avatar
            w={"100px"}
            h={"100px"}
            alt="no image here"
            className={variable.profileImg}
          >
            {profileIcon}
          </Avatar>
          <Group
            justify="flex-start"
            align="center"
            className={variable.userInfo}
          >
            <Box>
              <Text className={variable.username}>
                {userDetails ? userDetails[0].personal.fullName : "N/A"}
              </Text>
              <Text className={variable.userId}>LSQFf587g90</Text>
            </Box>
            <Divider orientation="vertical" className={variable.divider} />
            <Box>
              <Text className={variable.userTier}>User’s Tier</Text>
              <Text className={variable.userRate}>
                {fullStarIcon}
                {outlineStarIcon}
                {outlineStarIcon}
              </Text>
            </Box>
            <Divider orientation="vertical" className={variable.divider} />
            <Box>
              <Text className={variable.userAmount}>₦200,000.00</Text>
              <Text className={variable.userBank}>
                9912345678/Providus Bank
              </Text>
            </Box>
          </Group>
        </Flex>
        <Grid className={variable.profileTabs}>
          {data.map((item: string, index: number) => (
            <GridCol span={{ lg: 2, md: 3, sm: 4 }} key={index}>
              <Link
                href={pathname + "?" +  item === "general details" ? createQueryString("tab", item) : ""}
             
              >
                <Box
                  className={variable.navLinkBox}
                  style={{
                    borderBottom: search === item ? "2px solid #39CDCC" : "",
                  }}
                >
                  <Text c={search === item ? "#39CDCC" : "black"}>{item}</Text>
                </Box>
              </Link>
            </GridCol>
          ))}
        </Grid>
      </Card>

      {search === "general details" && (
        <Card className={variable.generalTab}>
          <Text className={variable.title}>personal information</Text>
          <Grid justify="flex-start" mt="lg" gutter={"xl"}>
            <GridCol span={{ lg: 2.3, md: 3, sm: 6 }}>
              <Box>
                <Text className={variable.label}>full name</Text>
                <Text className={variable.value}>
                  {userDetails ? userDetails[0].personal.fullName : "N/A"}
                </Text>
              </Box>
            </GridCol>
            <GridCol span={{ lg: 2.3, md: 3, sm: 6 }}>
              <Box>
                <Text className={variable.label}>phone number</Text>
                <Text className={variable.value}>
                  {userDetails ? userDetails[0].personal.phoneNumber : "N/A"}
                </Text>
              </Box>
            </GridCol>
            <GridCol span={{ lg: 2.3, md: 3, sm: 6 }}>
              <Box>
                <Text className={variable.label}>email address</Text>
                <Text className={variable.value}>
                  {userDetails ? userDetails[0].personal.email : "N/A"}
                </Text>
              </Box>
            </GridCol>
            <GridCol span={{ lg: 2.3, md: 3, sm: 6 }}>
              <Box>
                <Text className={variable.label}>bvn</Text>
                <Text className={variable.value}>
                  {userDetails ? userDetails[0].personal.bvn : "N/A"}
                </Text>
              </Box>
            </GridCol>
            <GridCol span={{ lg: 2.3, md: 3, sm: 6 }}>
              <Box>
                <Text className={variable.label}>email address</Text>
                <Text className={variable.value}>
                  {userDetails ? userDetails[0].personal.gender : "N/A"}
                </Text>
              </Box>
            </GridCol>
            <GridCol span={{ lg: 2.3, md: 3, sm: 6 }}>
              <Box>
                <Text className={variable.label}>marital status</Text>
                <Text className={variable.value}  tt={"capitalize"}>
                  {userDetails ? userDetails[0].personal.maritalStatus : "N/A"}
                </Text>
              </Box>
            </GridCol>
            <GridCol span={{ lg: 2.3, md: 3, sm: 6 }}>
              <Box>
                <Text className={variable.label}>children</Text>
                <Text className={variable.value}  tt={"capitalize"}>
                  {userDetails ? userDetails[0].personal.children : "N/A"}
                </Text>
              </Box>
            </GridCol>
            <GridCol span={{ lg: 2.3, md: 3, sm: 6 }}>
              <Box>
                <Text className={variable.label}>type of residence</Text>
                <Text className={variable.value}  tt={"capitalize"}>
                  {userDetails ? userDetails[0].personal.residenceType : "N/A"}
                </Text>
              </Box>
            </GridCol>
          </Grid>

          <Divider my={"lg"} />
          <Text className={variable.title}>education and employment</Text>
          <Grid justify="flex-start" mt="lg" gutter={"xl"}>
            <GridCol span={{ lg: 3, md: 4, sm: 6 }}>
              <Box>
                <Text className={variable.label}>level of education</Text>
                <Text className={variable.value}>
                  {userDetails ? userDetails[0].education.level : "N/A"}
                </Text>
              </Box>
            </GridCol>
            <GridCol span={{ lg: 3, md: 4, sm: 6 }}>
              <Box>
                <Text className={variable.label}>Employment Status</Text>
                <Text className={variable.value}  tt={"capitalize"}>
                  {userDetails
                    ? userDetails[0].education.employmentStatus
                    : "N/A"}
                </Text>
              </Box>
            </GridCol>
            <GridCol span={{ lg: 3, md: 4, sm: 6 }}>
              <Box>
                <Text className={variable.label}>sector of employment</Text>
                <Text className={variable.value}  tt={"capitalize"}>
                  {userDetails ? userDetails[0].education.sector : "N/A"}
                </Text>
              </Box>
            </GridCol>
            <GridCol span={{ lg: 3, md: 4, sm: 6 }}>
              <Box>
                <Text className={variable.label}>duration of employment</Text>
                <Text className={variable.value}>
                  {userDetails ? userDetails[0].education.duration : "N/A"}
                </Text>
              </Box>
            </GridCol>
            <GridCol span={{ lg: 3, md: 4, sm: 6 }}>
              <Box>
                <Text className={variable.label}>office mail</Text>
                <Text className={variable.value}>
                  {userDetails ? userDetails[0].education.officeMail : "N/A"}
                </Text>
              </Box>
            </GridCol>
            <GridCol span={{ lg: 3, md: 4, sm: 6 }}>
              <Box>
                <Text className={variable.label}>montly income</Text>
                <Text className={variable.value}>
                  {userDetails ? userDetails[0].education.income : "N/A"}
                </Text>
              </Box>
            </GridCol>
            <GridCol span={{ lg: 3, md: 4, sm: 6 }}>
              <Box>
                <Text className={variable.label}>loan repayment</Text>
                <Text className={variable.value}>
                  {userDetails ? userDetails[0].education.repayment : "N/A"}
                </Text>
              </Box>
            </GridCol>
          </Grid>
          <Divider my={"lg"} />
          <Text className={variable.title}>Socials</Text>
          <Grid justify="flex-start" mt="lg" gutter={"xl"}>
            <GridCol span={{ lg: 2.3, md: 4, sm: 6 }}>
              <Box>
                <Text className={variable.label}>twitter</Text>
                <Text className={variable.value}>
                  {userDetails ? userDetails[0].socials.twitter : "N/A"}
                </Text>
              </Box>
            </GridCol>
            <GridCol span={{ lg: 2.3, md: 4, sm: 6 }}>
              <Box>
                <Text className={variable.label}>facebook</Text>
                <Text className={variable.value}>
                  {userDetails ? userDetails[0].socials.facebook : "N/A"}
                </Text>
              </Box>
            </GridCol>
            <GridCol span={{ lg: 2.3, md: 4, sm: 6 }}>
              <Box>
                <Text className={variable.label}>instagram</Text>
                <Text className={variable.value}>
                  {userDetails ? userDetails[0].socials.instagram : "N/A"}
                </Text>
              </Box>
            </GridCol>
          </Grid>
          {
            userDetails &&
            (
              <>
                    <Divider my={"lg"} />
          <Text className={variable.title}>Guarantor</Text>
          <Grid justify="flex-start">
            {userDetails[0].gurantors?.map((item: any, index: number) => (
              <GridCol span={12} key={index} mt="lg" style={{borderBottom: index === data.length - 1 ? 'none' : '1px solid #ccc', paddingBottom:index === data.length - 1 ? '8px' : '2rem' }}>
                <Grid justify="flex-start" gutter={"xl"}>
                  <GridCol span={{ lg: 2.3, md: 4, sm: 6 }}>
                    <Box>
                      <Text className={variable.label}>full name</Text>
                      <Text className={variable.value}>{item.fullName}</Text>
                    </Box>
                  </GridCol>
                   <GridCol span={{ lg: 2.3, md: 4, sm: 6 }}>
                    <Box>
                      <Text className={variable.label}>phone number</Text>
                      <Text className={variable.value}>{item.phoneNumber}</Text>
                    </Box>
                  </GridCol>
                   <GridCol span={{ lg: 2.3, md: 4, sm: 6 }}>
                    <Box>
                      <Text className={variable.label}>email address</Text>
                      <Text className={variable.value}>{item.email}</Text>
                    </Box>
                  </GridCol>
                   <GridCol span={{ lg: 2.3, md: 4, sm: 6 }}>
                    <Box>
                      <Text className={variable.label}>relationship</Text>
                      <Text className={variable.value}  tt={"capitalize"}>{item.relationship}</Text>
                    </Box>
                  </GridCol>
                </Grid>
              </GridCol>
            ))}
          </Grid>
              
              </>
            )
          }
    
        
        </Card>
      )}
    </Box>
  );
};

export default PageWrap;