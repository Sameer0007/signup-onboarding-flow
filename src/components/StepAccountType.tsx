import React from 'react';
import { useForm } from '../formContext/FormContext';

const StepAccountType = () => {
    const { formData, updateField, errors } = useForm();

    const options = [
        { id: 'personal', label: 'Personal', icon: '👤' },
        { id: 'business', label: 'Business', icon: '💼' }
    ];

    return (
        <div className="step-container">
            <h3>To join us tell us <strong>what type of account</strong> you are opening</h3>
            <div className="card-container">
                {options.map((opt) => (
                    <div 
                        key={opt.id}
                        className={`selection-card ${formData.accountType === opt.id ? 'active' : ''}`}
                        onClick={() => updateField('accountType', opt.id)}
                    >
                        <span className="icon">{opt.icon}</span>
                        <span className="label">{opt.label}</span>
                        <div className={`radio ${formData.accountType === opt.id ? 'checked' : ''}`} />
                    </div>
                ))}
            </div>
            {errors.accountType && <p className="error-text">{errors.accountType}</p>}
        </div>
    );
};

export default StepAccountType;