import React, { Component, useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import SignUpEmail from './SignUpEmail';
import SignUpName from './SignUpName';
import SignUpPassword from './SignUpPassword';
import SignUpInterests from './SignUpInterests';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Redirect } from "react-router-dom"
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

function SignUp2(props) {
    const [user, setUser] = useState({
      "email": '',
      "password": '',
      "password_confirmation": '',
      "interests": []
    });

    const [disableButton, setDisableButton] = useState(false)

    const [activeStepRegister, setActiveStep] = useState(0);
    let theme = useTheme();

    useEffect(() => {
        if (localStorage.getItem('user')) {
          let savedUser = JSON.parse(localStorage.getItem('user'))
          savedUser.password = ''
          savedUser.password_confirmation = ''
          setUser(savedUser)
        }

        setActiveStep(0)
      }, []);

      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        localStorage.setItem('activeStepRegister', activeStepRegister + 1)
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
        localStorage.setItem('activeStepRegister', activeStepRegister - 1)
      };

      const handleButton = (value) => {
        setDisableButton(value)
      }

      function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

      const handleField = (input) => (value) => {
        let userTmp = {...user, [input]: value};
        setUser(userTmp)
        localStorage.setItem('user', JSON.stringify(userTmp))
    
        if ('interests' == input) {
          !userTmp[input] || !userTmp[input].length <= 0 ? setDisableButton(false) : setDisableButton(true)
        } else if ('email' == input) {
          validateEmail(value) ? setDisableButton(false) : setDisableButton(true)
        } else if (input == 'password') {
          if (value.length < 8 || value != user.password_confirmation) {
            setDisableButton(true)
          } else {
            setDisableButton(false)
          }
        } else if (input == 'password_confirmation') {
          if ((value != user.password) || (user.password == '')) {
            setDisableButton(true)
          } else {
            setDisableButton(false)
          }
        } else if (input == 'firstname' || input == 'lastname') {
            if (user.firstname != '' && user.lastname != '') {
              setDisableButton(false)
            } else {
              setDisableButton(true)
            }
        } else {
          userTmp[input] ? setDisableButton(false) : setDisableButton(true)
        }
      }

    return (
        <>
          {!localStorage.getItem('token') ?
          <>
          {activeStepRegister == 0 && <SignUpEmail disable={disableButton} validateEmail={validateEmail} handleButton={handleButton} handleEmail={handleField('email')} handlePassword={handleField('password')} handlePasswordConfirmation={handleField('password_confirmation')} user={user} /> }
          {activeStepRegister == 1 && <SignUpName disable={disableButton} handleButton={handleButton} handleFirstname={handleField('firstname')} handleLastname={handleField('lastname')} user={user} /> }
          {activeStepRegister == 2 && <SignUpPassword disable={disableButton} handleButton={handleButton} handleGender={handleField('gender')} handleDate={handleField('birthdate')} user={user} />}
          {activeStepRegister == 3 && <SignUpInterests disable={disableButton} handleButton={handleButton} handleInterests={handleField('interests')} user={user} />}

        <MobileStepper
                variant="progress"
                steps={6}
                position="bottom"
                activeStep={activeStepRegister}
                nextButton={
                  <Button size="small" onClick={handleNext} disabled={activeStepRegister === 3 || disableButton}>
                    Weiter
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                  </Button>
                }
                backButton={
                  <Button size="small" onClick={handleBack} disabled={activeStepRegister === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                  </Button>
                }
        />
        </> : <Redirect to='/' />}
      </>
    );
}

export default SignUp2;
