import React, { useRef } from 'react';
import { useForm } from '../formContext/FormContext';

const StepOTP = () => {
    const { formData, updateField, errors } = useForm();
    const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

    const handleOtpChange = (index: number, value: string) => {
        if (value !== '' && !/^[0-9]$/.test(value)) return;
        
        const currentOtp = formData.otp.split('');
        currentOtp[index] = value;
        const newOtp = currentOtp.join('').slice(0, 4);
        updateField('otp', newOtp);

        if (value !== '' && index < 3) {
            inputRefs[index + 1].current?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if ([" ", ".", ",", "e", "E", "+", "-"].includes(e.key)) {
            e.preventDefault();
            return;
        }

        if (e.key === 'Backspace') {
            if (!formData.otp[index] && index > 0) {
                inputRefs[index - 1].current?.focus();
            }
        }
    };

    return (
        <div className="step-container">
            <h2>OTP Verification</h2>
            <p className="desc">An OTP has been sent to your mobile number</p>
            
            <div className="otp-box-wrapper">
                {[0, 1, 2, 3].map((i) => (
                    <input
                        key={i}
                        ref={inputRefs[i]}
                        type="text" 
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        className={`otp-digit-box ${errors.otp ? 'error' : ''}`}
                        value={formData.otp[i] || ''}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                        onChange={(e) => handleOtpChange(i, e.target.value)}
                    />
                ))}
            </div>
            
            {errors.otp && <p className="error-text">{errors.otp}</p>}
            
            <p className="resend-text">
                Did not receive OTP? <span className="resend-link">Resend OTP</span>
            </p>
        </div>
    );
};

export default StepOTP;