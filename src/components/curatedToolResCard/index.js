import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function ProdCard({ data }) {
    return (
        <div className="mycard">
            {data?.map((item, index) => (
                <a className="mycard2" href={item.url} target="_blank" rel="noreferrer">
                    <Card key={index} style={{ maxWidth: "24rem" }}>
                        <Card.Img className="image-cd" variant="top" src={item.imageLink} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </a>
            ))}
        </div>
    );
}

export default ProdCard;
