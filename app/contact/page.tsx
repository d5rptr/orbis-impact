import React from 'react';

const Contact: React.FC = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Contact Us</h1>
            <p>We’d love to hear from you! Fill out the form below, and we’ll get back to you shortly.</p>
            <iframe
                src="https://forms.monday.com/forms/embed/77dda2f952e838e550d483bdd765f241?r=use1"
                width="650"
                height="500"
                style={{
                    border: '0',
                    boxShadow: '5px 5px 56px 0px rgba(0,0,0,0.25)',
                }}
                title="Contact Form"
            />
        </div>
    );
};

export default Contact;
