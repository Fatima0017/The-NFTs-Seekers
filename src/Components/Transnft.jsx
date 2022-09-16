import React from "react";
async function transferNft() {
    let from = document.getElementById("f").value;
    let to = document.getElementById("t").value;
    let id = document.getElementById("i").value;
    let txHash = await window.instance.safeTransferFrom(from,to,id);
    txHash.wait();
    console.log(to,from,id);
}
export default function Transnft(){
return(<>
  <div>
            <br></br>
            <input className="form-control form-control-lg" id="f" placeholder="from (address)" type="text"></input><br></br>
            <input className="form-control form-control-lg" id="t" placeholder="to (address)" type="text"></input><br></br>
            <input className="form-control form-control-lg" id="i" placeholder="token (uint256)" type="number"></input><br></br>
            <button className="btn btn-primary btn-lg" type="button" onClick={transferNft}>Transfer NFT</button><br></br><br></br>
        </div>
</>);

}