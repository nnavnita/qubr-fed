import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a light theme instance.
export const lightTheme = createTheme({
	palette: {
		primary: {
			main: "#556cd6",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
	},
});

// Create a dark theme instance.
export const darkTheme = createTheme({
	palette: {
		primary: {
			main: "#556cd6",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
	},
});
