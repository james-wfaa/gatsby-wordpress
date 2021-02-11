// @todo once the source plugin is updated to the latest WPGQL version, we wont need this helper anymore
export const convertTime = (startTime, endTime) => {
  const startDS = new Date(startTime.replace(/\s/, 'T'));
  const endDS = new Date(endTime.replace(/\s/, 'T'));
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
  const startDS = new Date(startDate.replace(/\s/, 'T'));
  const endDS = new Date(endDate.replace(/\s/, 'T'));

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
  if (!date) {
    return null
  }
  let tmpDate
  if (typeof date !== 'string') {
    tmpDate = new Date(date)
  } else {
    tmpDate = new Date(date.replace(/\s/, 'T'))
  }

  const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
  "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."
];
  const month = monthNames[tmpDate.getMonth()]
  const dd = tmpDate.getDate()
  return `${month} ${dd}`
}

export const membershipFeeCalc = (graduate, age, type) => {
  const fees = {
    full: 0,
    installments: 0,
    oneYear: 0,
    twoYear: 0,
    stringParams: {
      full: "",
      installments: "",
      oneYear: "",
      twoYear: "",
    },
  }
  if (graduate) {
    if (type === "individual") {
      if (age) {
        fees.full = 550;
        fees.installments = 29;
        fees.oneYear = 45;
        fees.twoYear = 79;
        fees.stringParams = {
          full: "?term=life&level=senior",
          installments: "?term=life&level=senior&installments=yes",
          oneYear: "?&level=senior",
          twoYear: "?&level=senior",
        }
        // gradYes & ageYes & individual
      } else {
        fees.full = 650;
        fees.installments = 34;
        fees.oneYear = 25;
        fees.twoYear = 44;
        fees.stringParams = {
          full: "?term=life&level=grad",
          installments: "?term=life&level=grad&installments=yes",
          oneYear: "?&level=grad",
          twoYear: "?&level=grad",
        }
        // gradYes & ageNo & individual
      }
    } else {
      if (age) {
        fees.full = 650;
        fees.installments = 34;
        fees.oneYear = 55;
        fees.twoYear = 94;
        fees.stringParams = {
          full: "?term=life&level=senior&joint=yes",
          installments: "?term=life&level=senior&joint=yes&installments=yes",
          oneYear: "?&level=senior&joint=yes",
          twoYear: "?&level=senior&joint=yes",
        }
        // gradYes & ageYes & joint
      } else {
        fees.full = 750;
        fees.installments = 39;
        fees.oneYear = 35;
        fees.twoYear = 59;
        fees.stringParams = {
          full: "?term=life&level=grad&joint=yes",
          installments: "?term=life&level=grad&joint=yes&installments=yes",
          oneYear: "?&level=grad&joint=yes",
          twoYear: "?&level=grad&joint=yes",
        }
        // gradYes & ageNo & joint
      }
    }
  } else {
    if (type === "individual") {
      if (age) {
        fees.full = 550;
        fees.installments = 29;
        fees.oneYear = 45;
        fees.twoYear = 79;
        fees.stringParams = {
          full: "?term=life&level=senior",
          installments: "?term=life&level=senior&installments=yes",
          oneYear: "?&level=senior",
          twoYear: "?&level=senior",
        }
        // gradNo & ageYes & individual
      } else {
        fees.full = 790;
        fees.installments = 41;
        fees.oneYear = 55;
        fees.twoYear = 94;
        fees.stringParams = {
          full: "?term=life",
          installments: "?term=life&installments=yes",
          oneYear: "",
          twoYear: "",
        }
        // gradNo & ageNo & individual
      }
    } else {
      if (age) {
        fees.full = 650;
        fees.installments = 34;
        fees.oneYear = 55;
        fees.twoYear = 94;
        fees.stringParams = {
          full: "?term=life&level=senior&joint=yes",
          installments: "?term=life&level=senior&joint=yes&installments=yes",
          oneYear: "?&level=senior&joint=yes",
          twoYear: "?&level=senior&joint=yes",
        }
        // gradNo & ageYes & joint
      } else {
        fees.full = 890;
        fees.installments = 46;
        fees.oneYear = 65;
        fees.twoYear = 109;
        fees.stringParams = {
          full: "?term=life&joint=yes",
          installments: "?term=life&joint=yes&installments=yes",
          oneYear: "?&joint=yes",
          twoYear: "?&joint=yes",
        }
        // gradNo & ageNo & joint
      }
    }
  }

  return fees;
}