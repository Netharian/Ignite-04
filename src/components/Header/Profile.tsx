import { Flex, Box, Avatar, Text } from "@chakra-ui/react"

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (


        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Lucas Melo</Text>
                    <Text color="gray.300" fontSize="small">lucasmfs21@gmail.com</Text>
                </Box>
            )}


            <Avatar size="md" name="Lucas Melo" src="https://github.com/netharian.png" />
        </Flex>

    );
}