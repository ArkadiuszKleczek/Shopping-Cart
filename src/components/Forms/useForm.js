/*
import React from 'react';
import {useState, useEffect} from "react";


function UseForm(props) {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target
      setValues({
          ...values, [name]: value
          }
      )
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    }

    return {handleChange, values, handleSubmit}
}

export default UseForm;*/
