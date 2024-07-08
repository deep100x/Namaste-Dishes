import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Basis Grotesque Arabic Pro', sans-serif",
    fontSize: 16,
    h1: {
      fontSize: "2.75rem",
      '@media (max-width:900px)': {
        fontSize: '2.25rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.65rem',
      },
    },
    h2: {
      fontSize: "2.5rem",
      '@media (max-width:900px)': {
        fontSize: '2rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h3: {
      fontSize: "2.25rem",
      '@media (max-width:900px)': {
        fontSize: '1.85rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.4rem',
      },
    },
    h4: {
      fontSize: "2rem",
      '@media (max-width:900px)': {
        fontSize: '1.75rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.3rem',
      },
    },
    h5: {
      fontSize: "1.75rem",
      '@media (max-width:900px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.2rem',
      },
    },
    h6: {
      fontSize: "1.5rem",
      '@media (max-width:900px)': {
        fontSize: '1.25rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body1: {
      fontSize: "1.15rem",
      '@media (max-width:900px)': {
        fontSize: '1.075rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: "1rem",
      '@media (max-width:900px)': {
        fontSize: '0.95rem',
      },
      '@media (max-width:600px)': {
        fontSize: '0.9rem',
      },
    }
  },
  palette: {
    darkxl: "#161a1f",
    darkmd: "#43464a",
    gray: "#676a6d",
    green: "#158840",
    orange: "#e58c33",
  },
  defaultBorder: "1.5px solid rgba(2, 6, 12, 0.1)",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1540,
    },
  },
});

export default theme;

// import { useTheme } from "@mui/material/styles"
// const theme = useTheme()
// color: theme.palette.dark