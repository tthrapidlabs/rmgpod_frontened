import React, { useState, useEffect } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useDispatch, useSelector } from 'react-redux';
import UploadIcon from '@mui/icons-material/Upload';
import { uploadImage, setImage } from '../../features/image/imageSlice';
import AdjustIcon from '@mui/icons-material/Adjust';
import './Page1.css';

const Postal = () => {

    const { orderstatus } = useSelector((state) => state.image)

    const [checked, setChecked] = useState(false);

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleChangefile = (e) => {
        const file = e.target.files[0];

        if (file) {
            // setFile(file)
            dispatch(setImage(file));
            navigate('/image', { state: { image: file } })
        }
    }


    return (
        <>

            <Box sx={{ p: 1, pb: '50px' }}>

                <Card sx={{ width: '100%', mb: 2 }}>
                    <CardContent>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                            <Typography variant="h6" component="div" flex={1}>
                                Order ID #657664754
                            </Typography>

                            <AdjustIcon fontSize='small' sx={{ color: 'green', mr: 0.4 }} />

                            <Typography sx={{ fontSize: 18 }} component="div">
                                {orderstatus}
                            </Typography>
                        </Box>

                        <Divider sx={{ mb: 2 }} />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                            <Box>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    Customer name
                                </Typography>

                                <Typography sx={{ fontSize: 20 }} component="div">
                                    Mathew Perry
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    Customer Mobile number
                                </Typography>

                                <Typography sx={{ fontSize: 20 }} component="div">
                                    +44(0)907-989-1976
                                </Typography>
                            </Box>
                        </Box>

                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            Delivery location
                        </Typography>

                        <Typography sx={{ fontSize: 20 }} component="div">
                            3282 Williams Mine Road, Nelson Lagoon, Alaska
                        </Typography>


                    </CardContent>

                </Card>

                <Card sx={{ width: '100%', backgroundColor: "#fff4f5" }}>
                    <CardContent>
                        <Typography variant='h6' sx={{ color: "#f10000", mb: 1 }} component="div">
                            Instructions
                        </Typography>

                        <ul style={{
                            paddingLeft: 20,
                        }}>

                            <li>1 Items(S) with photo on delivery</li>
                            <li>0 Items(S) with no photo on delivery</li>
                            <li>This delivery requires photographic evidence,</li>
                            <li>Please take a photo of the item(s) on the doorstep with an open door. Do not Photograph the customer face</li>
                            <li>If the item(s) requires a signature and name, please take this when prompted to do so.</li>
                            <li>If the item(s) can fit through the letterbox, and does not require a signature, place item half in take a photo, then post-using a posting peg.</li>

                        </ul>
                    </CardContent>

                </Card>

                <Box sx={{ p: 1 }}>
                    <FormGroup>
                        <FormControlLabel sx={{ color: "#f10000" }} required control={<Checkbox
                            checked={checked}
                            onChange={handleCheck}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />} label="I confirm & take photo of all items at door step" />
                    </FormGroup>
                </Box>

            </Box>


            {/* <Button startIcon={<CameraAltIcon />} variant="contained" sx={{ height: '50px', width: '100%', backgroundColor: "#000", position: 'fixed', bottom: 0 }}>
                Capture image
            </Button> */}


            <Button
                variant="contained"
                component="label"
                disabled={!checked}
                sx={{
                    "&:hover": {
                        backgroundColor: "#000"
                    },
                    "&.Mui-disabled": {
                        background: "#000000e0",
                        color: "#c0c0c0"
                    },
                    height: '50px', width: '100%', backgroundColor: "#000", position: 'fixed', bottom: 0
                }}                >
                <Box textAlign={'center'}>
                    <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                        <UploadIcon fontSize="medium" sx={{ color: '#fff' }} />
                        <Typography sx={{ ml: 1 }} color='#fff'>UPLOAD PHOTO</Typography>
                    </Box>
                </Box>
                <input
                    name="csvdata"
                    type="file"
                    hidden
                    onChange={handleChangefile}
                />
            </Button>
        </>
    );
};
export default Postal;