const ether = require('ethers')

const provider = new ether.providers.JsonRpcProvider('https://ropsten.infura.io/v3/0d2a05c54d8e4857b8d333982f1ca30e');

const sender = '0x5aAB360f4eEC9C823175711d22D7D0C920D4481a';
const reciever = '0x74f9478fbAD90e25371C32428bf21c439b91C865';

const privateKey = '884ae64d8fc43f49a0c9fbce02f9eabdabfe21cdbe8e9cddb018d2d8016076d0';
const wallet = new ether.Wallet(privateKey, provider)

const main = async () => {

    const senderBal = await provider.getBalance(sender)
    const recieverBal = await provider.getBalance(reciever)

    console.log(`\n Sender Balance before transaction : ${ether.utils.formatEther(senderBal)}`);
    console.log(`\n Reciever Balance before transaction : ${ether.utils.formatEther(recieverBal)}`);

    const tx = await wallet.sendTransaction({
        to : reciever,
        value : ether.utils.parseEther('0.25')
    });

    await tx.wait();
    console.log(tx);

    const senderBal2 = await provider.getBalance(sender)
    const recieverBal2 = await provider.getBalance(reciever)

    console.log(`\n Sender Balance After transaction : ${ether.utils.formatEther(senderBal2)}`);
    console.log(`\n Reciever Balance After transaction : ${ether.utils.formatEther(recieverBal2)}`);
}
main()