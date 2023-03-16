export const validateLogin = (email, password) => {
	if (!isValidEmail(email)) {
		return false;
	}

	if (password.length < 6) {
		return false;
	}

	return true;
};

export const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
