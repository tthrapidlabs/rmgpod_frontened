import React from 'react';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { uploadImage, setImage } from '../../features/image/imageSlice';
import { useDispatch, useSelector } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import UploadIcon from '@mui/icons-material/Upload';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import './image.css';


const Image = () => {

    const navigate = useNavigate()

    const location = useLocation();

    const { image, loading, data, error } = useSelector((state) => state.image)

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {

        let formData = new FormData();

        formData.append("file", image);

        dispatch(uploadImage(formData))

    };

    const handleChangefile = (e) => {
        const file = e.target.files[0];

        if (file) {
            // setFile(file)
            dispatch(setImage(file));
            navigate('/image', { state: { image: file } })
        }
    }

    const setImageEmpty = async (e) => {
        dispatch(setImage(''))
        navigate('/')
    };

    return (
        <Box>
            <Box>

                {image ? (
                    <Box textAlign={'center'} sx={{ my: 1, p: 0.2 }}>
                        <img src={URL.createObjectURL(image)} alt="image" style={{
                            height: 'auto',
                            maxWidth: '100%',
                        }} />
                    </Box>
                ) : (
                    <Typography textAlign={'center'} sx={{ fontSize: 20, my: 2 }} color="initial">
                        No image uploaded.
                    </Typography>
                )}

                {loading && (
                    <Box sx={{ width: '100%', my: 2, p: 3 }}>
                        <Typography variant="h6" color="#f10000">
                            Scanning
                        </Typography>
                        <LinearProgress />
                    </Box>
                )}

                {(!loading && error) &&
                    <Box component="main" sx={{ flex: 1, my: 1, overflow: 'hidden', textAlign: 'center' }}>
                        <Typography variant='h4' color="#000">ERROR : 403</Typography>
                        <Typography variant='body1' color="#000">Please check your server</Typography>
                    </Box>
                }

            </Box>

            {data?.valid && (
                <>
                    <Box>
                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            sx={{
                                "&:hover": {
                                    backgroundColor: "#000"
                                },
                                height: '50px', width: '150px', backgroundColor: "#000", mr: 1
                            }}
                            onClick={setImageEmpty}
                            variant="contained">
                            Submit
                        </Button>
                    </Box>
                </>
            )}


            {(!data?.valid && data?.valid !== null) && (
                <>
                    <Box sx={{ p: 2 }}>
                        <Card sx={{ width: '100%', backgroundColor: "#fff4f5" }}>
                            <CardContent>
                                <Typography sx={{ color: "#f10000", fontSize: 18, fontWeight: '400' }} component="div" gutterBottom>
                                    The photo is rejected as per the guidelines
                                </Typography>
                                <Typography sx={{ color: "text.secondary", mb: 1 }} component="div" gutterBottom>
                                    Reason for rejection <Link to="/">Check guidelines</Link>
                                </Typography>

                                {data?.reason?.length && (
                                    data.reason.map((item, key) =>
                                        <Box key={key} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <NotInterestedIcon sx={{ fontSize: 30, mr: 1, color: "#ee6161" }} />
                                            <Typography sx={{ fontSize: 18 }} color="initial">
                                                {item}
                                            </Typography>
                                        </Box>
                                    )
                                )}
                            </CardContent>
                        </Card>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            sx={{
                                "&:hover": {
                                    backgroundColor: "#000"
                                },
                                height: '50px', width: '150px', backgroundColor: "#000", mr: 1
                            }}
                            component="label"
                            variant="contained">
                            <Box textAlign={'center'}>
                                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                                    <UploadIcon fontSize="medium" sx={{ color: '#fff' }} />
                                    <Typography sx={{ ml: 1 }} color='#fff'>Retake</Typography>
                                </Box>
                            </Box>
                            <input
                                name="uploadimage"
                                type="file"
                                hidden
                                onChange={handleChangefile}
                            />
                        </Button>
                    </Box>
                </>
            )}

            {(data?.valid == null && image != null) && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        sx={{
                            "&:hover": {
                                backgroundColor: "#000"
                            },
                            height: '50px', width: '150px', backgroundColor: "#000", mr: 1
                        }}
                        component="label"
                        variant="contained">
                        <Box textAlign={'center'}>
                            <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                                <UploadIcon fontSize="medium" sx={{ color: '#fff' }} />
                                <Typography sx={{ ml: 1 }} color='#fff'>Retake</Typography>
                            </Box>
                        </Box>
                        <input
                            name="uploadimage"
                            type="file"
                            hidden
                            onChange={handleChangefile}
                        />
                    </Button>
                    <Button
                        sx={{
                            "&:hover": {
                                backgroundColor: "#000"
                            },
                            height: '50px', width: '150px', backgroundColor: "#000"
                        }}
                        onClick={handleSubmit}
                        startIcon={<CameraAltIcon />} variant="contained">
                        Next
                    </Button>
                </Box>
            )}


        </Box>
    );
}

export default Image;
