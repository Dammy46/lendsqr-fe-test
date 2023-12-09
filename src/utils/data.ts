import Svgs from "@/components/Svgs";
import { CardProps, NavLinkProps } from "./types";

const {
  tUsersIcon,
  aUsersIcon,
  uLoansIcon,
  uSavingsIcon,
  usersIcon,
  moneySackIcon,
  peoplesIcon,
  handshakeIcon,
  piggieBankIcon,
  loanIcon,
  shortListIcon,
  rejectIcon,
  bCaseIcon,
  safeIcon,
  feesIcon,
  transactionIcon,
  userSettingIcon,
  serviceIcon,
  docIcon,
  analyticsIcon,
  pricingIcon,
  filterIcon,
  auditIcon,
  systemsIcon,
} = Svgs();
export const users: any[] = [
  {
    organisation: "lendsqr",
    username: "Adedeji",
    phoneNumber: "09096874563",
    email: "doe@gmail",
    date: "May 15, 2020 10:00 AM",
    status: "inactive",
  },
  {
    organisation: "irorun",
    username: "debby",
    phoneNumber: "09096874563",
    email: "debby@gmail",
    date: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organisation: "lendsqr",
    username: "grace",
    phoneNumber: "09096874563",
    email: "grace@gmail",
    date: "May 15, 2020 10:00 AM",
    status: "active",
  },
  {
    organisation: "lendsqr",
    username: "Adedeji",
    phoneNumber: "09096874563",
    email: "doe@gmail",
    date: "May 15, 2020 10:00 AM",
    status: "inactive",
  },
  {
    organisation: "irorun",
    username: "debby",
    phoneNumber: "09096874563",
    email: "debby@gmail",
    date: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organisation: "lendsqr",
    username: "grace",
    phoneNumber: "09096874563",
    email: "grace@gmail",
    date: "May 15, 2020 10:00 AM",
    status: "active",
  },
  {
    organisation: "lendsqr",
    username: "Doe",
    phoneNumber: "09096874563",
    email: "smith@gmail",
    date: "May 15, 2020 10:00 AM",
    status: "rejected",
  },
  {
    organisation: "lendsqr",
    username: "Doe",
    phoneNumber: "09096874563",
    email: "smith@gmail",
    date: "May 15, 2020 10:00 AM",
    status: "rejected",
  },
];
export const CardInfo: CardProps[] = [
  {
    icon: tUsersIcon,
    title: "Users",
    total: "2,453",
    background: "rgba(223, 24, 255, 0.06)",
  },
  {
    icon: aUsersIcon,
    title: "active users",
    total: "2,453",
    background: "rgba(87, 24, 255, 0.06)",
  },
  {
    icon: uLoansIcon,
    title: "Users with loans",
    total: "2,453",
    background: "rgba(245, 95, 68, 0.06)",
  },
  {
    icon: uSavingsIcon,
    title: "Users with savings",
    total: "2,453",
    background: "rgba(255, 51, 102, 0.06)",
  },
];
export const firstPaths: NavLinkProps[] = [
  {
    link: "/dashboard/user",
    label: "Users",
    icon: usersIcon,
    active: true,
  },
  { link: "", label: "Guarantors", icon: peoplesIcon },
  { link: "", label: "Loans", icon: moneySackIcon },
  {
    link: "",
    label: "Decision Models",
    icon: handshakeIcon,
  },
  { link: "", label: "Savings", icon: piggieBankIcon },
  { link: "", label: "Loan Request", icon: loanIcon },
  { link: "", label: "Whitelist", icon: shortListIcon },
  { link: "", label: "Karma", icon: rejectIcon },
];
export const secondPaths: NavLinkProps[] = [
  {
    link: "",
    label: "Organization",
    icon: bCaseIcon,
  },
  {
    link: "",
    label: "Loan Products",
    icon: loanIcon,
  },
  {
    link: "",
    label: "Savings Products",
    icon: safeIcon,
  },
  {
    link: "",
    label: "Fees and Charges",
    icon: feesIcon,
  },
  {
    link: "",
    label: "Transactions",
    icon: transactionIcon,
  },
  {
    link: "",
    label: "Services",
    icon: serviceIcon,
  },
  {
    link: "",
    label: "Service Account",
    icon: userSettingIcon,
  },
  {
    link: "",
    label: "Settlements",
    icon: docIcon,
  },
  {
    link: "",
    label: "Reports",
    icon: analyticsIcon,
  },
];
export const thirdPaths: NavLinkProps[] = [
  {
    link: "",
    label: "Preferences",
    icon: filterIcon,
  },
  {
    link: "",
    label: "Fees and Pricing",
    icon: pricingIcon,
  },
  {
    link: "",
    label: "Audit Logs",
    icon: auditIcon,
  },
  {
    link: "",
    label: "System Messages",
    icon: systemsIcon,
  },
];
export const tabs = [
  "general details",
  "documents",
  "bank details",
  "loans",
  "savings",
  "app and system",
] as string[];
export const formatDate = (isoTimestamp: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedDate: string = new Date(isoTimestamp).toLocaleString(
    "en-US",
    options
  );
  return formattedDate;
};
