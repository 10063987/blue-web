import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Index from '../pages/index'

const formInputValues = [
    {
        label: 'formEmail',
        correctTestValue: 'coolguy@gmail.com',
    },
    {
        label: 'formPhone',
        correctTestValue: '2348143932991',
    },
    {
        label: 'formPassword',
        correctTestValue: 'ASrty6655#$%f',
    },
    {
        label: 'formConfirmPassword',
        correctTestValue: 'ASrty6655#$%f',
    },
]


// describe is a jest method used to group related testing blocks together 
// It takes two arguments: a string describing the test suite and  a callback function for wrapping the test or tests 
describe('Simple working form', () => {


    // it is a Jest method where the actual test functionalities are written 
    // It takes two arguments: a string describing the test suit and a callback function for wrapping the test functionality
    it('Should render all form inputs', () => {
        render(
            
        )
    })
})