import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';

const App = () => {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/yrc7J25vOg-0L3Q0DltLuamDMy3CngIv"}>
     <WalletProvider wallets={[]} autoConnect >
        <WalletModalProvider>
          <div>
              <WalletMultiButton />
              <WalletDisconnectButton style={{ marginTop: '10px' }} />
          </div>
          <div>
            hii 
          </div>
          <Airdrop/>
        </WalletModalProvider>
     </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
