/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface FormData {
    accountType: 'personal' | 'business' | '';
    phone: string;
    otp: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
}

interface FormContextType {
    formData: FormData;
    errors: Partial<Record<keyof FormData, string>>;
    step: number;
    updateField: (field: keyof FormData, value: any) => void;
    handleNext: () => void;
    handleBack: () => void;
    isLastStep: boolean;
    resetForm: () => void;
    isComplete: boolean;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<FormData>({ 
        accountType: '', 
        phone: '',
        otp: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
    const [step, setStep] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const TOTAL_STEPS = 5; 
    const isLastStep = step === TOTAL_STEPS - 1;

    const updateField = (field: keyof FormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setErrors(prev => {
            const newErrs = { ...prev };
            delete newErrs[field];
            return newErrs;
        });
    };

    const validateCurrentStep = () => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};

        if (step === 0 && !formData.accountType) newErrors.accountType = "Selection required";
        
        if (step === 1 && !/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Enter valid 10-digit number";
        }

        if (step === 2 && formData.otp.length < 4) newErrors.otp = "Enter 4-digit code";
        
        if (step === 3) {
            if (!formData.firstName.trim()) newErrors.firstName = "Required";
            if (!formData.lastName.trim()) newErrors.lastName = "Required";
        }

       if (step === 4) {
        const { password, confirmPassword } = formData;
        const hasNumber = /\d/.test(password);
        const hasSpecial = /[!@#$%^&*]/.test(password);
    
        if (password.length < 8 || !hasNumber || !hasSpecial) {
            newErrors.password = "Password requirements not met";
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
  
    }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const resetForm = () => {
        setFormData({ 
            accountType: '', 
            phone: '', 
            otp: '', 
            firstName: '', 
            lastName: '', 
            password: '', 
            confirmPassword: '' 
        });
        setErrors({});
        setStep(0);
        setIsComplete(false);
    
        console.log("Operation Successful: Account Created");
    };

    const handleNext = () => {
        if (validateCurrentStep()) {
            if (!isLastStep) setStep(prev => prev + 1);
            else setIsComplete(true);
        }
    };

    const handleBack = () => { if (step > 0) setStep(prev => prev - 1); };

    return (
        <FormContext.Provider value={{ formData, errors, step, updateField, handleNext, handleBack, isLastStep, isComplete, resetForm }}>
            {children}
        </FormContext.Provider>
    );
};

export const useForm = () => {
    const context = useContext(FormContext);
    if (!context) throw new Error('useForm must be used within FormProvider');
    return context;
};