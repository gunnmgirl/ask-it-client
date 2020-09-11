import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { postQuestion } from "../actions/questionsActions";

const StyledForm = styled.form`
  margin: 2rem 0;
  padding: 0 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button`
  border: 0.1rem solid ${(props) => props.theme.backgroundPrimary};
  border-radius: 5px;
  height: 1.8rem;
  width: 4rem;
  color: ${(props) => props.theme.backgroundPrimary};
  background-color: ${(props) => props.theme.warning};
`;

const StyledTextarea = styled.textarea`
  resize: none;
  border: none;
  min-height: 5rem;
  height: auto;
  text-align: center;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.primary};
  border: 0.1rem solid ${(props) => props.theme.border};
  border-radius: 5px;
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
