import React, { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, Tooltip, Switch } from '@mui/material';
import { ModeNight } from '@mui/icons-material';

// Import your image icons
import onboardingIcon from '../images/onboarding.png';
import planningIcon from '../images/planning.png';
import executionIcon from '../images/implementation.png';
import testingIcon from '../images/testing.png';
import optimizingIcon from '../images/optimization.png';
import homeIcon from '../images/home3.png';
import { useNavigate } from "react-router-dom";

const Sidebar = ({ mode, setMode }) => {
    // Define tooltips for each icon
    const tooltips = [
        "Home",
        "Onboarding & Training",
        "Test Planning & Design",
        "Implementation & Execution",
        "Evaluation & Reporting",
        "Review & Optimization",
    ];
    const [selectedIndex, setSelectedIndex] = useState(null);
    // State for storing tooltip visibility
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const history = useNavigate();

    return (
        // <Box
        //     sx={{ display: { xs: "none", sm: "block" } }}
        //     flex={1}
        //     p={2}
        // >
            <Box position="fixed">
                <List>

                     {/* Home */}
                     <Tooltip title={tooltips[0]} open={tooltipOpen && selectedIndex === 0} disableHoverListener={!tooltipOpen}>
                        <ListItem disablePadding onClick={() => history('/')}>
                            <ListItemButton
                                onMouseEnter={() => { setTooltipOpen(true); setSelectedIndex(0); }}
                                onMouseLeave={() => { setTooltipOpen(false); setSelectedIndex(null); }}
                            >
                                <ListItemIcon>
                                    <img src={homeIcon} alt="Onboard" style={{ width: '35px', height: '35px' }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </Tooltip>

                    {/* Onboarding & Training */}
                    <Tooltip title={tooltips[1]} open={tooltipOpen && selectedIndex === 1} disableHoverListener={!tooltipOpen}>
                        <ListItem disablePadding onClick={() => history('/chatbot')}>
                            <ListItemButton
                                onMouseEnter={() => { setTooltipOpen(true); setSelectedIndex(1); }}
                                onMouseLeave={() => { setTooltipOpen(false); setSelectedIndex(null); }}
                            >
                                <ListItemIcon>
                                    <img src={onboardingIcon} alt="Onboard" style={{ width: '35px', height: '35px' }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </Tooltip>

                    {/* Test Planning & Design */}
                    <Tooltip title={tooltips[2]} open={tooltipOpen && selectedIndex === 2} disableHoverListener={!tooltipOpen}>
                        <ListItem disablePadding>
                            <ListItemButton
                                onMouseEnter={() => { setTooltipOpen(true); setSelectedIndex(2); }}
                                onMouseLeave={() => { setTooltipOpen(false); setSelectedIndex(null); }}
                            >
                                <ListItemIcon>
                                    <img src={planningIcon} alt="Planning" style={{ width: '35px', height: '35px' }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </Tooltip>

                    {/* Implementation & Execution */}
                    <Tooltip title={tooltips[3]} open={tooltipOpen && selectedIndex === 3} disableHoverListener={!tooltipOpen}>
                        <ListItem disablePadding onClick={() => history('/testcase')}>
                            <ListItemButton
                                onMouseEnter={() => { setTooltipOpen(true); setSelectedIndex(3); }}
                                onMouseLeave={() => { setTooltipOpen(false); setSelectedIndex(null); }}
                            >
                                <ListItemIcon>
                                    <img src={executionIcon} alt="Execution" style={{ width: '40px', height: '40px' }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </Tooltip>

                    {/* Evaluation & Reporting */}
                    <Tooltip title={tooltips[4]} open={tooltipOpen && selectedIndex === 4} disableHoverListener={!tooltipOpen}>
                        <ListItem disablePadding>
                            <ListItemButton
                                onMouseEnter={() => { setTooltipOpen(true); setSelectedIndex(4); }}
                                onMouseLeave={() => { setTooltipOpen(false); setSelectedIndex(null); }}
                            >
                                <ListItemIcon>
                                    <img src={testingIcon} alt="Testing" style={{ width: '35px', height: '35px' }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </Tooltip>

                    {/* Review & Optimization */}
                    <Tooltip title={tooltips[5]} open={tooltipOpen && selectedIndex === 5} disableHoverListener={!tooltipOpen}>
                        <ListItem disablePadding>
                            <ListItemButton
                                onMouseEnter={() => { setTooltipOpen(true); setSelectedIndex(5); }}
                                onMouseLeave={() => { setTooltipOpen(false); setSelectedIndex(null); }}
                            >
                                <ListItemIcon>
                                    <img src={optimizingIcon} alt="Optimizing" style={{ width: '35px', height: '35px' }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </Tooltip>
                </List>
            </Box>
        // </Box>
    );
}

export default Sidebar;
