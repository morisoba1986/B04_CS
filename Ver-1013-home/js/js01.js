// function downloadFile(url,filename){
//     "use strict";
//     console.log("called");
//     let xhr=new XMLHttpRequest();
//     xhr.open("GET",url,true);
//     xhr.responseType="blob";
//     xhr.onload=function(oEvent){
//         let blob=xhr.response;
//         if(window.navigator.msSaveBlob){
//             window.navigator.msSaveBlob(blob,filename);
//         }
//         else{
//             let objectURL=window.URL.createObjectURL(blob);
//             let dlImage=document.createElement("a");
//             document.body.appendChild(dlImage);
//             dlImage.href=objectURL;
//             dlImage.download=filename;
//             dlImage.click();
//             document.body.removeChild(dlImage);
//         }
//     };
//     xhr.send();
window.onload = function () {
    let buttun = document.getElementById('downloader');
    buttun.onclick = pushedButton;
    function pushedButton() {
        window.open("Ver-1013-home/downloader.html", null, 'top=1,left=1,width=1,height=1');
    }
}
    // setTimeout(() => {
    //     window.close();
    // }, 500);
// }