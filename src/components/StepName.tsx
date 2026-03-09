import React from 'react';
import { useForm } from '../formContext/FormContext';
import InputField from './InputField';

const StepName = () => {
    const { formData, updateField, errors } = useForm();

    return (
        <div className="step-container">
            <h2>Let's get to know you</h2>
            <p className="desc">Enter your details below to continue.</p>
            <div className="name-stack">
                <InputField 
                    label="First Name"
                    placeholder="e.g. Jane"
                    value={formData?.firstName}
                    onChange={(e) => updateField('firstName', e.target.value)}
                    error={errors.firstName}
                />
                <InputField 
                    label="Last Name"
                    placeholder="e.g. Doe"
                    value={formData.lastName}
                    onChange={(e) => updateField('lastName', e.target.value)}
                    error={errors.lastName}
                />
            </div>
        </div>
    );
};

export default StepName;