import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { postAnswer } from "../actions/questionsActions";

const StyledForm = styled.form`
  padding: 1rem 1rem;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 0.1rem solid ${(props) => props.theme.border};
  border-right: none;
  border-left: none;
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
  margin: 0.4rem 0;
  width: 100%;
  text-align: center;
  font-family: "Roboto", sans-serif;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.onPrimary};
  ::placeholder {
    font-size: 1rem;
  }
`;

function AnswerForm() {
  const dispatch = useDispatch();
  const { questionId } = useParams();

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
      dispatch(postAnswer({ values, questionId }));
      resetForm({ values: "" });
    },
    validationSchema,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledTextarea
        placeholder="Leave your answer.."
        name="body"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.body}
      />
      <StyledButton type="submit" onClick={formik.handleSubmit}>
        Answer
      </StyledButton>
    </StyledForm>
  );
}

export default AnswerForm;
