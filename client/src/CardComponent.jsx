import { Button, Image, Text, VStack } from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
const Card = ({ amt, img, submitHandler }) => {
    return (
        <VStack>
            <Image src={img} boxSize='64' objectFit='cover' />
            <Text>
                Rs.{amt}
            </Text>
            <Button onClick={() => submitHandler(amt)}>
                Pay Now
            </Button>
        </VStack>
    )
}

export default Card