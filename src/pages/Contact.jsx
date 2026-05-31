import { useState } from "react";

const initialFormData = {
    name: "",
    email: "",
    message: ""
};

function Contact() {
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    function handleInputChange(event) {
        const { name, value } = event.target;

        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value
            };
        });
    }

    function validateForm() {
        const errors = {};

        if (formData.name.trim() === "") {
            errors.name = "Name is required.";
        }

        if (formData.email.trim() === "") {
            errors.email = "Email is required.";
        } else if (
            !formData.email.includes("@") ||
            !formData.email.includes(".")
        ) {
            errors.email = "Please enter a valid email.";
        }

        if (formData.message.trim() === "") {
            errors.message = "Message is required.";
        } else if (formData.message.trim().length < 10) {
            errors.message = "Message must be at least 10 characters.";
        }

        return errors;
    }

    function handleContactSubmit(event) {
        event.preventDefault();

        const validationErrors = validateForm();

        setFormErrors(validationErrors);
        setSuccessMessage("");

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setSuccessMessage(`Thank you, ${formData.name}. Your message was submitted successfully.`);
        setFormData(initialFormData);
    }

    function handleResetForm() {
        setFormData(initialFormData);
        setFormErrors({});
        setSuccessMessage("");
    }

    return (
        <section className="page-section text-page contact-page">
            <h1>Contact</h1>

            <p>
                This form is a front-end React practice form. It validates the
                fields and shows a success message, but it does not send a real email yet.
            </p>

            <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />

                    {formErrors.name && (
                        <p className="field-error">{formErrors.name}</p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                    />

                    {formErrors.email && (
                        <p className="field-error">{formErrors.email}</p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>

                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={handleInputChange}
                    />

                    {formErrors.message && (
                        <p className="field-error">{formErrors.message}</p>
                    )}
                </div>

                {successMessage !== "" && (
                    <p className="success-message">{successMessage}</p>
                )}

                <div className="form-actions">
                    <button type="submit" className="page-link-btn">
                        Send Message
                    </button>

                    <button
                        type="button"
                        className="secondary-link-btn"
                        onClick={handleResetForm}
                    >
                        Reset
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Contact;