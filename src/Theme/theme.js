import { extendTheme } from "@chakra-ui/react";
import ('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@800&display=swap')
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },
      variants: {
        "with-shadow": {
          bg: "#d32d88",
          boxShadow: "0 0 2px 2px #efdfde",
        },
      },
    },
  },
  fonts: {
    heading: "Noto Sans, sans-serif", // Replace with your selected Google Font
    // Add other font styles if needed
  },
});

export default theme;