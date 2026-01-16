export const passwordRules = [
  {
    label: "Must be at least 8 characters.",
    test: (v: string) => v.length >= 8,
  },
  {
    label: "Capital letters and lower case, e.g. A and a",
    test: (v: string) => /\d/.test(v),
  },
  {
    label: "Numbers, e.g. 1234567890",
    test: (v: string) => /[a-z]/.test(v) && /[A-Z]/.test(v),
  },
  {
    label: "Special characters, e.g. !@#$%^&*()_+{}",
    test: (v: string) => /[^A-Za-z0-9]/.test(v),
  },
];

export const getPasswordStrength = (password: string) => {
  const passed = passwordRules.filter((rule) => rule.test(password)).length;

  let label = "";
  let color = "";
  let bars = passed;

  if (passed === 0) {
    label = "";
    bars = 0;
  } else if (passed === 1) {
    label = "Weak";
    color = "red";
  } else if (passed === 2) {
    label = "Average";
    color = "yellow";
  } else if (passed === 3) {
    label = "Good";
    color = "green";
  } else {
    label = "Excellent";
    color = "green";
  }

  return { passed, bars, label, color };
};
