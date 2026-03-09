import React, { useState } from 'react';
import { useForm } from '../formContext/FormContext';

const StepPassword = () => {
    const { formData, updateField, errors } = useForm();
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const password = formData.password || '';
    const confirmPassword = formData.confirmPassword || '';

    const checks = [
        { label: "At least 8 characters", met: password.length >= 8 },
        { label: "Contains a number & special character", met: /\d/.test(password) && /[!@#$%^&*]/.test(password) },
        { label: "Passwords must match", met: password === confirmPassword && password !== '' }
    ];

    return (
        <div className="step-container">
            <h2>Create Password</h2>
            <p className="desc">Follow the steps to secure your account</p>

            {/* Main Password */}
            <div className="input-group">
                <label>Enter new password*</label>
                <div className="pass-input-wrapper">
                    <input
                        type={showPass ? "text" : "password"}
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e) => updateField('password', e.target.value)}
                        className={errors.password ? 'input-error' : ''}
                    />
                    <button type="button" className="toggle-btn" onClick={() => setShowPass(!showPass)}>
                        {showPass ? "🙈" : "👁️"}
                    </button>
                </div>
            </div>

            {/* Confirm Password */}
            <div className="input-group">
                <label>Confirm password*</label>
                <div className="pass-input-wrapper">
                    <input
                        type={showConfirm ? "text" : "password"}
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => updateField('confirmPassword', e.target.value)}
                        className={errors.confirmPassword ? 'input-error' : ''}
                    />
                    <button type="button" className="toggle-btn" onClick={() => setShowConfirm(!showConfirm)}>
                        {showConfirm ? "🙈" : "👁️"}
                    </button>
                </div>
            </div>

            {/* Requirements Checklist from Image */}
            <div className="password-requirements">
                {checks.map((check, index) => (
                    <div key={index} className={`requirement-item ${check.met ? 'met' : ''}`}>
                        <span className="bullet">{check.met ? '✓' : '○'}</span>
                        {check.label}
                    </div>
                ))}
            </div>
            {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
        </div>
    );
};

export default StepPassword;