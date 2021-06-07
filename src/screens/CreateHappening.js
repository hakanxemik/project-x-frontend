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
    if (localStorage.getItem('happening') && Object.keys(happening).length == 0) {
      setHappening(JSON.parse(localStorage.getItem('happening')))
    } 
    
    if (localStorage.getItem('activeStep')) {
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

  const handleDesc = (desc) => {
    let happeningTmp = happening
    happeningTmp.description = desc
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

  const handleHappeningType = (type) => {
    let happeningTmp = happening
    happeningTmp.type = type
    setHappening(happeningTmp)
    localStorage.setItem('happening', JSON.stringify(happeningTmp))
  }

  const handleCategory = (category) => {
    let happeningTmp = happening
    happeningTmp.category = category
    setHappening(happeningTmp)
    localStorage.setItem('happening', JSON.stringify(happening))
  }

  const handleLocation = (location) => {
    let happeningTmp = happening
    happeningTmp.location = location
    setHappening(happeningTmp)
    localStorage.setItem('happening', JSON.stringify(happening))
  }

  const handleLocationDesc = (description) => {
    let happeningTmp = happening
    happeningTmp.locationDescription = description
    setHappening(happeningTmp)
    localStorage.setItem('happening', JSON.stringify(happening))
  }

  const handleOfferings = (offerings) => {
    let happeningTmp = happening
    happeningTmp.offerings = offerings
    setHappening(happeningTmp)
    localStorage.setItem('happening', JSON.stringify(happening))
  }

  const handleOfferingsDescription = (description) => {
    let happeningTmp = happening
    happeningTmp.offeringsDescription = description
    setHappening(happeningTmp)
    localStorage.setItem('happening', JSON.stringify(happening))
  }

  const handlePrice = (price) => {
    let happeningTmp = happening
    happeningTmp.price = price
    setHappening(happeningTmp)
    localStorage.setItem('happening', JSON.stringify(happening))
  }

  const handleMaxGuests = (max) => {
    let happeningTmp = happening
    happeningTmp.maxGuests = max
    setHappening(happeningTmp)
    localStorage.setItem('happening', JSON.stringify(happening))
  }

  return (
    <>
      {activeStep == 0 && <CreateHappeningTitle handleTitle={handleTitle} happening={happening} />}
      {activeStep == 1 && <CreateHappeningDateTime handleDate={handleDate} handleTime={handleTime} happening={happening} />}
      {activeStep == 2 && <CreateHappeningLocation handleLocation={handleLocation} handleLocationDesc={handleLocationDesc} happening={happening} />}
      {activeStep == 3 && <CreateHappeningCategories  handleHappeningType={handleHappeningType} handleCategory={handleCategory} happening={happening} />}
      {activeStep == 4 && <CreateHappeningOfferings handleOfferings={handleOfferings} handleOfferingsDescription={handleOfferingsDescription} happening={happening} />}
      {activeStep == 5 && <CreateHappeningClosing handleDesc={handleDesc} handlePrice={handlePrice} handleMaxGuests={handleMaxGuests} happening={happening} />}

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