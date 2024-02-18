import { Highlight, Box, Image, Heading, Flex } from "@chakra-ui/react"

function Banner2() {
    const Cards = [{ img: 'Card1.png', sub: 'Physics' }, { img: 'Card2.png', sub: 'Chemistry' }, { img: 'Card3.png', sub: 'Biology' }, { img: 'Card4.png', sub: 'Maths' }]
    return (
        <Box w='80%' m='10px auto' mb='96px'>
            <Heading fontSize='59px' textAlign='center' mb='124px'>
                <Highlight
                    query={['Notes', 'Daily Practice Problems']}
                    styles={{ color: 'red' }}
                >Get Notes and Daily Practice Problems
                </Highlight>
            </Heading>
            <Flex justifyContent='space-evenly'>
                {Cards.map((card) => (
                    <Box bg='red' w={266} h={352} borderRadius={38} textAlign='-webkit-center' m='0px 25px'>
                        <Image src={card.img} borderRadius='50%' w={108} h={108} mt={39} mb={100} />
                        <Heading color='white' fontSize={39}>{card.sub}</Heading>
                    </Box>
                ))}
            </Flex>
        </Box>
    )
}

export default Banner2