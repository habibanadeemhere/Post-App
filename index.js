function goToPost() {
  const name = document.getElementById("exampleInputEmail1").value.trim();
  const email = document.getElementById("exampleInputPassword1").value.trim();
  const loader = document.getElementById("loader");
  const form = document.getElementById("loginForm");

 



  if (name && email) {

    form.style.display = "none";
    loader.style.display = "block";
 

    setTimeout(function() {
      window.location.href = "post.html";
    }, 2000);

    return false; 
  } else {
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please enter both the fields!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
    return false;
  }
}










