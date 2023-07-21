module.exports = {
    formatedCreatedAt: (rawDate) => {
      if (!rawDate) return undefined;
  
      // Get the month abbreviation
      const monthAbbreviation = rawDate.toLocaleString("default", {
        month: "short",
      });
  
      // Get the day with the correct suffix
      const day = rawDate.getDate();
      // const suffix = getDaySuffix(day);
      // const formattedDay = day + suffix;
  
      // Get the hour in 12-hour format
      const hour = rawDate.getHours() % 12 || 12;
  
      // Get the minutes
      const minutes = rawDate.getMinutes().toString().padStart(2, "0");
  
      // Get the AM/PM indicator
      const amPm = rawDate.getHours() >= 12 ? "pm" : "am";
  
      // Construct the formatted rawDate string
      return `${monthAbbreviation}, ${day} ${rawDate.getFullYear()} at ${hour}:${minutes}${amPm}`;
    },
  };
  