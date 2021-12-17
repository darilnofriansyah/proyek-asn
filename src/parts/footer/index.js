import { Image } from '@chakra-ui/image'
import { Box, Flex, Heading, Stack } from '@chakra-ui/layout'
import React from 'react'
import logo_panrb from "../../assets/images/logo/logo_panrb.png"
import logo_ui from "../../assets/images/logo/logo_ui.png"
import logo_dayamakara from "../../assets/images/logo/logo_dayamakara.png"
import logo_bkn from "../../assets/images/logo/logo_bkn.png"
import logo_lanri from "../../assets/images/logo/logo_lanri.png"
import logo_kasn from "../../assets/images/logo/logo_kasn.png"
import logo_bappenas from "../../assets/images/logo/logo_bappenas.png"
import logo_csgar from "../../assets/images/logo/logo_csgar.png"


export default function Footer() {
    return (
        <Flex bgColor="gray.200" direction="column">
            <Stack m="0">
                <Flex justifyContent="center" p="2rem" bgColor="red.700" color="white">
                    <Heading textAlign="center" size="md">COL ASN Indonesia merupakan hasil kolaborasi antara:</Heading>
                </Flex>
                <Stack spacing={{base:"3rem", lg:"5rem", xl:"10rem"}} py={{base:"4rem", lg:"3rem"}} justifyContent="center" px={{base:"3rem", lg:"9rem"}} direction={{base:"column", xl:"row"}}>
                    <Stack justifyContent="center" direction={{base: "column", md:"row"}} spacing={{base:"3rem", lg:"10rem"}}>
                        <Stack spacing={{base:"3rem", md:"5rem"}} alignItems="center">
                            <Image src={logo_panrb} width="16rem" minWidth="5rem"/>
                            <Image src={logo_ui} width="16rem" minWidth="5rem"/>
                        </Stack>
                        <Stack spacing={{base:"3rem", md:"5rem"}} alignItems="center">
                            <Image src={logo_kasn} width="7rem" minWidth="3rem"/>
                            <Image src={logo_dayamakara} width="16rem" minWidth="5rem"/>
                        </Stack>
                    </Stack>
                    <Stack justifyContent="center" direction={{base: "column", md:"row"}} spacing={{base:"3rem", lg:"10rem"}}>
                        <Stack spacing={{base:"3rem", md:"5rem"}} alignItems="center">
                            <Image src={logo_bkn} width="13rem" minWidth="5rem"/>
                            <Image src={logo_lanri} width="13rem" minWidth="5rem"/>
                        </Stack>
                        <Stack spacing={{base:"3rem", md:"5rem"}} alignItems="center">
                            <Image src={logo_bappenas} width="16rem" minWidth="5rem"/>
                            <Image src={logo_csgar} width="14rem" minWidth="5rem"/>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Flex>
    )
}
