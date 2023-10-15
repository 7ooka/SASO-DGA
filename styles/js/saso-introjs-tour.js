
$(document).ready(function () {


    // Instance the tour
    var intro = introJs(),
        steps = [

            {
                element: '.icon-mobile',
                intro: "<h5>تطبيق تأكد</h5><p>هذا الرابط يحتوي على صفحة تعريفية عن تطبيق تأكد</p>",
                highlightClass: "darkhighlight",
            },
            {
                element: '.faq',
                intro: "<h5>الأسئلة الشائعة</h5><p>يمكنك تصفح والإطلاع على الأسئلة السائعة عن طريق هذا الرابط</p>",
                highlightClass: "darkhighlight",
            },
            {
                element: '.icon-phone-1',
                intro: "<h5>اتصل بنا</h5><p>يمكنك التواصل مع الهيئة عن طريق الضغط على هذا الرابط</p>",
                highlightClass: "darkhighlight",
            },
            {
                element: '.lang',
                intro: "<h5>تغيير اللغة</h5><p>يمكنك تغيير لغة الموقع بالضغط على هذا الزر</p>",
                highlightClass: "darkhighlight",
            },
            {
                element: '#settingsMenuLink',
                intro: "<h5>أيقونة الإعدادات</h5><p>تمكنك من تغيير اعدادات الموقع مثل تغيير ألوان الموقع واستخدام خاصية التحدث عن طريق هذة الأيقونة  كما بالشكل التالي </p><div class='text-center'><img src='./styles/images/settings-menu.png'/></div>",
                highlightClass: "darkhighlight",
            },
            {
                element: '.search2',
                intro: "<h5>البحث</h5><p>يمكنك البحث في الموقع عن طريق الضغط هنا</p>",
                highlightClass: "darkhighlight",
            },
            {
                element: '.navbar',
                intro: "<h5>قائمة التنقل</h5><p>يمكنك التنقل داخل أجزاء الموقع المختلفة بإستخدام هذة القائمة<p/>",
                highlightClass: "darkhighlight",
            },
            {
                element: '.SASO-News',
                intro: "<h5>جديد الهئية</h5><p>يمكنك التنقل داخل أجزاء الموقع المختلفة بإستخدام هذة القائمة<p/>",
                position: 'right',

            },
            {
                element: '.serviceswrapper .container',
                intro: "<h5>الخدمات الإلكترونية</h5><p>الخدمات الإلكترونية الأكثر إستخداماً مقسمة إلى خدمات التاجر و خدمات المستهلك</p>",
            },
            {
                element: '.serviceswrapper .container .more',
                intro: "<p>كما يمكنك إستعراض جميع الخدمات من هنا</p>",
            },
            {
                element: '.newswrapper',
                intro: "<h5>أخبار الهيئة</h5><p>يمكنك الإطلاع على أخبار الهيئة من هنا</p>",
            },
            {
                element: '.newswrapper .more',
                intro: "<p>كما يمكنك إستعراض جميع الأخبار من هنا</p>",
            },

        ];

    intro.setOptions({
        backdrop: false,
        nextLabel: "التالي <i class='icon-angle-left' /> ",
        prevLabel: "<i class='icon-angle-right' /> السابق",
        skipLabel: "إنهاء الجولة",
        doneLabel: "إغلاق",
        showStepNumbers: false,
        showBullets: false,
        showProgress: true,
        disableInteraction: true,
        tooltipPosition: 'bottom',

        steps: steps

    });



    $('#Tour_start').click(function () {

        intro.start();


        //alert();
    });

});