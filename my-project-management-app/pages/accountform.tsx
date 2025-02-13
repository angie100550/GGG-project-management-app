//code and i need a css  decide where csss goes and apply to that form of css that is going to be here. 
//by thursday i need some progress by 5pm. 
// some code thursday 5pm (hard deadline) 

//write code shows an account form and make it nice with css. 
//if its linked to someone else 
//example if how i can connect communicate to whomever is connected to your work. 
//recommend ryans videos, resources, chatgbt , and anything to get job work dont just copy and paste but understand the process. 
// if there's a bug in the code then there must be a solution. 
//demonstrate that you did your work, and that you're reliable. 
//usuage of useState is like a memory tool that helps the app remember what type of users are in each form
//eventhandling is when you type something into a box on a website so react pays attention to it it utilize a special skill called onChange
//form submission is when the user clicks submit and react checks for errors using the validateForm() function, if there are no errors it logs the submitted data but if there are any errors then it shows an error message.
//validation function = validateFrom() it checks each form field against the rules and returns example example user puts exceed amount of password characters and uses 7 then there must be an erorro
import React, { useState } from 'react';
import './form.css';

function Form() {
    const [formData, setFormData] = useState({
        username:'',
        email: '',
        password: '',
        confirmPassword:''
    });

    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateform(formData);
        setErrors(newErrors);

        if(Object.keys(newErrors).length === 0) {
            //form submission logic here
            console.log('Form submitted sucessfully!');
        }
    }

}



// @TODO: I WILL Fix the validation logic later, it's currently incomplete
