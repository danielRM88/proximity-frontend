export const processErrorMessages = errorsHash => {

  let msg = "";
  let errors;
  let error;
  let field = null;
  let processedErrors = [];

  for(field in errorsHash){
    msg = ""+mapper(field)+": ";
    errors = errorsHash[field];

    for(error in errors) {
      msg += ""+mapper(errors[error])+", ";
    }
    msg = msg.slice(0, msg.lastIndexOf(","));
    processedErrors.push(msg);
  }

  return processedErrors;
}

export const mapper = string => {
  let translation = string
  if(string == "mac_address") {
    translation = "Mac Address";
  } else if (string == "name") {
    translation = "Name";
  } else if (string == "records_to_calibrate") {
    translation = "No. of Measurements";
  }

  return translation;
}