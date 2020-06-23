import React from 'react';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';

import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import './PlaceForm.css';


const AddUser = () => {
  const {  isLoading, error,sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      username: {
        value: '',
        isValid: false
      },
      account: {
        value: '',
        isValid: false
      },
      balance: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      },
      type: {
        value: '',
        isValid: false
      }
    },
    false
  );
  const transactionSubmitHandler = async event => {
    
    event.preventDefault();
    try {
      await sendRequest(
        'http://localhost:9000/admin/newuser',
        'POST',
        JSON.stringify({
          username: formState.inputs.username.value,
          account: formState.inputs.account.value,
          password: formState.inputs.password.value,
          balance: formState.inputs.balance.value,
          type: formState.inputs.type.value,
        }),
        { 'Content-Type': 'application/json' }
      );
    
    } catch (err) {}
  };
  return (
    <React.Fragment>
          <ErrorModal error={error} onClear={clearError} />
      <form className="place-form" onSubmit={transactionSubmitHandler}>
        <Input
          id="username"
          element="input"
          type="text"
          label="Username"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid input"
          onInput={inputHandler}
        />
        <Input
          id="account"
          element="input"
          label="Account"
          validators={[VALIDATOR_MINLENGTH(10)]}
          errorText="Please enter a valid account # (at least 10 digit)."
          onInput={inputHandler}
        />
         <Input
          id="password"
          element="input"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(8)]}
          errorText="Please enter a valid password (at least 8 digit)."
          onInput={inputHandler}
        />
        <Input
          id="balance"
          element="input"
          label="Initial balance"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid amount."
          onInput={inputHandler}
        />
         <Input
          id="type"
          element="input"
          label="Admin/User"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid input"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Complete Transaction
        </Button>
      </form>
    </React.Fragment>
  );
}

export default AddUser; 