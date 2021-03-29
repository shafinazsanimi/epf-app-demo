import React, { Component } from 'react'
import {
    Box,
    Grid,
    createStyles,
    FormControl,
    IconButton,
    InputLabel,
    InputAdornment,
    OutlinedInput,
    withStyles,
    Typography,
    Card
} from '@material-ui/core';
import ApiService from '../services/apiService';
import DataTable from 'react-data-table-component';
import SortIcon from '@material-ui/icons/ArrowDownward';
import SearchIcon from '@material-ui/icons/Search';
import DataTableExtensions from 'react-data-table-component-extensions';
import { Filter } from 'react-feather';
import { Link } from 'react-router-dom';

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
        width: '100%'
    }
}));

const columns = [
    {
        name: "NO.",
        selector: "no",
        sortable: false
    },
    {
        name: "STATE",
        selector: "state",
        sortable: true
    },
    {
        name: "NAME",
        selector: "nam",
        sortable: true,
        cell: row => <Link to={'/details/' + row.key}>{row.nam} </Link>,
    },
    {
        name: "ADDRESS",
        selector: "ads",
        sortable: false,
        width: "700px"
    },
    {
        name: "DISTANCE",
        selector: "distance",
        sortable: true,
        width: "250px"
    }
];

class MainTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            officeList: []
        }
    }

    componentDidMount() {
        ApiService.getOfficeDetails(data => {
            this.setState({
                ...this.state,
                officeList: data,
                isLoading: false
            })
        });
    }

    render() {
        const { classes } = this.props;
        return !this.state.isLoading && (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"

            >
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    md={6}
                    xs={12}
                >
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"

                    >
                        <Box
                            display="flex"
                        >
                            <Typography className={classes.mainTitle}>
                                Locator
                        </Typography>
                        </Box>
                        <Box
                            display="flex"
                        >
                            <Typography className={classes.subTitle}>
                                List of Offices
                        </Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    md={6}
                    xs={12}
                >
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="row"
                    >
                        <FormControl variant="outlined" color="secondary" size="small" margin="normal" fullWidth>
                            <InputLabel htmlFor="outlined-adornment">Search...</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                        >
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={63}
                            />
                        </FormControl>
                        <IconButton>
                            <Filter color='#2f3291' />
                        </IconButton>
                    </Box>
                </Grid> */}

                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    md={12}
                    xs={12}
                >
                    <Card className={classes.tableCard}>
                        <DataTableExtensions
                            columns={columns}
                            data={this.state.officeList}
                            export={false}
                            print={false}
                            filterPlaceholder="Search..."
                        >
                            <DataTable
                                noHeader
                                defaultSortField="State"
                                sortIcon={<SortIcon />}
                                pagination
                            />
                        </DataTableExtensions>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(MainTable);
