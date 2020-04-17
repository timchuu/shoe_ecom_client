export const validate = (element, formData = []) => {
    let error = [true, '']

    //check if valid
    if (element.validation.email) {
        const valid = /\S+@\S+\.\S+/.test(element.value)
        const message = `${!valid ? 'Email is not valid' : ''}`
        error = !valid ? [valid, message] : error
    }

    //check if field is valid
    if (element.validation.required) {
        const valid = element.value.trim() !== ''
        const message = `${!valid ? 'This field is required' : ''}`
        error = !valid ? [valid, message] : error
    }
    return error
}// end validate 

//update form with new data
export const update = (element, formData, formName) => {
    const newFormData = {
        ...formData
    }
    const newElement = {
        ...newFormData[element.id]
    }
    newElement.value = element.event.target.value

    if (element.blur) {
        let validData = validate(newElement, formData)
        newElement.valid = validData[0]
        newElement.validationMessage = validData[1]
    }
    newElement.touched = element.blur
    newFormData[element.id] = newElement
    return newFormData
}// end update

//generate data
export const generateData = (formData, formName) => {
    //var that will hold submit data
    let dataToSubmit = {}

    //distribute data
    for (let key in formData) {
        dataToSubmit[key] = formData[key].value

    }
    return dataToSubmit
}//end generate data

//check form is valid
export const isFormValid = (formData, formName) => {
    let formIsValid = true

    for (let key in formData) {
        formIsValid = formData[key].valid && formIsValid
    }
    return formIsValid
}//form is valid