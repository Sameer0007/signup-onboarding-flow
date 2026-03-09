import React from 'react';
import { FormProvider, useForm } from '../formContext/FormContext';
import onboardingImg from '../assets/Group.svg';
import StepName from './StepName';
import StepAccountType from './StepAccountType';
import StepOTP from './StepOTP';
import StepPassword from './StepPassword';
import StepPhone from './StepPhone';
import FormButtons from './FormButtons';
import SuccessModal from './SuccessModal';
import '../styles.css';

const SignupForm = () => {
    const { step, isComplete } = useForm();
    const steps = [
        <StepAccountType key="account" />, 
        <StepPhone key="phone" />, 
        <StepOTP key="otp" />, 
        <StepName key="name" />, 
        <StepPassword key="password" />
    ];

    return (
        <div className="onboarding-main-wrapper">
            {/* LEFT PANEL */}
            <div className="brand-side">
                <div className="brand-content">
                    <p className="sub-header">Let's get started</p>
                    <h1 className="main-title">Create your account</h1>
                    <img src={onboardingImg} alt="Illustration" className="hero-img" />
                </div>
            </div>

            {/* RIGHT PANEL*/}
            <div className="form-side">
                <div className="form-card">
                    <div className="form-top-section">
                        <div className="progress-container">
                            <div className="progress-fill" style={{ width: `${(step + 1) * 20}%` }}></div>
                        </div>
                        <p className="step-text">Step {step + 1} of 5</p>
                        
                        <div className="step-body">
                            {steps[step]}
                        </div>
                    </div>

                    {/* Continue and Back Buttons at bottom */}
                    <FormButtons />
                </div>
            </div>
            {isComplete && <SuccessModal />}
        </div>
    );
};

const SignupLayout = () => {
    return (
        <FormProvider>
            <SignupForm />
        </FormProvider>
    );
};

export default SignupLayout;