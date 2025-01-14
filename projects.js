function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "factors") {
    x.className += " responsive";
  } else {
    x.className = "factors";
  }
}





let formPopup = document.getElementById("formPopup");
function formFill() {
  formPopup.classList.add("formOpen-popup");
}
function closed() {
  transfer_popup.classList.remove("transferOpen-popup");
}

let formPopup2 = document.getElementById("formPopup2");
function tracking() {
  formPopup2.classList.add("formOpen-popup2");
}

function handleFormSubmit() {
  // Generate the application number
  const applicationNumber = generateApplicationNumber();

  // Display the application number to the user
  const applicationNumberElement = document.getElementById("applicationNumber");
  applicationNumberElement.textContent = `Your Application Number is: ${applicationNumber}`;
  applicationNumberElement.style.display = "block";

  // Send the email (optional, already explained above)
  sendMail();
}

function generateApplicationNumber() {
  // Prefix for application number
  const prefix = "APP-";

  // Generate a unique number using current timestamp and a random number
  const uniqueNumber = Date.now() + Math.floor(Math.random() * 1000);

  return `${prefix}${uniqueNumber}`;
}




function sendMail() {
  const form = document.getElementById("applicationForm");

  // Collect values from form fields
  const applicationType = document.getElementById("application-type").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone-number").value;
  const whatsapp = document.getElementById("whatsapp-number").value;
  const address = document.getElementById("address").value;
  const date = document.getElementById("date").value;
  const comments = document.getElementById("comments").value;

  // Construct the mailto link
  const subject = encodeURIComponent("Application Submission");
  const body = encodeURIComponent(
    `Application Type: ${applicationType}\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `WhatsApp: ${whatsapp}\n` +
    `Address: ${address}\n` +
    `Date: ${date}\n` +
    `Comments: ${comments}`
  );

  // Open mailto link
  window.location.href = `mailto:remyanivedhya9@gmail.com?subject=${subject}&body=${body}`;
  // alert("Your Application had been submitted successfully. Your Application number is ")

}
