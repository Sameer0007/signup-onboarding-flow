import React from 'react';
import { useForm } from '../formContext/FormContext';

const SuccessModal: React.FC = () => {
    const { formData, resetForm } = useForm();
    const accountDisplayName = formData.accountType === 'business' ? 'Business' : 'Personal';
    const fullName = `${formData.firstName} ${formData.lastName}`;

    const handleFinalSubmit = () => {
        // Reset UI on button click
        resetForm();
        alert("Operation Successful! Returning to start.");
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="check-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                
                <h2>You’re all set!</h2>
                <p className="desc">Here’s a quick summary of your account details</p>
                
                <div className="summary-card">
                    <div className="summary-row">
                        <span className="label">Account Type</span>
                        <span className="value">{accountDisplayName}</span>
                    </div>
                    <div className="summary-row">
                        <span className="label">Email</span>
                        <span className="value">jo----@example.com</span>
                    </div>
                    <div className="summary-row">
                        <span className="label">Name</span>
                        <span className="value">{fullName}</span>
                    </div>
                    <div className="summary-row">
                        <span className="label">Mobile Number</span>
                        <span className="value">{formData.phone}</span>
                    </div>
                </div>
                
                <div className="security-notice">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px'}}>
                        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 12L11 14L15 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Your account is secured with bank grade security
                </div>
                
                <button className="btnContinue full-width" onClick={handleFinalSubmit}>
                    Go To Dashboard
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;