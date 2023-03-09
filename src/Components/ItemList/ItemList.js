import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function ItemList( { users }) {
    return (
        <div className="producto__content">
            {users.map((user) => (
                <div className="producto__content-img" key={user.id}>
                    <img src={user.img} alt={user.title} className="imagen"/>
                    <div className="producto__content-title">
                        <h1>{ user.title }</h1>
                    </div>
                    <Link to={`/producto/${user.id}`}>
                    <button>
                        Ver Más
                    </button>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ItemList;