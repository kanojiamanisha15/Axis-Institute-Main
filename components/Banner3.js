import { Button, Highlight, Text, Image, Flex, Heading, Grid, Box } from "@chakra-ui/react"

function Banner3() {
    return (
        <Flex w='80%' m='10px auto'>
            <Flex flexDirection='column' justifyContent='space-between'>
                <Heading fontSize={78}>
                    <Highlight
                        query={['Learn with', 'Faculties']}
                        styles={{ color: 'red' }}
                    >Learn with Best Faculties
                    </Highlight>
                </Heading>
                <Text fontSize={35}>Join the journey of discovery and growth at Axis Institute, where every student is empowered to shine!!Join the journey of discovery and growth at Axis Institute...</Text>
                <Button backgroundColor='red' color='white' fontSize={24} borderRadius={39} px={26.5} py={42} w={233}>Download App</Button>
            </Flex>
            <Image src='Faculty.png' w={450} h={622} />
        </Flex>
    )
}

export default Banner3