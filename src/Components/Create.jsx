import React from "react";
async function mintNFTs() {
    let URI = document.getElementById("uri").value;
    let name = document.getElementById("n").value;
    let des = document.getElementById("d").value;
    let txHash = await window.instance.mint(window.address, URI,name,des);
    txHash.wait();
    document.getElementById("1").innerHTML="NFT created sucessfully!"
}

export default function Create() {
    return (<>
        <div>
            <br></br>
            <input className="form-control" type="text" id="uri" placeholder="Enter URI"></input><br></br>
            <input className="form-control form-control-lg" id="n" placeholder="NFT Name" type="text"></input><br></br>
            <textarea className="form-control form-control-lg" id="d" placeholder="Description"></textarea><br></br>
            <button className="btn btn-primary btn-lg" type="button" onClick={mintNFTs}>Create NFT</button><br></br><br></br>
            <label id="1">NFT Status</label>
        </div>



    </>);

}