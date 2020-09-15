import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { editAnswer } from "../actions/questionsActions";

const StyledForm = styled.form`
  margin: 0.2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button`
  border: 0.1rem solid ${(props) => props.theme.onPrimary};
  border-radius: 5px;
  height: 1.8rem;
  width: 4rem;
  color: ${(props) => props.theme.onPrimary};
  background-color: ${(props) => props.theme.surface};
  margin: 0 0.2rem;
`;

const StyledTextarea = styled.textarea`
  resize: none;
  border: none;
  min-height: 5rem;
  height: auto;
  text-align: center;
  margin: 0.2rem 0;
  width: 100%;
  background-color: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.onPrimary};
  border: 0.1rem solid ${(props) => props.theme.border};
  border-radius: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledText = styled.span`
  color: ${(props) => props.theme.warning};
  margin: 0.2rem 0;
`;

function EditAnswer({ answerId, handleOnSubmit, initialValue }) {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    body: Yup.string()
      .max(250, "Must be less than 250 characters")
      .required("Required!"),
  });

  const formik = useFormik({
    initialValues: {
      body: initialValue,
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(editAnswer({ values, answerId }));
      resetForm({ values: "" });
      handleOnSubmit();
    },
    validationSchema,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledTextarea
        autoFocus={true}
        name="body"
        onChange={formik.handleChange}
        value={formik.values.body}
        onBlur={formik.handleBlur}
      />
      {formik.errors.body && formik.touched.body ? (
        <StyledText>{formik.errors.body}</StyledText>
      ) : null}
      <Wrapper>
        <StyledButton type="submit" onClick={formik.handleSubmit}>
          Edit
        </StyledButton>
        <StyledButton onClick={handleOnSubmit}>Cancel</StyledButton>
      </Wrapper>
    </StyledForm>
  );
}

export default EditAnswer;
