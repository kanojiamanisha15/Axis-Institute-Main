import { Text, Image, Box } from "@chakra-ui/react"

function Footer() {
    return (
        <Box textAlign='-webkit-center'>
            <Text fontSize={41} fontStyle='oblique'>Follow us on</Text>
            <Text fontSize={65} mb={27}>INSTAGRAM</Text>
            <Image src="instagram.png" w={99} h={99} mb={85} />
            <Text fontSize={32}>Copyright (c) 2024 Axis institute | All rights reserved.</Text>
        </Box>
    )
}

export default Footer