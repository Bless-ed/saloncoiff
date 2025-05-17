import SignUpHairdresserForm from '@/components/forms/sign-up-hairdresser-form'
import { hairdresserRegistration } from '@/lib/actions/auth'
import { hairdresserSchema } from '@/lib/validations/auth'
import React from 'react'

const HairdresserSignUpPage = () => {
  return (
    <div>
      <SignUpHairdresserForm
        schema={hairdresserSchema}
        defaultValues={{
          salonName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          bio: '',
          location: ''
        }}
        onSubmit={hairdresserRegistration}
      />
    </div>
  )
}

export default HairdresserSignUpPage 