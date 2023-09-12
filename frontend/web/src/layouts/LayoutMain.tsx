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
  MantineProvider,
} from '@mantine/core';
import { BsHouse, BsHouseDoor } from 'react-icons/bs'
import { NavigationProgress } from '@mantine/nprogress';
import AppNavbar from '@/components/layouts/AppNavbar';
import AppHeader from '@/components/layouts/AppHeader';

interface Props {
  children: ReactNode
}

export default function LayoutMain({children}: Props) {
  const theme = useMantineTheme();
  const navbarActive = useState(false)

  return (

    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={theme}
    >
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        header={<AppHeader navbarActive={navbarActive}/>}
        navbar={<AppNavbar navbarActive={navbarActive}/>}
        layout='alt'
      >
        <NavigationProgress/>
        {children}
      </AppShell>
    </MantineProvider>
  );
}