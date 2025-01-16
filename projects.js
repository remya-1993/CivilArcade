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


$("#applicationForm").submit((e) => {
  e.preventDefault()

  const applicationNumber = "APP" + Math.floor(100000 + Math.random() * 900000)

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxmiNFoZqhmWjyeTmOzxTNtyBam8TpdDpz0vqurcE4rnDjPXxUVWIhq44UGiMO263kDTg/exec",
    data: $("#applicationForm").serialize(),
    method: "post",
    success: function (response) {
      alert(`Your Application has been submitted successfully.\nYour Application Number is: ${applicationNumber}`);
      window.location.reload()
      //window.location.href="https://google.com"
    },
    error: function (err) {
      alert("Something Error")

    }
  })
})
