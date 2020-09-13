import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styled from "styled-components";

import { changePassword } from "../actions/userActions";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.primary};
  width: 17rem;
`;

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.secondaryDark};
  border: 1px solid ${(props) => props.theme.onPrimary};
  color: ${(props) => props.theme.onPrimary};
  height: 2rem;
  margin: 0.4rem 0;
`;

const StyledText = styled.span`
  color: ${(props) => props.theme.primary};
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.primaryDark};
  border: 1px solid ${(props) => props.theme.onPrimary};
  border-radius: 10px;
  width: 5rem;
  height: 2rem;
  font-size: 1rem;
  margin: 0.6rem 0;
`;

const ChangeButton = styled(StyledButton)`
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondaryDark};
  border-color: ${(props) => props.theme.primary};
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0.6rem 0;
  justify-content: space-between;
`;

function ChangePasswordForm({ handleOnChange }) {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string()
      .required("Required")
      .min(5, "Must be at least 5 characters long"),
    newPassword: Yup.string()
      .required("Required")
      .min(5, "Must be at least 5 characters long"),
    confirmPassword: Yup.string()
      .required("Required")
      .min(5, "Must be at least 5 characters long")
      .oneOf([Yup.ref("newPassword"), null], "Passwords do not match"),
  });

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
      currentPassword: "",
    },
    onSubmit: (values) => {
      dispatch(changePassword(values, { formik, handleOnChange }));
    },
    validationSchema,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <label htmlFor="currentPassword">Current Password</label>
      <StyledInput
        type="password"
        name="currentPassword"
        id="currentPassword"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.currentPassword}
        autoComplete="new-password"
      />
      {formik.errors.currentPassword && formik.touched.currentPassword ? (
        <StyledText>{formik.errors.currentPassword}</StyledText>
      ) : null}
      <label htmlFor="newPassword">New Password</label>
      <StyledInput
        type="password"
        name="newPassword"
        id="newPassword"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.newPassword}
      />
      {formik.errors.newPassword && formik.touched.newPassword ? (
        <StyledText>{formik.errors.newPassword}</StyledText>
      ) : null}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <StyledInput
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
      />
      {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
        <StyledText>{formik.errors.confirmPassword}</StyledText>
      ) : null}
      <Wrapper>
        <ChangeButton type="submit" onClick={formik.handleSubmit}>
          Change
        </ChangeButton>
        <StyledButton onClick={handleOnChange}>Cancel</StyledButton>
      </Wrapper>
    </StyledForm>
  );
}

export default ChangePasswordForm;
