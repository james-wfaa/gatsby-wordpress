// @todo once the source plugin is updated to the latest WPGQL version, we wont need this helper anymore
export const convertTime = (startTime, endTime) => {
  var startDS = new Date(startTime);
  var endDS = new Date(endTime);
  if(startDS.getDate() == endDS.getDate()){
    var startTime = formatAMPM(startDS);
    var endTime = formatAMPM(endDS);
    var strTime = '';
    if(startTime[0].ampm == endTime[0].ampm){
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
  var startDS = new Date(startDate);
  var endDS = new Date(endDate);
  if(startDS.getDate() == endDS.getDate()){
    return false;
  }
  else{
    var startString = startDS.toLocaleString('default', { month: 'long' }) + ' ' + startDS.getDate();
    var endString = endDS.getDate() + ', ' + endDS.getFullYear();
    if(startDS.getMonth() != endDS.getMonth()){
      endString = endDS.toLocaleString('default', { month: 'long' }) + ' ' + endString;
    }
    if(startDS.getFullYear() != endDS.getFullYear()){
      startString += ', ' + startDS.getFullYear();
    }

    var dateString = startString + '-' + endString;
    return dateString;
  }
}

export const formatAMPM = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'p.m.' : 'a.m.';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;

  var strTime = hours
  if(minutes && minutes != '00'){
    strTime += ':' + minutes;
  }
  var timeObj = [{
    time: strTime,
    ampm: ampm,
  }]
  return timeObj;
}

export const shortDate = (date) => {
  var tmpDate = new Date(date)

  const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
  "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."
];
  var month = monthNames[tmpDate.getMonth()]
  var dd = tmpDate.getDate()
  return `${month} ${dd}`
}

