import React, { useCallback, useState, ChangeEvent, FormEvent } from 'react';
import * as Yup from 'yup';

import api from '../../services/api';

import getValidationErrors, { Errors } from '../../utils/helpers';

import { Container } from './styles';

const Newsletter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sendStatus, setSendStatus] = useState(false);
  const [sendError, setSendError] = useState<Errors>({} as Errors);

  const newsletterSchema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido.')
      .required('Preencha com um e-mail válido'),
    name: Yup.string().required('Preencha com seu nome completo'),
  });

  const postEmail = useCallback(async () => {
    await api.post('newsletter', {
      email: email,
      name: name,
    });
  }, [name, email]);

  const handleEmailInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setEmail(value);
    },
    []
  );
  const handleNameInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      setName(value);
    },
    []
  );
  const handleBackNewsletter = useCallback(() => {
    setSendStatus(false);
  }, []);

  const handleFormSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      try {
        await newsletterSchema.validate({ name, email }, { abortEarly: false });
        await postEmail();
        setSendStatus(true);
        setSendError({});

        setEmail('');
        setName('');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const validationErrors = getValidationErrors(error);

          setSendError(validationErrors);
        }
      }
    },
    [email, name, newsletterSchema, postEmail]
  );

  return (
    <Container>
      <form onSubmit={handleFormSubmit}>
        {sendStatus ? (
          <div>
            <p>
              <strong>Seu e-mail foi cadastrado com sucesso!</strong>
              <br />A partir de agora você receberá as novidades e ofertas
              exclusivas.
            </p>
            <button onClick={handleBackNewsletter}>
              Cadastrar novo e-mail
            </button>
          </div>
        ) : (
          <fieldset>
            <legend>Participe de nossas news com promoções e novidades!</legend>
            <div>
              <input
                type="text"
                name="contact-name"
                placeholder="Digite seu nome"
                onChange={handleNameInput}
                className={sendError.name ? 'error' : ''}
              />
              <span>{sendError.name}</span>
            </div>
            <div>
              <input
                type="text"
                name="contact-email"
                placeholder="Digite seu email"
                className={sendError.email ? 'error' : ''}
                onChange={handleEmailInput}
              />
              <span>{sendError.email}</span>
            </div>
            <button type="submit">Eu Quero!</button>
          </fieldset>
        )}
      </form>
    </Container>
  );
};

export default Newsletter;
