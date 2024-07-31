import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
 
const LoaderWithCheckmark = () => {
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 3 seconds for demo purposes
 
    return () => clearTimeout(timer);
  }, []);
 
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box position="relative" display="inline-flex">
        {loading ? (
          <Box
            component="div"
            sx={{
              width: 60,
              height: 60,
              border: '4px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '50%',
              borderTopColor: 'green',
              animation: 'spin 1s linear infinite',
            }}
          />
        ) : (
          <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
        )}
        {loading && (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <NotInterestedIcon style={{ color: 'green', fontSize: 24 }} />
          </Box>
        )}
      </Box>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </Box>
  );
};
 
export default LoaderWithCheckmark;