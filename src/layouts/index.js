import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import TopBar from './TopBar';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    },
    wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 94,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30
    }
}));

const MainLayout = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TopBar />
            <div className={classes.wrapper}>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
