import axios from 'axios';

export function sendRequest(url, params = {}, onSuccess = defaultOnSuccess, onError = defaultOnError){
  axios.get(url, {
    params
  })
  .then(function (response) {
    onSuccess(response);
  })
  .catch(function (error) {
    onError(error);
  });
}
function defaultOnSuccess(response){
  console.log(response);
}
function defaultOnError(error){
  console.log(error);
}
