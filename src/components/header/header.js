import { jsx, Container, Flex, Button, Box} from "theme-ui";
import {keyframes} from '@emotion/react'
import { Link } from "react-scroll";

//const [isDarkMode, setIsDarkMode] = useState(false)

export default function Header({stateofbeing}){
    return(
      <header>
        <h1>This is the header</h1>
      </header>
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

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body'
  }
}
