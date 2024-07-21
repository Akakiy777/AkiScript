$('document').ready(function(){
    function showFile(input) {
        let file = input.files[0];
      
        alert(`File name: ${file.name}`); // например, my.png
        alert(`Last modified: ${file.lastModified}`); // например, 1552830408824
    }
    showFile('folder.none')
});