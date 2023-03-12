import {ReactNode, useContext, useState, createContext, SetStateAction, Dispatch} from "react"
import {IntmaxWalletAccount} from "webmax"

interface AccountContextType {
  account: IntmaxWalletAccount | null
  setAccount: Dispatch<SetStateAction<IntmaxWalletAccount | null>>
}

const AccountContext = createContext<AccountContextType>(
  {} as AccountContextType
);

interface Props {
  children: ReactNode
}

export const AccountContextProvider = ({children}: Props) => {
  const [account, setAccount] = useState<IntmaxWalletAccount | null>(null)

  return (
    <AccountContext.Provider value={{account, setAccount}}>
      {children}
    </AccountContext.Provider>
  )
}

export const useAccountContext = () => {
  return useContext(AccountContext);
}
