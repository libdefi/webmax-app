import { VStack, Button, Text} from '@chakra-ui/react'
import { useAccountContext } from './useAccount';
import { IntmaxWalletSigner } from "webmax"

export default function Account() {
  const {account, setAccount} = useAccountContext();
  const handleConnect = async () => {
    const signer = new IntmaxWalletSigner();
    const res= await signer.connectToAccount();
    setAccount(res);

  }
  return (
    <VStack spacing={4}>
      {account ? (
        <>
          <Text>Your address: {account.address}</Text>
          <Text>Your chainId: {account.chainId}</Text>
          <Button colorScheme="blue" onClick={()=>{
            setAccount(null);
          }}>Dicconnect</Button>
        </>
      ) : (
        <>
          <Text>Not connected</Text>
          <Button colorScheme="blue" onClick={handleConnect}>Connect to IntmaxWallet</Button>
        </>
      )}
      <Button colorScheme="primary">Connect to IntmaxWallet</Button>
    </VStack>
  );
}
