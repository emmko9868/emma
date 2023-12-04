window.addEventListener('DOMContentLoaded', function () {


    setTimeout(()=>{
        $('#intro').addClass('on');
    },3000);


    setTimeout(()=>{
        $('#section01 .se01_inner01').addClass('on');
    },1000);



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)




        if(scrollTop >= 800 && scrollTop <=1500) {
            $('#section01 .se01_inner02').addClass('on');
        }


        if(scrollTop >= 1300 && scrollTop <=2000) {
            $('#section01 .se01_inner03').addClass('on');
        }


        if(scrollTop >= 3200 && scrollTop <=3527) {
            $('#section01 .se01_inner05').addClass('on');
        }


        if(scrollTop >= 4700 && scrollTop <=7100) {
            $('#section02 .se02_inner01').addClass('on');
        }

        if(scrollTop >= 6350 && scrollTop <=8000) {
            $('#section02 .se02_inner02').addClass('on');
        }

        if(scrollTop >= 6500 && scrollTop <=7000) {
            $('#section02 .se02_inner02 .onborading02device').addClass('on');
        }

        // if(scrollTop >= 6300 && scrollTop <=7400) {
        //     $('#section02 .se02_inner01 .splashscreen02_02').addClass('on');
        // }

        if(scrollTop >= 7100 && scrollTop <=7400) {
            $('#section02 .se02_inner02 .Onbroadingtitle02_1').addClass('on');
        }



        if(scrollTop >= 7800 && scrollTop <=8500) {
            $('#section02 .se02_inner02 .login_signup_title').addClass('on');
        }

        if(scrollTop >= 7800 && scrollTop <=8500) {
            $('#section02 .se02_inner02 .loginvideo').addClass('on');
        }




        if(scrollTop >= 9500 && scrollTop <=11000) {
            $('#section02 .se02_inner03').addClass('on');
        }

        if(scrollTop >= 10700 && scrollTop <=11000) {
            $('#section02 .se02_inner03 .se02_inner03.on .mainpagetext_02> div:nth-child(2)').addClass('on');
        }

        if(scrollTop >= 10700 && scrollTop <=11000) {
            $('#section02 .se02_inner03 .se02_inner03.on .mainpagetext_02 > div:nth-child(1)').addClass('on');
        }




        if(scrollTop >= 12000 && scrollTop <=14000) {
            $('#section03 .se03_inner01').addClass('on');
        }


        if(scrollTop >= 13700 && scrollTop <=15000) {
            $('#section03 .se03_inner01 .lowerdevice03_01').addClass('on');
        }


        if(scrollTop >= 15100 && scrollTop <=17000) {
            $('#section03 .se03_inner02').addClass('on');
        }


        if(scrollTop >= 16500 && scrollTop <=20000) {
            $('#section03 .se03_inner02 .mfdeivce0302').addClass('on');
        }




        if(scrollTop >= 18400 && scrollTop <=23000) {
            $('#section03 .se03_inner03').addClass('on');
        }


        if(scrollTop >= 20000 && scrollTop <=23000) {
            $('#section03 .se03_inner03 .mfmockup0303_02').addClass('on');
        }

        if(scrollTop >= 21000 && scrollTop <=23000) {
            $('#section03 .se03_inner03 .mfmockup0303_03').addClass('on');
        }

        if(scrollTop >= 22100 && scrollTop <=25000) {
            $('#section03 .se03_inner03 .mfmockup0303_04').addClass('on');
        }





        if(scrollTop >= 23500 && scrollTop <=27000) {
            $('#section04 .se04_inner01').addClass('on');
        }

        if(scrollTop >= 26000 && scrollTop <=27000) {
            $('#section04 .se04_inner01 .mfmockup0401_01').addClass('on');
        }


        if(scrollTop >= 26000 && scrollTop <=27000) {
            $('#section04 .se04_inner01 .mfonboradingcharacter0401').addClass('on');
        }
        if(scrollTop >= 25900 && scrollTop <=27000) {
            $('#section04 .se04_inner01 .mfmockup0401_02').addClass('on');
        }

        if(scrollTop >= 27600 && scrollTop <=29000) {
            $('#section04 .se04_inner01 .mfdisplay0401').addClass('on');
        }


        if(scrollTop >= 28500 && scrollTop <=30000) {
            $('#section04 .se04_inner02').addClass('on');
        }

        if(scrollTop >= 29500 && scrollTop <=30000) {

            $('#section04 .se04_inner02 .mftext0401_05').addClass('on');
        }

        if(scrollTop >= 29500 && scrollTop <=30000) {

            $('#section04 .se04_inner02 .mftext0401_06').addClass('on');
        }


        if(scrollTop >= 30000 && scrollTop <=40000) {

            $('#section04 .se04_inner02 .mftext0401_07').addClass('on');
        }

        if(scrollTop >= 35000 && scrollTop <=40000) {

            $('#section04 .se04_inner02 .mftext0401_08').addClass('on');
        }

        if(scrollTop >= 31500 && scrollTop <=40000) {

            $('#section04 .se04_inner02 .mf0402group_02').addClass('on');
        }


        if(scrollTop >= 32300 && scrollTop <=40000) {

            $('#section04 .se04_inner03').addClass('on');
        }



        if(scrollTop >= 34500 && scrollTop <=36000) {
            $('#section05 .se05_contents01').addClass('on');
        }


        if(scrollTop >= 35200 && scrollTop <=36000) {
            $('#section05 .se05_contents01 .mypagevideo').addClass('on');
        }

        if(scrollTop >= 38907 && scrollTop <=39000) {
            $('#section05 .se05_contents02 .window').addClass('on');
        }
        //
        // if(scrollTop >= 38000 && scrollTop <=39000) {
        //     $('#section05 .se05_contents02 .window .processwindow05_01').addClass('on');
        // }
        //
        // if(scrollTop >= 38300 && scrollTop <=39000) {
        //     $('#section05 .se05_contents02 .window .processwindow05_02').addClass('on');
        // }
        //
        // if(scrollTop >= 38600 && scrollTop <=39000) {
        //     $('#section05 .se05_contents02 .window .processwindow05_03').addClass('on');
        // }
        //
        // if(scrollTop >= 38900 && scrollTop <=39000) {
        //     $('#section05 .se05_contents02 .window .processwindow05_04').addClass('on');
        // }
        //
        // if(scrollTop >= 39200 && scrollTop <=40000) {
        //     $('#section05 .se05_contents02 .window .processwindow05_04').addClass('on');
        // }

        if(scrollTop >= 46000 && scrollTop <=70000) {
            $('#section06 .se06_inner01_01').addClass('on');
        }
        if(scrollTop >= 46300 && scrollTop <=70000) {
            $('#section06 .se06_inner01_01 .researchbg06_01').addClass('on');

        }
        if(scrollTop >= 46500 && scrollTop <=70000) {
            $('#section06 .se06_inner01_01 .researchtext06_01').addClass('on');
        }
        if(scrollTop >= 46700 && scrollTop <=70000) {
            $('#section06 .se06_inner01_01 .character0601').addClass('on');
        }
        if(scrollTop >= 46800 && scrollTop <=70000) {
            $('#section06 .se06_inner01_01 .researchtext06_02').addClass('on');
        }
        if(scrollTop >= 46800 && scrollTop <=70000) {
            $('#section06 .se06_inner01_01 .researchtext06_03').addClass('on');
        }

        if(scrollTop >= 46800 && scrollTop <=70000) {
            $('#section06 .se06_inner01_01 .researchtext06_04').addClass('on');
        }

        if(scrollTop >= 46800 && scrollTop <=70000) {
            $('#section06 .se06_inner01_01 .researchtext06_05').addClass('on');
        }

        if(scrollTop >= 46800 && scrollTop <=70000) {
            $('#section06 .se06_inner01_01 .researchtext06_06').addClass('on');
        }

        // if(scrollTop >= 47130 && scrollTop <=70000) {
        //     $('#section06 .se06_inner01_02 .researchbg06_02').addClass('on');
        // }
        //
        //
        //
        // if(scrollTop >= 47630 && scrollTop <=70000) {
        //     $('#section06 .se06_inner01_02 .researchresulte06_01').addClass('on');
        //     $('#section06 .se06_inner01_02 .researchresulte06_02').addClass('on');
        //     $('#section06 .se06_inner01_02 .researchresulte06_03').addClass('on');
        //     $('#section06 .se06_inner01_02 .researchresulte06_04').addClass('on');
        // }



        if(scrollTop >= 48530 && scrollTop <=70000) {
            $('#section06 .se06_inner01_03 .researchbg06_03').addClass('on');
        }

        if(scrollTop >= 48530 && scrollTop <=70000) {
            $('#section06 .se06_inner01_03 .researchbg06_03').addClass('on');
            $('#section06 .se06_inner01_03 .textnqna').addClass('on');

        }

        if(scrollTop >= 49500 && scrollTop <=70000) {
            $('#section06 .se06_inner01_03 .interviewkeyfindings_title').addClass('on');
            $('#section06 .se06_inner01_03 .keyfind0601').addClass('on');
            $('#section06 .se06_inner01_03 .keyfind0602').addClass('on');
            $('#section06 .se06_inner01_03 .keyfind0603').addClass('on');
            $('#section06 .se06_inner01_03 .keyfind0604').addClass('on');

        }

        if(scrollTop >= 50300 && scrollTop <=70000) {
            $('#section06 .se06_inner01_04 .researchbg06_04').addClass('on');
            $('#section06 .se06_inner01_04 .textnresult').addClass('on');


        }


        if(scrollTop >= 56200 && scrollTop <=70000) {
            $('#section06 .se06_inner02_01 .ideation0602').addClass('on');
            $('#section06 .se06_inner02_01 .ideation0602_01').addClass('on');
            $('#section06 .se06_inner02_01 .ideation0602_02').addClass('on');
            $('#section06 .se06_inner02_01 .ideationcharacther0602_01').addClass('on');
            $('#section06 .se06_inner02_01 .ideationcharacther0602_02').addClass('on');

        }


        if(scrollTop >= 56900 && scrollTop <=70000) {
            $('#section06 .se06_inner03 .se06_inner03_01 .ideationbg0603_01').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_01 .ideationtext0603_01').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_01 .keywords0603_1').addClass('on');
        }


        if(scrollTop >= 58037 && scrollTop <=70000) {
            $('#section06 .se06_inner03 .se06_inner03_02 .ideationbg0603_02').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_02 .stakeholder0603_01').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_02 .stakeholder0603_02').addClass('on');
        }

        if(scrollTop >= 59100 && scrollTop <=70000) {
            $('#section06 .se06_inner03 .se06_inner03_03 .sitemapbg_01').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_03 .sitemap0603_01').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_03 .sitemap0603_02').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_03 .sitemap0603_03').addClass('on');
        }

        if(scrollTop >= 61300 && scrollTop <=70000) {
            $('#section06 .se06_inner03 .se06_inner03_04 .userflowbg').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_04 .userflow0604_01').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_04 .userflow0604_02').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_04 .userflow0604_03').addClass('on');
        }

        if(scrollTop >= 62340 && scrollTop <=70000) {
            $('#section06 .se06_inner03 .se06_inner03_05 .wireframesbg0605').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_05 .wireframes0605_01').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_05 .wireframes0605_02').addClass('on');
        }

        if(scrollTop >= 63900 && scrollTop <=70000) {
            $('#section06 .se06_inner03 .se06_inner03_05 .wireframes0605_03').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_05 .wireframes0605_04').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_05 .wireframes0605_07').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_05 .wireframes0605_05').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_05 .wireframes0605_08').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_05 .wireframes0605_06').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_05 .wireframes0605_09').addClass('on');
        }

        if(scrollTop >= 65500 && scrollTop <=70000) {
            $('#section06 .se06_inner03 .se06_inner03_05 .iteration0605_01').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_05 .iteration0605_02').addClass('on');
        }


        if(scrollTop >= 66800 && scrollTop <=70000) {
            $('#section06 .se06_inner03 .se06_inner03_05 .iteration0605_06').addClass('on');

        }

        if(scrollTop >= 68450 && scrollTop <=70000) {
            $('#section06 .se06_inner03 .se06_inner03_04 .evaluation0603_01').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_04 .evaluation0603_02').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_04 .evaluationcharacter0603_01').addClass('on');
            $('#section06 .se06_inner03 .se06_inner03_04 .evaluationcharacter0603_02').addClass('on');

        }



        if(scrollTop >= 69400 && scrollTop <=70000) {
            $('#section06 .se06_inner04 .se06_inner04_01 .testingbg0606_01').addClass('on');
            $('#section06 .se06_inner04 .se06_inner04_01 .testingtext0606').addClass('on');

        }

        if(scrollTop >= 69850 && scrollTop <=70000) {
            $('#section06 .se06_inner04 .se06_inner04_01 .testingresults0606 .testingresults0606_01').addClass('on');
            $('#section06 .se06_inner04 .se06_inner04_01 .testingresults0606 .testingresults0606_02').addClass('on');
            $('#section06 .se06_inner04 .se06_inner04_01 .testingresults0606 .testingresults0606_03').addClass('on');
            $('#section06 .se06_inner04 .se06_inner04_01 .testingpic0606').addClass('on');
        }



        if(scrollTop >= 52000 && scrollTop <=70000) {
            $('#section06 .se06_inner01_05').addClass('on');
        }

        if(scrollTop >= 71630 && scrollTop <=80000) {
            $('#section06 .se06_inner04 .se06_inner04_01 .design0606_1').addClass('on');
            $('#section06 .se06_inner04 .se06_inner04_01 .design0606_2').addClass('on');
            $('#section06 .se06_inner04 .se06_inner04_01 .designcharacter0606_1').addClass('on');
            $('#section06 .se06_inner04 .se06_inner04_01 .designcharacter0606_2').addClass('on');


        }



        if(scrollTop >= 72700 && scrollTop <=80000) {
            $('#section06 .se06_inner05 .designbg0607').addClass('on');
            $('#section06 .se06_inner05 .styleguide .styleguilde0607_01').addClass('on');
            $('#section06 .se06_inner05 .styleguide .styleguilde0607_02').addClass('on');

        }



        if(scrollTop >= 73700 && scrollTop <=80000) {
            $('#section06 .se06_inner05 .styleguilde0607_03').addClass('on');
            $('#section06 .se06_inner05 .styleguilde0607_04').addClass('on');

        }


    });



    /*  slide,click event section */


    let value = 0;
    $('#header .inner >div').click(function () {
        // $('#mega').removeClass('on')
        let idx = $('#header .inner >div').index(this);
        console.log(idx)

        if (idx === 0) value = 0;
        if (idx === 1) value = 1000;
        if (idx === 2) value = 4000;
        if (idx === 3) value = 6000;
        if (idx === 4) value = 9000;
        if (idx === 5) value = 9000;


        container.scrollTo(0,value, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });

    });



    let sc01 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01,
        trigger: "#container .scroll-content",
        start: "top top",
        // end: () => "+=" + 2300,
        end: 'bottom bottom',
        // horizontal: true,
        scrub: 1,
        onUpdate: self => {
        }
    });

    sc01.to(".scroll .scrolltoex01", {rotate:'3600deg',});



    gsap.to('#section05 .fix-this-05', {
        // rotation: 360,
        // x: -innerWidth*3,
        x:-10690,
        scrollTrigger: {
            trigger: "#section05 .trigger-this-05",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            scrub: true,
        }
    });



    gsap.to('#section06 .se06_xscroll', {
        scrollTrigger: {
            trigger: "#section06 .se06_xscroll .trigger-this-06 ",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            scrub: true,
        }
    });

    gsap.to('#section06 .se06_xscroll .define0602', {
        x:-6000,
        scrollTrigger: {
            trigger: "#section06 .se06_xscroll",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
        }
    });




    $("#section06 .textnqna .interview06_01").slick({
        dots: true, //navigation
        arrows: true, //arrow
        prevArrow: $('.prev'), //prev
        nextArrow: $('.next'), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){

        $("#section01 .bg .slick-slide").removeClass('on');

    }).on('afterChange', function(event, slick, currentSlide, nextSlide){

        $("#section01 .bg .slick-current").addClass('on');

    });





    $("#section06 .se06_inner01_04 .survey0604").slick({
        dots: true, //navigation
        arrows: true, //arrow
        prevArrow: $('.prev'), //prev
        nextArrow: $('.next'), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){

        $("#section01 .bg .slick-slide").removeClass('on');

    }).on('afterChange', function(event, slick, currentSlide, nextSlide){

        $("#section01 .bg .slick-current").addClass('on');

    });




})


