import axios from 'axios'

export default async ({ baseUrl, formData, id, lambdaEndpoint, isMultipart }) => {
    if(isMultipart){
        let newFormData = new FormData()
        //check for Filelist object, and if length is greater than 0 update value to first file
        Object.keys(formData).forEach(function (key) {
            if(typeof formData[key] === 'object' && formData[key] !== null && Object.keys(formData[key]).length > 0){
                formData[key]=formData[key][0]
                //add file object to form data
                newFormData.append(key, formData[key])
            } else{
                //add all other fields to form data
                newFormData.append(key, formData[key])
            }
        });
        //loop through newFormData vaules
        /*for(var pair of newFormData.entries()) {
            console.log(pair[0]+ ', '+ pair[1]);
        }*/
        let result
        try {
            result = await axios.post(lambdaEndpoint, newFormData)
        }catch (err) {
            // Pass back error
            return {
                status: 'error',
                data: err.response,
            }
        }
        return {
            status: 'success',
            data: result,
        }

    } else{
        //handle all forms that do not have a file upload present
        let lambaData = {
            baseUrl: baseUrl,
            formid: id,
            payload: formData,
        }
        let result
        try {
            result = await axios.post(lambdaEndpoint, lambaData, {
                responseType: 'json',
            })
        } catch (err) {
            // Pass back error
            return {
                status: 'error',
                data: err.response,
            }
        }
        return {
            status: 'success',
            data: result,
        }
    }
}
