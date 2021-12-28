import { ThemeProvider } from 'theme-ui';
import theme from '../theme'
import HomeLayout from '../components/homeLayout';
import React, {useState, useEffect} from 'react';
import Intro from '../components/intro';

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
          <Intro styles={styles.center}/>
        :
        <HomeLayout/>
      }
    </ThemeProvider>
  )
}

const styles = {
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  }
}