export const theme = (props) => {
  
    return {
      ...props,
      // isBreakpoints: props.sizes,
      breakpoints: {
        xxl: `1600px`,
        xl: `1200px`,
        lg: `992px`,
        md: `768px`,
        sm: `576px`,
        xs: `320px`,
      },
      customColors: {
        primary: `#163663`,
        // primary: `#2D6976`,
        primaryHover: "#4A94A5",
        hover: "#5474A1",
        secondary: `#6EBBC5`,
        // secondary: `#293241`,
        white: "#fff",
        lightGray: "#fafafa",
        orange: "#FE5F55",
        lightOrange: "#EC663D",
        dark: "#37474F",
        ofWhite: "#ECF5F7",
        darkGray: "#9b9b9b48",
        gray: "rgba(235, 235, 235, 0.14)",
        lightBlue: "#E1F5FA",
        lightBlue1: "#1985A1"
      },
      colors: {
        black: "#000",
        black3: "#333",
        Gray: "#999",
        Gray1: "#828282",
        Gray2: "#4f4f4f",
        Gray3: "#272833",
        Gray4: "#444444",
        Gray5: "#18191F",
        Gray6: "#BDBDBD",
        Gray7: "#747474",
        red: "#FE5F55",
        hoverRed: "#FF7169",
        Gray6: "#999",
        NavyBlack: "#0C1A30"
      },
      backgroundColors: {
        bgPrimary: `#001529`,
        bgSecondary: "#f5f5f5",
        lightBlue: "#EAF5FF",
        lightRed: "#FFF8F9",
        overlay: "#F2FFFF",
        lightGray: "#FAFAFA",
        red: "#FE5F55",
        gray6: "#f2f2f2",
        lighter: "#DCF3F9",
        lightGray2: "#FCFCFC",
        lightBlue2: "#E9FCFC",
  
      },
      borderColors: {
        primaryBorderColor: `#001529`,
        secondBorderColor: `#c4c4c4`,
        black3: "#333",
        light: "#e3eef1",
        lightGray: "#FAFAFA",
        gray: "#dadada",
        gray2: "#444444",
      },
      
    };
  };
  
