import { ethers } from "ethers";


function getEth() {
  //@ts-ignore
  const eth = window.ethereum;
  if (!eth) {
    throw new Error("get metamask and a positive attitude");
  }
  return eth;
}

async function hasAccounts() {
  //@ts-ignore
  const eth = getEth();
  const accounts = await eth.request({ method: "eth_accounts" }) as string[];

  return accounts && accounts.length;
}

async function requestAccounts() {
  //@ts-ignore
  const eth = getEth();
  const accounts = await eth.request({ method: "eth_requestAccounts" }) as string[];

  return accounts && accounts.length;
}

async function run() {
  if (!await hasAccounts() && !await requestAccounts()) {
    throw new Error("Please let me take your money");
  }
  const hello = new ethers.Contract(
    "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512",
    [
      "function hello() public pure returns (string memory)"
    ],
    new ethers.providers.Web3Provider(getEth()), // contacting the network
  );
  document.body.innerHTML = await hello.hello();
}
run()