import React from "react";
async function transferOwner() {
    let newAdr = document.getElementById("a").value;
    let txHash = await window.instance.transferOwnership(newAdr);
    txHash.wait();
    
}
export default function Transowner() {
    return (<>
        <div>
            <br></br>
            <input className="form-control form-control-lg" id="a" placeholder="newOwner (address)" type="text"></input><br></br>
            <button className="btn btn-primary btn-lg" type="button" onClick={transferOwner}>Transfer Ownership</button><br></br><br></br>
        </div>
    </>);


}