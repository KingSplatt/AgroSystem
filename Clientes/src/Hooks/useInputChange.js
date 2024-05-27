// src/hooks/useInputChange.js
import { useState } from 'react';

const useInputChange = (initialState = {}) => {
    const [formValues, setFormValues] = useState(initialState);
    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === "Telefono" && (!/^\d+$/.test(value) || value.length > 10)) {
            return;
        }
        if (id === "RFC" && value.length > 13) {
            return;
        }

        if (id === "CURP" && value.length > 18) {
            return;
        }
        let newValue = value;
        if (id === "RFC" || id === "CURP") {
            newValue = value.toUpperCase();
        }
        setFormValues({
            ...formValues,
            [id]: newValue,
        });
    };
    return {
        formValues,
        handleChange,
        setFormValues,
    };
};

export default useInputChange;
