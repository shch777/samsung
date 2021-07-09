

$(function(){


    var prevScrollTop = $(window).scrollTop();
    var nowScrollTop;
    var nowHeight = $(window).height();


    $(window).on('scroll',function(e){
        nowScrollTop = $(window).scrollTop();

        // 저온 제습 :start
        // @ 저온 제습 scrolldown
        if(nowScrollTop > prevScrollTop){

            var $target1 = $('.cnr-sec2 .sec2-prd');

            if(nowScrollTop >= $target1.offset().top - $target1.height() / 5 && nowScrollTop <= $target1.offset().top + $(window).height()){

                var $fabric1 = $('.cnr-sec2 .fabric-01 img');
                var $fabric2 = $('.cnr-sec2 .fabric-02 img');
                var $fabric3 = $('.cnr-sec2 .fabric-03 img');
                var $prd = $('.cnr-sec2 .sec2-prd-img img');

                $fabric2.css({'top': $fabric2.position().top - 8.5});
                $fabric1.css({'top': $fabric1.position().top - 18});
                $fabric3.css({'top': $fabric3.position().top - 18});
                $prd.css({'top': $prd.position().top - 6});

            }else {

                $('.cnr-sec2 .fabric-01 img, .cnr-sec2 .fabric-02 img, .cnr-sec2 .fabric-03 img, .cnr-sec2 .sec2-prd-img img').removeAttr('style');
            }
        }

        // @ 저온 제습 scrollup
        if(nowScrollTop < prevScrollTop){

            var $target1 = $('.cnr-sec2 .sec2-prd');

            if(nowScrollTop >= $target1.offset().top - $(window).height()&& nowScrollTop <= $target1.offset().top + $target1.height()){

                var $fabric1 = $('.cnr-sec2 .fabric-01 img');
                var $fabric2 = $('.cnr-sec2 .fabric-02 img');
                var $fabric3 = $('.cnr-sec2 .fabric-03 img');
                var $prd = $('.cnr-sec2 .sec2-prd-img img');
                $fabric2.css({'top': $fabric2.position().top + 8.5});
                $fabric1.css({'top': $fabric1.position().top + 18});
                $fabric3.css({'top': $fabric3.position().top + 18});
                $prd.css({'top': $prd.position().top + 6});

            }else {

                $('.cnr-sec2 .fabric-01 img, .cnr-sec2 .fabric-02 img, .cnr-sec2 .fabric-03 img, .cnr-sec2 .sec2-prd-img img').removeAttr('style');
            }

        }
        // 저온 제습:end

        //에너지 절약:start
        //@ 에너지 절약 scrolldown
        if(nowScrollTop > prevScrollTop){
            var $target2 = $('.cnr-sec3 .sec3-prdeng');
            if(nowScrollTop >= $target2.offset().top - (nowHeight / 3) && nowScrollTop <= $target2.offset().top + $target2.height()){

                if($('.cnr-sec3').hasClass('on') == false){
                    perChange  = setInterval(perChangeSet , 1300 / 70);
                    gaugeChange = setInterval(gaugeChangeSet , 1300 / 20);
                    $('.cnr-sec3').addClass('on');
                }
            }else {

                $('.cnr-sec3 .sec3-prdeng .eng-gauge').attr('data-gauge','0');
                $('.cnr-sec3 .engtxt .data .per').attr('data-per','0');
                $('.cnr-sec3 .sec3-prdeng .eng-gauge').attr('src','http://coner.co.kr/dv90m52a0qw/v4/image/samsung/sec-html-feature-dv90m52a0qw-sec03-prd_00000.png');
                $('.cnr-sec3 .engtxt .data .per').text('0%');
                clearInterval(perChangeSet);
                clearInterval(gaugeChangeSet);
                $('.cnr-sec3').removeClass('on');
            }
        }
        //@ 에너지 절약 scrollup
        if(nowScrollTop < prevScrollTop){
            var $target2 = $('.cnr-sec3 .sec3-prdeng');

            if(nowScrollTop>= $target2.offset().top - nowHeight && nowScrollTop <= $target2.offset().top + ($target2.height()*0.5)){

                if($('.cnr-sec3').hasClass('on') == false){
                    perChange  = setInterval(perChangeSet,1300/70);
                    $('.cnr-sec3').addClass('on');
                    gaugeChange = setInterval(gaugeChangeSet,1300/20);
                }


            }else {

                $('.cnr-sec3 .sec3-prdeng .eng-gauge').attr('data-gauge','0');
                $('.cnr-sec3 .engtxt .data .per').attr('data-per','0');
                $('.cnr-sec3 .sec3-prdeng .eng-gauge').attr('src','http://coner.co.kr/dv90m52a0qw/v4/image/samsung/sec-html-feature-dv90m52a0qw-sec03-prd_00000.png');
                $('.cnr-sec3 .engtxt .data .per').text('0%');
                clearInterval(perChangeSet);
                clearInterval(gaugeChangeSet);
                $('.cnr-sec3').removeClass('on');
            }
        }

        //에너지 절약:end

        //올인원 필터:start
        //@ 올인원 필터 scrolldown
        if(nowScrollTop > prevScrollTop){

            var $target3 = $('.cnr-sec4 .sec4-filter');

            if(nowScrollTop >= $target3.offset().top - (nowHeight/3) && nowScrollTop <= $target3.offset().top + $target3.height()){

                $('.cnr-sec4 .sec4-filter .filterup').css('transform','translate(0%, -60%) matrix(1, 0, 0, 1, 0, 0)');

            }else {

                $('.cnr-sec4 .sec4-filter .filterup').css('transform','translate(0%,0%) matrix(1, 0, 0, 1, 0, 0)');
            }
        }

        //@ 올인원 필터 scrollup
        if(nowScrollTop < prevScrollTop){

            var $target3 = $('.cnr-sec4 .sec4-filter');

            if(nowScrollTop >= $target3.offset().top - nowHeight && nowScrollTop <= $target3.offset().top){

                $('.cnr-sec4 .sec4-filter .filterup').css('transform','translate(0%, -60%) matrix(1, 0, 0, 1, 0, 0)');

            }else {

                $('.cnr-sec4 .sec4-filter .filterup').css('transform','translate(0%,0%) matrix(1, 0, 0, 1, 0, 0)');
            }
        }
        //올인원 필터:end

        //물수위 표시창:start
        //@ 물수위 표시창 scrolldown
        if(nowScrollTop > prevScrollTop){
            var $target4 = $('.cnr-sec7 .water-grp');
            if(nowScrollTop <= $target4.offset().top + $target4.height() && nowScrollTop >= $target4.offset().top - (nowHeight / 3)){
                $('.cnr-sec7 .water-bg').css('transform','translate(0%, 0.5%) matrix(1, 0, 0, 1, 0, 0)');
                $('.cnr-sec7 .water-grp').addClass('active');
            }else {
                $('.cnr-sec7 .water-bg').css('transform','translate(0%, 46%) matrix(1, 0, 0, 1, 0, 0)');
                $('.cnr-sec7 .water-grp').removeClass('active');
            }
        }
        //@ 물수위 표시창 scrollup
        if(nowScrollTop < prevScrollTop){
            var $target4 = $('.cnr-sec7 .water-grp');
            if(nowScrollTop <= $target4.offset().top + (nowHeight/2) && nowScrollTop >= $target4.offset().top - nowHeight){
                $('.cnr-sec7 .water-bg').css('transform','translate(0%, 0.5%) matrix(1, 0, 0, 1, 0, 0)');
                $('.cnr-sec7 .water-grp').addClass('active');
            }else {
                $('.cnr-sec7 .water-bg').css('transform','translate(0%, 46%) matrix(1, 0, 0, 1, 0, 0)');
                $('.cnr-sec7 .water-grp').removeClass('active');
            }
        }

        //물수위 표시창:end

        //에어워시:start
        //@ 에어워시 scrolldown
        if(nowScrollTop > prevScrollTop){
            var $target5 = $('.cnr-sec8 .sec8-cnt');

            if(nowScrollTop >= $target5.offset().top - (nowHeight / 3) && nowScrollTop <= $target5.offset().top + $target5.height()){

                if($('.sec8-cnt').hasClass('on') == false){

                    $('.cnr-sec8 .dryer').addClass('active').children().on('transitionend',function(){
                        $('.cnr-sec8 .dryer').removeClass('active');
                    });

                    $('.cnr-sec8 .blanket').addClass('active').children().on('transitionend',function(){
                        $('.cnr-sec8 .blanket').removeClass('active');
                    });
                    $('.sec8-cnt').addClass('on');
                }

            }else {

                $('.cnr-sec8 .blanket').removeClass('active');
                $('.sec8-cnt').removeClass('on');
            }
        }
        // //@ 에어워시 scrollup
        if(nowScrollTop < prevScrollTop){
            var $target5 = $('.cnr-sec8 .sec8-cnt');

            if(nowScrollTop >= $target5.offset().top - (nowHeight / 3) && nowScrollTop <= $target5.offset().top + (nowHeight / 3)){

                if($('.sec8-cnt').hasClass('on') == false){

                    $('.cnr-sec8 .dryer').addClass('active').children().on('transitionend',function(){
                        $('.cnr-sec8 .dryer').removeClass('active');
                    });

                    $('.cnr-sec8 .blanket').addClass('active').children().on('transitionend',function(){
                        $('.cnr-sec8 .blanket').removeClass('active');
                    });
                    $('.sec8-cnt').addClass('on');
                }

            }else {
                $('.cnr-sec8 .blanket').removeClass('active');
                $('.sec8-cnt').removeClass('on');
            }
        }
        //에어워시:end

        prevScrollTop = nowScrollTop;

    });
    //scroll관련 event: end

    //에너지 절약 관련 event:satrat
    function perChangeSet(){
        var frame = 70;
        var target = $('.cnr-sec3 .engtxt .data .per');
        var count = target.attr('data-per') * 1;

        count = count + 1;
        if(count >= frame){

            count = frame;
            clearInterval(perChange);
        }

        target.attr('data-per', count);
        target.text(count + '%');

    }

    function gaugeChangeSet(){
        var frame = 20;
        var target = $('.cnr-sec3 .sec3-prdeng .eng-gauge');
        var count = parseInt(target.attr('data-gauge'));

        count = count + 1;
        if(count >= frame){
            count = frame;
            clearInterval(gaugeChange);
        }

        target.attr('data-gauge', count);
        if(count<10){
            target.attr('src' , "http://coner.co.kr/project/samsungpd/pd/dv90m52a0qw/v4/image/samsung/sec-html-feature-dv90m52a0qw-sec03-prd_0000" + count + '.png');
        }else {
            target.attr('src' , "http://coner.co.kr/project/samsungpd/pd/dv90m52a0qw/v4/image/samsung/sec-html-feature-dv90m52a0qw-sec03-prd_000" + count + '.png');
        }
    }
    //에너지 절약:end


    // sec5 설치환경 list animation:start
    $('.sec5-tab li').on('click',function(){
        var idx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.sec5-cnt .cnt-img').eq(idx).addClass('select').siblings().removeClass('select');
        $('.sec5-cnt-img4 .img4-tab li').removeClass('active');
        $('.img4-cnt .img4-cntView').removeClass('select').css('opacity' , '1');
    });

    $('.sec5-cnt-img4 .img4-tab li').on('click',function(){
        var idx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.img4-cnt .img4-cntView').eq(idx).addClass('select').css('opacity','1').siblings().removeClass('select').css('opacity' , '0');
    });

    // sec5 설치환경 list animation:end

    //리모컨 hover:start

    $('.cnr-sec9 .info-txt div').on('mouseover',function(){

        var remoconIdx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.cnr-sec9 .info-box div').eq(remoconIdx).addClass('active').siblings().removeClass('active');

    }).on('mouseout',function(){

        $(this).removeClass('active');
        $('.cnr-sec9 .info-box div').removeClass('active');

    });

    //리모컨 hover:end

    // sec11 slide :start
    var startX = 0;
	var moveX = 0;
	var orginalX = 0;
	var changeX = 0;
    var sdidx = 0;
    var slide_lo = $('.dtSd-wrapper').css('left').replace('px','') * 1;
    var isState = false;
    var dtSlideLength = $('.dt-slide').length;


    function slide(i){
        sdidx += i;

        if(sdidx <= 0 ){
            sdidx = 0;
        } else if (sdidx >= dtSlideLength - 1) {
            sdidx = 4;
        }

        $('.dtSd-wrapper').stop().animate({'left':(-1 * sdidx) + '00%'},300);
    }




    function btn_control(sdidx){
        if(sdidx <= 0){
            $('.cnr-prev-btn').hide();
            $('.cnr-next-btn').show();
        }
        else if(sdidx >= 4){
            $('.cnr-prev-btn').show();
            $('.cnr-next-btn').hide();
        } else {
            $('.cnr-next-btn').show();
            $('.cnr-prev-btn').show();
        }

    }


    $('.cnr-next-btn').on('click',function(){
        slide(1);
        btn_control(sdidx);
    });
    $('.cnr-prev-btn').on('click',function(){
        slide(-1);
        btn_control(sdidx);
    });


    $('.dtSd-wrapper').on('mousedown',function(e){
        isState = true;
        slide_lo = parseInt($(this).css('left').replace('px',''));
        orginalX = e.pageX;
        startX = e.pageX - slide_lo;

        if(sdidx >= 4){
            sdidx = 4;
        }else if (sdidx <= 0) {
            sdidx = 0;
        }
    });




    $(window).on('mousemove', function(e){
        if (isState == true){
           changeX = e.pageX - orginalX;
           moveX = e.pageX - startX;
            $('.dtSd-wrapper').css('left',moveX  + 'px');
            console.log(moveX);
            btn_control(sdidx);
            return false;
        }
    });


    $(window).on('mouseup', function(e){
        if(isState == true){
            slide_w = Math.round($('.dtSd-wrapper .dt-slide').width());
            if(changeX <= slide_w * -0.2) {
                slide(1);
                if(slide_lo <= slide_w * -4){
                    $('.dtSd-wrapper').stop().animate({'left':'-400%'}, 300);
                }
            }
            if(changeX >= slide_w * 0.2){
                slide(-1);
                if (slide_lo == 0) {
                    $('.dtSd-wrapper').stop().animate({'left':'0px'}, 300);
                }
            }
            if(changeX > slide_w * - 0.2 && changeX < slide_w * 0.2){
                $('.dtSd-wrapper').stop().animate({'left': slide_lo  + 'px'});
            }
            isState = false;
        }
    });


    $('.cnr-close-btn').on('click',function(){
        $('.cnr-sec11 .cnt-pop').hide();
    });

    $('.sec11-cnt .cnt-wrap div a').on('click',function(e){
        $('.cnr-sec11 .cnt-pop').show();
        sdidx = $(this).data('slide');
        btn_control(sdidx);
        $('.dtSd-wrapper').css('left', '-' + (100 * sdidx) + '%');
    });





    // mobile
    var moStartX,momX = 0;
    var mosdidx = 0;
    var moslide_lo = $('.modtSd-wrapper').css('left').replace('px','') * 1;
    var moisState = false;
    var mocX = 0;
    var modtSlideLength = $('.modt-slide').length;

    function slideMo(i){
        mosdidx += i;
        if(mosdidx <= 0){
            mosdidx = 0;
        } else if (mosdidx >= modtSlideLength - 1 ) {
            mosdidx = 4;
        }
        $('.modtSd-wrapper').stop().animate({'left':(-1 * mosdidx) + '00%'},300);
    }



    function mobtn_control(mosdidx){
        if(mosdidx <= 0){
            $('.cnr-prev-mobtn').hide();
            $('.cnr-next-mobtn').show();
        }
        else if(mosdidx >= 4){
            $('.cnr-prev-mobtn').show();
            $('.cnr-next-mobtn').hide();
        } else {
            $('.cnr-next-mobtn').show();
            $('.cnr-prev-mobtn').show();
        }

    }


    $('.cnr-next-mobtn').on('click',function(){
        slideMo(1);
        mobtn_control(mosdidx);
    });
    $('.cnr-prev-mobtn').on('click',function(){
        slideMo(-1);
        mobtn_control(mosdidx);
    });


    $('.modtSd-wrapper').on('mousedown',function(e){
        moisState = true;
        // moslide_lo = parseInt($(this).css('left').replace('%',''));
        moslide_lo = parseInt($(this).css('left').replace('%',''));
        moOrginalX = e.pageX;
        moStartX = e.pageX - moslide_lo;
        console.log(moslide_lo);

    });

    $(window).on('mousemove',function(e){
        if (moisState == true){
            mocX = e.pageX - moOrginalX;

            // console.log(mocX);
            momX = e.pageX - moStartX;
            $('.modtSd-wrapper').css('left', momX +'px');
            return false;
        }
        mobtn_control(mosdidx);
    }) ;

    $(window).on('mouseup',function(e){

        if(moisState == true){
            moslide_w = $('.modtSd-wrapper .modt-slide').width();
            if (mocX >= moslide_w * 0.2){
                slideMo(-1);
                if (moslide_lo == 0) {
                    $('.modtSd-wrapper').stop().animate({'left':'0px'}, 300);
                }
            }
            if(mocX>moslide_w * -0.2 && mocX < moslide_w * 0.2){
                $('.modtSd-wrapper').stop().animate({'left': moslide_lo  + 'px'});

            }
            if (mocX <= moslide_w * -0.2) {
                slideMo(1);
                if(moslide_lo <= moslide_w * -4){
                    $('.modtSd-wrapper').stop().animate({'left':'-400%'}, 300);
                }
            }
        }
        moisState = false;
    });

    $(' .cnr-close-mobtn').on('click',function(){
        $('.sec11-moblie .mocnt-pop').hide();
    });

    $('.sec11-moblie div a').on('click',function(){
        $('.sec11-moblie .mocnt-pop').show();
        mosdidx = $(this).data('slide');
        mobtn_control(mosdidx);
        $('.modtSd-wrapper').css({'left': mosdidx * -100 + '%'});
    });

    // sec11 slide :end


    $(window).on('load', function(){
        var slide_h = parseInt($('.cnr-sec5 .sec5-inner .sec5-cnt>.cnt-img').height());
        $('.cnr-sec5 .sec5-cnt .sec5-cnt-img4').css('height',slide_h);
    });

    // 모바일 이미지 변환

    $(window).on('resize',function(){
        win_w = $(window).width();
        var btnidx = 0;

        function img4Sd(i){

            btnidx = btnidx+i;

            if(btnidx > 2){
                btnidx = 0;
            }else if(btnidx < 0){
                btnidx = 2;
            }

            $('.cnr-sec5 .img4-cnt .img4-cntView').eq(btnidx).addClass('select').css('opacity','1').siblings().removeClass('select').css('opacity','0');

        }


        if(win_w < 767){
            var moblie = $('.cnr-sec1 .sec1-bg').attr('data-bgMob');
            var logomoblie = $('.cnr-sec1 .sec1-txt-wrap img').attr('data-bgMob');
            var bgmoblie = $('.cnr-sec2 .bg-prd').attr('data-bgMob');
            var barmoblie = $('.cnr-sec3 .sec3-bargrp').attr('data-bgMob');
            var moimg1 = $('.cnr-sec5 .sec5-cnt-img1 img').attr('data-bgMob');
            var moimg2 = $('.cnr-sec5 .sec5-cnt-img2 img').attr('data-bgMob');
            var moimg3 = $('.cnr-sec5 .sec5-cnt-img3 img').attr('data-bgMob');
            var moimg4 = $('.cnr-sec5 .sec5-cnt-img4 img').attr('data-bgMob');
            var moview1 =$('.cnr-sec5 .img4-cntView.View1 img').attr('data-bgMob');
            var moview2 =$('.cnr-sec5 .img4-cntView.View2 img').attr('data-bgMob');
            var moview3 =$('.cnr-sec5 .img4-cntView.View3 img').attr('data-bgMob');
            var mosec6bg =$('.cnr-sec6 .sec6-inner .sec6-bg').attr('data-bgMob');
            var mosec8bg =$('.cnr-sec8 .wind img').attr('data-bgMob');
            var mosec9bg =$('.cnr-sec9 .sec9-bg').attr('data-bgMob');
            var mosec10 =$('.cnr-sec10 .sec10-cnt img').eq(1).attr('data-bgMob');
            var mosec12 =$('.cnr-sec12 img').attr('data-bgMob');
            $('.cnr-sec5 .sec5-cnt-img1 img').attr('src',moimg1);
            $('.cnr-sec5 .sec5-cnt-img2 img').attr('src',moimg2);
            $('.cnr-sec5 .sec5-cnt-img3 img').attr('src',moimg3);
            $('.cnr-sec5 .sec5-cnt-img4 img').attr('src',moimg4 );
            $('.cnr-sec5 .img4-cntView.img4-cntView.View1 img').attr('src',moview1);
            $('.cnr-sec5 .img4-cntView.View2 img').attr('src', moview2);
            $('.cnr-sec5 .img4-cntView.View3 img').attr('src',moview3);
            $('.cnr-sec1 .sec1-bg').attr('src',moblie);
            $('.cnr-sec1 .sec1-txt-wrap img').attr('src',logomoblie);
            $('.cnr-sec2 .bg-prd').attr('src', bgmoblie);
            $('.cnr-sec3 .sec3-bargrp').attr('src', barmoblie );
            $('.cnr-sec6 .sec6-inner .sec6-bg').attr('src', mosec6bg);
            $('.cnr-sec8 .wind img').attr('src', mosec8bg);
            $('.cnr-sec9 .sec9-bg').attr('src', mosec9bg);
            $('.cnr-sec10 .sec10-cnt img').eq(1).attr('src', mosec10);
            $('.cnr-sec12 img').attr('src', mosec12);

            $('.cnr-sec5 .img4-tab li button').on('click',function(){
                $('.img4-tab').hide();
                $('.cnr-sec5 .sec5-cnt-img4 button').show();
                btnidx = parseInt($(this).parents().index());
                img4Sd(btnidx);
            });

            $('.cnr-sec5 .sec5-cnt-img4 .next').on('click',function(){
                img4Sd(1);
                console.log(btnidx);
            });

            $('.cnr-sec5 .sec5-cnt-img4 .prev').on('click',function(){

                img4Sd(-1);
                console.log(btnidx);
            });

            $('.cnr-sec5 .sec5-cnt-img4 .back').on('click',function(){
                $('.img4-tab').show();
                $('.cnr-sec5 .sec5-cnt-img4 .img4btn').hide();
                $('.cnr-sec5 .img4-cnt .img4-cntView').removeClass('select').css('opacity','1');
                $('.cnr-sec5 .sec5-cnt-img4 .img4-tab li').removeClass('active');

            });

            $('.cnr-sec5 .sec5-inner .sec5-tab .active').siblings().on('click',function(){
                $('.cnr-sec5 .sec5-cnt-img4 .back').trigger('click');
            });


        }else {
            var desktop = $('.cnr-sec1 .sec1-bg').attr('data-bgDesk');
            var logodesktop = $('.cnr-sec1 .sec1-txt-wrap img').attr('data-bgDesk');
            var bgdesktp =  $('.cnr-sec2 .bg-prd').attr('data-bgDesk');
            var bardesktp = $('.cnr-sec3 .sec3-bargrp').attr('data-bgDesk');
            var deskimg1 = $('.cnr-sec5 .sec5-cnt-img1 img').attr('data-bgDesk');
            var deskimg2 = $('.cnr-sec5 .sec5-cnt-img2 img').attr('data-bgDesk');
            var deskimg3 = $('.cnr-sec5 .sec5-cnt-img3 img').attr('data-bgDesk');
            var deskimg4 = $('.cnr-sec5 .sec5-cnt-img4 img').attr('data-bgDesk');
            var deskview1 = $('.cnr-sec5 .img4-cntView.View1 img').attr('data-bgDesk');
            var deskview2 = $('.cnr-sec5 .img4-cntView.View2 img').attr('data-bgDesk');
            var deskview3 = $('.cnr-sec5 .img4-cntView.View3 img').attr('data-bgDesk');
            var desksec6bg = $('.cnr-sec6 .sec6-inner .sec6-bg').attr('data-bgDesk');
            var desksec8bg = $('.cnr-sec8 .wind img').attr('data-bgDesk');
            var desksec9bg = $('.cnr-sec9 .sec9-bg').attr('data-bgDesk');
            var desksec10 = $('.cnr-sec10 .sec10-cnt img').eq(1).attr('data-bgDesk');
            var desksec12 = $('.cnr-sec12 img').attr('data-bgDesk');

            $('.cnr-sec5 .sec5-cnt-img1 img').attr('src',deskimg1);
            $('.cnr-sec5 .sec5-cnt-img2 img').attr('src',deskimg2);
            $('.cnr-sec5 .sec5-cnt-img3 img').attr('src',deskimg3 );
            $('.cnr-sec5 .sec5-cnt-img4 img').attr('src',deskimg4 );
            $('.cnr-sec5 .img4-cntView.View1 img').attr('src',deskview1);
            $('.cnr-sec5 .img4-cntView.View2 img').attr('src',deskview2);
            $('.cnr-sec5 .img4-cntView.View3 img').attr('src',deskview3);
            $('.cnr-sec1 .sec1-bg').attr('src',desktop);
            $('.cnr-sec1 .sec1-txt-wrap img').attr('src',logodesktop);
            $('.cnr-sec2 .bg-prd').attr('src',bgdesktp);
            $('.cnr-sec3 .sec3-bargrp').attr('src',bardesktp );
            $('.cnr-sec6 .sec6-inner .sec6-bg').attr('src', desksec6bg);
            $('.cnr-sec8 .wind img').attr('src',desksec8bg);
            $('.cnr-sec9 .sec9-bg').attr('src',desksec9bg);
            $('.cnr-sec10 .sec10-cnt img').eq(1).attr('src', desksec10);
            $('.cnr-sec12 img').attr('src', desksec12);

            $('.cnr-sec5 .img4-tab').show();

            $('.cnr-sec5 .img4-tab li button').on('click',function(){
                $('.cnr-sec5 .img4-tab').show();
            });
        }
        var slide_h = $('.cnr-sec5 .sec5-inner .sec5-cnt>.cnt-img').height();
        $('.cnr-sec5 .sec5-cnt .sec5-cnt-img4').css('height',slide_h);
    }).resize();
});
















/**/
