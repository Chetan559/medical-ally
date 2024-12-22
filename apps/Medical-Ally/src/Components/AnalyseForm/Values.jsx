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
