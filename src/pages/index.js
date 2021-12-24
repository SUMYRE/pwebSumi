import { ThemeProvider } from 'theme-ui';
import theme from '../theme'

export default function HomePage() {
  return(
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  )
}