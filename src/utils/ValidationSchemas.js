import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string()
    .required('This field is required')
    .min(6, 'Password is too short'),
})

const todoSchema = Yup.object().shape({
  todo: Yup.string().required('This field is required.'),
})

export { loginSchema, todoSchema }
