import { jsx, Container, Flex, Button, Box} from "theme-ui";
import {keyframes} from '@emotion/react'
import { Link } from "react-scroll";

//const [isDarkMode, setIsDarkMode] = useState(false)

export default function Header({stateofbeing}){
    return(
      <header>
        <div style={styles.center}>
          <span style={styles.text2}>_PROJECT</span>
          <span style={styles.text1}>SUMI</span>
        </div>
      </header>
    );
}

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body'
  },

  center:{
    height: "10vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },

  text1: {
    color: "#6AA84F",
    backgroundColor: 'transparent',
    fontFamily: "nunito",
    fontSize: 34
  },

  text2: {
    color: "#000000",
    backgroundColor: 'transparent',
    fontFamily: "nunito",
    fontSize: 34
  },
}
