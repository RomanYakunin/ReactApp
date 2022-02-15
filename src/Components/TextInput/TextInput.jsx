import React from "react";

export const TextInput = (props) => {

    return (
        <div>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                onChange={(e) => { props.getVal(props.field_name, e.target.value) }}
                
            />
        </div>
    )
}