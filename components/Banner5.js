import { Flex, Heading, Image, Text, Box, Grid } from "@chakra-ui/react"

function Banner5() {
    const Stars = [1, 2, 3, 4, 5]
    return (
        <Flex w='70%' m='10px auto' mb={169}>
            <Image src="StudentReviews.png" w={438} h={587} />
            <Grid ml={45} mt={10}>
                <Heading fontSize={59} mb={-33}>Students reviews</Heading>
                <Text fontSize={28}>Join the journey of discovery and growth at Axis Institute, where every student is empowered to shine!!</Text>
                <Flex>
                    {Stars.map(() => (
                        <Image src="Star.png" w={66} h={66} />
                    ))}
                </Flex>
                <Flex>
                    <Image src="Samtha.png" borderRadius='50%' w={100} h={100} />
                    <Box textAlign='center' w={421}>
                        <Text fontSize={39}>samtha smith</Text>
                        <Text fontSize={20}>axis institute</Text>
                    </Box>
                </Flex>
            </Grid>
        </Flex >
    )
}

export default Banner5