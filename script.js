input_file.onclick = function( ) {
sp.innerText = 'Done! '
click_img.src = 'checked.png';
};
button.onclick = function() {
    let fileName = input_file.value;
    let fileType = fileName.slice(fileName.lastIndexOf('.') + 1);
    console.log(fileType);

if(fileType === 'html') {
page_html.style.display = 'flex';
wrap.style.display = 'none';
} else if(fileType === 'js') {
    page_js.style.display = 'flex';
    wrap.style.display = 'none';
} else if(fileType === 'png') {
    page_png.style.display = 'flex';
    wrap.style.display = 'none';
} else if(fileType === 'jpg') {
    page_jpg.style.display = 'flex';
    wrap.style.display = 'none';
} else if(fileType === 'jpeg') {
    page_jpeg.style.display = 'flex';
    wrap.style.display = 'none';
} else if(fileType === 'zip') {
    page_zip.style.display = 'flex';
    wrap.style.display = 'none';
} else{
    page_unc.style.display = 'flex';
wrap.style.display = 'none';
}
};
