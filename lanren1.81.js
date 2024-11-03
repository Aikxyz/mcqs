// ==UserScript==
// @name         懒人插件
// @namespace    http://tampermonkey.net/
// @version      1.81
// @description  try to take over the world!
// @author       You
// @match        *://mcqs.bibbuyer.com:1780/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bibbuyer.com
// @require      https://cdn.bootcdn.net/ajax/libs/vue/2.7.9/vue.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const autoPos = [0.940, 0.303, 0.415, 0.490, 0.630, 0.506, 0.950, 0.804]//01 02 03 45
    const goods = [908,946,991,1701,1703,1705,1707,1709,1711,1713,1715,1789]
    const Goods = []
    let size = []
    let arr
    let x=0
    let y=1
    let z=1
    let st=0
    let dc=1
    let sxgx=1
    let ck=1
    let powerpet =[]
    let lastmove = 0
    let lastmove1 = 0
    let skipx = 0
    let skipy = 0
    let door = 0
    let skip = 1
    let test = 0
    let code = 0
    let kc = 1
    let dybs9 = 1
    let huoli = 666
    let zdhl = 0
    let jsq = 0
    let kzq = 2
    let bfb = 0

    // 创建悬浮窗容器
    const floatingWindow = document.createElement('div');
    floatingWindow.style.position = 'fixed';
    floatingWindow.style.top = '60px';
    floatingWindow.style.right = '-3px';
    floatingWindow.style.width = '67px';
    floatingWindow.style.padding = '5px';
    floatingWindow.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    floatingWindow.style.borderRadius = '5px';

    const floatingWindow1 = document.createElement('div');
    floatingWindow1.style.position = 'fixed';
    floatingWindow1.style.top = '274px';
    floatingWindow1.style.left = '3px';
    floatingWindow1.style.width = '80px';
    floatingWindow1.style.padding = '5px';
    floatingWindow1.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    floatingWindow1.style.borderRadius = '5px';

    // 创建懒人按钮
    var lanren = document.createElement('button');
    lanren.textContent = '隐藏';
    lanren.style.position = 'fixed';
    lanren.style.top = '36px';
    lanren.style.right = '8px';
    lanren.style.width = '50px';
    lanren.style.height = '26px';
    lanren.style.borderRadius = '12px';

    lanren.onclick = function() {
        if (floatingWindow.style.display === "none") {
            // 如果悬浮窗当前是隐藏的，那么显示它
            floatingWindow.style.display = "block";
            floatingWindow1.style.display = "block";
            lanren.textContent = '隐藏';
        } else {
            // 如果悬浮窗已经显示，那么隐藏它
            floatingWindow.style.display = "none";
            floatingWindow1.style.display = "none";
            lanren.textContent = '懒人';
        }
    }

    /*
    lanren.addEventListener('click', function() {
        if(lanren.textContent === '隐藏'){
            floatingWindow.style.display = "none";
            lanren.textContent = '开启';
        }
        if(lanren.textContent === '开启'){
            floatingWindow.style.display = "block";
            lanren.textContent = '隐藏';
        }
    });
*/
    // 监听游戏消息并更新bs数组
    //const goods = [ 735, 717, 711, 723, 729, 705 ];
    let bs = ['r','b','g','p','y','w','hl','jy','jyn','gx','gxs','sdn','cs','dh','sjy','dxy','sjx','sjyh','sjxh','bsb','bsbn','sdk']
    let Bs = ['R','B','G','P','Y','W','r','b','w','g','p','y']
    let sx = ['fire','ice','ele']
    for(let i;i<3;i++){
        sx[i]=0;
    }
    const red3 = [ 733 ]//3级闪避
    const red4 = [ 734 ]//4级闪避
    const red5 = [ 735 ]//5级闪避
    const red6 = [ 736 ]//6级闪避
    const blue3 = [ 715 ]//3级防御
    const blue4 = [ 716 ]//4级防御
    const blue5 = [ 717 ]//5级防御
    const blue6 = [ 718 ]//6级防御
    const green3 = [ 709 ]//3级攻击
    const green4 = [ 710 ]//4级攻击
    const green5 = [ 711 ]//5级攻击
    const green6 = [ 712 ]//6级攻击
    const purple3 = [ 721 ]//3级暴击
    const purple4 = [ 722 ]//4级暴击
    const purple5 = [ 723 ]//5级暴击
    const purple6 = [ 724 ]//6级暴击
    const yellow3 = [ 727 ]//3级穿透
    const yellow4 = [ 728 ]//4级穿透
    const yellow5 = [ 729 ]//5级穿透
    const yellow6 = [ 730 ]//6级穿透
    const white3 = [ 703 ]//3级生命
    const white4 = [ 704 ]//4级生命
    const white5 = [ 705 ]//5级生命
    const white6 = [ 706 ]//6级生命
    const fish = [ 919 ]//小鱼干
    const exp = [ 1007 ]//双倍经验
    const feats = [ 1009 ]//双倍功勋
    const sweep = [ 1061 ]//扫荡卡
    const tpstone = [ 941 ]//深渊传送石
    const Clothes = [ 2507 ]//少将衣
    const clothes = [ 265 ]//上校衣
    const Shoes = [ 2512 ]//少将鞋
    const bsb = [ 1048 ]//1级宝石礼包
    bs[12] = null
    bs[13] = 0
    ar3zpzxh0.addEventListener("message", ({ data }) => {
        if (data.startsWith('3450')) {
            const [_, temp, id, num,temp1,temp2,lv] = data.split('&&')
            if (red5.indexOf(Number(id)) > -1) {
                bs[0] = temp;//5级闪避
            }
            if (blue5.indexOf(Number(id)) > -1) {
                bs[1] = temp;//5级防御
            }
            if (green5.indexOf(Number(id)) > -1) {
                bs[4] = temp;//5级攻击
            }
            if (purple5.indexOf(Number(id)) > -1) {
                bs[3] = temp;//5级暴击
            }
            if (yellow5.indexOf(Number(id)) > -1) {
                bs[2] = temp;//5级穿透
            }
            if (white5.indexOf(Number(id)) > -1) {
                bs[5] = temp;//5级生命
            }
            if (red6.indexOf(Number(id)) > -1) {
                Bs[0] = temp;//6级闪避
            }
            if (blue6.indexOf(Number(id)) > -1) {
                Bs[1] = temp;//6级防御
            }
            if (green6.indexOf(Number(id)) > -1) {
                Bs[4] = temp;//6级攻击
            }
            if (purple6.indexOf(Number(id)) > -1) {
                Bs[3] = temp;//6级暴击
            }
            if (yellow6.indexOf(Number(id)) > -1) {
                Bs[2] = temp;//6级穿透
            }
            if (white6.indexOf(Number(id)) > -1) {
                Bs[5] = temp;//6级生命
            }
            if (red4.indexOf(Number(id)) > -1) {
                Bs[6] = temp;//4级闪避
            }
            if (blue4.indexOf(Number(id)) > -1) {
                Bs[7] = temp;//4级防御
            }
            if (green4.indexOf(Number(id)) > -1) {
                Bs[11] = temp;//4级攻击
            }
            if (purple4.indexOf(Number(id)) > -1) {
                Bs[10] = temp;//4级暴击
            }
            if (yellow4.indexOf(Number(id)) > -1) {
                Bs[9] = temp;//4级穿透
            }
            if (white4.indexOf(Number(id)) > -1) {
                Bs[8] = temp;//4级生命
            }
            if (red3.indexOf(Number(id)) > -1) {
                Bs[12] = temp;//3级闪避
            }
            if (blue3.indexOf(Number(id)) > -1) {
                Bs[13] = temp;//3级防御
            }
            if (green3.indexOf(Number(id)) > -1) {
                Bs[15] = temp;//3级攻击
            }
            if (purple3.indexOf(Number(id)) > -1) {
                Bs[16] = temp;//3级暴击
            }
            if (yellow3.indexOf(Number(id)) > -1) {
                Bs[17] = temp;//3级穿透
            }
            if (white3.indexOf(Number(id)) > -1) {
                Bs[14] = temp;//3级生命
            }
            if (fish.indexOf(Number(id)) > -1) {
                bs[6] = temp;//小鱼干
            }
            if (exp.indexOf(Number(id)) > -1) {
                bs[7] = temp;//双倍经验
                bs[8] = num;//双倍经验数量
            }
            if (feats.indexOf(Number(id)) > -1) {
                bs[9] = temp;//双倍功勋
                bs[10] = num;//双倍功勋数量
            }
            if (sweep.indexOf(Number(id)) > -1) {
                bs[21] = temp;//扫荡卡
                bs[11] = num;//扫荡卡数量
            }
            if (tpstone.indexOf(Number(id)) > -1) {
                bs[12] = temp;//深渊传送石
            }
            if (Clothes.indexOf(Number(id)) > -1) {
                if(lv>0){
                    if(lv>6){
                        bs[14] = temp;//少将+7衣
                    }
                    else
                        bs[17] = temp;//少将+1衣
                }
            }
            if (clothes.indexOf(Number(id)) > -1) {
                if(lv>6){
                    bs[15] = temp;//上校+7衣
                }
            }
            if (Shoes.indexOf(Number(id)) > -1) {
                if(lv>0){
                    if(lv>6){
                        bs[16] = temp;//少将+7鞋
                    }
                    else
                        bs[18] = temp;//少将+1鞋
                }
            }
            if (bsb.indexOf(Number(id)) > -1) {
                bs[19] = temp;//1级宝石礼包
                bs[20] = num;//1级宝石礼包数量
            }
            if(ck){
                if (goods.indexOf(Number(id)) > -1) {
                    // 自动入库
                    Goods[id]=temp;
                    ar3zpzxh0.send('033&&1&&' + temp)
                }
            }
        }
        if (data.startsWith('3850')) {
            huoli = 0
            sxgx=1;
            updateShuxing();
        }
        if (data.startsWith('3851')) {
            huoli = data.split('&&')[1]
            sxgx=1;
            updateShuxing();
        }
        if (data.startsWith('3852')) {
            huoli = data.split('&&')[1]/1+240
            sxgx=1;
            updateShuxing();
        }
        if (data.startsWith('3853')) {
            huoli = data.split('&&')[1]/1+360
            sxgx=1;
            updateShuxing();
        }
        if (data.startsWith('3471')) {
            const [_, temp, id, num] = data.split('&&')
            if (sweep.indexOf(Number(id)) > -1) {
                bs[11] = num;//扫荡卡数量
            }
            if (bsb.indexOf(Number(id)) > -1) {
                bs[20] = num;//1级宝石礼包数量
            }
        }
        if (data.startsWith('60413')) {
            const [_, lv] = data.split('&&')
            if (lv==9) {
                powerpet[13] = 13 ;
            }
        }
        if (data.startsWith('60414')) {
            const [_, lv] = data.split('&&')
            if (lv==9) {
                powerpet[14] = 14 ;
            }
        }
        if (data.startsWith('60415')) {
            const [_, lv] = data.split('&&')
            if (lv==9) {
                powerpet[15] = 15 ;
            }
        }
        if (data.startsWith('34025623')) {//
            bs[13] = 25623
            ar3zpzxh0.send(`059&&2&&1`)
            for(let i=0;i<3;i++){
                ar3zpzxh0.send(`059&&2&&0`)
                ar3zpzxh0.send(`059&&3&&13`)
            }
        }
        if (data.startsWith('34025622')) {//
            bs[13] = 25622
            ar3zpzxh0.send(`059&&2&&1`)
            for(let i=0;i<3;i++){
                ar3zpzxh0.send(`059&&2&&0`)
                ar3zpzxh0.send(`059&&3&&13`)
            }
        }
        if (data.startsWith('34025620')) {//
            bs[13] = 25620
            ar3zpzxh0.send(`059&&2&&1`)
            for(let i=0;i<3;i++){
                ar3zpzxh0.send(`059&&2&&0`)
                ar3zpzxh0.send(`059&&3&&13`)
            }
        }
        if (data.startsWith('34155')) {//
            const [_, num] = data.split('&&')
            sx[0] = num;//火属性
            sxgx=1;
            updateShuxing();
        }
        if (data.startsWith('34156')) {//
            const [_, num] = data.split('&&')
            sx[1] = num;//冰属性
            sxgx=1;
            updateShuxing();
        }
        if (data.startsWith('34157')) {//
            const [_, num] = data.split('&&')
            sx[2] = num;//电属性
            sxgx=1;
            updateShuxing();
        }
        if (data.startsWith('821')) {
           bfb = data.substring(3); //地图百分比
        }
        /*
        if (data.startsWith('8280&&&&0&&2&&0&&0&&0&&-1&&-1&&0&&0&&骑士团的[Aikx]进入世界地魔王[火神纳尔什]所在地图')) {//Aikx
            if(bs[13]=1){
                fireButton.click();
            }
        }
       // if (data.indexOf('[Aikx]进入阵营地魔王[火神纳尔什]所在地图')) {//Aikx
         //   if(bs[13]=1){
           //     PowerButton.click();
           // }
       // }
        }
        if (data.startsWith('8280&&&&0&&2&&0&&0&&0&&-1&&-1&&0&&0&&骑士团的[云澈]进入世界地魔王[火神纳尔什]所在地图')) {//云澈
            if(bs[13]=2){
                fireButton.click();
            }
        }
        if (data.startsWith('8280&&&&0&&2&&0&&0&&0&&-1&&-1&&0&&0&&骑士团的[云澈]进入阵营地魔王[火神纳尔什]所在地图')) {//云澈
            if(bs[13]=2){
                fireButton.click();
            }
        }
*/

        // if (data.startsWith('81657')||data.startsWith('3680&&')) {
        //     lastmove = Date.now()
        // }

        if(st&&((arr[4]==1)||(arr[4]==11))){
            if((arr[4]==11)&&(dc)){
                ar3zpzxh0.send(`024&&0`)
            }
            if (data.startsWith('62325623&&好友[Aikx]进入深渊1层开始冒险')||(data.startsWith('500')&&(data.indexOf(25623))>-1)){
                ar3zpzxh0.send(`052&&25623`)
            }
            if(data.startsWith('82825623&&Aikx')){
                const [_, a, b, c, d, team] = data.split('&&')
                ar3zpzxh0.send(`052&&${team}`)
            }
            if (data.startsWith('62325620&&好友[云澈]进入深渊1层开始冒险')||(data.startsWith('500')&&(data.indexOf(25620))>-1)){
                ar3zpzxh0.send(`052&&25620`)
            }
            if(data.startsWith('82825620&&云澈')){
                const [_, a, b, c, d, team] = data.split('&&')
                ar3zpzxh0.send(`052&&${team}`)
            }
        }

//         if(zdhl){
//             if (data.startsWith('3850')) { //是否0活
//                 if(bfb<10){ //判断地图进度
//                     ar3zpzxh0.send(`30&&${bs[6]}`)//自动吃鱼干
//                 }
//             }
//             if(jsq)
//             setTimeout(() => {
//                 //ar3zpzxh0.send(`030&&${bs[21]}`)//进图半秒自动扫荡卡
//                 alert("扫荡")
//                 jsq = 0
//             }, 500);
//         }

        //地图识别
        if (data.startsWith('361')) {
            kzq += 1
            if(zdhl && A56==2 && kzq>1 && huoli===0){
                kzq = 0
                ar3zpzxh0.send(`30&&${bs[6]}`)//自动吃鱼干
            }
            if(zdhl)
                setTimeout(() => {
                    ar3zpzxh0.send(`030&&${bs[21]}`)//进图半秒自动扫荡卡
                }, 500);

            arr = data.split('&&')
            if(arr[4]==1||arr[4]==11){
                jsq = 0
                kzq = 0
            }
            updateShuxing();
            if(x) {
                setTimeout(() => {
                    ar3zpzxh0.send(`142&&1&&1`)// 自动回血
                    if(x==1){
                        ar3zpzxh0.send(`142&&2&&1`)// 自动30%回血 x=1
                    }
                    else{
                        ar3zpzxh0.send(`142&&2&&0`)// 自动30%回血 x=1
                    }
                    if(x==2){
                        ar3zpzxh0.send(`142&&3&&1`)// 自动50%回血 x=2
                    }
                    else{
                        ar3zpzxh0.send(`142&&3&&0`)// 自动50%回血 x=2
                    }
                    if(x==3){
                        ar3zpzxh0.send(`142&&4&&1`)// 自动80%回血 x=3
                    }
                    else{
                        ar3zpzxh0.send(`142&&4&&0`)// 自动80%回血 x=3
                    }
                }, 1000);
            }

        }
        //深渊前3611
        //深渊1 361301~361410
        //深渊2 361411~361530
        //深渊3 361531~361630
        if (data.startsWith('361540')) {//深渊3 10层
            setTimeout(() => {
                ar3zpzxh0.send(`122&&0`)
            }, 1000);
        }
        if (data.startsWith('361550')) {//深渊3 20层
            setTimeout(() => {
                ar3zpzxh0.send(`122&&0`)
            }, 1000);
        }
        if (data.startsWith('361560')) {//深渊3 30层
            setTimeout(() => {
                ar3zpzxh0.send(`122&&0`)
            }, 1000);
        }
        if (data.startsWith('361570')) {//深渊3 40层
            setTimeout(() => {
                ar3zpzxh0.send(`122&&0`)
            }, 1000);
        }
        if (data.startsWith('361580')) {//深渊3 50层
            setTimeout(() => {
                ar3zpzxh0.send(`122&&0`)
            }, 1000);
        }
        if (data.startsWith('361590')) {//深渊3 60层
            setTimeout(() => {
                ar3zpzxh0.send(`122&&0`)
            }, 1000);
        }
        if (data.startsWith('361600')) {//深渊3 70层
            setTimeout(() => {
                ar3zpzxh0.send(`122&&0`)
            }, 1000);
        }
        if (data.startsWith('361610')) {//深渊3 80层
            setTimeout(() => {
                ar3zpzxh0.send(`122&&0`)
            }, 1000);
        }
        if (data.startsWith('361620')) {//深渊3 90层
            setTimeout(() => {
                ar3zpzxh0.send(`122&&0`)
            }, 1000);
        }
        if (data.startsWith('361630')) {//深渊3 100层
            setTimeout(() => {
                ar3zpzxh0.send(`122&&0`)
            }, 1000);
        }
        if (data.startsWith('361640')) {//深渊3 110层/火
            setTimeout(() => {
                ar3zpzxh0.send(`122&&0`)
            }, 1000);
        }
        if (data.startsWith('361650')) {//深渊3 120层/冰
            setTimeout(() => {
                ar3zpzxh0.send(`122&&0`)//战力下宝石
                downBS();
                ar3zpzxh0.send(`122&&2`)//冰属下宝石
                downBS();
            }, 1000);
        }



        if (data.startsWith('371')) {
            const [temp, high, x, y] = data.slice(3).split('&&');
            door = temp;
        }

        if (data.startsWith('3051&&0')) {
            document.body.appendChild(floatingWindow); // 将悬浮窗容器添加到页面body元素中
        }

        if(st){//刷图功能

            if(dc) {
                if (data.startsWith('361408')) {//108层
                    setTimeout(() => {
                        ar3zpzxh0.send(`141&&0`)//开活力
                        ar3zpzxh0.send(`122&&1`)//切换第二套
                    }, 1000);
                }
                if (data.startsWith('361409')) {//109层
                    setTimeout(() => {
                        ar3zpzxh0.send(`141&&0`)
                        ar3zpzxh0.send(`122&&1`)
                    }, 1000);
                }
            }

//             else {
//                 if (data.startsWith('361408')||data.startsWith('361409')){}
//                 else{
//                     ar3zpzxh0.send(`025&&${door}`)//跳门
//                 }
//             }
            if (arr[4]==11) {//深渊主城
                skip = 1
            }
            if (data.startsWith('361408')) {//108层
                skip = 0
            }
            if (data.startsWith('361410')) {//110层
                setTimeout(() => {
                    ar3zpzxh0.send(`141&&0`)
                }, 1000);
            }
            if(arr[4]==1&&dc==0&&kc){//主城
                kc=0
                ar3zpzxh0.send(`30&&${bs[12]}`);

                //381 784
                setTimeout(() => {
                    click(0.5,0.3);
                }, 3000);
                setTimeout(() => {
                    click(0.85,0.5);
                }, 4500);
                setTimeout(() => {
                    click(0.85,0.5);
                }, 6000);
                setTimeout(() => {
                    click(0.7,0.5);
                }, 7500);
                setTimeout(() => {
                    click(0.7,0.5);
                }, 9000);
                setTimeout(() => {
                    ar3zpzxh0.send(`025&&1`);
                }, 10500);
                setTimeout(() => {
                    kc=1
                    if(arr[4]==11){
                        ar3zpzxh0.send(`024&&0`)
                    }
                }, 22000);

                /*    setTimeout(() => {
                    click(0.825,0.872)
                }, 8000);*/
            }
        }

        /*
        if(bs[13]*x){//大号功能
            if (data.startsWith('361410')) {
                setTimeout(() => {
                    FireButton.click(); // 深渊110自动换火属套
                }, 1000);
            }*/
        /*
            if(canzouwei === false && y){
                y = 0
                setTimeout(() => {
                    canzouwei = true;
                },16000);
            }
            if (data.startsWith('808'+bs[13]) && arr[8]%10===0 && data.split('&&')[2]<hp.value && canzouwei) {
                canzouwei = false;
                click(0.35,0.482); // 自动走位
                setTimeout(() => {
                    click(0.65,0.482); // 自动返回
                },1500);
                setTimeout(() => {
                    click(0.825,0.872);// 自动开始
                },2500);
                y=1
            }

        }*/
    });

    let intervalId = setInterval(function() {
        if(st&&dc!=true&&skip){
            ar3zpzxh0.send(`025&&${door}`)
        }
        if (st&&A56==2&&E0[x7o].B3v[m4A].W0)
        {
            E0[x7o].B3v[m4A].N8(false)
            E0[x7o].B3v[Q6A].N8(true)
        }
    }, 200);

