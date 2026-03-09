import React, { useState } from 'react';
import { useForm } from '../formContext/FormContext';
import InputField from './InputField';
import styles from './StepPhone.module.css';

const countries = [
    { code: '+1', flag: 'us', name: 'USA' },
    { code: '+234', flag: 'ng', name: 'Nigeria' },
    { code: '+91', flag: 'in', name: 'India' },
    { code: '+44', flag: 'gb', name: 'UK' }
];

const StepPhone = () => {
    const { formData, updateField, errors } = useForm();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);

    const handleSelect = (country: typeof countries[0]) => {
        setSelectedCountry(country);
        setIsOpen(false);
    };

    return (
        <div className="step-container">
            <h2>OTP Verification</h2>
            <div className="phone-input-container" style={{ marginTop: '20px' }}>
                <p className="input-label" style={{ fontSize: '14px', fontWeight: '600', color: '#64748B', marginBottom: '8px' }}>
                    Mobile Number*
                </p>
        
                <div className={styles.phoneInputWrapper}>
                    {/* Country Code Selector */}
                    <div className={styles.countryCodeSelector} onClick={() => setIsOpen(!isOpen)}>
                        <img src={`https://flagcdn.com/w20/${selectedCountry.flag}.png`} alt={selectedCountry.name} />
                        <span>{selectedCountry.code}</span>
                        <span className={styles.chevron}>⌄</span>

                        {isOpen && (
                            <div className={styles.countryDropdown}>
                                {countries.map((c) => (
                                    <div key={c.code} className={styles.countryOption} onClick={() => handleSelect(c)}>
                                        <img src={`https://flagcdn.com/w20/${c.flag}.png`} alt={c.name} />
                                        <span>{c.code}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
          
                    <div style={{ flex: 1 }}>
                        <InputField 
                            label="" 
                            type="tel"
                            placeholder="8343989239"
                            value={formData.phone}
                            onChange={(e) => updateField('phone', e.target.value.replace(/\D/g, ''))}
                            error={errors.phone}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepPhone;