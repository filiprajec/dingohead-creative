/*
  ProfileText.js
  <> Filip Rajec
*/

import React, { useContext, forwardRef } from "react";

import ThemeContext from "../../../../../../context/ThemeContext";
import { ScreenContext } from "../../../../../../Parallax";
import { LinkExternal } from "../../../../../UI";

const ProfileText = forwardRef((props, ref) => {
  const { styles } = useContext(ThemeContext);
  const { vmin } = useContext(ScreenContext);
  const style = {
    position: "absolute",
    top: 0,
    padding: styles.padding.px.xlarge,
    color: styles.colors.content,
    fontSize: styles.fontSize.max.medium(vmin),
    fontWeight: 400,
    lineHeight: 1.1,
    textAlign: "left",
    zIndex: styles.zIndex.text,
  };

  return (
    <p style={style} ref={ref}>
      Currently living in{" "}
      <span style={{ color: styles.colors.basic.fluorescentPink }}>
        Melbourne 📍 (Narrm){" "}
      </span>
      , I speak all things web-app, with a stack 🪛 in{" "}
      <span style={{ color: styles.colors.basic.mediumSlateBlue }}>
        react.js, node.js and SQL/NoSQL
      </span>{" "}
      (among others).
      <br />
      I&apos;ve contributed to the www&apos;s on a gamechanging app,{" "}
      <LinkExternal to="https://www.athletesai.com">
        <span style={{ color: styles.colors.basic.caribbeanGreen }}>
          TennisAI 🎾
        </span>
      </LinkExternal>
      , helping people improve their tennis skills digitally & worked as a
      freelancer springing up small-scale projects.
      <br />
      I&apos;ve been on a worldwide collaboration building a powerhouse ⚡
      physics tool,{" "}
      <LinkExternal to="https://github.com/GambitBSM">
        <span style={{ color: styles.colors.basic.softPurple }}>GAMBIT ♦️</span>
      </LinkExternal>
      , that combines the latest data churning tools to find optimal solutions
      to new physics models.
      <br />
      Off the clock, I work with a small team on a container-exchange ♻️
      startup,{" "}
      <LinkExternal to="https://www.reusably.com.au/">
        <span style={{ color: styles.colors.basic.fireOpal }}>Reusably</span>
      </LinkExternal>
      , banishing single use-plastics to their rightful grave 🪦 and volunteer
      for{" "}
      <LinkExternal to="https://refugeeswelcome.org.au/">
        <span style={{ color: styles.colors.basic.neonBlue }}>
          {" "}
          Refugees Welcome Australia
        </span>
      </LinkExternal>
      , running the digital platform that helps connect refugees with spare
      rooms 🏠 and families in the community.
      <br />
      1s and 0s (qubits too) aside, you&apos;ll catch me on the yoga mat or
      immersed in a sci-fi novel. 😀
    </p>
  );
});

export default ProfileText;
