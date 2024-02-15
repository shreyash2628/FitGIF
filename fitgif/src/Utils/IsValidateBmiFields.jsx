export const isValidate = (age, weight, height, setShowAgeFieldError, setAgeFieldError, setShowWeightFieldError, setWeightFieldError, setShowHeightFieldError, setHeightFieldError) => {

    if (age === '') {
        setShowAgeFieldError(true);
        setAgeFieldError(`This Field can't be empty`);
        return false;
    }
    if (age <= 0 || age > 80) {
        setShowAgeFieldError(true);
        setAgeFieldError(`Age must be between 0 to 80`);
        return false;
    }
    else {
        setShowAgeFieldError(false);
    }
    if (weight === '') {
        setShowWeightFieldError(true);
        setWeightFieldError(`This field can't be empty`);
        return false;
    }
    if (weight < 40 || weight > 160) {
        setShowWeightFieldError(true);
        setWeightFieldError("Weight must range in 40-160 kg.");
        return false;
    }
    else {
        setShowWeightFieldError(false);
    }
    if (height === '') {
        setShowHeightFieldError(true);
        setHeightFieldError(`This field can't be empty`);
        return false;
    }
    if (height < 130 || height > 230) {
        setShowHeightFieldError(true);
        setHeightFieldError(`Height must range in 130-230cm.`);
        return false;
    }
    else {
        setShowHeightFieldError(false);
    }
    return true;
}
