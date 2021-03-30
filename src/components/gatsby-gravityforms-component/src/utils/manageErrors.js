/**
 * Loop through object of errors passed back by Gravity Forms
 * Set errors to the corrosponding input
 */

export const handleGravityFormsValidationErrors = (data, setError,  form) => {
    //console.log(data, form)

    //check if field.inputs is null
    //if is not, assign to variable to get inputs and filter out isHidden :  true
    //then assign field message to each input?


    Object.keys(data).forEach(function(key) {
        const id = key.replace('.', '_')
        const fieldId = `input_${id}`
        //setError(fieldId, 'gf_validation', data[key])
        setError(fieldId, {message: data[key]})
    })
}
