import React from 'react';
import { useFormik } from 'formik';
import DrawerDash from '../../Components/Dashboard/Drawer/dashboard.drawer';
import MenuAppBar from '../../Components/Header/header.component';
import clientSchema from '../../Schemas/clientSchema';

function Clients() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    clientSchema,
    onSubmit: (values) => console.log(values),
  });

  const clientForm = () => (
    <section className="client-form">
      <form onSubmit={formik.handleSubmit}>
        <fieldset>
          <legend>
            <b>Formulário de cadastro</b>
          </legend>
          <span>Dados Pessoais</span>
          <div className="client-form-box">
            <label htmlFor="nome" className="client-form-label">
              Nome
              <input
                className="client-form-input"
                id="nome"
                type="text"
                required
              />
            </label>
          </div>
          <span>Endereço</span>
          <div className="client-form-box">
            <label htmlFor="cep" className="client-form-label">
              Cep
              <input
                className="client-form-input"
                id="cep"
                type="number"
                required
              />
            </label>
          </div>
          <div className="client-form-box">
            <label htmlFor="bairro" className="client-form-label">
              Bairro
              <input
                className="client-form-input"
                id="bairro"
                type="text"
                required
              />
            </label>
          </div>
          <div className="client-form-box">
            <label htmlFor="rua" className="client-form-label">
              Rua
              <input
                className="client-form-input"
                id="rua"
                type="text"
                required
              />
            </label>
          </div>
          <div className="client-form-box">
            <label htmlFor="cidade" className="client-form-label">
              Cidade
              <input
                className="client-form-input"
                id="cidade"
                type="text"
                required
              />
            </label>
          </div>
          <div className="client-form-box">
            <label htmlFor="complemento" className="client-form-label">
              Complemento
              <input
                className="client-form-input"
                id="complemento"
                type="text"
              />
            </label>
          </div>
          <span>Contato</span>
          <div className="client-form-box">
            <label htmlFor="telefone" className="client-form-label">
              Telefone
              <input
                className="client-form-input"
                id="telefone"
                type="tel"
                required
              />
            </label>
          </div>
          <button type="submit">
            Cadastrar
          </button>
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
