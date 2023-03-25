import React from 'react'
import { Container, Slogan, BodyContainer, BodyWindow, OptionContainer, Option, Pad } from './HomeElements'
import { API } from 'aws-amplify'
import { createProspect } from '../../graphql/mutations'

import {
	Button,
	Flex,
	View,
	TextField,
	TextAreaField
} from '@aws-amplify/ui-react'

export default function Home() {

  const handleFormSubmit = async (e) => {
    try{
      e.preventDefault()
      const name = e.target.name.value
      const email = e.target.email.value

      // console.log(name)
      // console.log(email)

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
    <Container
      id='home'
    >
      <Slogan>
        SIMPLISTIC
      </Slogan>

      <BodyContainer>
        <BodyWindow>

        </BodyWindow>
        <BodyWindow>
          <Flex as="form" direction={'column'} onSubmit={handleFormSubmit}>
            <TextField
              label="Your Name"
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
            <View>
              <Button type="submit" variation="primary">
                Submit
              </Button>
            </View>
          </Flex>
        </BodyWindow>
      </BodyContainer>

      <OptionContainer>
        <Option
          activeClass='active'
          smooth
          spy
          to='learn_more'
        >
          Learn More
        </Option>
      </OptionContainer>

      {/* Pad used for scrolling */}
      <Pad
        id='learn_more'
      />

    </Container>
  )
}
