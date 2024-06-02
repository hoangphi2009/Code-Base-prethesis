function Validation(values) {
    let errors = {};
    const email_pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.[a-zA-Z]{2,})+$/;
    const password_pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (values.email === "") {
        errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Email didn't match";
    } else {
        errors.email = "";
    }

    if (values.password === "") {
        errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password didn't match";
    } else {
        errors.password = "";
    }

    return errors;
}

export default Validation;
