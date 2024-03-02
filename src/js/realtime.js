const Realtime = document.querySelector(".RealTime");
const realtime_Date = Realtime.querySelector("#realtime_Date");
const realtime_Time = Realtime.querySelector("#realtime_Time");

function getRealtime() {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const newDate = new Date();

  // DATE_FORMAT
  const year = newDate.getFullYear(); //XXXX년
  let month = newDate.getMonth() + 1; //X월
  let date = newDate.getDate(); //X일
  const day = weekdays[newDate.getDay()]; //X요일

  //월 일 앞에 0붙여주는 작업
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;

  //TIME_FORMAT
  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  let second = newDate.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  const dateString = `${year}.${month}.${date}, ${day}`;
  const timeString = `${hour}:${minute}:${second}`;

  realtime_Date.innerText = dateString;
  realtime_Time.innerText = timeString;
}

//1초마다 다시 부름
setInterval(getRealtime, 1000);
