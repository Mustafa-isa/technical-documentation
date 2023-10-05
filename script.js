const pre = document.querySelectorAll("pre")
pre.forEach(pr =>{
  pr.addEventListener('click' ,(e)=>{
    // check that icon clicked 
    if(e.target.classList.contains("fa-copy")){
  const parent  = e.target.parentNode
  const textCopied =parent.querySelector('code').textContent
  console.log(textCopied)
  navigator.clipboard.writeText(textCopied)
  .then(function() {
    showToast()
  })
  .catch(function(error) {
showErrorToast()
  });
    }
return 
  })
})
function showToast() {
  var toast = Toastify({
    text: "copied",
    duration: 5000,
    gravity: "top",
    position: "center",
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    close: true, // Enable close button
    onClick: function() {
      toast.hideToast(); // Hide the toast when the close button is clicked
    }
  });
  
  toast.showToast();
}
// toast for error
function showErrorToast() {
  Toastify({
    text: "Unable to copy text:!",
    duration: 3000,
    gravity: "top",
    position: "left",
    backgroundColor: "linear-gradient(to right, #ff4b5c, #ff9068)",
    close: true,
    onClick: function() {
      toast.hideToast();
    }
  }).showToast();
}
