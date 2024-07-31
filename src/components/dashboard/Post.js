import React, { useState } from 'react';
import { Paper, Stack, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, TypographyTypeMap, Button, Typography, Tooltip, Fab } from '@mui/material';
import { Add as AddIcon, EmojiEmotions as EmojiEmotionsIcon, Image, VideoCameraBack, PersonAdd, DateRange } from '@mui/icons-material'
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import TestcaseModal from './TestcaseModal';
import { styled } from '@mui/material/styles';

import './Modalstyle.css'


function checkProgress(status) {
    if (status == 'inprogress') {
        return (
            <Tooltip title="In Progress">
                <RotateLeftIcon sx={{ color: '#fdbf02' }} />
            </Tooltip>
        )
    }
    if (status == 'in_validation') {
        return (
            <Tooltip title="Validation">
                <EventAvailableSharpIcon sx={{ color: '#fe7e03' }} />
            </Tooltip>
        )
    }
    if (status == 'completed') {
        return (
            <Tooltip title="Completed">
                <CheckCircleOutlineIcon sx={{ color: '#348939' }} />
            </Tooltip>
        )
    }
}


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    width: '50%',
    height: '70%',
    overflowY: 'scroll'
};

const Post = ({ data, UpdateData, checked, setChecked, switchTo, snackOpen, setSnackOpen, handleOpenSnack, handleCloseSnack }) => {

    const [modalopen, setModalopen] = useState(false)

    const [selectedTask, setSelectedTask] = useState({})

    const handleClose = () => {
        setModalopen(false)
    }

    const handleOpen = (item) => {
        setSelectedTask(item)
        setModalopen(true)
    }

    return (
        <>

            {data.map((item, key) => {
                return (
                    <div key={key}>
                        <Paper sx={{ m: 2 }} elevation={6} >
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {item.issue}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary" >
                                        {item.status}
                                    </Typography>
                                    <Typography variant="body2">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Stack direction="row" gap={1} mt={2} mb={3}>
                                        <Tooltip title="Icon">
                                            <EmojiEmotionsIcon color='primary' />
                                        </Tooltip>
                                        <Tooltip title="Add photo">
                                            <Image color='secondary' />
                                        </Tooltip>
                                        {checkProgress(item.status)}
                                        <Tooltip title="More">
                                            <AddCircleOutlineIcon sx={{ color: '#6f1496' }} onClick={() => handleOpen(item)} />
                                        </Tooltip>
                                    </Stack>
                                </CardActions>
                            </Card>
                        </Paper>
                    </div>
                )
            })}

            <TestcaseModal {...{ modalopen, handleClose, setSelectedTask, item: selectedTask, checked, setChecked, switchTo, snackOpen, setSnackOpen, handleOpenSnack, handleCloseSnack, UpdateData }} />

        </>
    );
}

export default Post;
