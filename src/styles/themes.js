const headerButton = {
  background: "transparent",
  border: "1px solid transparent",
  padding: "5px",

  hover: {
    background: "transparent",
    color: "var(--color-lavenderGray)",
    border: "1px solid var(--color-lavenderGray)",
  },
};

const defaultButton = {
  background: "var(--color-stateBlue)",
  border: "1px solid var(--color-stateBlue)",
  padding: "5px 20px",

  hover: {
    background: "var(--color-darkPurple)",
    color: "var(--color-linen)",
    border: "1px solid var(--color-stateBlue)",
  },
};

const addButton = {
  background: "var(--color-darkPurple)",
  border: "1px solid var(--color-darkPurple)",
  padding: "5px 10px",

  hover: {
    background: "var(--color-stateBlue)",
    color: "var(--color-linen)",
    border: "1px solid var(--color-darkPurple)",
  },
};

const declineButton = {
  background: "var(--color-linen)",
  border: "1px solid var(--color-darkPurple)",
  padding: "5px 10px",

  hover: {
    background: "var(--color-stateBlue)",
    color: "var(--color-linen)",
    border: "1px solid var(--color-darkPurple)",
  },
};

export const buttonThemes = {
  header: headerButton,
  default: defaultButton,
  add: addButton,
  decline: declineButton,
};
