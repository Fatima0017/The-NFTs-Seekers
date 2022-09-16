import React from "react";

async function getBalance() {

    let balance = await window.instance.balanceOf(window.address);
    let owner = await window.instance.owner();

    document.getElementById("p1").innerHTML ="No of NFTs minted : "+ balance + ".";
    document.getElementById("p2").innerHTML ="Owner address : "+ owner + ".";
}

export default function Dashboard(){
        return(<>
            <h1>Dashboard</h1>
            <br></br>
            <div>
            <button id="btn2" type="button" className="btn btn-outline-primary" onClick={getBalance}>Display</button><br></br>
            </div><br></br>
            <div class="callout-info">
                <p id="p1"></p>
                <p id="p2"></p>
            </div>


            </>);
}