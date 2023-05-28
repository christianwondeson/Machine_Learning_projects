const { Box } = require("@mui/material");

const { styled } = require("@mui/system");

// this is a way to use a style for our react components. this code will help us to reuse this css property as a component

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
