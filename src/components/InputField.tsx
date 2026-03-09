import React from 'react';

interface InputProps {
    label: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    maxLength?: number;
}

const InputField = ({ label, type = "text", placeholder, value, onChange, error, maxLength }: InputProps) => {
    return (
        <div className="input-group">
           {label ? 
                <label>{label}</label>
                : <></>}
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange}
                maxLength={maxLength}
                className={error ? 'input-error' : ''}
            />
            {error && <span className="error-text">{error}</span>}
        </div>
    );
};

export default InputField;