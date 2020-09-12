import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { postQuestion } from "../actions/questionsActions";

const StyledForm = styled.form`
  margin: 2rem 0;
  display: flex;
  padding: 0 8rem;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    padding: 0 16rem;
  }
  @media (min-width: 992px) {
    padding: 0 24rem;
  }
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
  width: 80%;
  min-height: 5rem;
  text-align: center;
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
