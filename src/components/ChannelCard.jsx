import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/constants';


const ChannelCard = ({channelDetail: {id:{channelId}, snippet}}) => (
    <Box
        sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: {xs: '356px', md: '320px'},
            height: '326px',
            margin: 'auto'
        }}
    >
        <Link to={`/channel/${channelId}`}>
            <CardContent
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center', 
                color: '#fff'
            }}>
                <CardMedia
                    image={snippet?.thumbnails?.high.url || demoProfilePicture}
                    alt={snippet?.title}
                    sx={{ borderRadius: '50%', height: '180px', width: '180px', mb:2, border: '1px solid, #e3e3e3'}}
                />

                <Typography variant="h6">
                    {snippet?.title}
                    <CheckCircle sx={{ fontSize: 14, color:'gray', ml:'5px' }} />
                </Typography>

            </CardContent>
        </Link>
    </Box>
)

export default ChannelCard