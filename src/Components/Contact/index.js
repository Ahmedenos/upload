import React from 'react'
import Footer from '../Footer/index.js';
import {ContactSection , ContactTitle, Span,Form ,FormDiv, InputText,InputEmail,InputSub,InputSubmit ,TextArea } from "./style.js";
export default function Contact() {
    return (
        <>
        <ContactSection>
        <div className="container">
            <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
            <Form action="">
                <FormDiv>
                    <InputText type="text" placeholder="Your Name" />
                    <InputEmail type="email" placeholder="Your Email" />
                </FormDiv>
                <InputSub type="text" class="sub" placeholder="Your Subject" />
                <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                <InputSubmit type="submit" value="Send Message" />
            </Form>
        </div>
    </ContactSection>
    <Footer/>
    </>
    )
}
