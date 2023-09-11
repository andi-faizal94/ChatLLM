"use client"
import { ReactNode, useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  NavLink,
} from '@mantine/core';
import { BsHouse, BsHouseDoor } from 'react-icons/bs'
import AppHeader from './AppHeader';
import AppNavbar from './AppNavbar';

interface Props {
  children: ReactNode
}

export default function LayoutMain({children}: Props) {
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<AppNavbar/>}
      header={<AppHeader/>}
    >
      {children}
    </AppShell>
  );
}