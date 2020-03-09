
function setDropdown (day){
  if(day == undefined){
    document.getElementById("day-select").selectedIndex = day - 1;
  } else {
    document.getElementById("day-select").selectedIndex = day - 1;
  }

  console.log(day);
}

