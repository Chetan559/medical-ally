export const genders = [
  {
    value: "Male",
    label: "M",
  },
  {
    value: "Female",
    label: "F",
  },
  {
    value: "Transgender",
    label: "T",
  },
  {
    value: "Other",
    label: "Other",
  },
];

export const blood = [
  {
    value: "A Positive",
    label: "A+",
  },
  {
    value: "A Negetive",
    label: "A-",
  },
  {
    value: "O Positive",
    label: "O+",
  },
  {
    value: "O Negetive",
    label: "O-",
  },
  {
    value: "AB Positive",
    label: "AB+",
  },
  {
    value: "AB Negetive",
    label: "AB-",
  },
  {
    value: "B Positive",
    label: "B+",
  },
  {
    value: "B Negetive",
    label: "B-",
  },
];

export const marks = [
  { value: 0, label: "Mild" },
  { value: 50, label: "Moderate" },
  { value: 100, label: "Severe" },
];

export const valuetext = (value) => {
  if (value === 0) return "Mild";
  if (value === 50) return "Moderate";
  if (value === 100) return "Severe";
  return "";
};

export const durationOfSymptoms = [
  {
    value: "<1 day",
    label: "Less than 1 day",
  },
  {
    value: "1-3 days",
    label: "1-3 days",
  },
  {
    value: "4-7 days",
    label: "4-7 days",
  },
  {
    value: "1-2 weeks",
    label: "1-2 weeks",
  },
  {
    value: ">2 weeks",
    label: "More than 2 weeks",
  },
  {
    value: "ongoing",
    label: "Ongoing",
  },
];

export const appetiteLevels = [
  {
    value: "no appetite",
    label: "No appetite",
  },
  {
    value: "decreased appetite",
    label: "Decreased appetite",
  },
  {
    value: "normal appetite",
    label: "Normal appetite",
  },
  {
    value: "increased appetite",
    label: "Increased appetite",
  },
];

export const sleepPatterns = [
  {
    value: "no sleep",
    label: "No sleep",
  },
  {
    value: "poor sleep",
    label: "Poor sleep (frequent waking)",
  },
  {
    value: "interrupted sleep",
    label: "Interrupted sleep",
  },
  {
    value: "normal sleep",
    label: "Normal sleep (7-9 hours)",
  },
  {
    value: "excessive sleep",
    label: "Excessive sleep (more than 9 hours)",
  },
];

export const hydrationStatuses = [
  {
    value: "dehydrated",
    label: "Dehydrated",
  },
  {
    value: "slightly dehydrated",
    label: "Slightly dehydrated",
  },
  {
    value: "well-hydrated",
    label: "Well-hydrated",
  },
  {
    value: "excessively hydrated",
    label: "Excessively hydrated",
  },
];

export const smokingHabits = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
  { value: "Occasionally", label: "Occasionally" },
];

export const alcoholConsumption = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
  { value: "Occasionally", label: "Occasionally" },
];

export const exerciseHabits = [
  { value: "Sedentary", label: "Sedentary" },
  { value: "Lightly Active", label: "Lightly Active" },
  { value: "Moderately Active", label: "Moderately Active" },
  { value: "Very Active", label: "Very Active" },
];

export const stressLevels = [
  { value: "Low", label: "Low" },
  { value: "Moderate", label: "Moderate" },
  { value: "High", label: "High" },
];

export const vaccinationHistory = [
  { value: "COVID-19", label: "COVID-19" },
  { value: "Tetanus", label: "Tetanus" },
  { value: "Flu", label: "Flu" },
  { value: "Other", label: "Other" },
];

export const dietaryHabits = [
  { value: "Vegetarian", label: "Vegetarian" },
  { value: "Vegan", label: "Vegan" },
  { value: "Non-Vegetarian", label: "Non-Vegetarian" },
  { value: "Other", label: "Other" },
];
