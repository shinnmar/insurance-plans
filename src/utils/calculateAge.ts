export const calculateAge = (birthDate: string): number => {
  const [day, month, year] = birthDate.split("-").map(Number);

  const today = new Date();
  const birth = new Date(year, month - 1, day);

  let age = today.getFullYear() - birth.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
};
