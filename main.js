let inputFile = document.getElementById('myFile');
inputFile.addEventListener('change', function() {
  let file = this.files[0];
  let fileSize = file.size / 1024;
  alert("Fayl hajmi: " + fileSize + " KB");
});
