import { Outer, ContactInput, ContactSubmit } from './ContactFormElements'

import { API } from 'aws-amplify'
import { createProspect } from '../../../graphql/mutations'

export default function ContactForm() {

    const handleFormSubmit = async (e) => {
        try {
            e.preventDefault()
            const name = e.target.name.value
            const email = e.target.email.value
            const message = e.target.message.value

            console.log(name);
            console.log(email);
            console.log(message);

        } catch (error) {
            console.log('Error', error);
        }
    }

    const handleFormSubmit2 = async (e) => {
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
        } catch (error) {
            console.log('error adding details to db', error);
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <Outer>
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
            </Outer>

        </form>
    );
}