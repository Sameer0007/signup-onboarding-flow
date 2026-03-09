import React from 'react';
import { useForm } from '../formContext/FormContext';

const FormButtons = () => {
    const { step, handleNext, handleBack } = useForm();

    return (
        <div className="footer">
            {step > 0 && (
                <button className="btnBack" onClick={handleBack} type="button">
                    Back
                </button>
            )}
      
            <button className="btnContinue" onClick={handleNext} type="button">
                {'Continue'}
            </button>
        </div>
    );
};

export default FormButtons;