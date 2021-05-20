import { Flex, Box, Avatar, Text } from "@chakra-ui/react"

export function Profile() {
    return (


        <Flex
            align="center"
        >

            <Box mr="4" textAlign="right">
                <Text>Lucas Melo</Text>
                <Text color="gray.300" fontSize="small">lucasmfs21@gmail.com</Text>
            </Box>
            <Avatar size="md" name="Lucas Melo" src="https://github.com/netharian.png" />
        </Flex>

    );
}