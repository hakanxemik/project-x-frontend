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
  const [happening, setHappening] = useState({
    title: '',
    offerings: []
  });

  const [disableButton, setDisableButton] = useState(false)

  const [activeStep, setActiveStep] = useState(0);
  let theme = useTheme();

  useEffect(() => {
    if (localStorage.getItem('happening'))
      setHappening(JSON.parse(localStorage.getItem('happening')))

    if (localStorage.getItem('activeStep'))
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

  const handleButton = (value) => {
    setDisableButton(value)
  }

  const handleField = (input) => (value) => {
    let happeningTmp = {...happening, [input]: value};
    setHappening(happeningTmp)
    localStorage.setItem('happening', JSON.stringify(happeningTmp))

    if (input == 'location' || input == 'locationDescription') {
      happeningTmp['location'] && happeningTmp['locationDescription'] ? setDisableButton(false) : setDisableButton(true)
    } else if ('offerings' == input) {
      !happeningTmp[input] || !happeningTmp[input].length <= 0 ? setDisableButton(false) : setDisableButton(true)
    } else if (input == 'maxGuests' || input == 'price' || input == 'description') {
      happeningTmp['maxGuests'] && happeningTmp['description'] && happeningTmp['price'] ? setDisableButton(false) : setDisableButton(true)
    } else {
      happeningTmp[input] ? setDisableButton(false) : setDisableButton(true)
    }
  }

  return (
    <>
      {activeStep == 0 && <CreateHappeningTitle disable={disableButton} handleButton={handleButton} handleTitle={handleField('title')} happening={happening} />}
      {activeStep == 1 && <CreateHappeningDateTime disable={disableButton} handleButton={handleButton} handleDate={handleField('date')} handleTime={handleField('time')} happening={happening} />}
      {activeStep == 2 && <CreateHappeningLocation disable={disableButton}  handleButton={handleButton} handleLocation={handleField('location')} handleLocationDesc={handleField('locationDescription')} happening={happening} />}
      {activeStep == 3 && <CreateHappeningCategories disable={disableButton} handleButton={handleButton} handleHappeningType={handleField('type')} handleCategory={handleField('category')} happening={happening} />}
      {activeStep == 4 && <CreateHappeningOfferings disable={disableButton} handleButton={handleButton} handleOfferings={handleField('offerings')} handleOfferingsDescription={handleField('offeringsDescription')} happening={happening} />}
      {activeStep == 5 && <CreateHappeningClosing disable={disableButton} handleButton={handleButton} handleDesc={handleField('description')} handlePrice={handleField('price')} handleGuests={handleField('maxGuests')} happening={happening} />}

      <MobileStepper
              variant="progress"
              steps={6}
              position="bottom"
              activeStep={activeStep}
              nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === 5 || disableButton}>
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