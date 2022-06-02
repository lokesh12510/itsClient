
export const getDateByYear = (years) => {
  const date = new Date();
  date.setFullYear( date.getFullYear() + years );
  return date;
}

