// Function to generate the string representation for the rest of the days in a month
function generateDaysString(monthLength) {
    const daysArray = Array.from({ length: monthLength }, (_, index) => {
      const day = index + 1; // Days start from 1
      return `{ date: ${day}, id: "" }`;
    });
  
    return daysArray.join(',\n');
  }
  
  // Example for a month with 31 days
  const daysString = generateDaysString(31);
  console.log(daysString);
  