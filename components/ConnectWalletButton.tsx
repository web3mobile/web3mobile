import { useAppKit } from '@reown/appkit-wagmi-react-native'
import React from 'react'
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from '@/components/ui/button'
import { formatAddress } from '@/helpers/formatAddress'
import { useAccount } from 'wagmi'

const ConnectWalletButton = () => {
  const { open, close } = useAppKit()
  const { address, isConnecting, isDisconnected } = useAccount()

  return (
    <ButtonGroup>
      <Button>
        <ButtonText onPress={() => open()}>
          {address ? formatAddress(address) : 'Connect wallet'}
        </ButtonText>
        {isConnecting && <ButtonSpinner />}
        {/* <ButtonIcon /> */}
      </Button>
    </ButtonGroup>
  )
}

export default ConnectWalletButton
