import { Routes } from '@/utils/Routes'
import { Button, Link } from '@mui/material'
import React from 'react'
import { createTheme , colors , ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue[500],
    },
    secondary: {
      main: colors.blue[500],
    },
  },
  typography: {
    fontFamily: 'Inner',
    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 300,
    fontWeightBold: 400,

  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <div className='flex flex-row justify-between items-center'>
      <h1 className='text-2xl font-bold'>Home</h1>
      <Link href={ Routes.SCHEDULE } className='
        text-decoration-none
        no-underline'
      >
          <Button className='
          bg-blue-500 
          text-white text-l
          h-16'>
          NEW APPOINTMENT
        </Button>
      </Link>
    </div>
    </ThemeProvider>
  )
}