import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export function Airdrop(){
    const wallet = useWallet();
    const {connection} = useConnection();
    // alert(wallet.publicKey.toString());
    async function sendAirdropToUser(){
         const amount = document.getElementById('publicKey').value;
        await connection.requestAirdrop(wallet.publicKey,amount*1000000000);
        alert("Airdrop sent")
    }
    return <div>
        
        <input  type="text" placeholder="Amount"/>
        <button onClick={sendAirdropToUser} >AirDrop</button>
    </div>
}