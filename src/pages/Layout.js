import { Box, Stack } from '@chakra-ui/layout'
import React from 'react'
import Footer from '../parts/footer'
import Header from '../parts/header'

export default function CustomLayout({children}) {
    return (
        <Stack spacing={0}>
            <Box width="100%">
                <Header/>
            </Box>
            <Box>
                {children}
            </Box>
            <Box>
                <Footer/>
            </Box>
        </Stack>
    )
}
