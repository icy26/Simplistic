import React, { useState } from 'react';
import { Blur, Inner, ContactInput, ContactSubmit, ContactLabel } from './ContactFormElements'

import { API } from 'aws-amplify'
import { createProspect } from '../../../graphql/mutations'

export default function ContactForm() {

    const [isToggled, setIsToggled] = useState(true);

    const handleFormSubmit = async (e) => {
        try {
            e.preventDefault()
            const name = e.target.name.value
            const email = e.target.email.value
            const message = e.target.message.value

            await API.graphql({
                query: createProspect,
                variables: {
                    input: {
                        name, email, message
                    }
                }
            })

            setIsToggled(!isToggled);
        } catch (error) {
            console.log('error adding details to db', error);
            setIsToggled(!isToggled);
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            {isToggled
            ?
            <ContactLabel
                onClick={() => setIsToggled(!isToggled)}
            >
                Get in touch
            </ContactLabel>
            :
            <>
                <Blur 
                    onClick={() => setIsToggled(!isToggled)}
                />
                <Inner>
                    <text
                        style={{textAlign: 'center', marginTop: '2vh', fontWeight: '560'}}
                    >
                        Get in contact with us!
                    </text>
                    <ContactInput
                        name='name'
                        placeholder='Your name'
                    />
                    <ContactInput
                        name='email'
                        placeholder='Your email'
                    />
                    <ContactInput
                        name='message'
                        placeholder='Your message'
                    />

                    <ContactSubmit type='submit' value='Submit'>
                        Submit
                    </ContactSubmit>
                </Inner>
            </>
            }
        </form>
    );
}