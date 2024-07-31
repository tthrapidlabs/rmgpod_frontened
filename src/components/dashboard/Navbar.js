import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, Menu, styled, MenuItem } from '@mui/material'
import { Toolbar, Typography, AppBar, Box, createTheme, ThemeProvider, InputBase, Grid, Paper, Button } from '@mui/material'
import Badge from '@mui/material/Badge';
import { Notifications, Mail, Pets } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate, Link } from 'react-router-dom';
import { setImage } from '../../features/image/imageSlice';

const useStyles = makeStyles({
    b: {
        backgroundColor: "red"
    }
})


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
})


const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: 20,
    alignItems: "center",
    [theme.breakpoints.up("sm")]: { display: "flex" }
}));




export default function ThemeUsage() {

    const [open, setOpen] = useState(false)

    const navigate = useNavigate();

    const classes = useStyles()
    return (
        <>
            <AppBar position="sticky" style={{ backgroundColor: '#f10000' }}>
                <StyledToolbar>
                    <Tooltip title="Click to go back">
                        <IconButton onClick={() => navigate('/')} >
                            <ArrowBackIcon sx={{ color: "#fff" }} />
                        </IconButton>
                    </Tooltip>
                    <Typography variant="h6" flex={1}>
                        Adhoc Delivery
                    </Typography>
                    <IconButton aria-label="delete" onClick={(e) => setOpen(true)}>
                        <MoreVertIcon sx={{ color: "#fff" }} />
                    </IconButton>
                </StyledToolbar>


                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={(e) => { setOpen(false) }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>

            </AppBar>

        </>
    );
}
