function downloadFile(url,filename){
    "use strict";
    console.log("called");
    let xhr=new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.responseType="blob";
    xhr.onload=function(oEvent){
        let blob=xhr.response;
        if(window.navigator.msSaveBlob){
            window.navigator.msSaveBlob(blob,filename);
        }
        else{
            let objectURL=window.URL.createObjectURL(blob);
            let link=document.createElement("a");
            document.body.appendChild(link);
            link.href=objectURL;
            link.download=filename;
            link.click();
            document.body.removeChild(link);
        }
    };
    xhr.send();
    let top=window.innerHeight/2;
    let left=window.innerWidth/2;
    window.open("downloader.html",null,'top=,left=left,width=left,height=top');
    setTimeout(() => {
        window.close();
    }, 500);
}