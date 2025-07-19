//DATE 
 
const now = new Date();

console.log(now); // Full date and time
console.log(now.toDateString()); // Only date
console.log(now.toLocaleTimeString()); // Only time
console.log(now.toISOString()); // ISO format
console.log(now.getFullYear()); // Year
console.log(now.getMonth() + 1); // Month (0-based, so add 1)
console.log(now.getDate()); // Day
console.log(now.getHours()); // Hours
console.log(now.getMinutes()); // Minutes
console.log(now.getSeconds()); // Seconds



// ✅ Getting Timestamp (Milliseconds since 1970-01-01 UTC)

const timestamp = Date.now();
console.log(timestamp); // Example: 1740595045000

//Convert timestamp to date:

const dateFromTimestamp = new Date(timestamp);
console.log(dateFromTimestamp.toDateString());


//✅ Creating a Custom Date

const customDate = new Date(2025, 2, 31, 10, 30, 45); // Year, Month(0-based), Day, Hour, Minute, Second
console.log(customDate.toString()); // Mon Mar 31 2025 10:30:45 GMT+0530 (IST)

//============================  CODES ============
let newDate = new Date()
newDate.toLocaleString('default',{ 

    weekday:"long",         // useful

}) 