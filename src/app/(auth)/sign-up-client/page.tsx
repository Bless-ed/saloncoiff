'use client'

import SignUpClientForm from '@/components/forms/sign-up-client-form'
import { clientRegistration } from '@/lib/actions/auth'
import { clientSchema } from '@/lib/validations/auth'
import React from 'react'

const SignUpPage = () => {
  return (
    <div>
      <SignUpClientForm 
        schema={clientSchema}
        defaultValues={{
          name: '',
          email: '',
          phone: "",
          address: '',
          password: '',
          confirmPassword: ''
        }}
        onSubmit={clientRegistration}
      />
    </div>
  )
}

export default SignUpPage