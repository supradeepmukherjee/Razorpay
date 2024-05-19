import { Box, Stack } from '@chakra-ui/react'
import Card from '../CardComponent'
import axios from 'axios'
import server from '../constant'

const Home = () => {
    const submitHandler = async amt => {
        const { data: { order } } = await axios.post(`${server}/checkout`, { amt })
        const { data: { key } } = await axios.get(`${server}/key`)
        const rzp = new window.Razorpay({
            key,
            amount: order.amt,
            currency: "INR",
            name: "Supradeep Mukherjee",
            description: "Testing Payment Gateway Integration",
            image: "https://avatars.githubusercontent.com/u/113124882?v=4",
            order_id: order.id, //sample Order ID. Pass `id` obtained in response of Step1
            callback_url: `${server}/verify`,
            prefill: {
                name: "Supradeep Mukherjee",
                email: "supradeep2004@gmail.com",
                contact: "976543210"
            },
            notes: { address: "Razorpay Corporate Office" },
            theme: { color: "#3399cc" }
        })
        rzp.open()
    }
    return (
        <Box>
            <Stack direction={['column', 'row']} h='100vh' justifyContent='center' alignItems='center'>
                <Card
                    amt={4500}
                    img={'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg'}
                    submitHandler={submitHandler} />
                <Card
                    amt={60000}
                    img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9DBRsX24u-H1mQoEbl0oQgvGuW4UmYqZPGgfiY8HbQ&s'}
                    submitHandler={submitHandler} />
            </Stack>
        </Box>
    )
}

export default Home