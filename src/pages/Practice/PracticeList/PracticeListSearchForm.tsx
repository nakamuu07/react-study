import { Form, Field, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import { compose, lifecycle } from 'recompose';
import styled from 'styled-components';
import SearchInput from '../../../components/organisms/render/SearchInput';
import SearchButton from '../../../components/molecules/SearchButton';

interface PracticeListSearchFormValues {
  id?: string;
}

type PracticeListSearchFormParams = PracticeListSearchFormValues;

interface TOutter {
  params?: PracticeListSearchFormParams;
  submit: (params?: PracticeListSearchFormParams) => void;
}

export interface PracticeListSearchFormProps
  extends FormikProps<PracticeListSearchFormValues>,
    TOutter {}

const PracticeListSearchForm: React.FC<PracticeListSearchFormProps> = () => {
  const Row = styled.div`
    display: flex;
    align-items: center;

    > *:not(:first-child) {
      margin-left: 50px;
    }
  `;

  return (
    <Form>
      <Row>
        <Field component={SearchInput} name="id" placeholder="ID" />
        <SearchButton type="submit" />
      </Row>
    </Form>
  );
};

export default compose<PracticeListSearchFormProps, TOutter>(
  withFormik<PracticeListSearchFormProps, PracticeListSearchFormValues>({
    enableReinitialize: true,
    handleSubmit: ({ id }, { props: { submit } }) => {
      submit({ id });
    },
    mapPropsToValues: () => ({
      id: undefined
    })
  }),
  lifecycle<PracticeListSearchFormProps, {}>({
    shouldComponentUpdate({ params: prevParams, values: { id: prevId } }) {
      const {
        params,
        values: { id }
      } = this.props;

      return (
        JSON.stringify(prevParams) !== JSON.stringify(params) ||
        JSON.stringify(prevId) === JSON.stringify(id)
      );
    }
  })
)(PracticeListSearchForm);
