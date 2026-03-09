import React from 'react';
import SignupLayout from './components/SignupLayout';

const App = () => {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '1rem' }}>
            {/* SignupLayout already contains the FormProvider, 
        so all state and validation logic is self-contained! 
      */}
            <SignupLayout />
        </main>
    );
};

export default App;