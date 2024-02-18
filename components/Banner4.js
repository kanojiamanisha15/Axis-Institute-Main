import { Flex, Box, Image, Heading, Text, Highlight, Grid } from "@chakra-ui/react"

function Banner4() {

    const Teachers = [{ img: 'Teacher1.png', name: 'John Doe', desc: 'Join the journey of discovery and growth' }, { img: 'Teacher2.png', name: 'John Doe', desc: 'Join the journey of discovery and growth' }, { img: 'Teacher3.png', name: 'John Doe', desc: 'Join the journey of discovery and growth' }]
    return (
        <Grid h={644} w='90%' m='10px auto' textAlign='-webkit-center' mt={143}>
            <Heading fontSize={59} mb={63}>
                <Highlight
                    query={'Teachers'}
                    styles={{ color: 'red' }}
                >Meet Our Teachers
                </Highlight>
            </Heading>
            <Flex justifyContent='center'>
                {Teachers.map((teacher) => (
                    <Box w={347} h={492} borderRadius={20}>
                        <Image src={teacher.img} borderRadius='50%' w={156} h={145} mb={105} />
                        <Heading fontSize={46} mb='40px'>{teacher.name}</Heading>
                        <Text fontSize={31}>{teacher.desc}</Text>
                    </Box>
                ))}
            </Flex>
        </Grid>
    )
}

export default Banner4