'use client'
import { Flex, Image, Grid, Tabs, Tab, TabList, TabIndicator, Box } from '@chakra-ui/react'

function Navbar() {
    // const [underline, setUnderline]
    return (
        <Box position='sticky' top='0' backgroundColor='yellow' boxShadow='0px 1px 10px #999' h={100}>
            <Flex justifyContent='space-between' m='0px 125px'>
                <Flex w='315px' margin='15px 0px'>
                    <Image src="Vector.png" width='56px' height='56px' />
                    <Grid marginLeft='12px'>
                        <Grid fontFamily="Judson" fontWeight="bold" alignItems='end' fontSize='32px'>Axis</Grid>
                        <Grid fontFamily="Judson" fontWeight="bold" alignItems='end' fontSize='11px' letterSpacing='2.25px'>Institute</Grid>
                    </Grid>
                </Flex>
                <Tabs position="relative" variant="unstyled" alignSelf='center'>
                    <TabList >
                        <Tab fontSize={19} color='black' textDecoration='underline'>Home</Tab>
                        <Tab fontSize={19} color='black'>contact us</Tab>
                        <Tab fontSize={19} color='black'>About us</Tab>
                        <Tab fontSize={19} color='black'>Terms</Tab>
                    </TabList>
                    <TabIndicator
                    // mt="-10px"
                    // height="1.5px"
                    // width='auto'
                    // bg="black"
                    // borderRadius="1px"
                    />
                </Tabs>
            </Flex>
        </Box>
    )
}

export default Navbar