import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {`Copyright ${new Date().getFullYear()} © bfuentesc.`}
        </Typography>
    );
}

const Footer = () => {

    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Copyright />
            <Container maxWidth="lg">

                <Typography
                    variant="body2"
                    align="center"
                    color="text.secondary"
                >
                    {/* cvss-calculator is developed for private use and distributed under a BSD-like license. Use, modification, and distribution are permitted under license terms. */}
                    {'Common Vulnerability Scoring System (CVSS) is an open standard managed by'} <Link color="inherit" href="https://www.first.org/cvss/">
                        FIRST.Org
                    </Link>
                    {', available for public use.'}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;