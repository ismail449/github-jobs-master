const getNumberOfDays = (datePosted)=>{
  const date = new Date(datePosted);
  const today = new Date();
  const diffTime = Math.abs(today - date);
  const numberOfDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  return numberOfDays
};

export default getNumberOfDays;