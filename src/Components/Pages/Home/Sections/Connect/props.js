/*
  props.js (Connect)
  <> Filip Rajec
*/

const LinkPanelOuterProps = (styles) => ({
  dimensions: {
    parent: {
      width: 1,
      height: 1,
      top: 0,
      left: 0,
    },
    screen: {
      speed: 2,
    },
  },
  style: {
    zIndex: styles.zIndex.text,
  },
});

const LinkPanelProps = (styles) => ({
  links: [
    {
      name: "Email",
      accentColor: styles.colors.basic.mediumSlateBlue,
      mail: "filip@dingohead.com",
    },
    {
      name: "LinkedIn",
      accentColor: styles.colors.basic.tuftsBlue,
      url: "https://www.linkedin.com/in/filip-rajec/",
    },
    {
      name: "GitHub",
      accentColor: styles.colors.basic.emerald,
      url: "https://github.com/filiprajec",
    },
  ],
});

const LayerAProps = (styles) => ({
  dimensions: {
    parent: {
      width: 1.5,
      height: 1.5,
      left: -0.25,
      top: 0,
    },
    screen: {
      speed: 0.7,
    },
  },
  style: {
    backgroundColor: styles.colors.basic.chromeYellow,
    zIndex: styles.zIndex.assets,
    transform: "rotate(12deg)",
  },
});

const LayerBProps = (styles) => ({
  dimensions: {
    parent: {
      width: 1.5,
      height: 1.5,
      left: -0.25,
      top: 0.2,
    },
    screen: {
      speed: 1.5,
    },
  },
  style: {
    backgroundColor: styles.colors.basic.fireOpal,
    zIndex: styles.zIndex.assets,
    transform: "rotate(-7deg)",
  },
});

const LayerCProps = (styles) => ({
  dimensions: {
    parent: {
      width: 1.5,
      height: 1.5,
      left: -0.25,
      top: 0.6,
    },
    screen: {
      speed: 4,
    },
  },
  style: {
    backgroundColor: styles.colors.basic.uaRed,
    zIndex: styles.zIndex.assets,
    transform: "rotate(8deg)",
  },
});

const Props = (styles) => ({
  LinkPanelOuterProps: LinkPanelOuterProps(styles),
  LinkPanelProps: LinkPanelProps(styles),
  LayerAProps: LayerAProps(styles),
  LayerBProps: LayerBProps(styles),
  LayerCProps: LayerCProps(styles),
});

export default Props;
