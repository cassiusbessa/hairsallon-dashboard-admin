import React from 'react';
import { useFormik } from 'formik';
import { Button } from '@mui/material';
import DrawerDash from '../../Components/Dashboard/Drawer/dashboard.drawer';
import MenuAppBar from '../../Components/Header/header.component';
import validationSchema from '../../Schemas/clientSchema';
import TextInput from '../../Components/FormTextField/text.input.form';

function Clients() {
  const formik = useFormik({
    initialValues: {
      nome: '',
      telefone: '',
      bairro: '',
      rua: '',
      cidade: '',
      cep: '',
      complemento: '',
    },
    validationSchema,
    onSubmit: (values) => console.log(values),
  });

  const clientForm = () => (
    <section className="client-form">
      <form onSubmit={formik.handleSubmit}>
        <fieldset>
          <legend className="client-form-legend">
            <p>Formulário de Cadastro</p>
          </legend>
          {Object
            .keys(formik.values)
            .map((value) => (
              <TextInput
                key={value}
                id={value}
                formik={formik}
              />
            ))}
          <Button
            className="button"
            variant="contained"
            type="submit"
            fullWidth
          >
            Cadastrar
          </Button>
        </fieldset>
      </form>
    </section>
  );

  return (
    <DrawerDash>
      <MenuAppBar />
      {clientForm()}
    </DrawerDash>
  );
}

export default Clients;
