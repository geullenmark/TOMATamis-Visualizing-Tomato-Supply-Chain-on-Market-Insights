document.getElementById('imageInput').addEventListener('change', function() {
    var files = this.files;
    var selectedFileText = document.getElementById('selectedFileText');
    var textBar = document.querySelector('.text-bar');

    if (files.length > 0) {
        selectedFileText.textContent = 'Selected File: ' + files[0].name;
        textBar.value = files[0].name; // Update text bar with file name
    } else {
        selectedFileText.textContent = '';
        textBar.value = '';
    }
});