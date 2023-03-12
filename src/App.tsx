import { Flex, Center, Box, VStack, Text } from '@chakra-ui/react'
import { AccountContextProvider } from './useAccount'
import Account from "./Account"
function App() {
  return (
    // <Flex width="100vw" height="100vh" alignContent="center" justifyContent="center">
    //   <Center>
    //     Webmax Demo App
    //   </Center>
    // </Flex>
    <AccountContextProvider>
      <Flex width="100vw" height="100vh" alignContent="center" justifyContent="center">
        <Center>
          <VStack spacing={4} display="flex" flexDirection="column">
            <Text>Webmax Demo App</Text>
            <Account />
          </VStack>
        </Center>
      </Flex>

    </AccountContextProvider>
  );
}

export default App;
