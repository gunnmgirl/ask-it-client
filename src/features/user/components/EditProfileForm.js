import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styled from "styled-components";

import { editUser } from "../actions/userActions";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.onPrimary};
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

const EditButton = styled(StyledButton)`
  color: ${(props) => props.theme.onPrimary};
  background-color: ${(props) => props.theme.primaryDark};
  border-color: ${(props) => props.theme.onPrimary};
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0.6rem 0;
  justify-content: space-between;
`;

function EditProfileForm({ initialValues, handleOnEdit }) {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: initialValues.firstName,
      lastName: initialValues.lastName,
    },
    onSubmit: (values) => {
      dispatch(editUser(values, { formik, handleOnEdit }));
    },
    validationSchema,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <StyledInput
        type="text"
        name="firstName"
        id="firstName"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        onBlur={formik.handleBlur}
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
      <Wrapper>
        <EditButton type="submit" onClick={formik.handleSubmit}>
          Edit
        </EditButton>
        <StyledButton type="submit" onClick={handleOnEdit}>
          Cancel
        </StyledButton>
      </Wrapper>
    </StyledForm>
  );
}

export default EditProfileForm;
