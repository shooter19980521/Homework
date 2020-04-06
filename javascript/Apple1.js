var body=document.getElementsByTagName('body')[0];
var products={
    iphone:{
        p01:{id:'p01',color:'紅',price:'25000',RAM:'64G',network:'WiFi',pic:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-xr-red-select-201809?wid=470&hei=556&fmt=png-alpha&.v=1551226038669',url:'<a href="https://www.apple.com/tw/shop/buy-iphone/iphone-8/4.7-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-64gb-%E9%87%91%E8%89%B2?afid=p238|sCkJeFGSu-dc_mtid_18707vxu38484_pcrid_227645655081_pgrid_50401666969_&cid=aos-tw-kwgo-pla-iphone--slid---product-MQ6J2TA/A-">連結</a>'},
        p02:{id:'p02',color:'藍',price:'26000',RAM:'128G',network:'WiFi',pic:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-xr-blue-select-201809?wid=470&hei=556&fmt=png-alpha&.v=1565209264208',url:'<a href="https://www.apple.com/tw/shop/buy-iphone/iphone-xr">連結</a>'},
        p03:{id:'p03',color:'黃',price:'27000',RAM:'256G',network:'WiFi',pic:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-xr-yellow-select-201809?wid=470&hei=556&fmt=png-alpha&.v=1551226036826',url:'<a href="https://www.apple.com/tw/shop/buy-iphone/iphone-xr">連結</a>'}
    },
    ipad:{
        p01:{id:'p01',color:'太空灰',price:'10900',RAM:'32G',network:'WiFi',pic:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-wifi-select-space-201909_GEO_TW?wid=470&hei=556&fmt=png-alpha&.v=1567443080749',url:'<a href="https://www.apple.com/tw/shop/buy-iphone/iphone-8/4.7-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-64gb-%E9%87%91%E8%89%B2?afid=p238|sCkJeFGSu-dc_mtid_18707vxu38484_pcrid_227645655081_pgrid_50401666969_&cid=aos-tw-kwgo-pla-iphone--slid---product-MQ6J2TA/A-">連結</a>'},
        p02:{id:'p02',color:'銀',price:'13900',RAM:'128G',network:'WiFi',pic:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-wifi-select-silver-201909_GEO_TW?wid=470&hei=556&fmt=png-alpha&.v=1567299773948',url:'<a href="https://www.apple.com/tw/shop/buy-iphone/iphone-xr">連結</a>'},
        p03:{id:'p03',color:'金',network:'WiFi',pic:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-wifi-select-gold-201909_GEO_TW?wid=470&hei=556&fmt=png-alpha&.v=1567302181892',url:'<a href="https://www.apple.com/tw/shop/buy-iphone/iphone-xr">連結</a>'}
    },
    mac:{
        p01:{id:'p01',color:'太空灰',price:'51300',RAM:'256G',network:'WiFi',pic:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1541713862468',url:'<a href="https://www.apple.com/tw/shop/buy-iphone/iphone-8/4.7-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-64gb-%E9%87%91%E8%89%B2?afid=p238|sCkJeFGSu-dc_mtid_18707vxu38484_pcrid_227645655081_pgrid_50401666969_&cid=aos-tw-kwgo-pla-iphone--slid---product-MQ6J2TA/A-">連結</a>'},
        p02:{id:'p02',color:'銀',price:'57300',RAM:'512G',network:'WiFi',pic:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-silver-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1541713861325',url:'<a href="https://www.apple.com/tw/shop/buy-iphone/iphone-xr">連結</a>'},
        p03:{id:'p03',price:'63300',RAM:'1T',network:'WiFi',url:'<a href="https://www.apple.com/tw/shop/buy-iphone/iphone-xr">連結</a>'},
        p04:{id:'p04',price:'75300',RAM:'2T',network:'WiFi',url:'<a href="https://www.apple.com/tw/shop/buy-iphone/iphone-xr">連結</a>'}
    },
    watch:{}
};
function iphone(){
    document.getElementById("color").innerHTML="";
    document.getElementById("spec").innerHTML="";
    document.getElementById("price").innerHTML="";

    document.getElementById("pic").innerHTML='<img id="product-img" src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-xs-colors.jpg" class="d-block w-100" alt="">';
    for(var i in products.iphone){
        if(i=="p01"){
            document.getElementById("color").innerHTML+=
            `<button onclick="pic_change('${products.iphone[i].pic}')"><div class="radio_color" style="background-color: red;"></div><h3>${products.iphone[i].color}</h3></button>`
            document.getElementById("spec").innerHTML+=
            `<button onclick="price('${products.iphone[i].price}')" id="spec"><h3>${products.iphone[i].RAM}</h3><h3>${products.iphone[i].price}</h3></button>`
        }
        else if(i=="p02"){
            document.getElementById("color").innerHTML+=
            `<button onclick="pic_change('${products.iphone[i].pic}')"><div class="radio_color" style="background-color: blue;"></div><h3>${products.iphone[i].color}</h3></button>`
            document.getElementById("spec").innerHTML+=
            `<button onclick="price('${products.iphone[i].price}')" id="spec"><h3>${products.iphone[i].RAM}</h3><h3>${products.iphone[i].price}</h3></button>`

        }
        else if(i=="p03"){
            document.getElementById("color").innerHTML+=
            `<button onclick="pic_change('${products.iphone[i].pic}')"><div class="radio_color" style="background-color: yellow;"></div><h3>${products.iphone[i].color}</h3></button>`
            document.getElementById("spec").innerHTML+=
            `<button onclick="price('${products.iphone[i].price}')" id="spec"><h3>${products.iphone[i].RAM}</h3><h3>${products.iphone[i].price}</h3></button>`
        }

    }
}
function price(btn){
    document.getElementById("price").innerHTML=btn;
}

function pic_change(pic){
    // if(pic=="red"){
        document.getElementById("pic").innerHTML=`<img src=${pic} class="d-block w-100">`;
    // }
    // else if(pic=="blue"){
    //     document.getElementById("pic").innerHTML='<img src="" class="d-block w-100">';
    // }
    // else{
    // document.getElementById("pic").innerHTML='<img src="" class="d-block w-100">';
    // }
}

function ipad(){
    document.getElementById("color").innerHTML="";
    document.getElementById("spec").innerHTML="";
    document.getElementById("price").innerHTML="";

    document.getElementById("pic").innerHTML='<img id="product-img" src="https://bs2020-01.azurewebsites.net/Fake-Apple/img/ipad-hero-unselected-201909_GEO_TW.png" class="d-block w-100" alt="">';
    for(var i in products.ipad){
        if(i=="p01"){
            document.getElementById("color").innerHTML+=
            `<button onclick="pic_change('${products.ipad[i].pic}')"><div class="radio_color" style="background-color: rgb(110, 105, 105);"></div><h3>${products.ipad[i].color}</h3></button>`
            document.getElementById("spec").innerHTML+=
            `<button onclick="price('${products.ipad[i].price}')" id="spec"><h3>${products.ipad[i].RAM}</h3><h3>${products.ipad[i].price}</h3></button>`
        }
        else if(i=="p02"){
            document.getElementById("color").innerHTML+=
            `<button onclick="pic_change('${products.ipad[i].pic}')"><div class="radio_color" style="background-color: silver;"></div><h3>${products.ipad[i].color}</h3></button>`
            document.getElementById("spec").innerHTML+=
            `<button onclick="price('${products.ipad[i].price}')" id="spec"><h3>${products.ipad[i].RAM}</h3><h3>${products.ipad[i].price}</h3></button>`

        }
        else if(i=="p03"){
            document.getElementById("color").innerHTML+=
            `<button onclick="pic_change('${products.ipad[i].pic}')"><div class="radio_color" style="background-color: pink;"></div><h3>${products.ipad[i].color}</h3></button>`
        }

    }
}

function mac(){
    document.getElementById("color").innerHTML="";
    document.getElementById("spec").innerHTML="";
    document.getElementById("price").innerHTML="";

    document.getElementById("pic").innerHTML='<img id="product-img" src="https://bs2020-01.azurewebsites.net/Fake-Apple/img/mbp13touch-space-gallery1-201907.png" class="d-block w-100" alt="">';
    for(var i in products.mac){
        if(i=="p01"){
            document.getElementById("color").innerHTML+=
            `<button onclick="pic_change('${products.mac[i].pic}')"><div class="radio_color" style="background-color: rgb(110, 105, 105);"></div><h3>${products.ipad[i].color}</h3></button>`
            document.getElementById("spec").innerHTML+=
            `<button onclick="price('${products.mac[i].price}')" id="spec"><h3>${products.mac[i].RAM}</h3><h3>${products.mac[i].price}</h3></button>`
        }
        else if(i=="p02"){
            document.getElementById("color").innerHTML+=
            `<button onclick="pic_change('${products.mac[i].pic}')"><div class="radio_color" style="background-color: silver;"></div><h3>${products.ipad[i].color}</h3></button>`
            document.getElementById("spec").innerHTML+=
            `<button onclick="price('${products.mac[i].price}')" id="spec"><h3>${products.mac[i].RAM}</h3><h3>${products.mac[i].price}</h3></button>`

        }
        else if(i=="p03"){
            document.getElementById("spec").innerHTML+=
            `<button onclick="price('${products.mac[i].price}')" id="spec"><h3>${products.mac[i].RAM}</h3><h3>${products.mac[i].price}</h3></button>`
        }
        else if(i=="p04"){
            document.getElementById("spec").innerHTML+=
            `<button onclick="price('${products.mac[i].price}')" id="spec"><h3>${products.mac[i].RAM}</h3><h3>${products.mac[i].price}</h3></button>`
        }

    }
}



