import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Button } from '@mui/material';
import DrawerDash from '../../Components/Dashboard/Drawer/dashboard.drawer';
import MenuAppBar from '../../Components/Header/header.component';
import validationSchema from '../../Schemas/clientSchema';
import TextInput from '../../Components/FormTextField/text.input.form';

function Clients() {
  const [showForm, setShowForm] = useState(false);

  const formStatus = () => setShowForm((prev) => !prev);

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
    <section className="client-form animate">
      <form onSubmit={formik.handleSubmit}>
        <fieldset>
          <legend className="client-form-legend">
            <p>Formulário de Cadastro</p>
          </legend>
          <Button
            className="button"
            type="button"
            sx={{ float: 'right', top: -25, fontSize: 25, height: 22 }}
            onClick={formStatus}
          >
            X
          </Button>
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
      {!showForm
        ? (
          <Button
            className="button animate"
            variant="contained"
            type="button"
            sx={{ top: 20, left: 20 }}
            onClick={formStatus}
          >
            + Cadastrar Novo Usuário
          </Button>
        ) : clientForm()}
    </DrawerDash>
  );
}

export default Clients;
