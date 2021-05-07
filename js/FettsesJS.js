
//滚动条
var $scroll =$('#scroll_bar .scroll');
var $bar =$('#scroll_bar .bar');
var $icons =$('#scroll_bar .icons');
var $icon =$('#scroll_bar .icon');
var y=0;
var rect1= $scroll.outerHeight()/$icons.outerHeight();
$bar.css('height',$scroll.outerHeight()*rect1 );
var $barmax =$scroll.outerHeight()-$bar.outerHeight();

$bar.draggable({
    'axis':'y',
    containment: "parent",
    drag: function( event, ui ) {
        y=ui.position.top;
        $icons.css('top',-y/rect1);
    }
});
// $icon.mousewheel(function (event) {
//
//     if (event.preventDefault) { // 禁止默认事件 禁止精度条滚动
//         event.preventDefault();
//     } else {
//         event.returnValue = false;
//     }
//     y -= event.deltaY * 15; //型号量等于滚轮滚动的值
//
//     if (y < 0) y = 0;  //设置界限
//     if (y > $barmax) y = $barmax;
//     $bar.css('top', y); //移动
//     $icons.css('top', -y / rect);
// });





var $icons=$('#icons ul li');
var Fettses_array;
$icons.click(function () {
    let text= $(this).find('span').text();
    let HeroNmae;
    let HeroNmae_array=[];
    let Hero_array=[];
    
    
    
    //得到选中元素
    for (let i=0; i<Fetters.length;i++){
        if (Fetters[i].FeName==text){
            Fettses_array=Fetters[i];
        }
    }
    
    
    
    //转换替换、
    HeroNmae=Fettses_array.FeHero;
    HeroNmae_array=HeroNmae.split('、');
    HeroNmae=HeroNmae_array.join('');
    
    
    for (let i=0; i<Hero.length;i++){
        if (HeroNmae.indexOf(Hero[i].HeroName)!=-1){
            Hero_array.push(Hero[i]);
        }
    }
    
    
    $('#title').html(function () {
        var array=[
            '<div class="quan">',
            '<img src='+Fettses_array.img +' alt="">',
            '</div>',
            '<span>'+Fettses_array.FeName +'</span>'
        ].join('');
        return array;
    });
    a();
    $('#Fetters-font').html(function () {
        var array=[
            '<div class="font-text">',
            '<span class="text">羁绊:</span>',
            '<span class="center2">'+Fettses_array.Fetters+'</span>',
            '</div>',
            '<div class="font-text">',
            '<span class="text">效果:</span>',
            '<span class="center2">'+ Fettses_array.FeEffect+'</span>',
            '</div>',
            '<div class="font-array"  id="Fetters-array">',
            '<ul>',
            a(),
            ,'</ul>',
            '</div>'
        ].join('');
        return array
    });
    
    function a() {
        var str;
        var array=[];
        for (var i=0 ;i<Hero_array.length;i++){
            array[i]=[
                '<li>',
                '<img src='+ Hero_array[i].HIA+' alt="">',
                '<i></i>',
                '<span>'+Hero_array[i].HeroName+'</span>',
                '</li>'
            ]
        }
        str=array.join('');
        for (var i=0;i<str.length;i++){
            str=str.replace(',',' ');
        }
        return str
    }
});