const ethers = require('ethers')

const provider = new ethers.providers.JsonRpcProvider('HTTP://127.0.0.1:7545');

const balance = async () => {
    const balance = await provider.getBalance('0x6c16A5c1F671fead89EB0045a6d5b0E6aB74B5B0')
    console.log(ethers.utils.formatEther(balance));
}

balance()

