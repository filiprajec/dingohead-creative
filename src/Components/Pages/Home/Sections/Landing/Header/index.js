/*
  index.js (Header)
  <> Filip Rajec
*/

import React, { useContext } from "react";

import ThemeContext from "../../../../../../context/ThemeContext";
import { ScreenContext } from "../../../../../../Parallax";

import StyleSheet from "./Header.module.scss";

const greeting = "Hi There!";
const introduction = "I'm Filip";
const description = "I'm a full-stack developer and computational physicist.";

const Header = () => {
  const { styles } = useContext(ThemeContext);
  const { vmin } = useContext(ScreenContext);
  return (
      <div
        className={StyleSheet.header}
        style={{ color: styles.colors.content }}
      >
        <h1
          style={{
            fontSize: styles.fontSize.max.medium(vmin),
          }}
        >
          {greeting}
        </h1>
        <h1
          style={{
            fontSize: styles.fontSize.max.xlarge(vmin),
          }}
        >
          {introduction}
        </h1>
        <h2
          style={{
            fontSize: styles.fontSize.max.large(vmin),
          }}
        >
          {description}
        </h2>
      </div>
  );
};

export default Header;

Header.propTypes = {
};
