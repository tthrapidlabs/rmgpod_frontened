import React, { useState } from 'react';
import Page1 from './Page1';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Stack, CssBaseline, createTheme, Box, ThemeProvider } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import Image from './Image';
import Test from './Test';

const Index = () => {
    const [mode, setMode] = useState("light")

    const DarkTheme = createTheme({
        palette: {
            mode: mode
        }
    })

    return (
        <ThemeProvider theme={DarkTheme}>
            <Box
                bgcolor={'background.default'}
                color={'text.primary'}
            >
                <Navbar />

                <Routes>
                    <Route path="/" element={<Page1 />} />
                    <Route path="/image" element={<Image />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
                
                <CssBaseline />

            </Box>
        </ThemeProvider>
    );
}

export default Index;
