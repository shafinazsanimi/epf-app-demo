import {
    Box,
    createStyles,
    FormControl,
    IconButton,
    InputLabel,
    InputAdornment,
    OutlinedInput,
    withStyles,
    Typography,
    Card,
    CircularProgress
} from '@material-ui/core'
import React, { Component } from 'react'
import ApiService from '../services/apiService';
import { Link } from 'react-router-dom';

class Details extends Component {


    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        const url_params = window.location.href.split('/')
        const key = url_params[url_params.length - 1]

        ApiService.getOfficeDetails(data => {
            let officeDetail = data.filter(office => office.key === key)[0]

            this.setState({
                ...this.state,
                officeDetails: officeDetail,
                isLoading: false
            })
        });
    }

    render() {
        const { classes } = this.props;
        return (
            this.state.isLoading ? <CircularProgress /> :

                <Card className={classes.tableCard}>
                    <div className={classes.backBtn}>
                        <Link to="/" > &#8249; Main Page </Link>
                    </div>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                    >
                        <Box
                            display="flex"
                        >
                            <Typography className={classes.mainTitle}>
                                Location Details
                        </Typography>
                        </Box>
                        <Box
                            display="flex"
                        >
                            <Typography className={classes.subTitle}>
                                Map
                        </Typography>
                        </Box>
                    </Box>
                    <iframe width="100%" height="500" id="gmap_canvas" src={'https://maps.google.com/maps?q=' + this.state.officeDetails.lat + ',' + this.state.officeDetails.lon + '&t=&z=13&ie=UTF8&iwloc=&output=embed'} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    <Typography className={classes.subTitle} marginBottom="20px">
                        Information
                    </Typography>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="row"
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            paddingRight="100px"
                        >
                            <Typography>
                                Address
                        </Typography>
                            <Typography>
                                Distance from your location
                        </Typography>
                            <Typography>
                                Fax No.
                        </Typography>

                        </Box>
                        <Box
                            display="flex"
                            flexDirection="column"
                            flex="1"
                        >
                            <Typography>
                                {this.state.officeDetails.ads}
                            </Typography>
                            <Typography>
                                {this.state.officeDetails.distance}
                            </Typography>
                            <Typography>
                                {this.state.officeDetails.fax}
                            </Typography>
                        </Box>
                    </Box>
                </Card>
        )
    }
}

const styles = createStyles(() => ({
    mainTitle: {
        color: '#2f3291',
        fontSize: '27px !important',
        fontWeight: 'bold !important'
    },
    subTitle: {
        color: '#7f7f83',
        fontSize: '18px !important'
    },
    tableCard: {
        width: '100%',
        padding: 20
    },
    backBtn: {
        padding: 10,
        fontSize: 20,
        marginBottom: 20

    },

}));

export default withStyles(styles)(Details)


