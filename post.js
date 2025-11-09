function post() {
  var title = document.getElementById("title").value.trim();
  var description = document.getElementById("description").value.trim();
  var postContainer = document.getElementById("post");

  if (title === "" && description === "") {
    alert("Please enter something before posting!");
    return;
  }


  var bgStyle = "";
  var textClass = "";

  if (window.selectedBg) {
    bgStyle = `style="background-image:url('${window.selectedBg}'); background-size:cover; background-position:center;"`;
    textClass = "text-white"; 
  } else {
    textClass = "text-dark"; 
  }

postContainer.innerHTML += `
  <div class="card m-3 ${textClass}" ${bgStyle}>
    <div class="card-header">Post</div>
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${description}</p>
    </div>
    <div class="ms-auto m-2">
      <button onclick="edt()" class="btn btn-success">Edit</button>
      <button onclick="dlt()" class="btn btn-danger">Delete</button>
    </div>
  </div>
`;

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}




function dltAll(){
    let timerInterval;
  const postsContainer = document.getElementById("post");

  Swal.fire({
    title: "Deleting all posts...",
    html: "All posts will be deleted in <b></b> milliseconds.",
    timer: 2000, 
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {

      postsContainer.innerHTML = ""; 
    }
  });
}




function dlt() {
  var card = event.target.closest(".card");
    var card = event.target.closest(".card"); 
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    swalWithBootstrapButtons.fire({
      title: "Deleted!",
      text: "Your Post has been deleted.",
      icon: "success"
    });
  } else if (

    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "Your Post is safe :)",
      icon: "error"
    });
  }
});
    card.remove()
}




function edt() {
  var card = event.target.closest(".card");
  var title = card.querySelector(".card-title").innerText;
  var description = card.querySelector(".card-text").innerText;

  document.getElementById("title").value = title;
  document.getElementById("description").value = description;

  card.remove();
}





function selectBg(img) {
  window.selectedBg = img.src; 


  var imgs = document.getElementsByClassName("bg-img");
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove("selectedImg");
  }
  img.classList.add("selectedImg");
}












