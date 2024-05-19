import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import { useSearchParams } from "react-router-dom"

const Success = () => (
    <Box>
        <VStack h='100vh' justifyContent='center'>
            <Heading textTransform='uppercase'>
                Payment Successful
            </Heading>
            <Text>
                Transaction ID: {useSearchParams()[0].get('ref')}
            </Text>
        </VStack>
    </Box>
)

export default Success