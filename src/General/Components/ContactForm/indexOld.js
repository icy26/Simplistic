import { API } from 'aws-amplify'
import { createProspect } from '../../../graphql/mutations'

import {
    Button,
    Flex,
    View,
    TextField,
    TextAreaField
} from '@aws-amplify/ui-react'

export default function ContactForm() {

    const handleFormSubmit = async (e) => {
        try {
            e.preventDefault()
            const name = e.target.name.value
            const email = e.target.email.value

            console.log(name);
            console.log(email);

        } catch (error) {
            console.log("Error", error);
        }
    }

    const handleFormSubmit2 = async (e) => {
        try {
            e.preventDefault()
            const name = e.target.name.value
            const email = e.target.email.value

            await API.graphql({
                query: createProspect,
                variables: {
                    input: {
                        name, email
                    }
                }
            })
        } catch (error) {
            console.log('error adding details to db', error);
        }
    }

    return (
        <Flex as="form" direction={'column'} onSubmit={handleFormSubmit}>
            <div>
                <TextField
                    label="Name"
                    name="name"
                    required
                />
                <TextField
                    label="Email"
                    name="email"
                    placeholder="you@email.com"
                    type={'email'}
                    required
                />
            </div>
            <TextAreaField
                label="Message"
                name="message"
                placeholder="Your Message"
            />
            <button type="submit" variation="primary">
                Submit
            </button>
        </Flex>
    );
}