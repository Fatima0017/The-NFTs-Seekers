import React from "react";
function Card(props) {

    return (<>
        <div className="cards" >

            <div className="card">
                <img src={props.imgsrc} className="card-img-top" alt="..." />
                <div className="card__info">
                    <h5 className="card__title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>

            </div>
        </div>

    </>);

}
export default Card;