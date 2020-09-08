import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { signup } from "../actions/authActions";

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.primary};
  width: 50%;
`;

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.backgroundSecondary};
  border: 1px solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.primary};
  height: 2rem;
  margin: 0.4rem 0;
`;

const StyledText = styled.span`
  color: ${(props) => props.theme.warning};
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.backgroundButton};
  border: 2px solid ${(props) => props.theme.backgroundButton};
  border-radius: 10px;
  width: 14rem;
  height: 2rem;
  font-size: 1rem;
  margin: 0.6rem 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin-left: 0.4rem;
  color: ${(props) => props.theme.warning};
  text-decoration: none;
`;

const StyledHeader = styled.h2`
  margin-top: 2rem;
  margin-bottom: 0;
`;

function SignUp() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    password: Yup.string()
      .min(5, "Must be at least 5 characters long")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(signup(values, { formik }));
    },
    validationSchema,
  });

  return (
    <Container>
      <StyledHeader>Sign up</StyledHeader>
      <Wrapper>
        <p>Already have an account?</p>
        <StyledLink to="/login">Log in</StyledLink>
      </Wrapper>
      <StyledForm onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <StyledInput
          type="text"
          name="firstName"
          id="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.errors.firstName && formik.touched.firstName ? (
          <StyledText>{formik.errors.firstName}</StyledText>
        ) : null}
        <label htmlFor="lastName">Last Name</label>
        <StyledInput
          type="text"
          name="lastName"
          id="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.errors.lastName && formik.touched.lastName ? (
          <StyledText>{formik.errors.lastName}</StyledText>
        ) : null}
        <label htmlFor="email">Email</label>
        <StyledInput
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? (
          <StyledText>{formik.errors.email}</StyledText>
        ) : null}
        <label htmlFor="password">Password</label>
        <StyledInput
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password ? (
          <StyledText>{formik.errors.password}</StyledText>
        ) : null}
        <StyledButton type="submit" onClick={formik.handleSubmit}>
          Sign up
        </StyledButton>
      </StyledForm>
    </Container>
  );
}

export default SignUp;
