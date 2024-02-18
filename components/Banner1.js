import { Box, Flex, Heading, Highlight, Image, Text } from '@chakra-ui/react'

function Banner1() {
    return (
        <Flex w='80%' m='143px auto'>
            <Box w='600px'>
                <Highlight
                    query='Achive New Heights'
                    styles={{ px: '3', py: '3', rounded: 'full', bg: 'red', color: 'white', fontSize: '16px', fontWeight: 'bold' }}
                >Achive New Heights
                </Highlight>
                <Heading fontSize='50px' w='400px' m='25px 0px'>
                    <Highlight
                        query='Axis Institute'
                        styles={{ color: 'red' }}
                    >
                        Learn Fast with Axis Institute Enrol Now!!!
                    </Highlight>
                </Heading>
                <Text fontSize='24' fontFamily='Judson' mb='42px'>Join the journey of discovery and growth at Axis Institute, where every student is empowered to shine!!</Text>
                <Flex w='500px' justifyContent='space-between'>
                    <Highlight
                        query='Enroll now'
                        styles={{ px: '5', py: '2', rounded: 'full', bg: 'red', color: 'white', fontSize: '24px', fontWeight: 'Bold' }}
                    >Enroll now
                    </Highlight>
                    <Flex>
                        <Text alignSelf='center' fontSize='24px'>WATCH VIDEO </Text>
                        <Image src='video.png' w='36px' h='36px' alignSelf='center' ml={5}></Image>
                    </Flex>
                </Flex>
            </Box>
            <Image src='247.png' w='490px' h='469px' />
        </Flex>
    )
}

export default Banner1