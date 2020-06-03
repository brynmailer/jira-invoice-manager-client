import React from "react";

/* Material UI */
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  IconButton,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

/* Formik */
import { Formik, Form, Field } from "formik";

/* Formik Material UI */
import { TextField as FTextField } from "formik-material-ui";

/* Yup */
import * as Yup from "yup";

/* Currency.JS */
import currency from "currency.js";

/* Utils */
import { useSettings } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  topMargin: {
    marginTop: theme.spacing(2),
  },
}));

const CurrencyFormatSchema = Yup.object().shape({
  code: Yup.string()
    .min(3, "Code is too short")
    .max(3, "Code is too long")
    .required("Required"),
  precision: Yup.number()
    .positive("Precision must be positive")
    .min(1, "Precision is too low")
    .max(5, "Precision is too high")
    .required("Required"),
  thousand: Yup.string().max(2, "Separator is too long").required("Required"),
  decimal: Yup.string().max(2, "Decimal is too long").required("Required"),
});

const CurrencyFormat = () => {
  const { currencyFormat, setCurrencyFormat } = useSettings();
  const classes = useStyles();

  const handleSubmit = (values, { setSubmitting }) => {
    setCurrencyFormat(values);
    setSubmitting(false);
  };

  return (
    <Card className={classes.topMargin}>
      <CardHeader
        title="Currency"
        titleTypographyProps={{
          variant: "h6",
        }}
        action={
          <IconButton type="submit" form="currencyFormatForm">
            <SaveIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Formik
          initialValues={currencyFormat}
          validationSchema={CurrencyFormatSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Grid
              component={Form}
              container
              justify="space-around"
              spacing={2}
              id="currencyFormatForm"
            >
              <Grid item xs={6}>
                <Field
                  component={FTextField}
                  label="Currency Code"
                  name="code"
                  type="text"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  component={FTextField}
                  label="Precision"
                  name="precision"
                  type="number"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  component={FTextField}
                  label="Thousand Separator"
                  name="thousand"
                  type="text"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  component={FTextField}
                  label="Decimal"
                  name="decimal"
                  type="text"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Preview"
                  type="text"
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={currency(1000, {
                    formatWithSymbol: true,
                    pattern: "# !",
                    symbol: values.code,
                    precision: values.precision,
                    separator: values.thousand,
                    decimal: values.decimal,
                  }).format()}
                />
              </Grid>
            </Grid>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default CurrencyFormat;
