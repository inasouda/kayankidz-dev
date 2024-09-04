// theme.js or theme.ts
import { extendTheme } from "@chakra-ui/react";

// Define your custom theme with Poppins font
const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

export default theme;