//     if(st&&arr[4]!=1 && Date.now()-lastmove>1000*3){
//         E0[x7o].B3v[m4A].N8(false)
//         E0[x7o].B3v[Q6A].N8(true)
//     }
//     if(st&&arr[4]!=1 && Date.now()-lastmove>1000*3){//超过3秒没移动
//         setTimeout(() => {
//             click(xx.value,yy.value)//点击自动
//         }, 3000);
//     }

    function upBS(){
        for(let i=0;i<6;i++){
            for(let j=0;j<6;j++){
                ar3zpzxh0.send(`116&&0&&${j}&&${Bs[i]}`);//6级
                ar3zpzxh0.send(`116&&0&&${j}&&${bs[i]}`);//5级
            }
        }
        for(let i=0;i<6;i++){
            for(let j=0;j<6;j++){
                ar3zpzxh0.send(`116&&0&&${j}&&${Bs[i+6]}`);//4级
                ar3zpzxh0.send(`116&&0&&${j}&&${Bs[i+12]}`);//3级
            }
        }
    }
    function downBS(){
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                ar3zpzxh0.send(`117&&0&&${j}&&${i}`);
            }
        }
    }

    function getSceneSize () {
        const canvas = document.querySelector('canvas')
        const { width, height } = canvas
        let sW = width
        let sH = sW * 3 / 2
        if (sH > height) {
            sH = height
            sW = sH * 2 / 3
        }
        return [sW, sH]
    }
    window.addEventListener('resize', () => {
        size = getSceneSize()
    })

    function updateShuxing() {
        if (sxgx) {
            shuxing.innerHTML = "<br><br>活力值:" + huoli + "<br><br>火属性:" + sx[0] + "<br>冰属性:" + sx[1] + "<br>电属性:" + sx[2] + "<br>";
        }
    }

    /**
     * 模拟canvas点击
     * @param {*} x x像素坐标
     * @param {*} y y像素坐标
*/
    function click (x, y) {
        size = getSceneSize()
        const canvas = document.querySelector('canvas')
        const { width, height } = canvas
        const offsetX = (width - size[0]) / 2
        const offsetY = (height - size[1]) / 2
        x = x * size[0] + offsetX
        y = y * size[1] + offsetY
        var event = new MouseEvent('mousedown', { clientX: x, clientY: y })
        var event1 = new MouseEvent('mouseup', { clientX: x, clientY: y })
        var event2 = new TouchEvent('touchstart', {
            changedTouches: [new Touch({ clientX: x, clientY: y, identifier: 0, target: canvas })],
            targetTouches: [new Touch({ clientX: x, clientY: y, identifier: 0, target: canvas })],
        })
        var event3 = new TouchEvent('touchend', {
            changedTouches: [new Touch({ clientX: x, clientY: y, identifier: 1, target: canvas })],
            targetTouches: [new Touch({ clientX: x, clientY: y, identifier: 1, target: canvas })],
        })
        canvas.dispatchEvent(event)
        canvas.dispatchEvent(event1)
        canvas.dispatchEvent(event2)
        canvas.dispatchEvent(event3)
    }

    // 创建上宝石按钮
    const upButton = document.createElement('button');
    upButton.textContent = '上';
    upButton.addEventListener('click', function() {
        upBS();
    });

    // 创建下宝石按钮
    const downButton = document.createElement('button');
    downButton.textContent = '下';
    downButton.style.marginRight = '0px';
    downButton.addEventListener('click', function() {
        downBS();
    });

    // 创建战力套按钮
    const powerButton = document.createElement('button');
    powerButton.textContent = '战';
    powerButton.addEventListener('click', function() {
        ar3zpzxh0.send(`122&&2`)//冰属下宝石
        downBS();
        ar3zpzxh0.send(`122&&0`)//战力下宝石
        downBS();
        //上宝石
        setTimeout(upBS, 1000);
    });

    // 创建冰属套按钮
    const fireButton = document.createElement('button');
    fireButton.textContent = '冰';
    fireButton.addEventListener('click', function() {
        ar3zpzxh0.send(`122&&0`)//战力下宝石
        downBS();
        ar3zpzxh0.send(`122&&2`)//冰属下宝石
        downBS();
        //上宝石
        setTimeout(upBS, 1000);
    });

    // 创建战力套按钮-防
    const PowerButton = document.createElement('button');
    PowerButton.textContent = '戰';
    PowerButton.addEventListener('click', function() {
        ar3zpzxh0.send(`122&&0`)//战力下宝石
        downBS();
        ar3zpzxh0.send(`101&&0`)//脱衣服
        ar3zpzxh0.send(`101&&5`)//脱鞋子
        ar3zpzxh0.send(`122&&2`)//火属下宝石
        downBS();
        setTimeout(() => {
            ar3zpzxh0.send(`100&&0&&${bs[17]}`)//穿+1衣服
            ar3zpzxh0.send(`100&&5&&${bs[18]}`)//穿+1鞋子
        }, 1000);
        setTimeout(() => {
            ar3zpzxh0.send(`122&&0`)
            ar3zpzxh0.send(`100&&0&&${bs[15]}`)//穿衣服
            ar3zpzxh0.send(`100&&0&&${bs[14]}`)//穿衣服
            ar3zpzxh0.send(`100&&5&&${bs[16]}`)//穿鞋子
        }, 1500);
        //上宝石
        setTimeout(upBS, 2000);
    });

    // 创建火属套按钮-防
    const FireButton = document.createElement('button');
    FireButton.textContent = '燚';
    FireButton.addEventListener('click', function() {
        ar3zpzxh0.send(`122&&2`)//火属下宝石
        downBS();
        ar3zpzxh0.send(`101&&0`)//脱衣服
        ar3zpzxh0.send(`101&&5`)//脱鞋子
        ar3zpzxh0.send(`122&&0`)//战力下宝石
        downBS();
        setTimeout(() => {
            ar3zpzxh0.send(`100&&0&&${bs[17]}`)//穿衣服
            ar3zpzxh0.send(`100&&5&&${bs[18]}`)//穿鞋子
        }, 1000);
        setTimeout(() => {
            ar3zpzxh0.send(`122&&2`)
            ar3zpzxh0.send(`100&&0&&${bs[15]}`)//穿衣服
            ar3zpzxh0.send(`100&&0&&${bs[14]}`)//穿衣服
            ar3zpzxh0.send(`100&&5&&${bs[16]}`)//穿鞋子
        }, 1500);
        //上宝石
        setTimeout(upBS, 2000);
    });

    // 创建上经验宠物
    const ExpPet = document.createElement('button');
    ExpPet.textContent = '经验宠';
    ExpPet.style.marginRight = '0px';
    ExpPet.style.width = '59px';
    ExpPet.addEventListener('click', function() {
        for (let i = 0; i < 24; i++) {
            ar3zpzxh0.send(`105&&${i}&&0`);
        }
        ar3zpzxh0.send(`105&&22&&1`);
        ar3zpzxh0.send(`105&&19&&1`);
        ar3zpzxh0.send(`105&&16&&1`);
    });

    // 创建上金币宠物
    const MoneyPet = document.createElement('button');
    MoneyPet.textContent = '金币宠';
    MoneyPet.style.marginRight = '0px';
    MoneyPet.style.width = '59px';
    MoneyPet.addEventListener('click', function() {
        for (let i = 0; i < 24; i++) {
            ar3zpzxh0.send(`105&&${i}&&0`);
        }
        ar3zpzxh0.send(`105&&23&&1`);
        ar3zpzxh0.send(`105&&20&&1`);
        ar3zpzxh0.send(`105&&17&&1`);
    });

    // 创建上金币功勋宠物
    const MoneyHPet = document.createElement('button');
    MoneyHPet.textContent = '金勋宠';
    MoneyHPet.style.marginRight = '0px';
    MoneyHPet.style.width = '59px';
    MoneyHPet.addEventListener('click', function() {
        for (let i = 0; i < 24; i++) {
            ar3zpzxh0.send(`105&&${i}&&0`);
        }
        ar3zpzxh0.send(`105&&23&&1`);
        ar3zpzxh0.send(`105&&20&&1`);
        ar3zpzxh0.send(`105&&21&&1`);
        ar3zpzxh0.send(`105&&24&&1`);
    });

    // 创建上战力宠物
    const PowerPet = document.createElement('button');
    PowerPet.textContent = '战力宠';
    PowerPet.style.marginRight = '0px';
    PowerPet.style.width = '59px';
    PowerPet.addEventListener('click', function() {
        for (let i = 0; i < 24; i++) {
            ar3zpzxh0.send(`105&&${i}&&0`);
        }
        if(powerpet[13]==13){
            ar3zpzxh0.send(`105&&16&&1`);
        }
        else{
            ar3zpzxh0.send(`105&&13&&1`);
        }
        if(powerpet[14]==14){
            ar3zpzxh0.send(`105&&17&&1`);
        }
        else{
            ar3zpzxh0.send(`105&&14&&1`);
        }
        if(powerpet[15]==15){
            ar3zpzxh0.send(`105&&18&&1`);
        }
        else{
            ar3zpzxh0.send(`105&&15&&1`);
        }
    });
