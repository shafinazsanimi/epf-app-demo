import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from '../components/Logo';

const TopBar = (props) => (
  <AppBar
    elevation={3}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
        <Logo />
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default TopBar;
