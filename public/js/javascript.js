window.onload = function(){

  var formHandle = document.forms.messageForm;
  formHandle.onsubmit = sendMessage;

  const activityEl = document.getElementById("activity");

  const get_activity = document.getElementById("get_activity");
  get_activity.addEventListener('click',generateActivity);

  generateActivity();

  //var message = "";
  async function generateActivity(message){
  
    const activityRes = await fetch("https://www.boredapi.com/api/activity",{
      headers:{
        'Accept':'application/json'
      }
    });
    const activityObj = await activityRes.json();
    activityEl.innerHTML = activityObj.activity;

  }
  //message = activityEl.textContent;
  
  function sendMessage(){
    var body= formHandle.messageContent;
    body.value = activityEl.textContent;

    var phoneNumber = formHandle.recieverNumber.value;
  }

return false;
}