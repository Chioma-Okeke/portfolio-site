import { useState } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import axios from 'axios';

const ContactForm = () => {
	const [formData, setFormData] = useState({})

	function handleChange(e) {
		const {name, value} = e.target
		setFormData(prevState => {
			return {
				...prevState,
				[name]: value
			}
		})
	}

	function handleSubmit(e) {
		e.preventDefault()
		e.target.reset()
		axios
		.post(
			"https://sheet.best/api/sheets/11470b3e-3931-4af6-aeec-2187674e3400",
			formData
		).then(res => console.log(res))
	}

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={(e) => {
						handleSubmit(e)
					}}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<FormInput
						inputLabel="Full Name"
						labelFor="Name"
						inputType="text"
						inputId="Name"
						inputName="Name"
						placeholderText="Your Name"
						ariaLabelName="Name"
						inputValue={formData.Name}
						onChange={(e) => handleChange(e)}
					/>
					<FormInput
						inputLabel="Email"
						labelFor="Email"
						inputType="email"
						inputId="Email"
						inputName="Email"
						placeholderText="Your email"
						ariaLabelName="Email"
						inputValue={formData.Email}
						onChange={(e) => handleChange(e)}
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="Subject"
						inputType="text"
						inputId="Subject"
						inputName="Subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
						inputValue={formData.Subject}
						onChange={(e) => handleChange(e)}
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="Message"
							name="Message"
							cols="14"
							rows="6"
							aria-label="Message"
							inputValue={formData.Message}
							onChange={(e) => handleChange(e)}
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
