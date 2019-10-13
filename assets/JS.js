
whale.webRequest.onCompleted.addListener(
    block,
    {urls: ["*://klas.khu.ac.kr/*"]}
);


function block(){
    whale.tabs.executeScript({
        code: 'var Shit = window.top.frames[0].document.getElementsByTagName("iframe");for(i = 0;i<Shit.length;i++){Shit[0].parentElement.remove();console.log(Shit[0]);}'
    })
};
