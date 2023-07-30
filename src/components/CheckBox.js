import React from 'react'

const CheckBox = ({ className, lable, ...rest }) => {
    return (
        <label className={className}>
            <input type="checkbox" {...rest} />
            <span>{lable}</span>
        </label>

    )
}

export default CheckBox