/*    // 创建开宝石箱
    const OpenBS = document.createElement('button');
    OpenBS.textContent = '宝石包';
    OpenBS.style.marginRight = '0px';
    OpenBS.style.width = '59px';
    OpenBS.addEventListener('click', function() {
        for (let i = 0; i < bs[20]; i++) {
            ar3zpzxh0.send(`030&&${bs[19]}`);
        }
    });*/

    // 创建1-8号魔王
    const boss = document.createElement('button');
    boss.textContent = '打魔王';
    boss.style.marginRight = '20px';
    boss.style.marginTop = '10px';
    boss.style.width = '59px';
    boss.addEventListener('click', function() {
        for (let i = 1; i < 8; i++) {
            ar3zpzxh0.send(`066&&${i}&&0`);
            ar3zpzxh0.send(`066&&${i}&&1`);
        }
    });

    // 创建地狱宝石
    const dybs = document.createElement('button');
    dybs.textContent = '宝';
    dybs.style.marginTop = '10px';
    dybs.addEventListener('click', function() {
        if(dybs9){
            ar3zpzxh0.send(`072&&3&&9`);
            ar3zpzxh0.send(`072&&3&&5`);//地狱宝石
            dybs9=0;
        }
    });

    // 创建30关卡
    const gq30 = document.createElement('button');
    gq30.textContent = '关';
    gq30.style.marginTop = '10px';
    gq30.addEventListener('click', function() {
        ar3zpzxh0.send(`115&&30`);//30关卡
    });

    // 吃小鱼干
    var InputBox = document.createElement('input');
    InputBox.type = "number";
    InputBox.value = '1';
    InputBox.placeholder = " 数量";
    InputBox.style.width = '51px';
    InputBox.maxLength = '3';
    const HuoliButton = document.createElement('button');
    HuoliButton.textContent = '吃鱼干';
    HuoliButton.style.marginRight = '0px';
    HuoliButton.style.marginTop = '10px';
    HuoliButton.style.width = '59px';
    HuoliButton.addEventListener('click', function() {
        for (let i = 0;i < InputBox.value ; i++) {
            if(i < 110){
                ar3zpzxh0.send(`30&&${bs[6]}`);}
            else
                break;
        }
    });

    // 创建自动鱼干
    var autoHL = document.createElement('button');
    autoHL.textContent = '自助鱼';
    autoHL.style.top = '30px';
    autoHL.style.right = '0px';
    autoHL.style.width = '59px';
    autoHL.style.height = '26px';

    autoHL.onclick = function() {
        if (zdhl) {
            autoHL.textContent = '自助鱼';
            zdhl=0
        } else {
            autoHL.textContent = '吃鱼中';
            ar3zpzxh0.send(`142&&15&&0`);//关闭自动扫荡
            ar3zpzxh0.send(`141&&0`);//开活力
            zdhl=1
        }
    }

    // 创建自动进仓
    var autoCK = document.createElement('button');
    autoCK.textContent = '自动仓';
    autoCK.style.top = '30px';
    autoCK.style.right = '0px';
    autoCK.style.width = '59px';
    autoCK.style.height = '26px';

    autoCK.onclick = function() {
        if (ck) {
            autoCK.textContent = '停止仓';
            ck=0
        } else {
            autoCK.textContent = '自动仓';
            // const goods = [908,946,1701,1703,1705,1707,1709,1711,1713,1715,1789]
            ar3zpzxh0.send(`033&&1&&${Goods[908]}`);
            ar3zpzxh0.send(`033&&1&&${Goods[946]}`);
            ar3zpzxh0.send(`033&&1&&${Goods[991]}`);
            for(let i=1701;i<1716;i=i+2){
                ar3zpzxh0.send(`033&&1&&${Goods[i]}`);
                ck=1
            }
                ar3zpzxh0.send(`033&&1&&${Goods[1789]}`);
        }
    }

    // 创建自动回血
    var huixue = document.createElement('button');
    huixue.textContent = '不回血';
    huixue.style.top = '30px';
    huixue.style.marginTop = '20px';
    huixue.style.right = '0px';
    huixue.style.width = '59px';
    huixue.style.height = '26px';

    huixue.onclick = function() {
        if(x<3){
            ar3zpzxh0.send(`142&&1&&1`)
            ar3zpzxh0.send(`142&&2&&0`)
            ar3zpzxh0.send(`142&&3&&0`)
            ar3zpzxh0.send(`142&&4&&0`)
            if(x<1){
                x=1
                huixue.textContent = '30回血';
                ar3zpzxh0.send(`142&&2&&1`)
            }
            else if(x<2){
                x=2
                huixue.textContent = '50回血';
                ar3zpzxh0.send(`142&&3&&1`)
            }
            else if(x<3){
                x=3
                huixue.textContent = '80回血';
                ar3zpzxh0.send(`142&&4&&1`)
            }
        }
        else{
            x=0
            huixue.textContent = '不回血';
            ar3zpzxh0.send(`142&&1&&0`)
        }
    }

    // 创建自动刷图
    var autoST = document.createElement('button');
    autoST.textContent = '刷元素';
    autoST.style.top = '30px';
    autoST.style.right = '0px';
    autoST.style.width = '59px';
    autoST.style.height = '26px';

    autoST.onclick = function() {
        if (st) {
            autoST.textContent = '刷元素';
            st=0
        } else {
            autoST.textContent = '刷图中';
            st=1
            if(x!=2)
            {
                huixue.textContent = '50回血';
                x=2
            }

        }
    }

    // 创建一个Body选项
    var optionBodyLabel = document.createElement("label");
    optionBodyLabel.innerHTML = "搭 车";
    optionBodyLabel.style.backgroundColor = "white";  // 设置背景颜色为白色
    optionBodyLabel.style.borderRadius = "5px";  //设置圆角

    // 为Body选项创建一个单选按钮
    var optionBodyRadio = document.createElement("input");
    optionBodyRadio.type = "radio";
    optionBodyRadio.name = "options";
    optionBodyRadio.value = "Body";
    optionBodyRadio.checked = true;  // 默认选中Body选项

    // 创建一个Head选项
    var optionHeadLabel = document.createElement("label");
    optionHeadLabel.innerHTML = "开 车";
    optionHeadLabel.style.backgroundColor = "white";  // 设置背景颜色为白色
    optionHeadLabel.style.borderRadius = "5px";  //设置圆角

    // 为Head选项创建一个单选按钮
    var optionHeadRadio = document.createElement("input");
    optionHeadRadio.type = "radio";
    optionHeadRadio.name = "options";
    optionHeadRadio.value = "Head";

    // 添加一个事件侦听器来监听单选按钮的change事件
    optionBodyRadio.addEventListener('change', function() {
        if(optionBodyRadio.checked) {
            // 如果选中，就更新全局变量
            dc = true;
        }
    });
    optionHeadRadio.addEventListener('change', function() {
        if(optionHeadRadio.checked) {
            // 如果选中，就更新全局变量
            dc = false;
        }
    });

    let jjg=-1
    // 创建经金功
    const buff = document.createElement('button');
    buff.textContent = '经金功';
    buff.style.marginTop = '30px';
    buff.style.marginRight = '0px';
    buff.style.width = '59px';
    buff.addEventListener('click', function() {
        jjg+=1;
        if(jjg){
            for(let i=1;i<4;i++){
                ar3zpzxh0.send(`083&&${i}`);//自动3buff
            }
        }
    });


    // 创建小号飞
    const flying = document.createElement('button');
    flying.textContent = '小号飞';
    flying.style.marginTop = '20px';
    flying.style.marginRight = '0px';
    flying.style.width = '59px';
    flying.addEventListener('click', function() {
        if(bs[13]<1){
            if(bs[11]<120){
                for(let i=0;i<((120-bs[11])/5);i++){
                    ar3zpzxh0.send(`059&&3&&18`);//买扫荡卡
                }
            }
            if(bs[8]<1){
                alert('没有双倍经验')
            }
            else{
                ar3zpzxh0.send(`30&&${bs[7]}`);//吃双倍经验

            }
            if(bs[10]<1){
                alert('没有双倍功勋')
            }
            else{
                ar3zpzxh0.send(`30&&${bs[9]}`);//吃双倍功勋
            }
            if(bs[12]>0){
                ar3zpzxh0.send(`30&&${bs[12]}`);
                //自动寻路
                setTimeout(() => {
                    click(autoPos[0], autoPos[1]);
                }, 1000);
                setTimeout(() => {
                    click(autoPos[0], autoPos[2]);
                }, 3000);
                setTimeout(() => {
                    click(autoPos[0], autoPos[3]);
                }, 4500);
                setTimeout(() => {
                    click(autoPos[4], autoPos[5]);
                }, 6000);
                setTimeout(() => {
                    ar3zpzxh0.send(`025&&1`);//进深渊1
                }, 7000);
            }
            else
                ar3zpzxh0.send(`20&&91&&5`);//进地狱91
        }
        else
            alert('这个是大号啊,你个猪')
        ar3zpzxh0.send(`142&&15&&1`);//自动扫荡
    });

    // 创建扫荡卡
    const sdk = document.createElement('button');
    sdk.textContent = '扫荡卡';
    sdk.addEventListener('click', function() {
        ar3zpzxh0.send(`030&&${bs[21]}`);//自动扫荡
    });

    // 创建属性说明
    const shuxing = document.createElement("label");
