import React from 'react'

const FormInput = ({ formData, handleChange, id }) => {

    //show error message
    const showError = () => {
        let errorMessage = null
        if (formData.validation && !formData.valid) {
            errorMessage = (
                <div>{formData.validationMessage}</div>
            )
        }
        return errorMessage
    }

    //show validation message

    //template switch
    const renderTemplates = () => {
        let inputElement = null


        switch (formData.element) {
            case ('input'):
                inputElement = <div className='contact_left_grid form-group'><input {...formData.config} value={formData.value}
                    onBlur={(event) => handleChange({ event, id, blur: true })}
                    onChange={(event) => handleChange({ event, id })} />{showError()}</div>
                break
            case ('textarea'):
                inputElement = <div className='contact_left_grid'>
                    <textarea {...formData.config} value={formData.value} onChange={handleChange} />
                    {showError()}
                </div>
                break
            default:
                inputElement = null
        }

        return inputElement
    }

    return (
        <React.Fragment>
            {renderTemplates()}
        </React.Fragment>
    )
}

export default FormInput
