import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { postQuestion } from "../actions/questionsActions";

const StyledForm = styled.form`
  margin: 0 2rem;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  border: 0.1rem solid ${(props) => props.theme.border};
  border-right: none;
  border-left: none;
  margin: 0 2rem;
  @media (min-width: 768px) {
    margin: 0 6rem;
  }
  @media (min-width: 1200px) {
    margin: 0 16rem;
  }
`;

const StyledButton = styled.button`
  border: 0.1rem solid ${(props) => props.theme.border};
  border-radius: 5px;
  height: 2rem;
  font-size: 1rem;
  width: 6rem;
  color: ${(props) => props.theme.onPrimary};
  align-self: flex-end;
  background-color: ${(props) => props.theme.surface};
  :hover {
    cursor: pointer;
  }
`;

const StyledTextarea = styled.textarea`
  resize: none;
  border: none;
  min-height: 5rem;
  width: 100%;
  text-align: center;
  margin: 0.4rem 0;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.onPrimary};
  font-family: "Roboto", sans-serif;
  ::placeholder {
    font-size: 1rem;
  }
`;

function QuestionForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    body: Yup.string()
      .max(250, "Must be less than 250 characters")
      .required("Required!"),
  });

  const formik = useFormik({
    initialValues: {
      body: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(postQuestion({ values }));
      resetForm({ values: "" });
    },
    validationSchema,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledTextarea
        placeholder="Leave your question.."
        name="body"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.body}
      />
      <StyledButton type="submit" onClick={formik.handleSubmit}>
        Ask
      </StyledButton>
    </StyledForm>
  );
}

export default QuestionForm;
