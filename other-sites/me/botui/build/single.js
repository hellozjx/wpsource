﻿var botui = new BotUI('hello-mashiro');


        botui.message.add({
            delay: 800,
            content: '你好👋'
        }).then(function() {
            botui.message.add({
                delay: 1100,
                content: '我是 Mashiro'
        }).then(function() {
            botui.message.add({
                delay: 1100,
                content: '一个可爱的蓝孩子~'
        }).then(function() {
            botui.message.add({
                delay: 1500,
                content: '就读于上海财经大学'
        }).then(function() {
            botui.message.add({
                delay: 1500,
                content: '向往技术却误入商科，但后来喜欢上了经济学…'
        }).then(function() {
            botui.message.add({
                delay: 1800,
                content: '因为数据分析也需要Coder嘛'
        }).then(function() {
            botui.action.button({
                delay: 1600,
                action: [
                    { 
                        text: '然后呢？ 😕',
                        value: 'sure'
                    },{
                        text: '少废话！ 🙄',
                        value: 'skip'
                    }
                ]
        }).then(function (res) {
            if(res.value == 'sure') {
                //console.log('然后呢？ 😕');
                sure();
            }
            if(res.value == 'skip') {
                //console.log('闭嘴！ 🙄' );
                end();
            }
        });                     
        });
        });
        });
        });
        });
        });
        
        var sure = function () {
          botui.message.add({
            delay: 1000,
            content: "谢谢😘"
          }).then(function() {
              //console.log('进入第二段' );
              secondpart();
          })
        }
             
        var end = function () {
          botui.message.add({
            delay: 1000,
            content: "😒我猜你大概很着急"
        }).then(function() {
              //console.log('进入第二段' );
              secondpart();
          })
        }
        
        var secondpart = function() {
            botui.message.add({
                delay: 1000,
                content: '平时我主攻R和Python，偶尔也折腾HTML/CSS/JS/PHP'
            }).then(function() {
            botui.message.add({
                delay: 1800,
                content: '喜欢画画，希望有一天能够被称为画师'
            }).then(function() {
            botui.action.button({
                delay: 1100,
                action: [
                    { 
                        text: '为什么叫Mashiro呢？ 🤔',
                        value: 'why-mashiro'
                    }
                ]
            }).then(function (res) {
                //console.log('第三段');
                thirdpart();
                })
            })
            })
        }
        
        var thirdpart = function() {
            botui.message.add({
                delay: 1000,
                content: 'Mashiro以及站名都来自一部动画，因为和主角有一样的爱好呀'
            }).then(function() {
            botui.action.button({
                delay: 1500,
                action: [
                    { // show only one button
                        text: '为什么是白猫呢？ 🤔',
                        value: 'why-cat'
                    }
                ]
            }).then(function (res) {
                //console.log('第四段');
                fourthpart();
                })
            })
        }
        
        var fourthpart = function() {
            botui.message.add({
                delay: 1000,
                content: '因为对GitHub有种执念…'
            }).then(function() {
            botui.message.add({
                delay: 1100,
                content: '而且我真的是猫控！'
            }).then(function() {
            botui.message.add({
                delay: 1600,
                content: '那么，仔细看看我的博客吧？^_^'
            })
            })
            })
        }