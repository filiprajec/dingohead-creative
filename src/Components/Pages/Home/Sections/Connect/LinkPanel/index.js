/*
  index.js (LinkPanel)
  <> Filip Rajec
*/

import React, { useContext, forwardRef } from "react";
import PropTypes from "prop-types";

import ThemeContext from "../../../../../../context/ThemeContext";
import { Button, Card } from "../../../../../UI";
import { openInNewTab } from "../../../../../../utils/utilities";

const LinkPanel = forwardRef(({ links = [] }, ref) => {
  const { styles } = useContext(ThemeContext);
  const styleContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "fit-content",
    overflow: "hidden",
  };
  const styleCard = {
    backgroundColor: styles.colors.background,
    margin: styles.padding.px.xlarge,
    zIndex: styles.zIndex.text,
    marginTop: styles.padding.px.xxlarge,
    marginBottom: styles.padding.px.xxlarge,
  };

  return (
    <div style={styleContainer} ref={ref}>
      <Card style={styleCard}>
        {links.map((link) => {
          const onClick = () => {
            if (link.url) {
              openInNewTab(link.url);
            } else if (link.mail) {
              window.location.href = `mailto:${link.mail}`;
            }
          };
          return (
            <Button
              accentColor={link.accentColor ?? styles.colors.uaRed}
              onClick={onClick}
              key={`link-button-${link.name}`}
            >
              {link.name}
            </Button>
          );
        })}
      </Card>
    </div>
  );
});

export default LinkPanel;

LinkPanel.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      accent: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
