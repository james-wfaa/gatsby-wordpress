// @todo once the source plugin is updated to the latest WPGQL version, we wont need this helper anymore
export const convertTime = (startTime, endTime) => {
  var startDS = new Date(startTime);
  var endDS = new Date(endTime);
  var strTime = formatAMPM(startDS) + ' - ' + formatAMPM(endDS);
  return strTime;
}

export const formatAMPM = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

export const shortDate = (date) => {
  var tmpDate = new Date(date)
  console.log(date)
  console.log(tmpDate)
  const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
  "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."
];
  var month = monthNames[tmpDate.getMonth()]
  var dd = tmpDate.getDate()
  return `${month} ${dd}`
  //return tmpDate({formatString: "dddd, MMMM Do YYYY, h:mm:ss a"})
}

