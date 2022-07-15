import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { isExportDeclaration } from 'typescript'
// import Index from '../pages/index'

import RegisterPage from '../../pages/index'

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
            <RegisterPage />
        )

        // check for all form fields 
        formInputValues.forEach((value, index) => {
            expect(screen.getByLabelText(value.label)).toBeInTheDocument()
        })
    })

    it('Should render submit button', async () => {
        render(
            <RegisterPage />
        )

        const button = screen.getByRole('button', {name: 'Create account'})

        expect(button).toBeInTheDocument()

        expect(button).not.toBeDisabled()
    })

    it('Should submit when inputs are filled and submit button clickd', async() => {
        render(
            <RegisterPage />
        )

        const submitButton = screen.getByRole('button', {name: 'Create account'})

        formInputValues.forEach((mockValue, index) => {
            const input = screen.getByLabelText(mockValue.label) 
            fireEvent.change(input, { target: {value: mockValue.correctTestValue}})
        })

        fireEvent.click(submitButton)

        expect(
            await screen.findByRole('button', {name: 'Loading...'})
        ).toBeInTheDocument()
    })
})

