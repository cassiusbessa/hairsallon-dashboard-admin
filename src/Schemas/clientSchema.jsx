import * as yup from 'yup';

const validationSchema = yup.object({
  nome: yup
    .string()
    .required('Nome is required')
    .min(8, 'Nome must be at least 8 characters'),
  telefone: yup
    .number()
    .required('Telefone is required')
    .min(11, ' must be at least 11 characters'),
  bairro: yup
    .string()
    .required('Bairro is required')
    .min(3, ' must be at least 3 characters'),
  rua: yup
    .string()
    .required('Rua is required')
    .min(10, ' must be at least 10 characters'),
  cidade: yup
    .string()
    .required('Cidade is required')
    .min(3, ' must be at least 3 characters'),
  cep: yup
    .number()
    .required('Cep is required')
    .min(8, ' must be at least 8 characters'),
  complemento: yup
    .string(),
});

export default validationSchema;
