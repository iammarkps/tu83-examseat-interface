import React, { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
  FormErrorMessage,
  InputGroup,
  InputLeftElement,
  Icon
} from '@chakra-ui/core'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { Card } from './Card'

const API_ENDPOINT = process.env.API_URL || ''

const LoginSchema = Yup.object().shape({
  id: Yup.string().required('โปรดกรอกเลขบัตรประจำตัวประชาชนหรือเลขพาสปอร์ต'),

  phone: Yup.string().required('โปรดกรอกเบอร์โทรศัพท์')
})

export const Login = ({ setData }) => {
  const [fetchError, setFetchError] = useState('')

  return (
    <Card>
      <Heading size="md">ประกาศที่นั่งสอบ</Heading>
      <Box mt={2} fontFamily="heading">
        <Formik
          initialValues={{ id: '', phone: '' }}
          validationSchema={LoginSchema}
          onSubmit={async (values, actions) => {
            let data: any

            actions.setSubmitting(true)
            try {
              const res = await fetch(`${API_ENDPOINT}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
              })

              data = await res.json()
            } catch (_) {
              setFetchError('An error occured')
            }

            if (data) {
              setData(data)
            } else {
              setFetchError(
                'เลขบัตรประจำตัวประชาชน/เลขพาสปอร์ต หรือเบอร์โทรศัพท์ ไม่ถูกต้อง'
              )
            }

            actions.setSubmitting(false)
          }}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
              <Field name="id">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.id && form.touched.id}>
                    <FormLabel htmlFor="id">
                      เลขบัตรประจำตัวประชาชน / เลขพาสปอร์ต
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        children={<Icon name="edit" color="gray.300" />}
                      />
                      <Input {...field} id="id" />
                    </InputGroup>
                    <FormErrorMessage>{form.errors.id}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="phone">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.phone && form.touched.phone}
                    mt={4}
                  >
                    <FormLabel htmlFor="phone">เบอร์โทรศัพท์</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        children={<Icon name="phone" color="gray.300" />}
                      />
                      <Input {...field} id="phone" />
                    </InputGroup>
                    <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <FormErrorMessage>{fetchError}</FormErrorMessage>
              <Button
                mt={4}
                variantColor="teal"
                isLoading={props.isSubmitting}
                type="submit"
                width="100%"
                fontFamily="heading"
              >
                เข้าสู่ระบบ
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </Card>
  )
}
