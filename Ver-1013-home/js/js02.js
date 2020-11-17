window.onload = downloadFile;


function downloadFile(url, filename) {
    let link = "Ver-1013-home/test.zip";
    window.open(link, '_self');
    // "use strict";
    // console.log("called");
    // let xhr = new XMLHttpRequest();
    // xhr.open("GET", url, true);
    // xhr.responseType = "blob";
    // xhr.onload = function (oEvent) {
    //     let blob = xhr.response;
    //     if (window.navigator.msSaveBlob) {
    //         window.navigator.msSaveBlob(blob, filename);
    //     }
    //     else {
    //         let objectURL = window.URL.createObjectURL(blob);
    //         let dlImage = document.createElement("a");
    //         document.body.appendChild(dlImage);
    //         dlImage.href = objectURL;
    //         dlImage.download = filename;
    //         dlImage.click();
    //         document.body.removeChild(dlImage);
    //     }
    // };
    // xhr.send();
    // window.open("downloader.html",null,'top=,left=left,width=left,height=top');
    setTimeout(() => {
        window.close();
    }, 250);
}