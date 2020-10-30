
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#98ffae',
            main: '#44ff98',
            dark: '#09ff95',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        white: {
            light: '#fff',
            main: '#fff',
            dark: '#fff',
            contrastText: '#fff',
        }
    },
});

export default theme
