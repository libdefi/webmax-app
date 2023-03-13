import { Button, VStack, Box, Text, Input, useToast } from "@chakra-ui/react"
import { useAccountContext } from "./useAccount"
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"
import { useForm } from 'react-hook-form'
import { IntmaxWalletSigner } from "webmax"

const schema = zod.object({
  to: zod.string(),
  value: zod.string(),
})

export default function Form() {
  const {account} = useAccountContext();
  const toast = useToast()
  const [receipt, setReceipt] = useState<string | null>(null);
  const {
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });
  if (!account) {
    return null;
  }
  return (
    <form 
      onSubmit={handleSubmit(async ({ to, value }) => {
        const signer = new IntmaxWalletSigner(account);
        const tx = {
          to,
          value,
          gasLimit: 21000,
        };
        const res = await signer.sendTransaction(tx);
        setReceipt(JSON.stringify(res));
        toast({
          title: "Success",
          position: "top",
          status: "success",
          isClosable: true,
        })
      })}
    >
      <VStack spacing={4}>
        <Box>
          <Text>to</Text>
          <Input {...register('to')}/>
          {errors.to?.message && <Text>{errors.to?.message as string}</Text>}
        </Box>
        <Box>
          <Text>value</Text>
          <Input {...register('value')}/>
          {errors.value?.message && (
            <Text>{errors.value?.message as string}</Text>
          )}
        </Box>
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
        {receipt && (
          <Box wordBreak="break-word" w="500px">
            <Text>Receipt: {receipt}</Text>
          </Box>
        )}
      </VStack>
    </form>
  );
}
