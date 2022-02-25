var imgLogo = [
    {
     image: "https://img.gkbcdn.com/s3/b/Logo/roborock.jpg",
    },
    {
     image: "https://img.gkbcdn.com/s3/b/Logo/Viomi.jpg",
    },
    {
     image: "https://img.gkbcdn.com/s3/b/eleglide.jpg",
    },
    {
     image: "https://img.gkbcdn.com/s3/b/2006/fiido.jpg?v=-674318602",
    },
    {
     image: "https://img.gkbcdn.com/s3/b/Logo/tronsmart.jpg?v=788944783",
    },
    {
     image: "https://img.gkbcdn.com/s3/b/Logo/one-netbook.jpg",
    },
    {
     image: "https://img.gkbcdn.com/s3/b/ado.jpg",
    },
    {
     image: "https://img.gkbcdn.com/s3/b/Logo/himo.jpg?v=1500289693",
      },
    {
     image: "https://img.gkbcdn.com/s3/b/Logo/jimmy.jpg?v=-219567574",
       },
    {
     image: "https://img.gkbcdn.com/s3/b/artillery.jpg",
    },
    {
     image: "https://img.gkbcdn.com/s3/b/proscenic-6HykTHuh.jpg",
    },
    {
     image: "https://img.gkbcdn.com/s3/b/bezior.jpg",
    },
    {
     image: "https://img.gkbcdn.com/s3/b/engwe.jpg",
    },
    {
     image: "https://img.gkbcdn.com/s3/b/kugookirin.jpg",
    }
   ];
  
   imgLogo.map(function (elem, index, array) {
      var div = document.createElement("div");
      var avatar = document.createElement("img");
      div.setAttribute("id","divAvatar")
      avatar.setAttribute("src", elem.image);
      avatar.setAttribute("id", "avatar");
  
      div.append(avatar);
      document.querySelector(".brand_pick").append(div);
    });
  
    var FeaturedBrands = [
    {
     image: "https://img.gkbcdn.com/s3/bb/roborock-20211111211035580.jpg",
     logo: "https://img.gkbcdn.com/s3/b/Logo/roborock.jpg"
    },
    {
     image: "https://img.gkbcdn.com/s3/bb/eleglide-20211111210459926.jpg",
     logo: "https://img.gkbcdn.com/s3/b/eleglide.jpg"
    },
    {
     image: "https://img.gkbcdn.com/s3/bb/tronsmart-20210123120544453.jpg",
     logo: "https://img.gkbcdn.com/s3/b/Logo/tronsmart.jpg?v=788944783"
    },
    {
     image: "https://img.gkbcdn.com/s3/bb/ado-20211111211123105.jpg",
     logo: "https://img.gkbcdn.com/s3/b/ado.jpg"
    },
    {
     image: "https://img.gkbcdn.com/s3/bb/jimmy-20200910094916929.jpg",
     logo: "https://img.gkbcdn.com/s3/b/Logo/jimmy.jpg?v=-219567574"
    },
    {
     image: "https://img.gkbcdn.com/s3/bb/bezior-20211111210912370.jpg",
     logo: "https://img.gkbcdn.com/s3/b/bezior.jpg"
    }
   ]
  
   FeaturedBrands.map(function (elem, index, array) {
      var div1 = document.createElement("div");
      div1.setAttribute("id","div1Avatar")
  
      var avatar1 = document.createElement("img");
      avatar1.setAttribute("src", elem.image);
      avatar1.setAttribute("id", "avatar1");
  
      // var avatar2 = document.createElement("img");
      // avatar2.setAttribute("src", elem.logo);
      // avatar2.setAttribute("id", "avatar2");
      
      div1.append(avatar1);
      document.querySelector(".featuredImg").append(div1);
    });
  
    var sportsOutdoors = [
      {
      image:"https://img.gkbcdn.com/s3/b/xiaomi.jpg",
      url:"https://www.geekbuying.com/Brand/Xiaomi-1.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/oukitel.jpg",
      url:"https://www.geekbuying.com/Brand/Oukitel-19.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/orico.jpg",
      url:"https://www.geekbuying.com/Brand/ORICO-44.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/kugookirin.jpg",
      url:"https://www.geekbuying.com/Brand/KugooKirin-78.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/2003/mijia.jpg?v=501322930",
      url:"https://www.geekbuying.com/Brand/Mijia-447.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/yunmai.jpg",
      url:"https://www.geekbuying.com/Brand/YUNMAI-584.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/fimi.jpg?v=594574638",
      url:"https://www.geekbuying.com/Brand/Fimi-835.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/2006/fiido.jpg?v=-674318602",
      url:"https://www.geekbuying.com/Brand/FIIDO-842.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/himo.jpg?v=1500289693",
      url:"https://www.geekbuying.com/Brand/HIMO-845.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/2003/rich-bit.jpg?v=1133067071",
      url:"https://www.geekbuying.com/Brand/RICH-BIT-852.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/2005/samebike.jpg?v=2005900933",
      url:"https://www.geekbuying.com/Brand/SAMEBIKE-854.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/2005/dyu.jpg?v=-1498692435",
      url:"https://www.geekbuying.com/Brand/DYU-855.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/2007/segway-ninebot.jpg?v=-1662088573",
      url:"https://www.geekbuying.com/Brand/Segway-Ninebot-859.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/2007/acton.jpg?v=-488455984",
      url:"https://www.geekbuying.com/Brand/ACTON-865.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/2007/smart4u.jpg?v=1627431344",
      url:"https://www.geekbuying.com/Brand/smart4u-868.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/90FUN.jpg",
      url:"https://www.geekbuying.com/Brand/90FUN-879.html"
      },
      // {
      // image:"https://img.gkbcdn.com/s3/b/happyrun.jpg",
      // url:"https://www.geekbuying.com/Brand/HAPPYRUN-914.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/Imortor.jpg",
      // url:"https://www.geekbuying.com/Brand/Imortor-941.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/SYL.jpg",
      // url:"https://www.geekbuying.com/Brand/SYL-993.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/Merax.jpg",
      // url:"https://www.geekbuying.com/Brand/Merax-995.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/youpin.jpg",
      // url:"https://www.geekbuying.com/Brand/youpin-1026.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/ONEBOT.jpg",
      // url:"https://www.geekbuying.com/Brand/ONEBOT-1098.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/TALU.jpg",
      // url:"https://www.geekbuying.com/Brand/TALU-1111.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/Lamtwheel.jpg",
      // url:"https://www.geekbuying.com/Brand/Lamtwheel-1117.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/CMACEWHEEL.jpg",
      // url:"https://www.geekbuying.com/Brand/CMACEWHEEL-1120.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/UREVO.jpg",
      // url:"https://www.geekbuying.com/Brand/UREVO-1127.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/Meilan.jpg",
      // url:"https://www.geekbuying.com/Brand/Meilan-1139.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/engwe.jpg",
      // url:"https://www.geekbuying.com/Brand/ENGWE-1170.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/2009/ecoflow.jpg",
      // url:"https://www.geekbuying.com/Brand/EcoFlow-1176.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/2009/nextool.jpg",
      // url:"https://www.geekbuying.com/Brand/nextool-1179.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/lensun.jpg",
      // url:"https://www.geekbuying.com/Brand/Lensun-1180.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/yadea.jpg",
      // url:"https://www.geekbuying.com/Brand/YADEA-1193.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/lankeleisi.jpg",
      // url:"https://www.geekbuying.com/Brand/LankeLeisi-1194.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/ado.jpg",
      // url:"https://www.geekbuying.com/Brand/ADO-1204.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/bezior.jpg",
      // url:"https://www.geekbuying.com/Brand/Bezior-1205.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/niubility.jpg",
      // url:"https://www.geekbuying.com/Brand/Niubility-1206.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/fafrees.jpg",
      // url:"https://www.geekbuying.com/Brand/FAFREES-1208.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/eleglide.jpg",
      // url:"https://www.geekbuying.com/Brand/Eleglide-1209.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/docrooup.jpg",
      // url:"https://www.geekbuying.com/Brand/DOCROOUP-1211.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/nakxus.jpg",
      // url:"https://www.geekbuying.com/Brand/NAKXUS-1213.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/haniwinner.jpg",
      // url:"https://www.geekbuying.com/Brand/HANIWINNER-1216.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/navee.jpg",
      // url:"https://www.geekbuying.com/Brand/NAVEE-1217.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/cycplus.jpg",
      // url:"https://www.geekbuying.com/Brand/CYCPLUS-1220.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/youpin-scooter.jpg",
      // url:"https://www.geekbuying.com/Brand/YOUPIN-Scooter-1241.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/bluetti.jpg",
      // url:"https://www.geekbuying.com/Brand/BLUETTI-1243.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/x-tron.jpg",
      // url:"https://www.geekbuying.com/Brand/X-Tron-1250.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/kingboss-67QshkqD.jpg",
      // url:"https://www.geekbuying.com/Brand/KingBoss-1265.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/flashfish-6DPuf6vS.jpg",
      // url:"https://www.geekbuying.com/Brand/Flashfish-1289.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/gofort-6DPuSaj7.jpg",
      // url:"https://www.geekbuying.com/Brand/Gofort-1290.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/oupes-6GkqJg7D.jpg",
      // url:"https://www.geekbuying.com/Brand/OUPES-1295.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/fifish-6ILkKPap.jpg",
      // url:"https://www.geekbuying.com/Brand/FIFISH-1309.html"
      // }
       ]
      
       sportsOutdoors.map(function (elem, index, array) {
      var div3 = document.createElement("div");
      var avatar3 = document.createElement("img");
      div3.setAttribute("id","div3Avatar")
      avatar3.setAttribute("src", elem.image);
      avatar3.setAttribute("id", "avatar3");
  
      div3.append(avatar3);
      document.querySelector("#brand_Img1").append(div3);
    });
    
    var smartHomeGarden = [
      {
      image:"https://img.gkbcdn.com/s3/b/xiaomi.jpg",
      url:"https://www.geekbuying.com/Brand/Xiaomi-1.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/acgam.jpg",
      url:"https://www.geekbuying.com/Brand/ACGAM-43.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/sonoff.jpg",
      url:"https://www.geekbuying.com/Brand/Sonoff-92.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/360.jpg",
      url:"https://www.geekbuying.com/Brand/360-101.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/baseus.jpg",
      url:"https://www.geekbuying.com/Brand/Baseus-152.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/Cleanfly.jpg",
      url:"https://www.geekbuying.com/Brand/Cleanfly-183.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/funry.jpg",
      url:"https://www.geekbuying.com/Brand/Funry-267.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/geekbes.jpg",
      url:"https://www.geekbuying.com/Brand/Geekbes-273.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/Miaomiaoce.jpg",
      url:"https://www.geekbuying.com/Brand/Miaomiaoce-444.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/2003/mijia.jpg?v=501322930",
      url:"https://www.geekbuying.com/Brand/Mijia-447.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/yunmai.jpg",
      url:"https://www.geekbuying.com/Brand/YUNMAI-584.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/philips.jpg",
      url:"https://www.geekbuying.com/Brand/Philips-619.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/roborock.jpg",
      url:"https://www.geekbuying.com/Brand/Roborock-817.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/yeelight.jpg",
      url:"https://www.geekbuying.com/Brand/Yeelight-823.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/jimmy.jpg?v=-219567574",
      url:"https://www.geekbuying.com/Brand/JIMMY-834.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/2002/dreame.jpg?v=1519295513",
      url:"https://www.geekbuying.com/Brand/Dreame-840.html"
      },
      // {
      // image:"https://img.gkbcdn.com/s3/b/proscenic-6HykTHuh.jpg",
      // url:"https://www.geekbuying.com/Brand/Proscenic-846.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/2001/walkingpad.jpg?v=-1790082630",
      // url:"https://www.geekbuying.com/Brand/WalkingPad-848.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/2007/deerma.jpg?v=2077770434",
      // url:"https://www.geekbuying.com/Brand/deerma-867.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/Aqara.jpg",
      // url:"https://www.geekbuying.com/Brand/Aqara-881.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/Viomi.jpg",
      // url:"https://www.geekbuying.com/Brand/Viomi-886.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/Roidmi.jpg",
      // url:"https://www.geekbuying.com/Brand/ROIDMI-891.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/Smartmi.jpg",
      // url:"https://www.geekbuying.com/Brand/Smartmi-893.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/Merax.jpg",
      // url:"https://www.geekbuying.com/Brand/Merax-995.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/youpin.jpg",
      // url:"https://www.geekbuying.com/Brand/youpin-1026.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/Tycolit.jpg",
      // url:"https://www.geekbuying.com/Brand/Tycolit-1114.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/UREVO.jpg",
      // url:"https://www.geekbuying.com/Brand/UREVO-1127.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/17PIN.jpg",
      // url:"https://www.geekbuying.com/Brand/17PIN-1132.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/Motor-fish.jpg",
      // url:"https://www.geekbuying.com/Brand/Motor-fish-1135.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/LEXON.jpg",
      // url:"https://www.geekbuying.com/Brand/LEXON-1151.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/Oclean.jpg",
      // url:"https://www.geekbuying.com/Brand/Oclean-1155.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/2009/muggle.jpg",
      // url:"https://www.geekbuying.com/Brand/Muggle-1162.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/2009/tokit.jpg",
      // url:"https://www.geekbuying.com/Brand/TOKIT-1163.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/intco.jpg",
      // url:"https://www.geekbuying.com/Brand/INTCO-1167.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/gotdya.jpg",
      // url:"https://www.geekbuying.com/Brand/GOTDYA-1172.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/midea.jpg",
      // url:"https://www.geekbuying.com/Brand/Midea-1175.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/2009/nextool.jpg",
      // url:"https://www.geekbuying.com/Brand/nextool-1179.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/2009/kingsmith.jpg",
      // url:"https://www.geekbuying.com/Brand/KINGSMITH-1186.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/baldr.jpg",
      // url:"https://www.geekbuying.com/Brand/BaLDR-1187.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/trouver.jpg",
      // url:"https://www.geekbuying.com/Brand/TROUVER-1189.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/eureka.jpg",
      // url:"https://www.geekbuying.com/Brand/eureka-1218.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/bear.jpg",
      // url:"https://www.geekbuying.com/Brand/Bear-1227.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/yesoul.jpg",
      // url:"https://www.geekbuying.com/Brand/YESOUL-1229.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/bago.jpg",
      // url:"https://www.geekbuying.com/Brand/BAGO-1247.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/fairywill.jpg",
      // url:"https://www.geekbuying.com/Brand/Fairywill-1252.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/sunuo-64RItsFI.jpg",
      // url:"https://www.geekbuying.com/Brand/SUNUO-1256.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/atmoko-65qY1x19.jpg",
      // url:"https://www.geekbuying.com/Brand/ATMOKO-1261.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/imou-661N8iEz.jpg",
      // url:"https://www.geekbuying.com/Brand/IMOU-1262.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/homasy-68pmVddu.jpg",
      // url:"https://www.geekbuying.com/Brand/Homasy-1274.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/pawbby-6AlQBybG.jpg",
      // url:"https://www.geekbuying.com/Brand/Pawbby-1280.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/showsee-6DPwUqZx.jpg",
      // url:"https://www.geekbuying.com/Brand/ShowSee-1287.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/uwant-6HSWBuFK.jpg",
      // url:"https://www.geekbuying.com/Brand/Uwant-1288.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/tesvor-6ILf8IEv.jpg",
      // url:"https://www.geekbuying.com/Brand/Tesvor-1307.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/inse-6ILfjShE.jpg",
      // url:"https://www.geekbuying.com/Brand/INSE-1308.html"
      // }
      // 
      ]
   
      smartHomeGarden.map(function (elem, index, array) {
      var div4 = document.createElement("div");
      var avatar4 = document.createElement("img");
      div4.setAttribute("id","div4Avatar")
      avatar4.setAttribute("src", elem.image);
      avatar4.setAttribute("id", "avatar4");
  
      div4.append(avatar4);
      document.querySelector("#brand_Img2").append(div4);
    });
  
    var consumerElectronics = [
      {
      image:"https://img.gkbcdn.com/s3/b/xiaomi.jpg",
      url:"https://www.geekbuying.com/Brand/Xiaomi-1.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/lenovo.jpg",
      url:"https://www.geekbuying.com/Brand/Lenovo-7.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/oneplus.jpg",
      url:"https://www.geekbuying.com/Brand/OnePlus-8.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/huawei.jpg",
      url:"https://www.geekbuying.com/Brand/Huawei-9.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/elephone.jpg",
      url:"https://www.geekbuying.com/Brand/Elephone-17.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/ajazz.jpg",
      url:"https://www.geekbuying.com/Brand/Ajazz-50.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/makibes.jpg",
      url:"https://www.geekbuying.com/Brand/Makibes-52.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/amazfit.jpg",
      url:"https://www.geekbuying.com/Brand/AMAZFIT-53.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/ticwatch.jpg",
      url:"https://www.geekbuying.com/Brand/Ticwatch-55.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/tronsmart.jpg?v=788944783",
      url:"https://www.geekbuying.com/Brand/Tronsmart-79.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/kingston.jpg",
      url:"https://www.geekbuying.com/Brand/Kingston-83.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/qcy.jpg",
      url:"https://www.geekbuying.com/Brand/QCY-89.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/3glasses.jpg",
      url:"https://www.geekbuying.com/Brand/3Glasses-104.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/apple.jpg",
      url:"https://www.geekbuying.com/Brand/Apple-139.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/baseus.jpg",
      url:"https://www.geekbuying.com/Brand/Baseus-152.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/flsun.png",
      url:"https://www.geekbuying.com/Brand/Flsun-153.html"
      },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/bluedio.jpg",
      // url:"https://www.geekbuying.com/Brand/Bluedio-164.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/creality-3d.jpg",
      // url:"https://www.geekbuying.com/Brand/Creality-3D-198.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/dobe.jpg",
      // url:"https://www.geekbuying.com/Brand/Dobe-215.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/fiil.jpg",
      // url:"https://www.geekbuying.com/Brand/FIIL-254.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/gamesir.jpg",
      // url:"https://www.geekbuying.com/Brand/Gamesir-270.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/ipega.jpg",
      // url:"https://www.geekbuying.com/Brand/Ipega-339.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/JBL.jpg",
      // url:"https://www.geekbuying.com/Brand/JBL-354.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/jvmac.jpg",
      // url:"https://www.geekbuying.com/Brand/Jvmac-373.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/2003/mijia.jpg?v=501322930",
      // url:"https://www.geekbuying.com/Brand/Mijia-447.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/netac.jpg",
      // url:"https://www.geekbuying.com/Brand/Netac-466.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/Vivibright.jpg",
      // url:"https://www.geekbuying.com/Brand/Vivibright-527.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/waveshare.jpg",
      // url:"https://www.geekbuying.com/Brand/Waveshare-535.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/razer.jpg",
      // url:"https://www.geekbuying.com/Brand/Razer-640.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/ESTRELLA.jpg",
      // url:"https://www.geekbuying.com/Brand/ESTRELLA-740.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/sabbat.jpg",
      // url:"https://www.geekbuying.com/Brand/Sabbat-820.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/tronxy.jpg?v=95188421",
      // url:"https://www.geekbuying.com/Brand/Tronxy-847.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/Haylou.jpg",
      // url:"https://www.geekbuying.com/Brand/Haylou-963.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/mifo.jpg",
      // url:"https://www.geekbuying.com/Brand/mifo-994.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/two-trees-67PzRFvi.jpg",
      // url:"https://www.geekbuying.com/Brand/TWO-TREES-1015.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/youpin.jpg",
      // url:"https://www.geekbuying.com/Brand/youpin-1026.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/Redmi.jpg",
      // url:"https://www.geekbuying.com/Brand/Redmi-1067.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/JIUXUN.jpg",
      // url:"https://www.geekbuying.com/Brand/JIUXUN-1134.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/mvsx.jpg",
      // url:"https://www.geekbuying.com/Brand/MVSX-1200.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/laserpecker.jpg",
      // url:"https://www.geekbuying.com/Brand/LaserPecker-1202.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/anbernic.jpg",
      // url:"https://www.geekbuying.com/Brand/ANBERNIC-1219.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/artillery.jpg",
      // url:"https://www.geekbuying.com/Brand/Artillery-1221.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/anycubic.jpg",
      // url:"https://www.geekbuying.com/Brand/Anycubic-1222.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/flashforge.jpg",
      // url:"https://www.geekbuying.com/Brand/FLASHFORGE-1242.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/kaiweets.jpg",
      // url:"https://www.geekbuying.com/Brand/KAIWEETS-1246.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/ortur.jpg",
      // url:"https://www.geekbuying.com/Brand/ORTUR-1249.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/wanbo.jpg",
      // url:"https://www.geekbuying.com/Brand/Wanbo-1251.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/--.jpg",
      // url:"https://www.geekbuying.com/Brand/WEJOY-1253.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/qidi.jpg",
      // url:"https://www.geekbuying.com/Brand/QIDI-1254.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/mpow-65q6Gtkb.jpg",
      // url:"https://www.geekbuying.com/Brand/MPOW-1259.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/tilswall-67mBgi3G.jpg",
      // url:"https://www.geekbuying.com/Brand/Tilswall-1267.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/acclamator-67mBndAU.jpg",
      // url:"https://www.geekbuying.com/Brand/Acclamator-1268.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/kywoo3d-68pKaDCQ.jpg",
      // url:"https://www.geekbuying.com/Brand/Kywoo3D-1271.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/longer-69tGeb7A.jpg",
      // url:"https://www.geekbuying.com/Brand/Longer-1277.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/aufero-6AlQWgd5.jpg",
      // url:"https://www.geekbuying.com/Brand/Aufero-1279.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/sculpfun-6AlQjHhs.jpg",
      // url:"https://www.geekbuying.com/Brand/SCULPFUN-1281.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/zonestar-6DPEHO3Y.jpg",
      // url:"https://www.geekbuying.com/Brand/Zonestar-1283.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/ctc-6DPEhfxd.jpg",
      // url:"https://www.geekbuying.com/Brand/CTC-1284.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/makerpi-6GkqJ2vr.jpg",
      // url:"https://www.geekbuying.com/Brand/MAKERPI-1294.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/voxelab-6GkqLkYV.jpg",
      // url:"https://www.geekbuying.com/Brand/Voxelab-1296.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/sungoldpower-6GkqM9Pu.jpg",
      // url:"https://www.geekbuying.com/Brand/SunGoldPower-1297.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/bomaker-6GkqMypQ.jpg",
      // url:"https://www.geekbuying.com/Brand/Bomaker-1299.html"
      // }
      
  ]
  
  consumerElectronics.map(function (elem, index, array) {
      var div5 = document.createElement("div");
      var avatar5 = document.createElement("img");
      div5.setAttribute("id","div5Avatar")
      avatar5.setAttribute("src", elem.image);
      avatar5.setAttribute("id", "avatar5");
  
      div5.append(avatar5);
      document.querySelector("#brand_Img3").append(div5);
    });
  
    var phoneAccessories = [
      {
      image:"https://img.gkbcdn.com/s3/b/xiaomi.jpg",
      url:"https://www.geekbuying.com/Brand/Xiaomi-1.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/oneplus.jpg",
      url:"https://www.geekbuying.com/Brand/OnePlus-8.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/huawei.jpg",
      url:"https://www.geekbuying.com/Brand/Huawei-9.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/oukitel.jpg",
      url:"https://www.geekbuying.com/Brand/Oukitel-19.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/chuwi.jpg",
      url:"https://www.geekbuying.com/Brand/Chuwi-22.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/pofan.jpg",
      url:"https://www.geekbuying.com/Brand/Pofan-45.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/makibes.jpg",
      url:"https://www.geekbuying.com/Brand/Makibes-52.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/nillkin.jpg",
      url:"https://www.geekbuying.com/Brand/NILLKIN-100.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/hat-prince.jpg",
      url:"https://www.geekbuying.com/Brand/Hat-Prince-307.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/vivo.jpg",
      url:"https://www.geekbuying.com/Brand/Vivo-528.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/Rock.jpg",
      url:"https://www.geekbuying.com/Brand/Rock-654.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/samsung.jpg",
      url:"https://www.geekbuying.com/Brand/Samsung-668.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/Pocophone.jpg",
      url:"https://www.geekbuying.com/Brand/Pocophone-781.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/Redmi.jpg",
      url:"https://www.geekbuying.com/Brand/Redmi-1067.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/mpow-65q6Gtkb.jpg",
      url:"https://www.geekbuying.com/Brand/MPOW-1259.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/seneo-67mCVkSJ.jpg",
      url:"https://www.geekbuying.com/Brand/Seneo-1270.html"
      }
      ]
      
      phoneAccessories.map(function (elem, index, array) {
      var div6 = document.createElement("div");
      var avatar6 = document.createElement("img");
      div6.setAttribute("id","div6Avatar")
      avatar6.setAttribute("src", elem.image);
      avatar6.setAttribute("id", "avatar6");
  
      div6.append(avatar6);
      document.querySelector("#brand_Img4").append(div6);
    });
  
    var tvBoxes=[
      {
      image:"https://img.gkbcdn.com/s3/b/xiaomi.jpg",
      url:"https://www.geekbuying.com/Brand/Xiaomi-1.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/vorke.jpg",
      url:"https://www.geekbuying.com/Brand/VORKE-71.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/minix.jpg",
      url:"https://www.geekbuying.com/Brand/MINIX-72.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/mecool.jpg",
      url:"https://www.geekbuying.com/Brand/Mecool-75.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/tanix.jpg",
      url:"https://www.geekbuying.com/Brand/Tanix-77.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/beelink.jpg",
      url:"https://www.geekbuying.com/Brand/Beelink-154.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/gamesir.jpg",
      url:"https://www.geekbuying.com/Brand/Gamesir-270.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/h96.jpg",
      url:"https://www.geekbuying.com/Brand/H96-300.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/ipazzport.jpg",
      url:"https://www.geekbuying.com/Brand/Ipazzport-337.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/magicsee.jpg",
      url:"https://www.geekbuying.com/Brand/Magicsee-421.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/gtmedia.jpg",
      url:"https://www.geekbuying.com/Brand/GTMEDIA-492.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/Ugoos.jpg",
      url:"https://www.geekbuying.com/Brand/Ugoos-503.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/rii.jpg",
      url:"https://www.geekbuying.com/Brand/Rii-651.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/minisforum.jpg",
      url:"https://www.geekbuying.com/Brand/MINISFORUM-1188.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/gmk.jpg",
      url:"https://www.geekbuying.com/Brand/GMK-1230.html"
      }
      ]
  
      tvBoxes.map(function (elem, index, array) {
      var div7 = document.createElement("div");
      var avatar7 = document.createElement("img");
      div7.setAttribute("id","div7Avatar")
      avatar7.setAttribute("src", elem.image);
      avatar7.setAttribute("id", "avatar7");
  
      div7.append(avatar7);
      document.querySelector("#brand_Img5").append(div7);
    });
  
    var computersTablets=[
      {
      image:"https://img.gkbcdn.com/s3/b/xiaomi.jpg",
      url:"https://www.geekbuying.com/Brand/Xiaomi-1.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/lenovo.jpg",
      url:"https://www.geekbuying.com/Brand/Lenovo-7.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/huawei.jpg",
      url:"https://www.geekbuying.com/Brand/Huawei-9.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/teclast.jpg",
      url:"https://www.geekbuying.com/Brand/Teclast-21.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/chuwi.jpg",
      url:"https://www.geekbuying.com/Brand/Chuwi-22.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/alldocube.jpg",
      url:"https://www.geekbuying.com/Brand/AlldoCube-25.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/gpd.jpg",
      url:"https://www.geekbuying.com/Brand/GPD-26.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/ajazz.jpg",
      url:"https://www.geekbuying.com/Brand/Ajazz-50.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/minix.jpg",
      url:"https://www.geekbuying.com/Brand/MINIX-72.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/tronsmart.jpg?v=788944783",
      url:"https://www.geekbuying.com/Brand/Tronsmart-79.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/logitech.jpg",
      url:"https://www.geekbuying.com/Brand/Logitech-82.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/kingston.jpg",
      url:"https://www.geekbuying.com/Brand/Kingston-83.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/seagate.jpg",
      url:"https://www.geekbuying.com/Brand/Seagate-85.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/baseus.jpg",
      url:"https://www.geekbuying.com/Brand/Baseus-152.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/gamesir.jpg",
      url:"https://www.geekbuying.com/Brand/Gamesir-270.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/2003/mijia.jpg?v=501322930",
      url:"https://www.geekbuying.com/Brand/Mijia-447.html"
      },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/netac.jpg",
      // url:"https://www.geekbuying.com/Brand/Netac-466.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/razer.jpg",
      // url:"https://www.geekbuying.com/Brand/Razer-640.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/rii.jpg",
      // url:"https://www.geekbuying.com/Brand/Rii-651.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/stmagic.jpg",
      // url:"https://www.geekbuying.com/Brand/Stmagic-736.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/one-netbook.jpg",
      // url:"https://www.geekbuying.com/Brand/One-Netbook-741.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/cenava.jpg",
      // url:"https://www.geekbuying.com/Brand/Cenava-760.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/yeelight.jpg",
      // url:"https://www.geekbuying.com/Brand/Yeelight-823.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/Redmi.jpg",
      // url:"https://www.geekbuying.com/Brand/Redmi-1067.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/AOSIMAN.jpg",
      // url:"https://www.geekbuying.com/Brand/AOSIMAN-1110.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/gmk.jpg",
      // url:"https://www.geekbuying.com/Brand/GMK-1230.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/kuu.jpg",
      // url:"https://www.geekbuying.com/Brand/KUU-1245.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/xp-pen-6745ObjF.jpg",
      // url:"https://www.geekbuying.com/Brand/XP-PEN-1264.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/pictek-67mC0Aau.jpg",
      // url:"https://www.geekbuying.com/Brand/Pictek-1269.html"
      // }
      ]
      
      computersTablets.map(function (elem, index, array) {
      var div8 = document.createElement("div");
      var avatar8 = document.createElement("img");
      div8.setAttribute("id","div8Avatar")
      avatar8.setAttribute("src", elem.image);
      avatar8.setAttribute("id", "avatar8");
  
      div8.append(avatar8);
      document.querySelector("#brand_Img6").append(div8);
    });
  
    var toysHobbies=[
      {
      image:"https://img.gkbcdn.com/s3/b/xiaomi.jpg",
      url:"https://www.geekbuying.com/Brand/Xiaomi-1.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/dji.jpg",
      url:"https://www.geekbuying.com/Brand/DJI-56.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/jjrc.jpg",
      url:"https://www.geekbuying.com/Brand/JJRC-57.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/hubsan.jpg",
      url:"https://www.geekbuying.com/Brand/Hubsan-58.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/cheerson.jpg",
      url:"https://www.geekbuying.com/Brand/Cheerson-59.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/mjx.jpg",
      url:"https://www.geekbuying.com/Brand/MJX-61.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/feiyu.jpg",
      url:"https://www.geekbuying.com/Brand/Feiyu-62.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/tronsmart.jpg?v=788944783",
      url:"https://www.geekbuying.com/Brand/Tronsmart-79.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/wpl.jpg",
      url:"https://www.geekbuying.com/Brand/WPL-87.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/sjrc.jpg",
      url:"https://www.geekbuying.com/Brand/SJRC-94.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/ZD-Racing.jpg",
      url:"https://www.geekbuying.com/Brand/ZD-Racing-96.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/emax.jpg",
      url:"https://www.geekbuying.com/Brand/Emax-232.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/flytec.jpg",
      url:"https://www.geekbuying.com/Brand/Flytec-260.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/geprc.jpg",
      url:"https://www.geekbuying.com/Brand/GEPRC-281.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/jdrc.jpg",
      url:"https://www.geekbuying.com/Brand/JDRC-356.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/2003/mijia.jpg?v=501322930",
      url:"https://www.geekbuying.com/Brand/Mijia-447.html"
      },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/wltoys.jpg",
      // url:"https://www.geekbuying.com/Brand/Wltoys-553.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/xk.jpg",
      // url:"https://www.geekbuying.com/Brand/XK-568.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/zhiyun.jpg",
      // url:"https://www.geekbuying.com/Brand/Zhiyun-589.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/xinlehong-toys.jpg",
      // url:"https://www.geekbuying.com/Brand/XINLEHONG-Toys-790.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/zlrc.jpg",
      // url:"https://www.geekbuying.com/Brand/ZLL-826.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/iflight.jpg",
      // url:"https://www.geekbuying.com/Brand/iFlight-827.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/fimi.jpg?v=594574638",
      // url:"https://www.geekbuying.com/Brand/Fimi-835.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/MN-Model.jpg",
      // url:"https://www.geekbuying.com/Brand/MN-Model-934.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/ONEBOT.jpg",
      // url:"https://www.geekbuying.com/Brand/ONEBOT-1098.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/Logo/FlyNova.jpg",
      // url:"https://www.geekbuying.com/Brand/FlyNova-1150.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/xingbao.jpg",
      // url:"https://www.geekbuying.com/Brand/XINGBAO-1198.html"
      // },
      // {
      // image:"https://img.gkbcdn.com/s3/b/leadzm.jpg",
      // url:"https://www.geekbuying.com/Brand/leadzm-1199.html"
      // }
      ]
         
      toysHobbies.map(function (elem, index, array) {
      var div9 = document.createElement("div");
      var avatar9 = document.createElement("img");
      div9.setAttribute("id","div9Avatar")
      avatar9.setAttribute("src", elem.image);
      avatar9.setAttribute("id", "avatar9");
  
      div9.append(avatar9);
      document.querySelector("#brand_Img7").append(div9);
    });
  
    var wearableDevice =[
      {
      image:"https://img.gkbcdn.com/s3/b/xiaomi.jpg",
      url:"https://www.geekbuying.com/Brand/Xiaomi-1.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/huawei.jpg",
      url:"https://www.geekbuying.com/Brand/Huawei-9.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/cubot.jpg",
      url:"https://www.geekbuying.com/Brand/Cubot-13.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/makibes.jpg",
      url:"https://www.geekbuying.com/Brand/Makibes-52.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/amazfit.jpg",
      url:"https://www.geekbuying.com/Brand/AMAZFIT-53.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/ticwatch.jpg",
      url:"https://www.geekbuying.com/Brand/Ticwatch-55.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/hat-prince.jpg",
      url:"https://www.geekbuying.com/Brand/Hat-Prince-307.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/Haylou.jpg",
      url:"https://www.geekbuying.com/Brand/Haylou-963.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/Redmi.jpg",
      url:"https://www.geekbuying.com/Brand/Redmi-1067.html"
      }
      ]
     
      wearableDevice.map(function (elem, index, array) {
      var div10 = document.createElement("div");
      var avatar10 = document.createElement("img");
      div10.setAttribute("id","div10Avatar")
      avatar10.setAttribute("src", elem.image);
      avatar10.setAttribute("id", "avatar10");
  
      div10.append(avatar10);
      document.querySelector("#brand_Img8").append(div10);
    });
     
    var securitySystems = [
      {
      image:"https://img.gkbcdn.com/s3/b/xiaomi.jpg",
      url:"https://www.geekbuying.com/Brand/Xiaomi-1.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/vstarcam.jpg",
      url:"https://www.geekbuying.com/Brand/VSTARCAM-81.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/Aqara.jpg",
      url:"https://www.geekbuying.com/Brand/Aqara-881.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/xiaomo.jpg",
      url:"https://www.geekbuying.com/Brand/xiaomo-1142.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/imou-661N8iEz.jpg",
      url:"https://www.geekbuying.com/Brand/IMOU-1262.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/earykong-6GkqHJGO.jpg",
      url:"https://www.geekbuying.com/Brand/Earykong-1292.html"
      }
      ]
     
      securitySystems.map(function (elem, index, array) {
      var div11 = document.createElement("div");
      var avatar11 = document.createElement("img");
      div11.setAttribute("id","div11Avatar")
      avatar11.setAttribute("src", elem.image);
      avatar11.setAttribute("id", "avatar11");
  
      div11.append(avatar11);
      document.querySelector("#brand_Img9").append(div11);
    });
  
      var automobilesMotorcycles = [
      {
      image:"https://img.gkbcdn.com/s3/b/xiaomi.jpg",
      url:"https://www.geekbuying.com/Brand/Xiaomi-1.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/orico.jpg",
      url:"https://www.geekbuying.com/Brand/ORICO-44.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/makibes.jpg",
      url:"https://www.geekbuying.com/Brand/Makibes-52.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/baseus.jpg",
      url:"https://www.geekbuying.com/Brand/Baseus-152.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/Cleanfly.jpg",
      url:"https://www.geekbuying.com/Brand/Cleanfly-183.html"
      },
      {
      image:"https://img.gkbcdn.com/s3/b/Logo/DDPAI.jpg",
      url:"https://www.geekbuying.com/Brand/DDPAI-799.html"
      }
      ]
     
      automobilesMotorcycles.map(function (elem, index, array) {
      var div12 = document.createElement("div");
      var avatar12 = document.createElement("img");
      div12.setAttribute("id","div12Avatar")
      avatar12.setAttribute("src", elem.image);
      avatar12.setAttribute("id", "avatar12");
  
      div12.append(avatar12);
      document.querySelector("#brand_Img10").append(div12);
    });
     
    var fashion = [{
      image:"https://img.gkbcdn.com/s3/b/xiaomi.jpg",
      image_url:"https://www.geekbuying.com/Brand/Xiaomi-1.html"
      }
     ]
     
     fashion.map(function (elem, index, array) {
      var div13= document.createElement("div");
      var avatar13= document.createElement("img");
      div13.setAttribute("id","div13Avatar")
      avatar13.setAttribute("src", elem.image);
      avatar13.setAttribute("id", "avatar13");
  
      div13.append(avatar13);
      document.querySelector("#brand_Img11").append(div13);
    });