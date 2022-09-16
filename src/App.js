//import logo from './logo.svg';
import './App.css';
import Nfts from './Components/Nfts';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Connection from './Components/MyConnection';
import Create from './Components/Create';
import { ethers } from "ethers";
import Dashboard from './Components/Dashboard';
import Transowner from './Components/Transowner';
import Transnft from './Components/Transnft';




const ContractAddress = "0x9F525C59C14F69FAab07B04E74e71d3c88b38376";
let ABI = [
  "function mint(address recipents, string memory _uri, string memory _n, string memory _des) public",
  "function getAlltoken() public view returns ((uint256, string,string,string)[] memory)",
  "function balanceOf(address) public view returns(uint256)",
  "function owner() public view virtual returns (address)",
  "function transferOwnership(address newOwner) public",
  "function safeTransferFrom( address from, address to, uint256 tokenId) public",

];
let mnemonic =
  "return happy milk ability moment bench input alien arrive success ritual present";
let wallet = ethers.Wallet.fromMnemonic(mnemonic);
let provider = new ethers.providers.InfuraProvider(
  "rinkeby",
  "d45d013ff4d24c6f89aac01e98e07cf8"
);
wallet = wallet.connect(provider);
window.address = wallet.address;

console.log(window.address);

window.instance = new ethers.Contract(ContractAddress, ABI, wallet);

function App() {
  let compo;
  switch (window.location.pathname) {
    case "/":
      compo = <Home></Home>
      break;
    case "/Nfts":
      compo = <Nfts></Nfts>
      break;
    case "/Connection":
      compo = <Connection></Connection>
      break;
    case "/Create":
      compo = <Create></Create>
      break;
    case "/Transowner":
      compo = <Transowner></Transowner>
      break;
    case "/Dashboard":
      compo = <Dashboard></Dashboard>
      break;
    case "/Transnft":
      compo = <Transnft></Transnft>
      break;
    default:
      compo = "More Features are coming soon!";
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      {compo}
    </div>
  );
}

export default App;
