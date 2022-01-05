import { Flex, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import overview from "../../../assets/images/chart/overview.png"

export default function Overview() {
    return (
        <Flex direction="column" pt="4rem" px="4rem">
            <Stack>
                <Heading>
                    Overview
                </Heading>
                <Heading>
                    Metode Pemetaan Jabatan Kritikal ASN
                </Heading>
            </Stack>
            <Flex justifyContent="center">
                <Image src={overview}/>
            </Flex>
        </Flex>
    )
}
