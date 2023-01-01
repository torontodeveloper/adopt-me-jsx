import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#c3e",
        },
        secondary: {
            main: "#fce"
        },
        shape: {
            borderRadius: 30
        },
        overrides: {
            MuiButton: {
                root: {
                    textTransform: "lowercase"
                },
                fullWidth: {
                    maxWidth: '400px'
                }
            }
        }

    }
})
export default theme