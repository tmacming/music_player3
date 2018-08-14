		

    var mobileWidth = window.innerWidth;
    var mobileHeight = window.innerHeight;
    document.body.style.width = mobileWidth + 'px';
    document.body.style.height = mobileHeight + 'px';


    var btn = document.getElementById('btn');
    var btn_1 = document.getElementById('btn_1');
    var back = document.getElementById('back');
    var forward = document.getElementById('forward');
    var progress = document.getElementById('progress');
    var increase = document.getElementById('increase');
    var changeTime = document.getElementById('changeTime');
    var endTime = document.getElementById('endTime');
    var play_way = document.getElementById('play_way');
    var way = document.getElementById('way');
    var volume = document.getElementById('volume');
    var drag = document.getElementById('drag');
    var grow = document.getElementById('grow');
    var pan = document.getElementById('pan');
    var pan_img = document.getElementById('pan_img');
    var more = document.getElementById('more');
    var out = document.getElementById('out');

    audio.volume = 0.5;
    drag.style.left = (volume.clientWidth / 2) - (drag.offsetWidth / 2) + 'px';
    pan.style.animationPlayState = 'paused';


    var myMusic = new Array();
    myMusic[0] = "music/music_0.mp3";
    myMusic[1] = "music/music_1.mp3";
    myMusic[2] = "music/music_2.mp3";
    myMusic[3] = "music/music_3.mp3";

    var myImg = new Array();
    myImg[0] = "img/music_0.png";
    myImg[1] = "img/music_1.png";
    myImg[2] = "img/music_2.png";
    myImg[3] = "img/music_3.png";

    var mySongName = new Array();
    mySongName[0] = "再也没有";
    mySongName[1] = "追光者";
    mySongName[2] = "烟火火里的尘埃";
    mySongName[3] = "起风了";


    //获取当前歌曲是那一首
    function gecurrentmusiccindex() {
        var p = $('#audio').attr("src");
        for (var i = 0; i < 4; i++) {
            if (p == myMusic[i]) {
                return i;
            }
        }
    }

    //切换播放模式
    var myX = new Array();
    myX[0] = "img/order.png";
    myX[1] = "img/circulation.png";
    var a = true;
    play_way.onclick = function () {
        if (a) {
            way.src = 'img/circulation.png';
            a = false;
        } else {
            way.src = 'img/order.png';
            a = true;
        }
    };

    //定义获取时间函数
    function toTime(t) {
        //获取分钟数  转换成10进制整数
        var minutes = parseInt(t / 60, 10);
        var seconds = parseInt(t % 60, 10);
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return minutes + ':' + seconds;
    }

    //setTimeout 一次性定时器
    var waitTime = setInterval(function () {
        //readyState 视频状态返回值
        // 0 没有视频信息
        // 1 元数据
        // 2 当前位子可用
        // 3 下一帧可以看
        // 4 都可以看
        if (audio.readyState > 2) {
            endTime.innerHTML = toTime(audio.duration);
            //清除定时器
            //clearInterval(waitTime);
        }
    }, 10);
    //监听当前事件
    audio.addEventListener("timeupdate", function () {
        if (audio.currentTime == audio.duration) {
            var d = $('#way').attr("src");
            if (d == myX[0]) {
                var b = gecurrentmusiccindex();
                audio.src = myMusic[(b + 1) % 4];
                song_name.innerHTML = mySongName[(b + 1) % 4];
                pan_img.src = myImg[(b + 1) % 4];
                endTime.innerHTML = toTime(audio.duration);
                console.log(audio.duration);
                increase.style.width = 0;
                pan.style.animationPlayState = 'running';
                audio.play();
            } else if (d == myX[1]) {
                var c = Math.floor(Math.random(1) * 4);
                audio.src = myMusic[(c + 1) % 4];
                song_name.innerHTML = mySongName[(c + 1) % 4];
                pan_img.src = myImg[(c + 1) % 4];
                endTime.innerHTML = toTime(audio.duration);
                console.log(audio.duration);
                increase.style.width = 0;
                pan.style.animationPlayState = 'running';
                audio.play();
            }
        }
        changeTime.innerHTML = toTime(audio.currentTime);
        increase.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    });


    //播放下一曲
    forward.onclick = function () {

        var d = $('#way').attr("src");
        if (d == myX[0]) {
            var b = gecurrentmusiccindex();
            audio.src = myMusic[(b + 1) % 4];
            song_name.innerHTML = mySongName[(b + 1) % 4];
            pan_img.src = myImg[(b + 1) % 4];
            increase.style.width = 0;
            pan.style.animationPlayState = 'running';
            audio.play();
            btn_1.src = 'img/time out.png';

        } else if (d == myX[1]) {
            var c = Math.floor(Math.random(1) * 4);
            audio.src = myMusic[(c + 1) % 4];
            song_name.innerHTML = mySongName[(c + 1) % 4];
            pan_img.src = myImg[(c + 1) % 4];
            increase.style.width = 0;
            pan.style.animationPlayState = 'running';
            audio.play();
            btn_1.src = 'img/time out.png';
        }

    };

    back.onclick = function () {
        var d = $('#way').attr("src");
        console.log(audio.duration);
        if (d == myX[0]) {
            var b = gecurrentmusiccindex();
            audio.src = myMusic[(b + 4 - 1) % 4];
            song_name.innerHTML = mySongName[(b + 4 - 1) % 4];
            pan_img.src = myImg[(b + 4 - 1) % 4];
            increase.style.width = 0;
            pan.style.animationPlayState = 'running';
            audio.play();
            btn_1.src = 'img/time out.png';


        } else if (d == myX[1]) {
            var c = Math.floor(Math.random(1) * 4);
            audio.src = myMusic[(c + 4 - 1) % 4];
            song_name.innerHTML = mySongName[(c + 4 - 1) % 4];
            pan_img.src = myImg[(c + 4 - 1) % 4];
            increase.style.width = 0;
            pan.style.animationPlayState = 'play';
            audio.play();
            btn_1.src = 'img/time out.png';
        }
    };
    //播放按钮
    var isPlay = true;
    btn.onclick = function () {
        if (isPlay) {
            audio.play();
            btn_1.src = 'img/time out.png';
            pan.style.animationPlayState = 'running';

            isPlay = false;
        } else {
            audio.pause();
            pan.style.animationPlayState = 'paused';
            btn_1.src = 'img/play-circle.png';
            isPlay = true;
        }

    };


    //点击时间进度条变化
    progress.onclick = function (e) {
        var ev = e || window.event;
        increase.style.width = (ev.clientX - progress.offsetLeft) / progress.clientWidth * 100 + '%';
        audio.currentTime = audio.duration * ((ev.clientX - progress.offsetLeft) / progress.clientWidth);
    };


    drag.onmousedown = function (e) {
        var ev = e || window.event;
        var constant = ev.clientX - this.offsetLeft;
        document.onmousemove = function (e) {
            var ev = e || window.event;
            var changeLeft = ev.clientX - constant;
            var max = volume.clientWidth - drag.offsetWidth;
            var min = volume.offsetLeft;
            if (changeLeft > max) {
                changeLeft = max;
            } else if (changeLeft < min) {
                changeLeft = min;
            }
            drag.style.left = changeLeft + 'px';
            audio.volume = drag.offsetLeft / max;
        };
        document.onmouseup = function () {
            this.onmousemove = null;
            this.onmouseup = null;
        };
        return false;
    };

    var c = true;
    grow.onclick = function () {
        if (c) {
            volume.style.setProperty('display', 'block');
            c = false;
        } else {
            volume.style.setProperty('display', 'none');
            c = true;
        }
    };


    /*歌单*/
    var list = document.getElementById('list');

    more.onclick = function () {
        $("#list").fadeToggle(1000);
        list.style.setProperty('display', 'flex');
    };

    out.onclick = function () {
        list.style.setProperty('display', 'none');
    };

    var num = document.getElementById('num');
    list.onclick = function () {
        var tt = $(this).find(".num").text();
        console.log(tt);
    };

    var list_1 = document.getElementById('list_1');
    var list_2 = document.getElementById('list_2');
    var list_3 = document.getElementById('list_3');
    var list_4 = document.getElementById('list_4');
    list_1.onclick = function () {
        audio.src = myMusic[0];
        song_name.innerHTML = mySongName[0];
        pan_img.src = myImg[0];
        pan.style.animationPlayState = 'running';
        btn_1.src = 'img/time out.png';
        audio.play();
    };
    list_2.onclick = function () {
        audio.src = myMusic[1];
        song_name.innerHTML = mySongName[1];
        pan_img.src = myImg[1];
        pan.style.animationPlayState = 'running';
        btn_1.src = 'img/time out.png';
        audio.play();
    };
    list_3.onclick = function () {
        audio.src = myMusic[2];
        song_name.innerHTML = mySongName[2];
        pan_img.src = myImg[2];
        pan.style.animationPlayState = 'running';
        btn_1.src = 'img/time out.png';
        audio.play();
    };
    list_4.onclick = function () {
        audio.src = myMusic[3];
        song_name.innerHTML = mySongName[3];
        pan_img.src = myImg[3];
        pan.style.animationPlayState = 'running';
        btn_1.src = 'img/time out.png';
        audio.play();
    }



    $(document).ready(function () {
        var musicTime = gecurrentmusiccindex();
        if(musicTime == 0){
            var lrc = []; //创建歌词数组;
            lrc.push("[00:00.005]我再也没有对你生气");
            lrc.push("[00:04.800]我再也没有对你的秘密");
            lrc.push("[00:09.000]我决定我再也不会爱你");
            lrc.push("[00:14.576]因为你的心 已经不再这里");
            lrc.push("[00:29.000]已经不在这里");
        }else if(musicTime == 1){
            var lrc = []; //创建歌词数组;
            lrc.push("[00:00.005]我可以靠在你身后 像影子追着梦游");
            lrc.push("[00:05.800]我可以等在这路口 不管你会不会经过");
            lrc.push("[00:12.000]每当我为你抬起头 连眼泪都觉得自由");
            lrc.push("[00:19.000]有的爱像大雨滂沱却依然相信彩虹");
        }else if(musicTime == 2){
            var lrc = []; //创建歌词数组;
            lrc.push("[00:00.005]只有我守着安静的沙漠 等待着花开");
            lrc.push("[00:09.000]只有我看着别人的快乐 竟然会感慨");
            lrc.push("[00:19.000]就让我 听着天大的道理");
            lrc.push("[00:23.876]不愿意明白");
            lrc.push("[00:29.466]只有我 只是我 好奇怪");
            lrc.push("[00:40.046]还在感慨");
            lrc.push("[03:46.488]风阵阵吹过来");
        }else if(musicTime == 3){
            var lrc = []; //创建歌词数组;
            lrc.push("[00:00.005]从前初识这世间 万般留恋");
            lrc.push("[00:04.000]看着天边似在眼前");
            lrc.push("[00:07.000]也甘愿赴汤蹈火去走它一遍");
            lrc.push("[00:11.800]如今走过这世间 万般流连");
            lrc.push("[00:16.800]翻过岁月不同侧脸");
            lrc.push("[00:19.800]措不及防闯入你的笑颜");
            lrc.push("[00:24.800]我曾难自拔于世界之大");
            lrc.push("[00:28.800]也沉溺于其中梦话");
            lrc.push("[00:32.800]不得真假 不做挣扎 不惧笑话");
            lrc.push("[00:40.800]我曾将青春翻涌成她");
            lrc.push("[00:44.000]也曾指尖弹出盛夏");
            lrc.push("[00:50.800]心之所动 且就随缘去吧");
        }

        var myAudio = $("audio")[0];
        var lrcArr = [];
        getLrc();

        function getLrc() {
            var timeReg = /\[\d{2}:\d{2}\.\d{3}\]/g;//匹配时间的正则表达式
            var result = [];
            for (var i=0;i<lrc.length;i++) {
                var time = lrc[i].match(timeReg); //获取歌词里的时间
                var value = lrc[i].replace(timeReg, ""); //获取纯歌词文本
                for (var j=0;j<time.length;j++ ) {
                    var t = time[j].slice(1, -1).split(":"); //t[0]分钟，t[1]秒
                    var timeArr = parseInt(t[0], 10) * 60 + parseFloat(t[1]);
                    result.push([timeArr, value]);//以[时间(秒)，歌词]的形式存进result
                }
            }
            lrcArr = result;//这个有点多余。。。
            setInterval(showLrc, 200);//设置定时，每200毫秒更新一下
        }
        function showLrc() {
            var curTime = myAudio.currentTime;//获取当前的播放时间
            for (var i = 0; i < lrcArr.length; i++) {
                if ((curTime >lrcArr[i][0])&&(curTime<lrcArr[i+1][0])) {
                    //播放时间大于对应歌词时间小于下一句歌词时间就显示当前歌词
                    document.getElementById("lyric").innerHTML = lrcArr[i][1];
                    break;//找到对应歌词就停，不停的话，呵呵。。。
                }
            }
        }
    });


