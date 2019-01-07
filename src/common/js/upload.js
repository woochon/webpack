let xhr = new XMLHttpRequest();
xhr.open('POST', 'url');
// 上传完成后的回调函数
xhr.onreadystatechange = function() {
    if (xhr.status === 200) {
        console.log(xhr.responseText);
    } else {
        console.log('上传出错');
    }
};
// 获取上传进度
xhr.upload.onprogress = function(event) {
    console.log(event.loaded);
    console.log(event.total);
    if (event.lengthComputable) {
        let percent = Math.floor(event.loaded / event.total * 100);
       /* document.querySelector("#progress .progress-item").style.width = percent + "%";*/
        // 设置进度显示
        console.log(percent)
    }
};
xhr.send(fd);