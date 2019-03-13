import {
    promise
} from "thunks";

{
    let ajax = function (callback) {
        console.log('begin1');
        setTimeout(() => {
            callback.call();
        }, 1000);
    };
    ajax(function () {
        console.log('promise1');
    });
}

{
    let ajax = function () {
        console.log('begin2');
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    };
    ajax().then(function () {
        console.log('promise2');
    });
}

{
    let ajax = function () {
        console.log('begin3');
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    };
    ajax().then(function () {
        console.log('promise3');
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    }).then(function () {
        console.log('promise3-1');
    });
}

// 异常捕获
{
    let ajax = function (num) {
        console.log('ajax4..');
        return new Promise(function (resolve, reject) {
            if (num > 5) {
                resolve();
            } else {
               throw new Error('an error..');
            }
        })
    };
    ajax(1).then(function () {
        console.log('ajax6...');
    }).catch(function (err) {
        console.log(err);
    }); // 输出 an error..

    ajax(6).then(function () {
        console.log('ajax6...');
    }).catch(function (err) {
        console.log(err);
    }); // 输出 ajax6...
}

// 所有图片加载完再添加到页面
{
    function loadImg(src) {
        return new Promise(function(resolve, reject){
            let img = document.createElement('img');
            img.src = src;
            img.onload = function() {
                resolve(img);
            };
            img.onerror = function(err) {
                reject(err);
            };
        });
    }
    function showImgs(imgs) {
        imgs.forEach(element => {
            document.body.appendChild(element);
        });
    }
    Promise.all([
        loadImg('https://www.xwboke.cn/api/api.php?1'),
        loadImg('https://www.xwboke.cn/api/api.php?2'),
        loadImg('https://www.xwboke.cn/api/api.php?3')
    ]).then(showImgs);

}
// 只加载最先加载完的图片
{
    function loadImg(src) {
        return new Promise(function(resolve, reject){
            let img = document.createElement('img');
            img.src = src;
            img.onload = function() {
                resolve(img);
            };
            img.onerror = function(err) {
                reject(err);
            };
        });
    }
    function showImgs(img) {
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    Promise.race([
        loadImg('https://www.xwboke.cn/api/api.php?11'),
        loadImg('https://www.xwboke.cn/api/api.php?21'),
        loadImg('https://www.xwboke.cn/api/api.php?31')
    ]).then(showImgs);

}