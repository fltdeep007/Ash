"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaSquareXTwitter, FaWhatsapp } from 'react-icons/fa6'
import "../../styles/contact/contact-us.css"
import Link from 'next/link';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		message: ''
	});
	const [errors, setErrors] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		message: ''
	});
	const [submitStatus, setSubmitStatus] = useState<string | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setErrors({ ...errors, [name]: '' });
	};

	const validateForm = () => {
		let isValid = true;
		const newErrors = { ...errors };

		// First Name validation
		if (!formData.firstName.trim()) {
			newErrors.firstName = 'First Name is required';
			isValid = false;
		}

		// Last Name validation
		if (!formData.lastName.trim()) {
			newErrors.lastName = 'Last Name is required';
			isValid = false;
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!formData.email.trim() || !emailRegex.test(formData.email)) {
			newErrors.email = 'Valid email is required';
			isValid = false;
		}

		// Phone number validation
		const phoneRegex = /^[0-9]{10}$/;
		if (!formData.phoneNumber.trim() || !phoneRegex.test(formData.phoneNumber)) {
			newErrors.phoneNumber = 'Valid 10-digit phone number is required';
			isValid = false;
		}

		// Message validation
		if (!formData.message.trim()) {
			newErrors.message = 'Message is required';
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validateForm()) {
			return;
		}
		setSubmitStatus('submitting');
		try {
			const response = await fetch('/api/sendEmail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setSubmitStatus('success');
				setFormData({
					firstName: '',
					lastName: '',
					email: '',
					phoneNumber: '',
					message: ''
				});
			} else {
				setSubmitStatus('error');
			}
		} catch (error) {
			console.error('Error:', error);
			setSubmitStatus('error');
		}
	};

	return (
		<div className='container'>
			<div className="rel min-h-screen">
				<div className="contact-box">
					<h2 className="text-3xl mb-4">Get in Contact with us</h2>
					<form className="space-y-4" onSubmit={handleSubmit}>
						<div className="flex space-x-4">
							<div className="flex-1 flex flex-col">
								<input
									type="text"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									placeholder="First Name"
									className={`custom-input ${errors.firstName ? 'border-red-500' : ''}`}
									required
								/>
								{errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
							</div>
							<div className="flex-1 flex flex-col">
								<input
									type="text"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									placeholder="Last Name"
									className={`custom-input ${errors.lastName ? 'border-red-500' : ''}`}
									required
								/>
								{errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
							</div>
						</div>
						<div className="flex flex-col">
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="Email"
								className={`custom-input-text ${errors.email ? 'border-red-500' : ''}`}
								required
							/>
							{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
						</div>
						<div className="flex flex-col">
							<input
								type="tel"
								name="phoneNumber"
								value={formData.phoneNumber}
								onChange={handleChange}
								placeholder="Phone Number"
								className={`custom-input-text ${errors.phoneNumber ? 'border-red-500' : ''}`}
								required
							/>
							{errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
						</div>
						<div className="flex flex-col">
        <textarea
	        name="message"
	        value={formData.message}
	        onChange={handleChange}
	        placeholder="Message"
	        className={`custom-input-text ${errors.message ? 'border-red-500' : ''}`}
	        required
        ></textarea>
							{errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
						</div>
						<button type="submit" className="custom-button" disabled={submitStatus === 'submitting'}>
							{submitStatus === 'submitting' ? 'Sending...' : 'Send'}
						</button>
					</form>
					{submitStatus === 'success' && <p className="text-green-500 mt-4">Form submitted successfully!</p>}
					{submitStatus === 'error' &&
                        <p className="text-red-500 mt-4">There was an error submitting the form. Please try again.</p>}
				</div>
				<div className="contact-details">
					<h2 className='text-3xl'>Contact Details</h2>
					<div className='images'>
						<div className="semi">
							<div className="logo_con">
								<Image className='' src="/logoBlue.png" alt="=" width={183} height={70}/>
							</div>
							<div className="social_media">
								<Link href="https://www.facebook.com/ashiyanadreamhomes?mibextid=rS40aB7S9Ucbxw6v" className="text-gray"><FaFacebookF fontSize={"35px"}/></Link>
								<Link href="https://twitter.com/ashiyanal?lang=en" className="text-gray"><FaSquareXTwitter fontSize={"35px"}/></Link>
								<Link href="https://www.instagram.com/ashiyanadreamhomes?igsh=cWFsdW1uOG5raXho" className="text-gray"><FaInstagram fontSize={"35px"}/></Link>
								<Link href="https://wa.me/919021138384?text=Interested%20in%20Ashiyana%20Homes" className="text-gray"><FaWhatsapp fontSize={"35px"}/></Link>
							</div>
						</div>
						<div className='text'>
							<div className="text_details">
								<div className="text_visit">
									<h3 className='sub_head'>Visit Us</h3>
									<p className='sub_para'>106 to 109, R. K. Tower,</p>
									<p className='sub_para'>Bazarpeth, Khopoli - 410 203</p>
									<p className='sub_para'>9:00am - 6:00pm (Mon - Sun)</p>
								</div>
							</div>
							<div className="text_info">
								<div className="text_call">
									<h3 className='sub_head'>Contact Us</h3>
									<p className='sub_para'>+91-844 844 8714 | 02192-267712</p>
								</div>
								<div className="text_email">
									<h3 className='sub_head'>Email Us</h3>
									<p className='sub_para'>admin@ashiyanadreamhomes.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
