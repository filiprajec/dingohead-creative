/*
  index.js (Landing)
  <> Filip Rajec
*/

import React, { useContext } from "react";
import { Link } from "gatsby";

import ThemeContext from "../../../../../context/ThemeContext";
import { ParallaxContainer } from "../../../../../Parallax";
import { Button } from "../../../../UI";

const NotFound = () => {
  const { styles } = useContext(ThemeContext);

  const styleTitle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  return (
    <ParallaxContainer
      dimensions={{ screen: { width: 1, height: 1 } }}
      style={styleTitle}
    >
      <h1 style={{ color: styles.colors.content }}>
        There&apos;s no page here 😭
      </h1>
      <Link to="/">
        <Button
          accentColor={styles.colors.basic.emerald}
          style={{ textDecoration: "none" }}
        >
          Click Me!
        </Button>
      </Link>
    </ParallaxContainer>
  );
};

export default NotFound;

NotFound.propTypes = {};
