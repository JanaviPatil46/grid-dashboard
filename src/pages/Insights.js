import React, { useState } from 'react';
import './insights.css'
const Insights = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // You can add your form submission logic here
    };

    return (
        <>
            <div className='insights-container' >
                <div className="form-container">
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className='btn'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Insights