import { ThemeProvider } from 'theme-ui';
import theme from '../theme'
import HomeLayout from '../components/homeLayout';
import React, {useState, useEffect} from 'react';
import Intro from './intro';

export default function HomePage() {

  const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            (setLoading(false))
        },3500);
    },[])
  
  return(
    <ThemeProvider theme={theme}>
      {
        loading ?
          <Intro/>
        :
        <h1>Something else, this is the sefcond part</h1>
      }
    </ThemeProvider>
  )
}