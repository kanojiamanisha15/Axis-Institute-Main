import { Box, Flex, Text, Image, Icon, Button } from '@chakra-ui/react'
import React from 'react'

function Banner6() {
    return (
        <Flex w='95%' m='10px auto' position='relative' alignItems='center' mb={87}>
            <Box w='100%' bg='black' position='absolute' h={479}>
            </Box>
            <Flex zIndex={9} w='95%' m='auto' justifyContent='space-between'>
                <Box alignSelf='center' textAlign='-webkit-center' mr={10}>
                    <Text color='white' fontSize={32} mb={20}>Download Ios & Android app</Text>
                    <Flex alignItems='center' >
                        <Image src='Playstore.png' w={103} h={92} mr={25} />
                        <Button py={8} borderRadius={20} bg='white' color='black' fontSize={25}>Download Now</Button>
                    </Flex>
                </Box>
                <Image src='mobile-ui.png' w={705} h={587} />
            </Flex>

        </Flex >
    )
}

export default Banner6