function DOMpushu(index, idx) {
    var array = [
        '<img alt="" class="images" src="' + HeroNmae[index].HeroImg + '">',
        '<div class="Hero-attribute-center-abs" >',
        '<h2>' + HeroNmae[index].HeroName + '</h2>',
        '<span class="title">' + HeroNmae[index].Heroicpainting + '</span>',
        '<div class="xian"></div>',
        '<div class="jin">',
        '<span class="jin-name">' + HeroNmae[index].SkillName + '</span>',
        '<span class="jin-shouming">' + HeroNmae[index].SkillState + '</span>',
        '<span class="jin-sh">' + HeroNmae[index].Injury + '</span>',
        '</div>',
        '<div class="table">',
        '<ul class="yi">',
        '<li>生命值:' + Heroshux[idx].OS.LifeValue + '</li>',
        '<li>魔抗:' + Heroshux[idx].OS.Magic + '</li>',
        '<li>攻击速度:' + Heroshux[idx].OS.AttackSpeed + '</li>',
        '<li>护甲:' + Heroshux[idx].OS.Armor + '</li>',
        '<li>攻击力:' + Heroshux[idx].OS.Aggressivity + '</li>',
        '<li>攻击距离:' + Heroshux[idx].OS.AttackDistance + '</li>',
        '</ul>',
        '<ul class="er">',
        '<li>生命值:' + Heroshux[idx].TwS.LifeValue + '</li>',
        '<li>魔抗:' + Heroshux[idx].TwS.Magic + '</li>',
        '<li>攻击速度:' + Heroshux[idx].TwS.AttackSpeed + '</li>',
        '<li>护甲:' + Heroshux[idx].TwS.Armor + '</li>',
        '<li>攻击力:' + Heroshux[idx].TwS.Aggressivity + '</li>',
        '<li>攻击距离:' + Heroshux[idx].TwS.AttackDistance + '</li>',
        '</ul>',
        '<ul class="san">',
        '<li>生命值:' + Heroshux[idx].ThS.LifeValue + '</li>',
        '<li>魔抗:' + Heroshux[idx].ThS.Magic + '</li>',
        '<li>攻击速度:' + Heroshux[idx].ThS.AttackSpeed + '</li>',
        '<li>护甲:' + Heroshux[idx].ThS.Armor + '</li>',
        '<li>攻击力:' + Heroshux[idx].ThS.Aggressivity + '</li>',
        '<li>攻击距离:' + Heroshux[idx].ThS.AttackDistance + '</li>',
        '</ul>',
        '</div>',
    ].join('');
    return array;
}  //DOM 改变Hero里的内容
function DOMtoux() {
    for (var i = 0; i < HeroNmae.length; i++) {
        $('#HeroTop ul li ').eq(i).html('<img src="' + HeroNmae[i].HIA + '" >' + '<span>' + HeroNmae[i].Heroicpainting
            + '</span>');
    }
}//得到英雄头像



var $Hero_nav = $('#Hero .Hero-Introduction-nav li');    //种族切换事件

$Hero = $('#Hero .Hero-Introduction-icon ul');
$Hero_li = $('#Hero .Hero-Introduction-icon ul li');
var $images = 'jiban'; //默认为羁绊图标


var HeroNmae = []; //英雄名称

for (var i = 0; i < Hero.length; i++) { //默认为恶魔
    if (Hero[i].Race.indexOf('恶魔') != -1) {
        HeroNmae.push(Hero[i]);
    }
}


