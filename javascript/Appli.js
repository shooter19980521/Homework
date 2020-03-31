
var body=document.getElementsByTagName('body')[0];

var products={
    iphone:{
        p01:{id:'p01',color:'紅',price:'25000',RAM:'64G',network:'WiFi',pic:'<img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone8-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795416637" style="width: 100px;height: 100px;">',url:'<a href="https://www.apple.com/tw/shop/buy-iphone/iphone-8/4.7-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-64gb-%E9%87%91%E8%89%B2?afid=p238|sCkJeFGSu-dc_mtid_18707vxu38484_pcrid_227645655081_pgrid_50401666969_&cid=aos-tw-kwgo-pla-iphone--slid---product-MQ6J2TA/A-">連結</a>'},
        p02:{id:'p02',color:'藍',price:'26000',RAM:'128G',network:'WiFi',pic:'<img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-xr-blue-select-201809?wid=470&hei=556&fmt=png-alpha&.v=1565209264208" style="width: 100px;height: 100px;">',url:'<a href="https://www.apple.com/tw/shop/buy-iphone/iphone-xr">連結</a>'},
        p03:{id:'p03',color:'黃',price:'27000',RAM:'256G',network:'WiFi',pic:'<img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-xr-yellow-select-201809?wid=470&hei=556&fmt=png-alpha&.v=1551226036826" style="width: 100px;height: 100px;">',url:'<a href="https://www.apple.com/tw/shop/buy-iphone/iphone-xr">連結</a>'}
    },
    ipad:{},
    mac:{},
    watch:{}
};
var first = document.createElement('first');
var div = document.createElement('div');
for(var i in products.iphone.p01){
    div.appendChild(first);
    first.innerHTML+=`${products.iphone.p01[i]}<br>`;
}
body.appendChild(div);


var second = document.createElement('second');
for(var i in products.iphone.p02){
    div.appendChild(second);
    second.innerHTML+=`${products.iphone.p02[i]}<br>`;
}
body.appendChild(div);

var third = document.createElement('third');
for(var i in products.iphone.p03){
    div.appendChild(third);
    third.innerHTML+=`${products.iphone.p03[i]}<br>`;
}
body.appendChild(div);