//     if(sxgx){
//         shuxing.innerHTML = "<br>火属性:"+sx[0]+"<br>冰属性:"+sx[1]+"<br>电属性:"+sx[2];}
    shuxing.style.backgroundColor = "white";  // 设置背景颜色为白色

    //聊天
    var chat = document.createElement('input');
    chat.type = "text";
    chat.style.minWidth = '72px';
    chat.style.maxWidth = '72px';
    chat.style.marginTop = '20px';
    chat.value = '';
    chat.oninput = function() {
        this.style.width = ((this.value.length + 1) * 8) + 'px';
    }
    const zhenying = document.createElement('button');
    zhenying.textContent = '阵';
    zhenying.style.marginRight = '0px';
    zhenying.style.width = '40px';
    zhenying.addEventListener('click', function() {
        ar3zpzxh0.send(`123&&0&&0&&0&&${chat.value}`)
        chat.value = '';
    });
    const shijie = document.createElement('button');
    shijie.textContent = '世';
    shijie.style.marginRight = '0px';
    shijie.style.width = '40px';
    shijie.addEventListener('click', function() {
        ar3zpzxh0.send(`123&&1&&0&&0&&${chat.value}`)
        chat.value = '';
    });

    // 创建说明
    const read = document.createElement('button');
    read.textContent = ' 说明 ';
    read.style.marginTop = '20px';
    read.style.marginRight = '20px';
    read.style.width = '59px';
    read.addEventListener('click', function() {
        test+=1
        ar3zpzxh0.send(`124&&25489`)
        ar3zpzxh0.send(`063&&49871DCDBD1E7005`)
        alert(`
        【下】当前装备脱光宝石
        【上】当前装备装备宝石
                (5~6级顺序:红蓝黄紫绿白,3~4级顺序:红蓝白绿紫黄)
        【战】切换战力套(第一套+换宝石)
        【冰】切换冰属套(第三套+换宝石)
        【经验宠】2红+1橙(如果没齐全不会上)
        【金币宠】2红+1橙(同上)
        【金勋宠】2宠金币+1红功勋(同上)
        【战力宠】3紫宠或3橙宠(紫9)
        【打魔王】快速进入打boss(优先世界boss)
        【宝】快速进入地狱宝石(仅可失效一次,除非刷新)
        【关】快速进入关卡30
        【吃鱼干】输入多少就吃多少小鱼干,最高110
        【自助鱼/吃鱼中】开启后,开活力,关扫荡：
               0活力自动吃小鱼干，卡活力bug(注意脚本没buff锁活)
        【不回血/回血】配合老汉脚本,回血中可在锁活刷战绩中回血
              (点一下30%,点两下50%,点三下80%,再点一下关闭回血)
        【刷元素/刷图中】自动跟随云澈/Aikx(默认回血50)
               可以深渊108-109自动开活换金币套,打110boss刷元素
        【自动仓】自动将背包东西放进仓库
               (目前支持:升星/附魔石,水晶球及世界boss整石,电元素)
        【经金功】快速开启经验buff/金币buff/功勋buff
                (防误触,需要点击2次)
        【小号飞】补充扫荡到120+双buff药水,进入地狱91或深渊
        【扫荡卡】快速使用一张扫荡卡
        【阵】发送聊天到阵营
        【世】发送聊天到世界`)

        if((bs[13]==25623)||(test>2)){
            floatingWindow.appendChild(optionBodyRadio);
            floatingWindow.appendChild(optionBodyLabel);
            floatingWindow.appendChild(optionHeadRadio);
            floatingWindow.appendChild(optionHeadLabel);
            floatingWindow.appendChild(buff);
            floatingWindow.appendChild(flying);
            floatingWindow.appendChild(read);
            if(test>4)
            {
                floatingWindow1.appendChild(dianji);
                floatingWindow1.appendChild(xx);
                floatingWindow1.appendChild(yy);
                floatingWindow1.appendChild(zhixing);
                floatingWindow1.appendChild(dm);
                floatingWindow1.appendChild(chat);
                floatingWindow1.appendChild(zhenying);
                floatingWindow1.appendChild(shijie);
                floatingWindow1.appendChild(cdk);
                floatingWindow1.appendChild(CDK);
            }
        }

    });

    // 测试模拟点击
    var xx = document.createElement('input');
    xx.type = "number";
    xx.value = '0.825';
    xx.placeholder = " 数量";
    xx.style.width = '51px';
    xx.maxLength = '3';
    var yy = document.createElement('input');
    yy.type = "number";
    yy.value = '0.872';
    yy.placeholder = " 数量";
    yy.style.width = '51px';
    yy.maxLength = '3';
    const dianji = document.createElement('button');
    dianji.textContent = ' 点击 ';
    dianji.style.marginRight = '0px';
    dianji.style.marginTop = '10px';
    dianji.style.width = '59px';
    dianji.addEventListener('click', function() {
        click(xx.value,yy.value)
    });

    // 测试代码
    var dm = document.createElement('input');
    dm.type = "text";
    dm.style.width = '51px';
    dm.value = '';
    dm.oninput = function() {
        this.style.width = ((this.value.length + 1) * 8) + 'px';
    }
    const zhixing = document.createElement('button');
    zhixing.textContent = ' 执行 ';
    zhixing.style.marginRight = '0px';
    zhixing.style.marginTop = '10px';
    zhixing.style.width = '59px';
    zhixing.addEventListener('click', function() {
        ar3zpzxh0.send(`${dm.value}`);
    });

    // 测试cdk
    var cdk = document.createElement('input');
    cdk.type = "text";
    cdk.style.width = '51px';
    cdk.style.marginTop = '20px';
    cdk.value = '';
    cdk.oninput = function() {
        this.style.width = ((this.value.length + 1) * 8) + 'px';
    }
    const CDK = document.createElement('button');
    CDK.textContent = ' CDK ';
    CDK.style.marginRight = '0px';
    CDK.style.width = '59px';
    CDK.addEventListener('click', function() {
        ar3zpzxh0.send(`063&&${dm.value}`);
    });

    // 将按钮添加到悬浮窗容器中
    floatingWindow.appendChild(downButton);
    floatingWindow.appendChild(upButton);
    floatingWindow.appendChild(powerButton);
    floatingWindow.appendChild(fireButton);
    //    floatingWindow.appendChild(PowerButton);
    //    floatingWindow.appendChild(FireButton);
    floatingWindow.appendChild(ExpPet);
    floatingWindow.appendChild(MoneyPet);
    floatingWindow.appendChild(MoneyHPet);
    floatingWindow.appendChild(PowerPet);
    //    floatingWindow.appendChild(OpenBS);
    floatingWindow.appendChild(boss);
    floatingWindow.appendChild(dybs);
    floatingWindow.appendChild(gq30);
    floatingWindow.appendChild(HuoliButton);
    floatingWindow.appendChild(InputBox);
    floatingWindow.appendChild(autoHL);
    floatingWindow.appendChild(huixue);
    floatingWindow.appendChild(autoST);
    floatingWindow.appendChild(autoCK);
    setTimeout(() => {
        if(bs[13]*z){
            z=0;
            floatingWindow.appendChild(optionBodyRadio);
            floatingWindow.appendChild(optionBodyLabel);
            floatingWindow.appendChild(optionHeadRadio);
            floatingWindow.appendChild(optionHeadLabel);
            floatingWindow.appendChild(buff);
            floatingWindow.appendChild(flying);
            floatingWindow.appendChild(read);
        }
    }, 10000);
    floatingWindow.appendChild(buff);
    floatingWindow.appendChild(flying);
    floatingWindow.appendChild(read);
    floatingWindow1.appendChild(sdk);
    floatingWindow1.appendChild(shuxing);
    floatingWindow1.appendChild(chat);
    floatingWindow1.appendChild(zhenying);
    floatingWindow1.appendChild(shijie);

    // 将悬浮窗容器添加到页面body元素中
    document.body.appendChild(floatingWindow);
    document.body.appendChild(floatingWindow1);
    document.body.appendChild(lanren);

})();