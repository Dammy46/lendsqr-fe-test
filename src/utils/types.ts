import React from "react";

export type HeaderProps = {
  opened: boolean;
  toggle: () => void;
  searchIcon: React.JSX.Element;
  bellIcon: React.JSX.Element;
};
export type NavbarProps = {
  bCaseIcon: React.JSX.Element;
  outlineChevDownIcon: React.JSX.Element;
  homeIcon: React.JSX.Element;
  leaveIcon: React.JSX.Element;
};
export type CardProps = {
  icon: React.JSX.Element;
  title: string;
  total: string;
  background: string;
};
export type SectionProps = {
  label: string;
  value: string;
};
export type UsersProps = {
  id: string;
  company: string;
  username: string;
  email: string;
  phoneNumber: string;
  joinedDate: string;
  status: "active" | "inactive" | "pending" | "rejected";
  personal: {
    fullName: string;
    phoneNumber: string;
    email: string;
    bvn: string;
    gender: "Male" | "Female";
    maritalStatus: "single" | "married" | "divorced" | "widowed";
    children: "none" | number;
    residenceType: string;
  };
  education: {
    level: string;
    employmentStatus: "employed" | "unemployed";
    sector: string;
    duration: string;
    officeMail: string;
    income: string;
    repayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  gurantors: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  }[];
};
export type NavLinkProps = {
  link: string;
  label: string;
  icon: React.JSX.Element;
};
