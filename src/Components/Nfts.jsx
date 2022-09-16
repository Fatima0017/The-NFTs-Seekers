import React, {useState, useEffect} from "react";
import Card from "./Card";


const  Nfts = () => {
    const [tokens, setTokens] = useState([]);

    useEffect(() => {
        if (tokens.length > 0) return;
        const getAllTokens = async () => {
            setTokens(await window.instance.getAlltoken())
        }
        getAllTokens();
    }, [tokens])

 useEffect(() => {
     if (tokens.length === 0) return;
     }, [tokens])
    
    return (<>
       <br></br>
        <h1>Welcome to all nfts</h1>
      
        {tokens.map((token) => {
           
                return <>
               
                <Card imgsrc={token[2]}
                title={token[1]}
                description={token[3]}
                />
             </>
        })}
       
       

        

        
    </>);

}
export default Nfts;