$Hero_nav.click(function () { //切换 窗口
    let idx;  // 英雄属性型号量
    $Hero = ''; // 重置 ul 元素
    $Hero_li = '';  // 重置 li 元素
    $images = ''; // 重置 图片
    HeroNmae = [];  //重置数组
    $Hero_nav.each(function (i) { //切换 图片
        $(this).html("<img src='images/icon/黄" + (i + 1) + ".png' alt='' width='200'>")
    });
    let index3 = $(this).index(); //得到点击元素的位置
    
    if (index3 == 0) {
        $('#Hero .Hero-Introduction-icon ul').html(function () { //改变导航栏元素
            var array = [
                '<li><img alt="" src="images/jiban/c1.png"></li>',
                '<li><img alt="" src="images/jiban/2.png"></li>',
                '<li><img alt="" src="images/jiban/3.png"></li>',
                '<li><img alt="" src="images/jiban/4.png"></li>',
                '<li><img alt="" src="images/jiban/5.png"></li>',
                '<li><img alt="" src="images/jiban/6.png"></li>',
                '<li><img alt="" src="images/jiban/7.png"></li>',
                '<li><img alt="" src="images/jiban/8.png"></li>',
                '<li><img alt="" src="images/jiban/9.png"></li>',
                '<li><img alt="" src="images/jiban/10.png"></li>',
                '<li><img alt="" src="images/jiban/11.png"></li>',
                '<li><img alt="" src="images/jiban/12.png"></li>',
                '<li><img alt="" src="images/jiban/13.png"></li>',
                '<li><img alt="" src="images/jiban/14.png"></li>',
            ].join(" ");
            $images = 'jiban'; //得到文本
            
            for (var i = 0; i < Hero.length; i++) {   //默认为恶魔
                if (Hero[i].Race.indexOf('恶魔') != -1) {
                    HeroNmae.push(Hero[i]);
                }
            }
            
            $('#HeroTop ul li').html('');  //清空
            
            
            DOMtoux();
            
            for (var i = 0; i < Heroshux.length; i++) {
                if (Heroshux[i].HeroName == HeroNmae[0].HeroName) {
                    idx = i;
                }
            }
            $('#Herocenter').html(DOMpushu(0, idx));
            
            
            return array;
        })
    }  //判断
    
    if (index3 == 1) {
        $('#Hero .Hero-Introduction-icon ul').html(function () {
            var array2 = [
                '<li><img alt="" src="images/zy/c1.png"></li>',
                '<li><img alt="" src="images/zy/2.png"></li>',
                '<li><img alt="" src="images/zy/3.png"></li>',
                '<li><img alt="" src="images/zy/4.png"></li>',
                '<li><img alt="" src="images/zy/5.png"></li>',
                '<li><img alt="" src="images/zy/6.png"></li>',
                '<li><img alt="" src="images/zy/7.png"></li>',
                '<li><img alt="" src="images/zy/8.png"></li>',
                '<li><img alt="" src="images/zy/9.png"></li>',
                '<li><img alt="" src="images/zy/10.png"></li>',
            ].join(" ");
            $images = 'zy';
            
            
            for (var i = 0; i < Hero.length; i++) {
                if (Hero[i].Relation.indexOf('刺客') != -1) {
                    HeroNmae.push(Hero[i]);
                }1
            }
            
            $('#HeroTop ul li').html('');
            
            
            DOMtoux();
            
            for (var i = 0; i < Heroshux.length; i++) {
                if (Heroshux[i].HeroName == HeroNmae[0].HeroName) {
                    idx = i;
                }
            }
            $('#Herocenter').html(DOMpushu(0, idx));
            return array2;
        })
    }
    
    if (index3 == 2) {
        $('#Hero .Hero-Introduction-icon ul').html(function () {
            var array2 = [
                '<li><img alt="" src="images/xixi/1.png"></li>',
                '<li><img alt="" src="images/xixi/2.png"></li>',
                '<li><img alt="" src="images/xixi/3.png"></li>',
                '<li><img alt="" src="images/xixi/4.png"></li>',
                '<li><img alt="" src="images/xixi/5.png"></li>',
            ].join(" ");
            $images = 'xixi';
            
            
            for (var i = 0; i < Hero.length; i++) {
                if (Hero[i].Money == '1') {
                    HeroNmae.push(Hero[i]);
                }
            }
            
            $('#HeroTop ul li').html('');
            
            
            DOMtoux();
            
            for (var i = 0; i < Heroshux.length; i++) {
                if (Heroshux[i].HeroName == HeroNmae[0].HeroName) {
                    idx = i;
                }
            }
            $('#Herocenter').html(DOMpushu(0, idx));
            
            
            return array2;
        })
    }
    
    $(this).html("<img src='images/icon/白" + (index3 + 1) + ".png' alt='' width='200'>");
    
    $Hero = $('#Hero .Hero-Introduction-icon ul');
    $Hero_li = $('#Hero .Hero-Introduction-icon ul li');
    
});

