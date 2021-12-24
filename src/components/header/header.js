import { jsx, Container, Flex, Button } from "theme-ui";
import {keyframes} from '@emotion/react'
import { Link } from "react-scroll";

export default function Header({stateofbeing}){
    return(
        <h1>Header</h1>
    );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;