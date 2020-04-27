import React              from 'react';

/* Material UI */
import {
  makeStyles
}                         from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
  MobileStepper
}                         from '@material-ui/core';
import KeyboardArrowLeft  from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles(theme => ({
  cardActions: {
    padding: 0
  },
  stepper: {
    flexGrow: 1
  }
}));

const CreateInvoice = () => {
  const [ activeStep, setActiveStep ] = React.useState(0);
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title="New Invoice"
        subheader={activeStep === 0 ? 'Add Work Logs'
          : activeStep === 1 ? 'Edit Details'
            :activeStep === 2 ? 'Review & Download'
              : null}
      />
      <CardContent>
      
      </CardContent>
      <CardActions className={classes.cardActions}>
        <MobileStepper
          className={classes.stepper}
          variant="dots"
          steps={3}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={
                () => setActiveStep(prevActiveStep => prevActiveStep + 1)
              }
              disabled={activeStep === 3}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={
                () => setActiveStep(prevActiveStep => prevActiveStep - 1)
              }
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </CardActions>
    </Card>
  );
}

export default CreateInvoice;
