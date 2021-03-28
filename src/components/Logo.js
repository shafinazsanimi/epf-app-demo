import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    logo: {
        height: '60px',
        width: 'auto',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)'
    }
}));

const Logo = (props) => {
    const classes = useStyles();

    return (
        <img
            alt="Logo"
            src="static/images/logo.jpg"
            className={classes.logo}
            {...props}
        />
    );
};

export default Logo;
