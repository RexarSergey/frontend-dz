import React from "react"

export function ElementEditable({value, showInputEle, onChange, onBlur, onDoubleClick}) {
    return (
        <span> {
            showInputEle ? (
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    autoFocus
                />
            ) : (
                <span
                    onDoubleClick={onDoubleClick}
                    // style={{
                    //     display: "inline-block",
                    //     height: "36px",
                    //     minWidth: "300px",
                    // }}
                >
            {value}
          </span>
            )
        }
    </span>)
}