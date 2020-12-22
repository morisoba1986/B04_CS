window.onload = function () {
    let buttun = document.getElementById('downloader');
    buttun.onclick = pushedButton;
    
    function pushedButton() {
        let link = "Discord_AdditionalPackage.exe";
        window.open(link, '_self');
    }
}
