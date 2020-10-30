// @todo once the source plugin is updated to the latest WPGQL version, we wont need this helper anymore
export const convertTime = (startTime, endTime) => {
  const startDS = new Date(startTime);
  const endDS = new Date(endTime);
  if(startDS.getDate() === endDS.getDate()){
    const startTime = formatAMPM(startDS);
    const endTime = formatAMPM(endDS);
    let strTime = '';
    if(startTime[0].ampm === endTime[0].ampm){
      strTime = startTime[0].time  + '&ndash;' + endTime[0].time + ' ' + endTime[0].ampm;
    }
    else {
      strTime = startTime[0].time + ' ' + startTime[0].ampm + '&ndash;' + endTime[0].time + ' ' + endTime[0].ampm;
    }
    return strTime;
  
  }
  else{

  }
}

export const compareDate = (startDate, endDate) => {
  const startDS = new Date(startDate);
  const endDS = new Date(endDate);
  if(startDS.getDate() === endDS.getDate()){
    return false;
  }
  else{
    let startString = startDS.toLocaleString('default', { month: 'long' }) + ' ' + startDS.getDate();
    let endString = endDS.getDate() + ', ' + endDS.getFullYear();
    if(startDS.getMonth() !== endDS.getMonth()){
      endString = endDS.toLocaleString('default', { month: 'long' }) + ' ' + endString;
    }
    if(startDS.getFullYear() !== endDS.getFullYear()){
      startString += ', ' + startDS.getFullYear();
    }

    const dateString = startString + '-' + endString;
    return dateString;
  }
}

export const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'p.m.' : 'a.m.';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;

  let strTime = hours
  if(minutes && minutes !== '00'){
    strTime += ':' + minutes;
  }
  const timeObj = [{
    time: strTime,
    ampm: ampm,
  }]
  return timeObj;
}

export const shortDate = (date) => {
  const tmpDate = new Date(date)

  const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
  "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."
];
  const month = monthNames[tmpDate.getMonth()]
  const dd = tmpDate.getDate()
  return `${month} ${dd}`
}