//var $Hero = $('#Hero .Hero-Introduction-icon ul li');//英雄nav切换事件


$Hero.on('click', 'li', function () {
    HeroNmae = [];
    let text;
    let idx = 0;
    
    var index = $(this).index() + 1;
    if ($images != 'xixi') {
        $Hero_li.each(function (i) {
            $(this).html("<img src='images/" + $images + "/"  +(i + 1) + ".png' alt=''>");
        });
        $(this).html("<img src='images/" + $images + "/"  +'c'+ index + ".png' alt=''>");
    }
    
    
    if ($images == "jiban") {
        switch (index) {
            case 1:
                text = '恶魔';
                break;
            case 2:
                text = '龙族';
                break;
            case 3:
                text = '浪人';
                break;
            case 4:
                text = '极地';
                break;
            case 5:
                text = '帝国';
                break;
            case 6:
                text = '忍者';
                break;
            case 7:
                text = '贵族';
                break;
            case 8:
                text = '暗影';
                break;
            case 9:
                text = '海盗';
                break;
            case 10:
                text = '机器人';
                break;
            case 11:
                text = '虚空';
                break;
            case 12:
                text = '狂野';
                break;
            case 13:
                text = '约德尔';
                break;
            case 14:
                text = '海克斯';
                break;
        }
        for (var i = 0; i < Hero.length; i++) {
            if (Hero[i].Race.indexOf(text) != -1) {
                HeroNmae.push(Hero[i]);
            }
        }
        
    }
    if ($images == "zy") {
        switch (index) {
            case 1:
                text = '刺客';
                break;
            case 2:
                text = '剑士';
                break;
            case 3:
                text = '斗士';
                break;
            case 4:
                text = '元素使';
                break;
            case 5:
                text = '护卫';
                break;
            case 6:
                text = '枪手';
                break;
            case 7:
                text = '骑士';
                break;
            case 8:
                text = '游侠';
                break;
            case 9:
                text = '换形师';
                break;
            case 10:
                text = '法师';
                break;
        }
        for (var i = 0; i < Hero.length; i++) {
            if (Hero[i].Relation.indexOf(text) != -1) {
                HeroNmae.push(Hero[i]);
            }
        }
        
    }
    if ($images == "xixi") {
        switch (index) {
            case 1:
                text = '1';
                break;
            case 2:
                text = '2';
                break;
            case 3:
                text = '3';
                break;
            case 4:
                text = '4';
                break;
            case 5:
                text = '5';
                break;
            
        }
        for (var i = 0; i < Hero.length; i++) {
            if (Hero[i].Money == text) {
                HeroNmae.push(Hero[i]);
            }
        }
        
    }
    
    
    $('#HeroTop ul li').html('');
    
    DOMtoux();
    for (var i = 0; i < Heroshux.length; i++) {
        if (Heroshux[i].HeroName == HeroNmae[0].HeroName) {
            idx = i;
        }
    }
    
    $('#Herocenter').html(DOMpushu(0, idx));
});


$('#HeroTop ul li').click(function () {
    let index = $(this).index();
    let idx = 0;
    for (var i = 0; i < Heroshux.length; i++) {
        if (Heroshux[i].HeroName == HeroNmae[index].HeroName) {
            idx = i;
        }
    }
    
    $('#Herocenter').html(DOMpushu(index, idx));
});
