import React, { Component, useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import CreateHappeningTitle from './CreateHappeningTitle';
import CreateHappeningDateTime from './CreateHappeningDateTime';
import CreateHappeningCategories from './CreateHappeningCategories';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

function CreateHappening(props) {
  const [happening, setHappening] = useState('');

  const [activeStep, setActiveStep] = useState(0);
  let theme = useTheme();

  useEffect(() => {
    if (localStorage.getItem('happening') && !happening) {
      setHappening(JSON.parse(localStorage.getItem('happening')))
    } 
    
    if (localStorage.getItem('activeStep') && !activeStep) {
      setActiveStep(parseInt(localStorage.getItem('activeStep')))
    }
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    localStorage.setItem('activeStep', activeStep + 1)
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
    localStorage.setItem('activeStep', activeStep - 1)
  };

  const handleTitle = (title) => {
    let happeningTmp = happening
    happeningTmp.title = title
    setHappening(happeningTmp)
    localStorage.setItem('happening', JSON.stringify(happening))
  }

  const handleDate = (date) => {
    let happeningTmp = happening
    happeningTmp.date = date
    setHappening(happeningTmp)
    localStorage.setItem('happening', JSON.stringify(happeningTmp))
  }

  const handleTime = (time) => {
    let happeningTmp = happening
    happeningTmp.time = time
    setHappening(happeningTmp)
    localStorage.setItem('happening', JSON.stringify(happeningTmp))
  }

  return (
    <>
      {activeStep == 0 && <CreateHappeningTitle handleTitle={handleTitle} happening={happening} />}
      {activeStep == 1 && <CreateHappeningDateTime handleDate={handleDate} handleTime={handleTime} happening={happening} />}
      {activeStep == 2 && <CreateHappeningCategories  happening={happening} />}

      <MobileStepper
              variant="progress"
              steps={7}
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