// 装备事件
function DOMzb(index2) {
    var array = [
        '<div class="right">',
        '<span class="hecheng">合成路径:</span>',
        '<img src=' + jiczhuangbei[0].BIA + ' alt="">',
        '<span class="jia">+</span>',
        '<img src=' + jiczhuangbei[1].BIA + ' alt="">',
        '</div>',
        '<div class="left">',
        '<img src=' + zuangbei[index2].HcIA + ' alt="">',
        '<div class="text">',
        '<h1>' + zuangbei[index2].HcEqName + '</h1>',
        '<span>' + zuangbei[index2].HcEqE + '</span>',
        '<h3>' + zuangbei[index2].HcEAttrivute + '</h3>',
        '</div>',
        '</div>'
    ].join(' ');
    return array;
} //装备切换
var zuangbei = [];

for (var i = 0; i < zuangb_array.length; i++) {
    if (zuangb_array[i].BEqbF == '暴风大剑' || zuangb_array[i].BEqbS == '暴风大剑') {
        zuangbei.push(zuangb_array[i]);
    }
}
//装备第一个小三角
var $zb_li1 = $('#equipment .zhuangb .jicu ul li');
var $zb_li2 = $('#zhuangbei .hec ul li ');
$zb_li1.click(function () {
    
    zuangbei = [];
    let index2 = $(this).index();
    let text;
    let jiczhuangbei = [];
    let index = $(this).index() * 133.5;
    $('#zhuangbei .sanjiao').stop(true).animate({'left': index + 50}, 200);
    $('#zhuangbei .xian .xiaosx2').animate({'left': 250}, 200);
    switch (index2) {
        case 0:
            text = '暴风大剑';
            break;
        case 1:
            text = '反曲之弓';
            break;
        case 2:
            text = '无用大棒';
            break;
        case 3:
            text = '女神之泪';
            break;
        case 4:
            text = '巨人腰带';
            break;
        case 5:
            text = '锁子甲';
            break;
        case 6:
            text = '负极斗篷';
            break;
        case 7:
            text = '金铲铲';
            break;
        case 8:
            text = '暴击拳套';
            break;
        
        
    }
    
    for (var i = 0; i < zuangb_array.length; i++) {
        if (zuangb_array[i].BEqbF == text || zuangb_array[i].BEqbS == text) {
            zuangbei.push(zuangb_array[i]);
        }
    }
    
    for (var i = 0; i < jiczb_array.length; i++) {
        if (jiczb_array[i].BEqName == zuangbei[0].BEqbF) {
            jiczhuangbei.push(jiczb_array[i]);
        }
        if (jiczb_array[i].BEqName == zuangbei[0].BEqbS) {
            jiczhuangbei.push(jiczb_array[i]);
        }
    }
    
    
    for (var i = 0; i < $zb_li2.length; i++) {
        $zb_li2.eq(i).html('<img alt="" src=' + zuangbei[i].HcIA + '>');
    }
    
    $('#xians').html(function () {
        var array = [
            '<div class="right">',
            '<span class="hecheng">合成路径:</span>',
            '<img src=' + jiczhuangbei[0].BIA + ' alt="">',
            '<span class="jia">+</span>',
            '<img src=' + jiczhuangbei[1].BIA + ' alt="">',
            '</div>',
            '<div class="left">',
            '<img src=' + zuangbei[0].HcIA + ' alt="">',
            '<div class="text">',
            '<h1>' + zuangbei[0].HcEqName + '</h1>',
            '<span>' + zuangbei[0].HcEqE + '</span>',
            '<h3>' + zuangbei[0].HcEAttrivute + '</h3>',
            '</div>',
            '</div>'
        ].join(' ');
        return array;
    });
});


//装备第二个小三角
$zb_li2.click(function () {
    
    let index2 = $(this).index();
    let index = $(this).index() * 78;
    if (index >= 5) {
        index = $(this).index() * 79;
    }
    $('#zhuangbei .xian .xiaosx2').animate({'left': index + 250}, 200);
    
    var jiczhuangbei = [];
    for (var i = 0; i < jiczb_array.length; i++) {
        if (jiczb_array[i].BEqName == zuangbei[index2].BEqbF) {
            jiczhuangbei.push(jiczb_array[i]);
        }
        if (jiczb_array[i].BEqName == zuangbei[index2].BEqbS) {
            jiczhuangbei.push(jiczb_array[i]);
        }
    }
    
    $('#xians').html(function () {
        var array = [
            '<div class="right">',
            '<span class="hecheng">合成路径:</span>',
            '<img src=' + jiczhuangbei[0].BIA + ' alt="">',
            '<span class="jia">+</span>',
            '<img src=' + jiczhuangbei[1].BIA + ' alt="">',
            '</div>',
            '<div class="left">',
            '<img src=' + zuangbei[index2].HcIA + ' alt="">',
            '<div class="text">',
            '<h1>' + zuangbei[index2].HcEqName + '</h1>',
            '<span>' + zuangbei[index2].HcEqE + '</span>',
            '<h3>' + zuangbei[index2].HcEAttrivute + '</h3>',
            '</div>',
            '</div>'
        ].join(' ');
        return array;
    });
});