
function toggleForm() {
    var form = document.getElementById("quoteForm");
    if (form.style.display === "none" || form.style.display === "") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }