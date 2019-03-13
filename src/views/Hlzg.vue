<template>
    <div class="hlzg" @scroll.native="scrollEvent">
        <div class="video" v-if="isShow">
            <div class="layer" @click="showVideo"></div>
            <iframe src="//player.bilibili.com/player.html?aid=35956633&cid=63112201&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
        </div>
        <div class="nav-bar">
            <img src="@/assets/hlzg/navbg@2x.png" alt="">
            <div class="nav">
                <div @click="navClick(0)">首页<i :class="navIndex=='0'?'i-active':'i-normal'"></i></div>
                <div @click="navClick(1)">活动<i :class="navIndex=='1'?'i-active':'i-normal'"></i></div>
                <div @click="navClick(2)">资料<i :class="navIndex=='2'?'i-active':'i-normal'"></i></div>
                <div @click="navClick(3)">特色<i :class="navIndex=='3'?'i-active':'i-normal'"></i></div>
                <div @click="downApp()">下载<i :class="navIndex=='4'?'i-active':'i-normal'"></i></div>
            </div>
            
        </div>
        <div class="item1">
            <img class="item1-bg" src="@/assets/hlzg/item1@2x.jpg" alt="">
            <img class="logo" src="@/assets/hlzg/logo@2x.png" alt="">
            <img class="hero" src="@/assets/hlzg/hero@2x.png" alt="">
            <img @click="downApp()" class="down" src="@/assets/hlzg/down@2x.png" alt="">
            <div class="play" @click="showVideo">
                <img class="play-tr" src="@/assets/hlzg/play1.png" alt="">
                <img class="play-clrcle" src="@/assets/hlzg/play2.png" alt="">
            </div>
        </div>
        <a id='A' href="#A" ref="A"></a>
        <div class="item2">
            <img class="item2-bg" src="@/assets/hlzg/item2@2x.jpg" alt="">
            <!-- <img class="item2-bg" src="@/assets/hlzg/item2@2x.png" alt=""> -->
            <div class="item2-content">
                <div class="title">
                    <img class="hot-active" v-lazy="item2Active" alt="">
                    <!-- <img class="hot-active" src="@/assets/hlzg/hotactive@2x.png" alt=""> -->
                    <span>GAME ACTIVITIES</span>
                </div>
                <div class="carousel">
                    <div class="carousel-ct">
                        <img class="carousel-arrow-l" src="@/assets/hlzg/left@2x.png" alt="">
                        <img class="carousel-arrow-r" src="@/assets/hlzg/right@2x.png" alt="">
                        <div class="carousel-box" id="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item,index) in item2Swiper" :key="index">
                                    <img :data-src="item" class="swiper-lazy">
                                    <!-- <div class="swiper-lazy-preloader"></div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a id='B' href="#B" ref="B"></a>
                <div class="title">
                    <img class="hot-active" v-lazy="item2Title" alt="">
                    <span>GAME DATA</span>
                </div>
                <div class="news">
                    <div class="newsnav-bar">
                        <div @click="newsNavClick(0)" :class="newsNavIndex=='0'?'news-active':'news-normal'">最新<i></i></div>
                        <div @click="newsNavClick(1)" :class="newsNavIndex=='1'?'news-active':'news-normal'">新闻<i></i></div>
                        <div @click="newsNavClick(2)" :class="newsNavIndex=='2'?'news-active':'news-normal'">公告<i></i></div>
                        <div @click="newsNavClick(3)" :class="newsNavIndex=='3'?'news-active':'news-normal'">攻略<i></i></div>
                        <div @click="newsNavClick(4)" :class="newsNavIndex=='4'?'news-active':'news-normal'">活动<i></i></div>
                    </div>
                    <div v-if="newsNavIndex== 0" class="news-items">
                        <div class="news-item" @click="goDetail(8)">
                            <div class="news-title">
                                [活动]《幻灵战歌》克拉拉的献礼活动
                            </div>
                            <div class="news-time">
                                [03-05]
                            </div>
                        </div>
                        <div class="news-item" @click="goDetail(7)">
                            <div class="news-title">
                                [公告]《幻灵战歌》3月5日更新公告
                            </div>
                            <div class="news-time">
                                [03-05]
                            </div>
                        </div>
                        <div class="news-item" @click="goDetail(1)">
                            <div class="news-title">
                                [公告]《幻灵战歌》2.27版本更新
                            </div>
                            <div class="news-time">
                                [02-27]
                            </div>
                        </div>
                        <div class="news-item" @click="goDetail(2)">
                            <div class="news-title">
                                [攻略]《幻灵战歌》攻略-矿山资源篇
                            </div>
                            <div class="news-time">
                                [02-01]
                            </div>
                        </div>
                        <div class="news-item" @click="goDetail(3)">
                            <div class="news-title">
                                [攻略]《幻灵战歌》攻略-商店篇
                            </div>
                            <div class="news-time">
                                [01-19]
                            </div>
                        </div>
                    </div>
                    <div v-if="newsNavIndex== 1" class="news-items">
                        <div class="news-item" @click="goDetail(4)">
                            <div class="news-title">
                                [新闻]《幻灵战歌》声优阵容了解一下！
                            </div>
                            <div class="news-time">
                                [01-18]
                            </div>
                        </div>
                        <div class="news-item" @click="goDetail(5)">
                            <div class="news-title">
                                [新闻]《幻灵战歌》首发新闻
                            </div>
                            <div class="news-time">
                                [01-17]
                            </div>
                        </div>
                    </div>
                    <div v-if="newsNavIndex== 2" class="news-items">
                        <div class="news-item" @click="goDetail(7)">
                            <div class="news-title">
                                [公告]《幻灵战歌》3月5日更新公告
                            </div>
                            <div class="news-time">
                                [03-05]
                            </div>
                        </div>
                        <div class="news-item" @click="goDetail(1)">
                            <div class="news-title">
                                [公告]《幻灵战歌》2.27版本更新
                            </div>
                            <div class="news-time">
                                [02-27]
                            </div>
                        </div>
                    </div>
                    <div v-if="newsNavIndex== 3" class="news-items">
                        <div class="news-item" @click="goDetail(2)">
                            <div class="news-title">
                                [攻略]《幻灵战歌》攻略-矿山资源篇
                            </div>
                            <div class="news-time">
                                [02-01]
                            </div>
                        </div>
                        <div class="news-item" @click="goDetail(3)">
                            <div class="news-title">
                                [攻略]《幻灵战歌》攻略-商店篇
                            </div>
                            <div class="news-time">
                                [02-01]
                            </div>
                        </div>
                    </div>
                    <div v-if="newsNavIndex== 4" class="news-items">
                        <div class="news-item" @click="goDetail(8)">
                            <div class="news-title">
                                [活动]《幻灵战歌》克拉拉的献礼活动
                            </div>
                            <div class="news-time">
                                [03-05]
                            </div>
                        </div>
                        <div class="news-item" @click="goDetail(6)">
                            <div class="news-title">
                                [活动]《幻灵战歌》正义の雷霆活动
                            </div>
                            <div class="news-time">
                                [02-26]
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="item3">
            <img v-lazy="item3">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navIndex: '0',
                newsNavIndex: '0',
                isShow:false,
                item2Swiper:[
                    require('@/assets/hlzg/swiper1.jpg'),
                    require('@/assets/hlzg/swiper2.jpg'),
                    require('@/assets/hlzg/swiper3.jpg'),
                    require('@/assets/hlzg/swiper4.jpg'),
                ],
                item2: require('@/assets/hlzg/item2@2x.jpg'),
                item2Active: require('@/assets/hlzg/hotactive@2x.png'),
                item2Title: require('@/assets/hlzg/gameinfo@2x.png'),
                item3: require('@/assets/hlzg/item3@2x.jpg'),

                // 滚动高度
                A:'',
                B:''
            }
        },
        methods: {
            swiper(){
                var mySwiper = new Swiper ('#swiper-container', {
                    direction: 'horizontal', // 垂直切换选项
                    loop: true, // 循环模式选项
                    autoplay:true,
                    autoplay: {
                        disableOnInteraction: false,
                        delay: 2500,
                    },
                    lazy: {
                        loadPrevNext: true,
                    },
                    // 如果需要分页器
                    // pagination: {
                    //     el: '.swiper-pagination',
                    //     clickable :true,
                    //     //自定义分页类型
                    //     paginationType: 'custom',
                    //     //自定义分页
                    //     renderBullet: function (index, className) {
                    //         if(index === 1){
                    //             return '<img class="point" src="@/assets/hlzg/point1.png" alt="">';
                    //         }else{
                    //             return '<img class="point" src="@/assets/hlzg/point2.png" alt="">';
                    //         }
                    //     }
                    // },
                    
                    // 如果需要前进后退按钮
                    navigation: {
                        nextEl: '.carousel-arrow-r',
                        prevEl: '.carousel-arrow-l',
                    },
                    
                    // 如果需要滚动条
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },
                })  
            },    
            navClick(value){
                this.navIndex = value
                if(value == '0'){
                    this.scrollToIndex()
                }else if(value == '1'){
                    this.scrollToActive()
                }else if(value == '2'){
                    this.scrollToInfo()
                }else if(value == '3'){
                    this.scrollToFeature()
                }
            },
            newsNavClick(value){
                this.newsNavIndex = value
            },
            // scrollEvent(){
            //     console.log(this.$refs.A.getBoundingClientRect().top);
            //     if(this.$refs.A.getBoundingClientRect().top == 0){
            //         this.navIndex = '1'
            //     }else{
            //         this.navIndex = '0'
            //     }
            //     if(this.B == this.$refs.B.getBoundingClientRect().top){
            //         this.navIndex = '2'
            //     }
            // },
            downApp(){
                var u = navigator.userAgent;
                var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                if(isiOS){
                    window.location.href = "itms-apps://itunes.apple.com/app/id1396472688"
                }
                if(isAndroid){
                    window.location.href = "https://fnxyapk2.game.nextjoy.com/hlzg_1.0.5_nextjoy.apk"
                } 
            },
            scrollHeight(){
                window.sessionStorage.setItem('A', $("#A").offset().top -50)
                window.sessionStorage.setItem('B', $("#B").offset().top -50)
                // this.A = $("#A").offset().top -50
                // this.B = $("#B").offset().top -50
            },
            showVideo(){
                this.isShow = !this.isShow
            },
            goDetail(id){
                this.$router.push(`/article/news/${id}`)
            },
            scrollToIndex() {
                $('html, body').animate({scrollTop: 0}, 300)
                this.showdevIndxNav = true
            },
            scrollToActive() {
                let _this = this
                $('html, body').animate({scrollTop:  window.sessionStorage.getItem('A')}, 300)
                this.showdevIndxNav = true
            },
            scrollToInfo() {
                let _this = this
                $('html, body').animate({scrollTop:  window.sessionStorage.getItem('B')}, 300)
                this.showdevIndxNav = true
            },
            scrollToFeature() {
                $('html, body').animate({scrollTop: 5000}, 300)
                this.showdevIndxNav = true
            }
        },
        mounted(){
            this.swiper()
            window.onload = ()=>{
                this.scrollHeight()
                // window.addEventListener('scroll', this.scrollEvent)
                // console.log(this.$refs.A.getBoundingClientRect().top);
            }  
        }
    }
</script>

<style scoped lang='scss'>
    .hlzg{
        font-size: 13px;
        overflow: hidden;
        img{
            display: block;
            margin-top: -1px;
        }
        @keyframes move {
            0% {transform: translate(0px, 0px);}
            50% {transform: translate(0px, -6px);}
            100% { transform: translate(0px, 0px);}
        }
        @keyframes circle{
            from{transform:rotate(0)}
            to{transform:rotate(360deg)}
        }
        .video{
            width: 100%;
            .layer{
                position: fixed;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background-color: #000;
                opacity: 0.5;
                z-index: 222;
            }
            iframe{
                width: 100%;
                height: 5rem;
                position: fixed;
                top: 50%;
                transform: translateY(-50%);
                z-index: 223;
                border-top: 1px solid #c1cefc;
                border-bottom: 1px solid #c1cefc;
            }
        }
        .nav-bar{
            height: 0.87rem;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 4;
            img{
                width: 100%;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 3;
                border-bottom: 4px solid #c1cefc;
                opacity: 0.8;
            }
        }
        .nav{
            width: 100vw;
            height: 0.87rem;
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: space-around;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 3;
            div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 0.2rem;
                cursor: pointer;
                .i-normal{
                    display: block;
                    width:0.23rem;
                    height:0.04rem;
                    border-radius:2px;
                    margin-top: 0.16rem;
                }
                .i-active{
                    display: block;
                    width:0.23rem;
                    height:0.04rem;
                    border-radius:2px;
                    margin-top: 0.16rem;
                    background-color: #fff;
                }
            }
        }
        .item1{
            width: 100%;
            text-align: center;
            position: relative;
            margin-top: 0.91rem;
            .play{
                width: 0.4rem;
                height: 0.4rem;
                position: absolute;
                left: 69%;
                bottom: 15.8%;
                z-index: 2;
                display: flex;
                justify-content: center;
                align-items: center;
                .play-tr{
                    width: 0.2rem;
                    height: 0.3rem;
                    margin-left: 4px;
                    margin-top: -2px;
                }
                .play-clrcle{
                    width: 0.85rem;
                    height: 0.85rem;
                    position: absolute;
                    animation: circle 3s linear infinite;
                }
            }
            .item1-bg{
                width: 100%;
            }
            .logo{
                width: 2.28rem;
                height: 1.18rem;
                position: absolute;
                top: 0.1rem;
                right: 0.2rem;
            }
            .hero{
                width: 95%;
                position: absolute;
                top: 1.2rem;
                left: 2.5%;
                animation: move 3s infinite;
            }
            .down{
                width: 2.66rem;
                height: 1.25rem;
                position: absolute;
                left: 50%;
                bottom: 2%;
                transform: translateX(-50%);
                z-index: 2;
                cursor: pointer;
            }
        }
        .item2{
            position: relative;
            margin: auto;
            .item2-bg{
                width: 100%;
            }
            .item2-content{
                width: 100vw;
                position: absolute;
                top: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .title{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 0.8rem;
                .hot-active{
                    width: 2.7rem;
                    height: 0.66rem;
                }
                span{
                    margin: 0.17rem 0;
                    color: #94C4D2;
                }
            }
            .carousel{
                width: 100%;
                display: flex;
                justify-content: center;
                .carousel-ct{
                    width: 90%;
                    position: relative;
                }
                .carousel-arrow-l{
                    width: 0.54rem;
                    height: 0.95rem;
                    position: absolute;
                    top: 48%;
                    left: -4%;
                    z-index: 2;
                }
                .carousel-arrow-r{
                    width: 0.54rem;
                    height: 0.95rem;
                    position: absolute;
                    top: 48%;
                    right: -4%;
                    z-index: 2;
                }
                .carousel-box{
                    height: 3.8rem;
                    border: 0.07rem solid #2F7BEC;
                    border-radius:0.1rem;
                    margin-top: 0.7rem;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                        z-index: 999;
                    }
                }
            }
            .news{
                width: 7.1rem;
                height: 3.8rem;
                border: 0.07rem solid #7CD8F0;
                border-radius:0.1rem;
                margin-top: 0.7rem;
                .newsnav-bar{
                    height: 0.8rem;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    background-color: #FFFFFF;
                    border-bottom: 2px solid #7CD8F0;
                    .news-normal{
                        font-size: 14px;
                        color: #000;
                        margin-top: 0.1rem;
                        i{
                            display: block;
                            width:0.23rem;
                            height:0.04rem;
                            margin-top: 0.1rem;
                            border-radius:2px;
                        }
                    }
                    .news-active{
                        font-size: 14px;
                        color: #07367F;
                        margin-top: 0.1rem;
                        i{
                            display: block;
                            width:0.23rem;
                            height:0.04rem;
                            margin-top: 0.1rem;
                            border-radius:2px;
                            background-color: #07367F;
                        }
                    }
                    div{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                }
                .news-items{
                    height: 3rem;
                    display: flex;
                    flex-direction: column;
                    // justify-content: space-around;
                    .news-item{
                        font-size: 12px;
                        padding: 10px 11px;
                        display: flex;
                        justify-content: space-between;
                    }
                }
            }
        }
        .item3{
            height: 11.8rem;
            img{
                width: 100%;
            }
        }
    }
</style>