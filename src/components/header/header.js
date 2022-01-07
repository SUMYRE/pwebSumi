import { jsx, Container, Flex, Button, Box} from "theme-ui";
import {keyframes} from '@emotion/react'
import { Link } from "react-scroll";
import data from "./header.data"
import { useTrail, a, animated } from "react-spring"
import React from "react";

//const [isDarkMode, setIsDarkMode] = useState(false)


export default function Header({stateofbeing}){

    return(
      <header sx={styles.header}>
        <div style={styles.center}>
          <span style={styles.text2}>_PROJECT</span>
          <span style={styles.text1}>SUMI</span>
        </div>
        <Flex as="nav" sx={styles.nav}>
          {data.map((data, i) => (
            <Link
              activeClass="active"
              to={data.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}>
                {data.label}
            </Link>
          ))}
        </Flex>
      </header>
    );
}

const styles = {
  header: {
    position: 'absolute',
    py: 4,
    width: '100%',
    top:0,
    left: 0
  },

  center:{
    height: "10vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    a: {
      cursor: 'pointer'
    }
  },

  links:{
    backgroundColor: 'transparent',
    fontFamily: "nunito",
    fontSize: 24,
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
  nav: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    /*display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },*/
    a: {
      fontSize: 2,
      fontWeight: 'body',
      fontFamily: "nunito",
      px: 4,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: '#6AA84F',
      },
      '&.active': {
        color: '#6AA84F',
      },
    },
  }
}
