import React, { Component, useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import CreateHappeningTitle from './CreateHappeningTitle';
import CreateHappeningDateTime from './CreateHappeningDateTime';
import CreateHappeningCategories from './CreateHappeningCategories';
import CreateHappeningLocation from './CreateHappeningLocation';
import CreateHappeningOfferings from './CreateHappeningOfferings';
import CreateHappeningClosing from './CreateHappeningClosing';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

function CreateHappening() {
  const [happening, setHappening] = useState({});

  const [activeStep, setActiveStep] = useState(0);
  let theme = useTheme();

  useEffect(() => {
    setHappening(JSON.parse(localStorage.getItem('happening')))
    setActiveStep(parseInt(localStorage.getItem('activeStep')))

  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    localStorage.setItem('activeStep', activeStep + 1)
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
    localStorage.setItem('activeStep', activeStep - 1)
  };

  const handleField = (input) => (value) => {
    let happeningTmp = {...happening, [input]: value};
    setHappening(happeningTmp)
    localStorage.setItem('happening', JSON.stringify(happeningTmp))
  }

  return (
    <>
      {activeStep == 0 && <CreateHappeningTitle handleTitle={handleField('title')} happening={happening} />}
      {activeStep == 1 && <CreateHappeningDateTime handleDate={handleField('date')} handleTime={handleField('time')} happening={happening} />}
      {activeStep == 2 && <CreateHappeningLocation handleLocation={handleField('location')} handleLocationDesc={handleField('locationDescription')} happening={happening} />}
      {activeStep == 3 && <CreateHappeningCategories  handleHappeningType={handleField('type')} handleCategory={handleField('category')} happening={happening} />}
      {activeStep == 4 && <CreateHappeningOfferings handleOfferings={handleField('offerings')} handleOfferingsDescription={handleField('offeringsDescription')} happening={happening} />}
      {activeStep == 5 && <CreateHappeningClosing handleDesc={handleField('description')} handlePrice={handleField('price')} handleGuests={handleField('maxGuests')} happening={happening} />}

      <MobileStepper
              variant="progress"
              steps={6}
              position="bottom"
              activeStep={activeStep}
              nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                  Weiter
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                  Back
                </Button>
          }
      />
    </>
  );
}



export default CreateHappening;