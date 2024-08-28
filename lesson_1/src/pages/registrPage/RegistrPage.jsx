import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPass } from "../../store/RegisterSlice";

export default function RegistrPage () {

    const dispatch = useDispatch()
    const [password, setPassword] = useState({
        password: '',
        confirmPassword: '',
        username: ''
    })
    const [errors, setErrors] = useState({});

    const formValue = (event) => {
        setPassword({
            ...password,
            [event.target.name]: event.target.value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!password.password) {
            newErrors.password = 'Password is required';
        }
        if (!password.confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
        }
        if (password.password && password.confirmPassword && password.password !== password.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        return newErrors;
    };

    

    const addPassword = (event) => {
        event.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            dispatch(addPass(password));
            // alert("Вы зарегестрировались!")
        }
    };

    

  
return (
    <div>
        <form onSubmit={addPassword}>
            <input type="text" placeholder="password" name="password" value={password.password} onChange={formValue} />
            {errors.password && <p>{errors.password}</p>}
            <input type="text" placeholder="confirm password" name="confirmPassword" value={password.confirmPassword} onChange={formValue} />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            <input type="text" placeholder="username" name="username" value={password.username} onChange={formValue} />
            {errors.username && <p>{errors.username}</p>}
            <button type="submit">Registration</button>
        </form>
    </div>
);
}