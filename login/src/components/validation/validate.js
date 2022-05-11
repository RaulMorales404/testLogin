export const isFormValidEmail = (validate, register = true) => {
  if (register) {
    return validate({
      email: {email: true, required: true},
    });
  } else {
    return validate({
      email: {required: true},
    });
  }
};
export const isFormValidName = validate => {
  let number = validate({
    name: {hasNumber: true},
  });
  let hasText = validate({
    name: {required: true},
  });

  if (number === false && hasText === true) {
    return true;
  } else {
    return false;
  }
};

export const isFormValidPassword = validate => {
  return validate({
    password: {
      minlength: 8,
      hasNumber: true,
      hasLowerCase: true,
      hasUpperCase: true,
      required: true,
    },
  });
};
