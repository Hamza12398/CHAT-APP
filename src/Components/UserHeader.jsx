import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";

  const UserHeader = () => {


  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
				<Box>
					<Text fontSize={"2xl"} fontWeight={"bold"}>
						{/* {user.name} */}
            Hamza cherkaoui
					</Text>
					<Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>hamza.cherkaoui</Text>
						<Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>
							threads.net
						</Text>
					</Flex>
				</Box>
			</Flex>
    </VStack>
  );
}


export default UserHeader;
