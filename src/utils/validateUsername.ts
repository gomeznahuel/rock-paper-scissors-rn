interface ValidationResponse {
  isValid: boolean;
  errorMessage: string;
}
  
const validateUsername = (name: string): ValidationResponse => {
  const INVALID_CHARACTERS_PATTERN = /^[a-zA-Z0-9_\-.]+$/;
  const NAME_MIN_LENGTH = 3;
  const NAME_MAX_LENGTH = 16;
  
  if (!INVALID_CHARACTERS_PATTERN.test(name)) {
    return { isValid: false, errorMessage: "Name can't be blank." };
  } else if (name.length > NAME_MAX_LENGTH) {
    return { isValid: false, errorMessage: `Name must be less than ${NAME_MAX_LENGTH} characters.` };
  } else if (name.length < NAME_MIN_LENGTH) {
    return { isValid: false, errorMessage: `Name must be at least ${NAME_MIN_LENGTH} characters.` };
  } else {
    return { isValid: true, errorMessage: "" };
  }
};

export default validateUsername;