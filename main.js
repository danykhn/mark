const data = JSON.stringify({
    "description": "string",
    "amount": 0,
    "groupId": "string",
    "firstDuePercentage": 0,
    "secondDuePercentage": 0,
    "daysAfterFirstDue": 0,
    "daysAfterSecondDue": 0,
    "startDate": "string"
  });
  
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "https://dev.api.zenrise.io/v1/zen-link");
  xhr.setRequestHeader("Content-Type", "application/json");
  
  xhr.send(data);