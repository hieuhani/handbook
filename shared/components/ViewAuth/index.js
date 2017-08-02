import React from 'react';
import { Container, Input, Button, Alert, FormGroup as BSFormGroup } from 'reactstrap';
import styled from 'styled-components';

const FormWrapper = styled.form`
  max-width: 360px;
  padding: 15px;
  background: #eee;
  margin: 15px auto;
  border: 1px solid #cfd9db;
  -webkit-box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.04);
  border-radius: 2px;
`;

const FormGroup = styled(BSFormGroup)`
  input {
    &:first-child {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      margin-bottom: -1px;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`;

export default ({ flashError }) =>
  (<Container>
    <FormWrapper action="/login" method="POST">
      {flashError.last() &&
        <Alert color="danger">
          {flashError.last()}
        </Alert>}
      <FormGroup>
        <Input type="email" name="email" id="email" placeholder="Email" />
        <Input type="password" name="password" id="password" placeholder="Password" />
      </FormGroup>
      <Button color="primary" block>
        Sign in
      </Button>
    </FormWrapper>
  </Container>);
