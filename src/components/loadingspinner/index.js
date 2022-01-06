import React from 'react'
import {
    Spinner,
    Center,
} from "@chakra-ui/react";

export default function LoadingSpinner() {
    return (
        <Center h="100vh">
          <Spinner size="xl" />
        </Center>
    )
}