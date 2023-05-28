document.addEventListener('DOMContentLoaded', function() {
  var footer = document.querySelector('footer');
  var version = 'Version: ' + new Date().toLocaleDateString();
  footer.innerHTML += version;
});