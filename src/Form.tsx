import {Button} from "@chakra-ui/react"
import {useAccountContext} from "./useAccount"
export default function Form() {
  const {account} = useAccountContext();
  if (!account) {
    return null;
  }
  return (
    <form>
      <Button type="submit">Submit</Button>
    </form>
  )
}
