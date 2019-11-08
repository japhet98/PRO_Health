import React, { Component } from 'react'

import {
    withForm,
    withFormButton,
} from "react-form-validation-context";

export const Input = withForm(({ value, onChange, error, showErrors, placeholder,name }) => (
    <div className={showErrors && error && 'input-error'}>
        <input type="text" onChange={v => onChange(v)} value={value} placeholder={placeholder} name={name} />
        {showErrors && error && <span>{error}</span>}
    </div>
));

export const Dropdown = withForm(
    ({ value, onChange, error, showErrors, options, id }) => (
        <div className={showErrors && error && 'drop-down-error'}>
            <select id={id} onChange={onChange}>
                {options.map(({ label, val }) => (
                    <option key={val} checked={val === value} value={val}>
                        {label}
                    </option>
                ))}
            </select>
            {showErrors && error && <div>{error}</div>}
        </div>
    )
);

export const Radios = withForm(
    ({ value, onChange, error, showErrors, options, id }) => (
        <div>
            {options.map(({ label, val }) => (
                <React.Fragment key={val}>
                    <input
                        type="radio"
                        onChange={() => onChange(val)}
                        name={id}
                        checked={value === val}
                    />
                    <label onClick={() => onChange(val)} htmlFor={id}>
                        <span>{label}</span>
                    </label>
                </React.Fragment>
            ))}
            {showErrors && error && <div className="radios-error">{error}</div>}
        </div>
    )
);

export const Button = withFormButton(({ children, ...rest }) => (
    <button type="button" {...rest}>
        {children}
    </button>
));
