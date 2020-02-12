$(document).ready(function () {

    $("#loading").fadeOut(1000, function () {
        $("body").css({ overflow: "auto" })
    })
    let itemsImg = Array.from(document.getElementsByClassName("img-show"));
    let bigBox = document.getElementById("box-show");
    let indexCurrent = 0;
    for (let i = 0; i < itemsImg.length; i++) {
        itemsImg[i].addEventListener("click", function (e) {
            bigBox.style.display = "flex";
            let imgSrc = e.target.src;
            indexCurrent = itemsImg.indexOf(e.target);
            bigBox.firstElementChild.style.backgroundImage = "url(" + imgSrc + ")";
        })
    }

    $("#prev").click(function () {
        indexCurrent--;

        if (indexCurrent < 0) {

            indexCurrent = itemsImg.length - 1;
            bigBox.firstElementChild.style.backgroundImage = "url(" + itemsImg[indexCurrent].src + ")";
        } else {
            bigBox.firstElementChild.style.backgroundImage = "url(" + itemsImg[indexCurrent].src + ")";

        }

    })
    $("#next").click(function () {
        indexCurrent++;

        if (indexCurrent == itemsImg.length) {
            indexCurrent = 0;
            bigBox.firstElementChild.style.backgroundImage = "url(" + itemsImg[indexCurrent].src + ")";
        } else {

            bigBox.firstElementChild.style.backgroundImage = "url(" + itemsImg[indexCurrent].src + ")";

        }
    })

    $("#close").click(function () {
        $("#box-show").slideUp(1000)
    })

















    function validName(name) {
        let nameRegex = /^[A-zا-ي]{2,}$/;
        if (nameRegex.test(name)) {
            return true;
        } else {
            return false;
        }
    }

    function validEmail(email) {
        let emailRegex = /^[A-z][A-z0-9]{2,}@(yahoo|gmail).com$/;
        if (emailRegex.test(email)) {
            return true;
        } else {
            return false;
        }
    }
    function validPass(pass) {
        let passRegex = /^[A-z0-9]{8,}$/;
        if (passRegex.test(pass)) {
            return true;
        } else {
            return false;
        }
    }
    function validMassage(massage) {
        let massageRegex = /^[A-z0-9]{20,100}$/;
        if (massageRegex.test(massage)) {
            return true;
        } else {
            return false;
        }
    }
    function validPhone(phone) {
        let PhoneRegex = /^(02)?(010|011|012|015)[0-9]{7}$/;
        if (PhoneRegex.test(phone)) {
            return true;
        } else {
            return false;
        }
    }
    $("#inpPhone").keyup(function () {
        let telValue = $("#inpPhone").val();
        if (validPhone(telValue) == true) {
            $("#phoneError").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#phoneError").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })

    $("#messageInp").keyup(function () {
        let messageValue = $("#messageInp").val();
        if (validMassage(messageValue) == true) {
            $("#errorMassage").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#errorMassage").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })



    $("#inpName").keyup(function () {
        let nameValue = $("#inpName").val();
        if (validName(nameValue) == true) {
            $("#erorrName").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#erorrName").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })

    $("#inpEmail").keyup(function () {
        let emailValue = $("#inpEmail").val();
        if (validEmail(emailValue) == true) {
            $("#erorrEmail").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#erorrEmail").css("display", "block")
            $("#send").attr("disabled", "true")
        }
    })

    $("#messageInp").keyup(function () {
        $("#manyChar").css("display", "block")
        let manyCharMax = $(this).attr("maxlength");
        let manyChar = document.getElementById("messageInp").value;
        let x = manyChar.length;
        $("#manyChar").text(manyCharMax - x)
        if (manyCharMax - x == 0) {
            $("#manyChar").css("color", "rgb(240, 79, 79)")
        } else {
            $("#manyChar").css("color", "#000")

        }
    })


    $("#send").click(function () {
        resetInput();
    })

    function resetInput() {
        let inputs = document.getElementsByClassName("inp");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
    }
    let futureTime = new Date("May 22, 2025 15:37:25").getTime();
    function timer() {
        let now = new Date().getTime();
        let between = futureTime - now;

        var day = Math.floor(between / (1000 * 60 * 60 * 24));
        var hours = Math.floor((between % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((between % (1000 * 60 * 60)) / (1000 * 60));
        var second = Math.floor((between % (1000 * 60)) / 1000);

        $(".days").text(day);
        $(".hours").text(hours);
        $(".minutes").text(minutes);
        $(".second").text(second);
        if (between < 0) {
            clearInterval(timer);

            $(".days").text("it");
            $(".hours").text("is");
            $(".minutes").text("started");
            $(".second").text("now");
        }
    }
    setInterval(timer, 1000);

    $(".show-items .show-book").click(function () {
        let srcClick = $(this).attr("src");
    })
    let windowHeight = $(window).height();
    let navHeight = $(".navbar").height();
    $("header").height(windowHeight - navHeight);

    $(".nav-item .nav-link , .links li a").click(function () {
        let LinkHref = $(this).attr("href");
        $("html,body").animate({ scrollTop: $(LinkHref).offset().top }, 1000)
    })
    $(".nav-link").click(function () {
        $(this).addClass("activeX");
        $(".nav-link").not(this).removeClass("activeX");
    })
    var typed = new Typed('.element', {
        strings: ["BOOK IN ORDER"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
    AOS.init();

    $(".taps").not($(".taps:first")).hide();

    $(".chose ul li a").click(function () {
        let myId = $(this).attr("id");
        $(this).addClass("active-chose");
        $(".chose ul li a").not(this).removeClass("active-chose");

        $(".taps").hide();
        $("." + myId + "-tabs").slideDown(1000);

    })

    $('#BESTSEALS .owl-carousel,#BOOK .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 20,
        nav: true,

        responsive: {
            0: {
                items: 1
            },
            250: {
                items: 2
            }, 500: {
                items: 3
            }, 750: {
                items: 4
            }, 1000: {
                items: 5
            }
        }
    })


    $('#BESTBOOKS .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 20,
        nav: true,

        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })

    $('#TOPRATE .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 20,
        nav: true,

        responsive: {

            0: {
                items: 1
            }
        }
    })
    $(".owl-prev").empty();
    $(".owl-prev").append("<i class='fas fa-arrow-right '></i>")
    $(".owl-next").empty();
    $(".owl-next").append("<i class='fas fa-arrow-left '></i>")




})
