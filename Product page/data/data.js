let con2 = [
  {
    name: "Solar Light",
    image:
      "https://img.gkbcdn.com/s3/bn/2202/480326-6214aee82b40c921c0ccce24.jpg",
    image_url:
      "https://www.geekbuying.com/item/3-7V-108-Lamp-Beads-Solar-Wall-Lamp-480326.html",
  },
  {
    name: "Apods i500",
    image:
      "https://img.gkbcdn.com/s3/bn/2202/422056-6214acd42b40c921c0ccce16.jpg",
    image_url:
      "https://www.geekbuying.com/item/Apods-i500-Bluetooth-5-0-Pop-up-Window-TWS-Earbuds--422056.html",
  },
  {
    name: "Tronsmart Battle",
    image:
      "https://img.gkbcdn.com/s3/bn/2202/470740-6214ae9a2b40c921c0ccce22.jpg",
    image_url: "https://www.geekbuying.com/item/Tronsmart-Battle-470740.html",
  },
  {
    name: "PS3000 64GB Game Stick",
    image:
      "https://img.gkbcdn.com/s3/bn/2202/459934-6214adf42b40c921c0ccce1a.jpg",
    image_url:
      "https://www.geekbuying.com/item/PS3000-64GB-Gaming-Stick-10000--Games-459934.html",
  },
];
localStorage.setItem("con2", JSON.stringify(con2));
let flashD = [
  {
    image:
      "https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_.jpg",
    price: "₹1334.09",
    strikeP: "₹1962.27",
    dis: "32% OFF",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-force-portable-bluetooth-speaker-1571993707403._w280_.jpg",
    price: "₹4003.84",
    strikeP: "₹5495.76",
    dis: "27% OFF",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-12-09/3-7V-108-Lamp-Beads-Solar-Wall-Lamp-480326-0._w280_.jpg",
    price: "₹1569.66",
    strikeP: "₹1726.70",
    dis: "9% OFF",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-08-27/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994588089._w280_.jpg",
    price: "₹2590.44",
    strikeP: "₹3297.14",
    dis: "21% OFF",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2017-07-26/xiaomi-wifi-amplifier-pro-black-1574132393616._w280_.jpg",
    price: "₹1569.66",
    strikeP: "₹2119.31",
    dis: "26% OFF",
  },
];

localStorage.setItem("flashDeals", JSON.stringify(flashD));

let belowFlashD = [
  {
    name: "Mijia Faucet Filter",
    image:
      "https://img.gkbcdn.com/s3/bn/2201/493442-61e61f8a2b40c91588d704e0.jpg",
    image_url:
      "https://www.geekbuying.com/item/Mijia-MUL11-Faucet-Water-Filter-Purifier-493442.html?pmrm=home-middle-banner",
    details: "0.1um Ultra-fine Fiber, 4 Filtration System, 3 Faucet Modes",
    details_url:
      "https://www.geekbuying.com/item/Mijia-MUL11-Faucet-Water-Filter-Purifier-493442.html",
  },
  {
    name: "Kospet Rock Smartwatch",
    image:
      "https://img.gkbcdn.com/s3/bn/2201/492534-61e61f622b40c91588d704df.jpg",
    image_url:
      "https://www.geekbuying.com/item/Kospet-Rock-Bluetooth-Smartwatch-1-69-Inch-Rectangle-Green-492534.html?pmrm=home-middle-banner",
    details:
      '1.69" Rectangle TFT Screen, Heart Rate, Blood Pressure, SpO2 Monitor, 20 Sports Modes',
    details_url:
      "https://www.geekbuying.com/item/Kospet-Rock-Bluetooth-Smartwatch-1-69-Inch-Rectangle-Green-492534.html",
  },
  {
    name: "Realme GT2 Pro",
    image:
      "https://img.gkbcdn.com/s3/bn/2201/492530-61e61ffa2b40c91588d704e1.jpg",
    image_url:
      "https://www.geekbuying.com/item/Realme-GT2-Pro-6-7-Inches-Snapdragon-8-8GB-256GB-Green-492530.html?pmrm=home-middle-banner",
    details:
      '6.7" 1440 x 3216p AMOLED Screen, Snapdragon 8, 8GB RAM 256GB ROM, Triple Rear Cameras',
    details_url:
      "https://www.geekbuying.com/item/Realme-GT2-Pro-6-7-Inches-Snapdragon-8-8GB-256GB-Green-492530.html",
  },
  {
    name: "Tronsmart Mega Pro",
    image:
      "https://img.gkbcdn.com/s3/bn/2201/392999-61e61adf2b40c915887464af.jpg",
    image_url:
      "https://www.geekbuying.com/item/Tronsmart-Element-Mega-Pro-60W-Bluetooth-5-0-Speaker-426452.html?pmrm=home-middle-banner",
    details:
      "Bluetooth 5.0, 60W SoundPulse, IPX5 Voice Assistant NFC TWS Pairing",
    details_url:
      "https://www.geekbuying.com/item/Tronsmart-Element-Mega-Pro-60W-Bluetooth-5-0-Speaker-426452.html",
  },
];

localStorage.setItem("belowFlahs", JSON.stringify(belowFlashD));
let newA = [
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-17/Xiaomi-ShowSee-F303-BK-Electric-Shaver-Black-496642-0._w280_.jpg",
    title:
      "Xiaomi ShowSee F303-BK Electric Shaver 500W Strong Power Noise-Reducing Omnidirectional Floating - Black",
    title_url:
      "https://www.geekbuying.com/item/Xiaomi-ShowSee-F303-BK-Electric-Shaver-Black-496642.html?pmrm=new-arrivals",
    price: "₹1726.70",
    strikeP: "₹2354.88",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-15/7e6fad1b8a934dea82838f9574863f3c-496595-0._w280_.jpg",
    title:
      "Lenovo Xiaoxin Pad Pro 2021 Tablet PC 11.5 Inch 2560*1600 OLED Screen Snapdragon 870 6GB RAM 128GB ROM Android 11 OS",
    title_url:
      "https://www.geekbuying.com/item/Lenovo-Xiaoxin-Pad-Pro-2021-Tablet-PC-6GB-128GB--496595.html?pmrm=new-arrivals",
    price: "₹34548.94",
    strikeP: "₹36590.51",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-18/DAJA-M1-Optical-Fiber-Marking-Machine-496696-0._w280_.jpg",
    title:
      "DAJA M1 10W High Power Optical Fiber Marking Machine Cost-Effective Small Size for Various Occasions & Personal Design",
    title_url:
      "https://www.geekbuying.com/item/DAJA-M1-Optical-Fiber-Marking-Machine-496696.html?pmrm=new-arrivals",
    price: "₹95168.00",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-19/LOKMAT-Ocean-2-Sport-Smart-Watch-Green-496733-0._w280_.jpg",
    title:
      "LOKMAT Ocean 2 Sport Smart Watch Fitness Tracker Anti-fatigue Heart Rate Clock for Android4.4 and iOS8.0 Green",
    title_url:
      "https://www.geekbuying.com/item/LOKMAT-Ocean-2-Sport-Smart-Watch-Green-496733.html?pmrm=new-arrivals",
    price: "₹1491.13",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-21/COLMI-SKY-1-Plus-Smartwatch-Black-Yellow-496754-0._w280_.jpg",
    title:
      "COLMI SKY 1 Plus Smart Watch Men IP68 Waterproof Sleep Tracker Sport Fitness Bluetooth Smartwatch for Android iOS Phone",
    title_url:
      "https://www.geekbuying.com/item/COLMI-SKY-1-Plus-Smartwatch-Black-Yellow-496754.html?pmrm=new-arrivals",
    price: "₹2354.88",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-12-15/Dancing-Cactus-Toy-481516-0._w280_.jpg",
    title:
      "Dancing Cactus 120 Song Speaker with Lighting Singing Cactus Recording and Repeat Your Words",
    title_url:
      "https://www.geekbuying.com/item/Dancing-Cactus-Toy-481516.html?pmrm=new-arrivals",
    price: "₹1569.66",
    strikeP: "₹1726.70",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-14/Multi-Function-House-Hold-Six-Blade-Dicing-and-Slicing-Slicer-496522-0._w280_.jpg",
    title:
      "Multi-Function House-Hold Six-Blade Dicing and Slicing Slicer - Blue",
    title_url:
      "https://www.geekbuying.com/item/Multi-Function-House-Hold-Six-Blade-Dicing-and-Slicing-Slicer-496522.html?pmrm=new-arrivals",
    price: "₹2668.97",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-21/COLMI-V23-Bluetooth-Smartwatch-Rose-Gold-496759-0._w280_.jpg",
    title:
      "COLMI V23 Smartwatch Full Touch Fitness Tracker IP67 Waterproof Blood Pressure Bluetooth Watch Rose Gold",
    title_url:
      "https://www.geekbuying.com/item/COLMI-V23-Bluetooth-Smartwatch-Rose-Gold-496759.html?pmrm=new-arrivals",
    price: "₹2904.53",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-01-20/Mibro-Watch-X1-1-3-Inch-AMOLED-Screen-Smartwatch-Black-494477-1._w280_.jpg",
    title:
      "Mibro Watch X1 V5.0 Bluetooth Smartwatch 1.3 Inch AMOLED Screen 38 Sports Modes Heart Rate Blood Oxygen Sleep Monitoring 5ATM Water-Resistant 350mAh Battery 60 Days Long Standby Time Multi-language - Black",
    title_url:
      "https://www.geekbuying.com/item/Mibro-Watch-X1-V5-0-Bluetooth-Smartwatch-1-3-Inch-AMOLED-Screen-Black-494477.html?pmrm=new-arrivals",
    price: "₹4553.50",
    strikeP: "₹5652.81",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-10/Zeblaze-Ares-Smartwatch-1-3-inch-IPS-Touch-Screen-Green-496309-0._w280_.jpg",
    title:
      "Zeblaze Ares Ultra-light Bluetooth Smartwatch 1.3 inch IPS Touch Screen Heart Rate Blood Pressure Monitor 30M Water-Resistant 170mAh Battery 15 Days Standby Time - Green",
    title_url:
      "https://www.geekbuying.com/item/Zeblaze-Ares-Smartwatch-1-3-inch-IPS-Touch-Screen-Green-496309.html?pmrm=new-arrivals",
    price: "₹2354.88",
    strikeP: "₹2590.44",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-01-12/8e568bb4219e486bbaa9eb8956c1be98-493435-0._w280_.jpg",
    title:
      "P1 Webcam 1080P with Microphone Auto Focus Light Correction For Windows PC Mac Laptop Desktop - Black",
    title_url:
      "https://www.geekbuying.com/item/P1-Webcam-1080P-with-Microphone-Auto-Focus-Light-Correction-Black-493435.html?pmrm=new-arrivals",
    price: "₹1020.00",
    strikeP: "₹1177.05",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-01-24/Sculpfun-Y-axis-Laser-Rotary-Roller-494879-0._w280_.jpg",
    title:
      "Sculpfun Laser Rotary Roller Laser Engraver Y-axis Rotary with 360 Degree Rotating for Laser Engraving Cylindrical Objects Cans",
    title_url:
      "https://www.geekbuying.com/item/Sculpfun-Y-axis-Laser-Rotary-Roller-494879.html?pmrm=new-arrivals",
    price: "₹10207.09",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-01-05/Xiaomi-Paipai-Wireless-Screen-Projector-492090-0._w280_.jpg",
    title:
      "Xiaomi Paipai 4K HDMI Wireless Transmitter Mini Portable Type-c 5G Frequency Wireless Display Receiver",
    title_url:
      "https://www.geekbuying.com/item/Xiaomi-Paipai-Wireless-Screen-Projector-492090.html?pmrm=new-arrivals",
    price: "₹7850.64",
    strikeP: "₹9421.87",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-21/ORTUR-Laser-Master-2-Pro-S2-Motherboard-496738-0._w280_.jpg",
    title: "ORTUR Laser Master 2 Pro S2 Motherboard",
    title_url:
      "https://www.geekbuying.com/item/ORTUR-Laser-Master-2-Pro-S2-Motherboard-496738.html?pmrm=new-arrivals",
    price: "₹2826.01",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-12-24/UGOOS-UT8-Pro-TV-BOX-RK3568-8GB-RAM-64GB-ROM-484655-0._w280_.jpg",
    title:
      "UGOOS UT8 Pro Android 11 MINI PC TV BOX RK3568 Quad-core A55 8GB RAM 64GB ROM WIFI6 Gigabit RJ45 SAMBA HDR",
    title_url:
      "https://www.geekbuying.com/item/UGOOS-UT8-Pro-TV-BOX-RK3568-8GB-RAM-64GB-ROM-484655.html?pmrm=new-arrivals",
    price: "₹15703.63",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-23/CENAVA-PA156-12-15-6--Laptop-Intel-Celeron-J4125-12GB-128GB-497131-0._w280_.jpg",
    title:
      "CENAVA PA156-12 Laptop 15.6 Inch 1920 x 1080p Screen ​Intel Celeron J4125 12GB RAM 128GB SSD Windows 10 Fanless Design Backlit keyboard Fingerprint Unlock",
    title_url:
      "https://www.geekbuying.com/item/CENAVA-PA156-12-15-6--Laptop-Intel-Celeron-J4125-12GB-128GB-497131.html?pmrm=new-arrivals",
    price: "₹30622.83",
    strikeP: "₹34470.42",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-01-20/Mibro-Color-1-57-TFT-touch-screen-Blood-Oxygen-Smartwatch-Black-494478-0._w280_.jpg",
    title:
      "Mibro Color V5.0 Bluetooth Smartwatch 1.57 TFT Touch Screen 15 Sports Modes Heart Rate Blood Oxygen Sleep Monitoring 5ATM Water-Resistant 270mAh Battery 14 Days Long Standby Time Multi-language - Black",
    title_url:
      "https://www.geekbuying.com/item/Mibro-Color-V5-0-Bluetooth-Smartwatch-1-57-TFT-Touch-Screen-Black-494478.html?pmrm=new-arrivals",
    price: "₹3532.71",
    strikeP: "₹3925.32",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-12-16/Xiaomi-Mijia-Portable-Juicer-Mixer-481525-0._w280_.jpg",
    title:
      "Xiaomi Mijia Portable Juicer Mixer Electric Mini Blender Fruit 18000 rpm 300ML Large Capacity",
    title_url:
      "https://www.geekbuying.com/item/Xiaomi-Mijia-Portable-Juicer-Mixer-481525.html?pmrm=new-arrivals",
    price: "₹3925.32",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-11-30/TANIX-TX3-Mini--TV-BOX-4GB-RAM-64GB-ROM-479569-0._w280_.jpg",
    title:
      "TANIX TX3 Mini+ TV BOX Android 11 Amlogic S905W2 Quad Core ARM Cortex A53 4G RAM 64GB ROM 2.4G+5G WIFI 4K AV1",
    title_url:
      "https://www.geekbuying.com/item/TANIX-TX3-Mini--TV-BOX-4GB-RAM-64GB-ROM-479569.html?pmrm=new-arrivals",
    price: "₹4396.45",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-01-11/8BitDo-SN30-Pro-Bluetooth-Game-Controller-493147-1._w280_.jpg",
    title:
      "8BitDo SN30 Pro Bluetooth Game Controller for Xbox Cloud Gaming on Android",
    title_url:
      "https://www.geekbuying.com/item/8BitDo-SN30-Pro-Bluetooth-Game-Controller-for-Android-493147.html?pmrm=new-arrivals",
    price: "₹3611.23",
    strikeP: "₹4239.41",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-12-09/2d4e101cefc54ce4be4379cda8ca1980-480320-0._w280_.jpg",
    title: "DDPAI Mini 5 Dashcam 4k UHD GPS 4GB RAM With 64GB EMMC Storage",
    title_url:
      "https://www.geekbuying.com/item/DDPAI-Mini-5-Dashcam-4k-UHD-GPS-4GB-RAM-With-64GB-EMMC-Storage-480320.html?pmrm=new-arrivals",
    price: "₹12170.14",
    strikeP: "₹12719.79",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-17/Tronsmart-Bang-496690-0._w280_.jpg",
    title: "Tronsmart Bang 60W Outdoor Party Speaker",
    title_url:
      "https://www.geekbuying.com/item/Tronsmart-Bang-60W-Outdoor-Party-Speaker-496690.html?pmrm=new-arrivals",
    price: "₹8636.65",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-19/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496726-0._w280_.jpg",
    title:
      "LOKMAT APPLLP 6 Smart Watch 4G WiFi Tel Watch with Camera GPS Sports Watch with Touch Screen for Android iOS Black",
    title_url:
      "https://www.geekbuying.com/item/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496726.html?pmrm=new-arrivals",
    price: "₹16096.25",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-01-21/Youpin-Miaomiaoce-Thermometer-Hygrometer-494843-0._w280_.jpg",
    title:
      "Youpin Miaomiaoce E-Link INK Screen Display Digital Moisture Meter High-Precision Thermometer Temperature Humidity",
    title_url:
      "https://www.geekbuying.com/item/Youpin-Miaomiaoce-Thermometer-Hygrometer-494843.html?pmrm=new-arrivals",
    price: "₹1962.27",
    strikeP: "₹2119.31",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-12-09/aa427f1f704e486086723bbcbc5ad363-480321-0._w280_.jpg",
    title: "DDPAI Mini Dash Camera With Car Charger 1080P",
    title_url:
      "https://www.geekbuying.com/item/DDPAI-Mini-Dash-Camera-With-Car-Charger-1080P-480321.html?pmrm=new-arrivals",
    price: "₹3925.32",
    strikeP: "₹4317.93",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-12-08/Xiaomi-MIIIW-Digital-Timer-480091-1._w280_.jpg",
    title:
      "Xiaomi MIIIW Digital Kitchen Timer Rotating Timing Magnetic Absorption LED Display 3 Volume Levels",
    title_url:
      "https://www.geekbuying.com/item/Xiaomi-MIIIW-Digital-Timer-480091.html?pmrm=new-arrivals",
    price: "₹1412.61",
    strikeP: "₹1962.27",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-12-31/25in1-Multi-purpose-Precision-Screwdriver-Wallet-Set-491031-0._w280_.jpg",
    title: "25in1 Multi-purpose Precision Screwdriver Wallet Set Repairtools",
    title_url:
      "https://www.geekbuying.com/item/25in1-Multi-purpose-Precision-Screwdriver-Wallet-Set-491031.html?pmrm=new-arrivals",
    price: "₹627.39",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-21/BOXYM-Digital-Wrist-Blood-Pressure-Monitor-496774-0._w280_.jpg",
    title:
      "BOXYM Digital Wrist Blood Pressure Monitor Sphygmomanometer Heart Rate Pulse Arterial Pressure Monitor",
    title_url:
      "https://www.geekbuying.com/item/BOXYM-Digital-Wrist-Blood-Pressure-Monitor-496774.html?pmrm=new-arrivals",
    price: "₹1334.09",
    strikeP: "₹1569.66",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-12-09/3-7V-108-Lamp-Beads-Solar-Wall-Lamp-480326-0._w280_.jpg",
    title:
      "3.7V 108 Lamp Beads Three-head Solar Split Wall Lamp Three-speed Induction Mode witn One Controller",
    title_url:
      "https://www.geekbuying.com/item/3-7V-108-Lamp-Beads-Solar-Wall-Lamp-480326.html?pmrm=new-arrivals",
    price: "₹1569.66",
    strikeP: "₹1726.70",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-18/DAJA-DJ6-Mini-Laser-Engraving-Machine-496695-0._w280_.jpg",
    title:
      "DAJA DJ6 24W Mini Portable Laser Engraving Machine High Precision Engraving Area 80mm x 80mm with Multiple-Protection",
    title_url:
      "https://www.geekbuying.com/item/DAJA-DJ6-Mini-Laser-Engraving-Machine-496695.html?pmrm=new-arrivals",
    price: "₹16331.81",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-10/LOKMAT-ATTACK-Bluetooth-Smartwatch-1-28-inch-TFT-Touch-Screen-Black-496293-0._w280_.jpg",
    title:
      "LOKMAT ATTACK Bluetooth Smartwatch 1.28 inch TFT Touch Screen Heart Rate Blood Pressure Monitor IP68 Water-Resistant 25 Days Standby Time - Black",
    title_url:
      "https://www.geekbuying.com/item/LOKMAT-ATTACK-Bluetooth-Smartwatch-1-28-inch-TFT-Touch-Screen-Black-496293.html?pmrm=new-arrivals",
    price: "₹2668.97",
    strikeP: "₹4082.36",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-01-18/Wireless-Air-Duster-Blower-6000mAh-494148-0._w280_.jpg",
    title:
      "Wireless Air Duster USB Dust Blower Handheld Dust Collector Rechargable Large Capacity Portable for PC Laptop Car Clean - 6000mAh Battery Capacity",
    title_url:
      "https://www.geekbuying.com/item/Wireless-Air-Duster-Blower-6000mAh-494148.html?pmrm=new-arrivals",
    price: "₹4710.54",
    strikeP: "₹5495.76",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-01-18/eMeet-Luna-Lite-Portable-Computer-Speaker-VoiceIA-Noise-Reduction-Mode-494154-0._w280_.jpg",
    title:
      "eMeet Luna Lite Portable Computer Speaker VoiceIA Noise Reduction Mode, USB, Bluetooth, AUX Connection",
    title_url:
      "https://www.geekbuying.com/item/eMeet-Luna-Lite-Portable-Computer-Speaker-VoiceIA-Noise-Reduction-Mode-494154.html?pmrm=new-arrivals",
    price: "₹5966.89",
    strikeP: "₹8322.56",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-21/COLMI-P8-Mix-Smartwatch-White-496744-0._w280_.jpg",
    title:
      "COLMI P8 Mix Smartwatch Large Screen Fashion Sports and Health Monitor Watch White",
    title_url:
      "https://www.geekbuying.com/item/COLMI-P8-Mix-Smartwatch-White-496744.html?pmrm=new-arrivals",
    price: "₹2590.44",
    strikeP: "₹3140.10",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-01-20/Sunset-Lamp-RGB-16-Colors-APP-Control-494268-0._w280_.jpg",
    title:
      "Sunset Lamp RGB 16 Colors APP Remote Control Atmosphere Projection Led Night Light for Home Bedroom Shop",
    title_url:
      "https://www.geekbuying.com/item/Sunset-Lamp-RGB-16-Colors-APP-Control-494268.html?pmrm=new-arrivals",
    price: "₹1177.05",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-01-13/Yijie-Vertical-Storage-Toilet-Brush-493440-0._w280_.jpg",
    title:
      "Yijie Vertical Storage Soft Glue Bristles Toilet Brushes And Holder Cleaner Set Silica Bathroom Cleaning Tool from Xiaomi Youpin",
    title_url:
      "https://www.geekbuying.com/item/Yijie-Vertical-Storage-Toilet-Brush-493440.html?pmrm=new-arrivals",
    price: "₹1255.57",
    strikeP: "₹1569.66",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-09/c30bd3db76694e878d92f62ae9c0fea3-496232-0._w280_.jpg",
    title:
      "Seagate STKM5000400 5TB External Mobile Hard Drive 2.5 Inch USB 3.0 Compatible with Win&MAC- Black",
    title_url:
      "https://www.geekbuying.com/item/Seagate-STKM5000400-5TB-External-Mobile-Hard-Drive-2-5-Inch-USB-3-0-Compatible-with-Win-MAC--Black-496232.html?pmrm=new-arrivals",
    price: "₹13347.97",
    strikeP: "₹17081.70",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-09/FIMI-Palm-2-Pro-3-axis-Gimbal-Camera-496224-0._w280_.jpg",
    title:
      "FIMI Palm 2 Pro 3-axis Gimbal Camera CMOS Sensor Slow Motion 3X Zoom 4K@30fps 128 Degree Wide Angle Lens F2.2 Aperture",
    title_url:
      "https://www.geekbuying.com/item/FIMI-Palm-2-Pro-3-axis-Gimbal-Camera-496224.html?pmrm=new-arrivals",
    price: "₹24341.07",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-10/Lenovo-PD1X-TWS-HiFi-Music-Earphone-Wireless-Black-496312-0._w280_.jpg",
    title:
      "Lenovo PD1X TWS HiFi Music Bluetooth Earphone With Mic Headphones Sports Headset Black",
    title_url:
      "https://www.geekbuying.com/item/Lenovo-PD1X-TWS-HiFi-Music-Earphone-Wireless-Black-496312.html?pmrm=new-arrivals",
    price: "₹1098.52",
    strikeP: "₹1177.05",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-12-10/remote-control-speed-poo-b8e6ad-1639100401059._w280_.jpg",
    title:
      "Remote Control Speed Poo Drive and Spin Prank Toys for Kids Joke Family Games and Party Fun",
    title_url:
      "https://www.geekbuying.com/item/Remote-Control-Speed-Poo-480338.html?pmrm=new-arrivals",
    price: "₹1020.00",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-18/Rogbid-Brave-Pro-Smart-Watch-IP68-Waterproof-4GB-64GB-Black-496698-0._w280_.jpg",
    title:
      "Rogbid Brave Pro 1.69-Inch Full-touch IPS Screen 4G LTE Smart Watch 4GB+64GB IP68 Waterproof",
    title_url:
      "https://www.geekbuying.com/item/Rogbid-Brave-Pro-Smart-Watch-IP68-Waterproof-4GB-64GB-Black-496698.html?pmrm=new-arrivals",
    price: "₹19237.13",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-17/Xiaomi-ShowSee-Electric-Sonic-Toothbrush-496644-0._w280_.jpg",
    title:
      "Xiaomi ShowSee Electric Sonic Toothbrush 3 Modes of Tooth Cleaning & Tooth Care Magnetic Levitation Motor - Pink",
    title_url:
      "https://www.geekbuying.com/item/Xiaomi-ShowSee-Electric-Sonic-Toothbrush-496644.html?pmrm=new-arrivals",
    price: "₹1726.70",
    strikeP: "₹1805.22",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-15/Multi---Needle-Intelligent-Alarm-Oven-Barbecue-Food-Thermometer-496566-0._w280_.jpg",
    title:
      "Multi - Needle Intelligent Alarm Oven Barbecue Food Thermometer Waterproof Thermometer for Meat - Black",
    title_url:
      "https://www.geekbuying.com/item/Multi---Needle-Intelligent-Alarm-Oven-Barbecue-Food-Thermometer-496566.html?pmrm=new-arrivals",
    price: "₹1648.18",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-10/LOKMAT-OCEAN-Bluetooth-Smartwatch-1-14-inch-TFT-Touch-Screen-Blue-496290-0._w280_.jpg",
    title:
      "LOKMAT OCEAN Bluetooth Smartwatch 1.14 inch TFT Touch Screen Heart Rate Blood Pressure Monitor 5 ATM Water-Resistant 170mAh Battery - Blue",
    title_url:
      "https://www.geekbuying.com/item/LOKMAT-OCEAN-Bluetooth-Smartwatch-1-14-inch-TFT-Touch-Screen-Blue-496290.html?pmrm=new-arrivals",
    price: "₹2119.31",
    strikeP: "₹2354.88",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-01-28/Kospet-Magic-4-V5-0-Bluetooth-Smartwatch-1-32--TFT-Touch-Screen-Black-495405-0._w280_.jpg",
    title:
      "Kospet Magic 4 V5.0 Bluetooth Smartwatch 1.32 Inch TFT Touch Screen Heart Rate Blood Pressure Monitor Women's Menstrual Period Reminder 20 Sports Modes 5ATM Water Resistant 30 Days Long Standby Time Multi-language - Black",
    title_url:
      "https://www.geekbuying.com/item/Kospet-Magic-4-V5-0-Bluetooth-Smartwatch-1-32--TFT-Touch-Screen-Black-495405.html?pmrm=new-arrivals",
    price: "₹3140.10",
    strikeP: "₹3297.14",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-21/COLMI-SKY-8-Smartwatch-Black-496749-0._w280_.jpg",
    title:
      "COLMI SKY 8 Smartwatch Waterproof Dynamic Watch Face Lightweight Touch Screen Watch Sports and Health Monitor Black",
    title_url:
      "https://www.geekbuying.com/item/COLMI-SKY-8-Smartwatch-Black-496749.html?pmrm=new-arrivals",
    price: "₹2511.92",
    strikeP: "₹2747.49",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-01-14/QCY-G1-TWS-Bluetooth-5-2-45ms-Low-Latency-Gaming-Earbuds-493941-0._w280_.jpg",
    title:
      "QCY G1 TWS V5.2 Bluetooth Gaming Earbuds 45ms Low Latency Headphone Stereo Sound 4 Mic+ENC",
    title_url:
      "https://www.geekbuying.com/item/QCY-G1-TWS-Bluetooth-5-2-45ms-Low-Latency-Gaming-Earbuds-493941.html?pmrm=new-arrivals",
    price: "₹2668.97",
    strikeP: "₹3140.10",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-21/Xiaomi-Eraclean-Refrigerator-Deodorizer-Max-496772-0._w280_.jpg",
    title:
      "Xiaomi Eraclean Refrigerator Deodorizer Max Food Preservation & Double Sterilization Work with Mijia App - White",
    title_url:
      "https://www.geekbuying.com/item/Xiaomi-Eraclean-Refrigerator-Deodorizer-Max-496772.html?pmrm=new-arrivals",
    price: "₹3375.67",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-10/Zeblaze-Beyond-GPS-Bluetooth-Smartwatch-1-78-inch-AMOLED-Screen-Black-496297-0._w280_.jpg",
    title:
      "Zeblaze Beyond GPS Bluetooth Smartwatch 1.78 inch AMOLED Screen Heart Rate Blood Pressure Monitor 5ATM Water-Resistant 40 Days Standby Time - Black",
    title_url:
      "https://www.geekbuying.com/item/Zeblaze-Beyond-GPS-Bluetooth-Smartwatch-1-78-inch-AMOLED-Screen-Black-496297.html?pmrm=new-arrivals",
    price: "₹5966.89",
    strikeP: "₹6909.16",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-21/COLMI-P8-Plus-1-69-inch-Smart-Watch-IP67-waterproof-black-496760-0._w280_.jpg",
    title:
      "COLMI P8 Plus 1.69 inch Smart Watch IP67 waterproof Heart Rate Blood Pressure Blood Oxygen Black",
    title_url:
      "https://www.geekbuying.com/item/COLMI-P8-Plus-1-69-inch-Smart-Watch-IP67-Waterproof-Black-496760.html?pmrm=new-arrivals",
    price: "₹2747.49",
    strikeP: "₹3140.10",
  },
];

localStorage.setItem("newArrLanding", JSON.stringify(newA));
let BestS = [
  {
    image:
      "https://img.gkbcdn.com/p/2020-04-03/ENCHEN-Multi-purpose-Electric-Hair-Clipper-Trimmer-Black-901271-._w280_.jpg",
    title:
      "ENCHEN Multi-purpose Electric Hair Clipper Trimmer Two Speed Ceramic Cut Positioning Comb Smart Display USB Charging Child Shaving Hair Adult Household Baby From Xiaomi Youpin - Black",
    title_url:
      "https://www.geekbuying.com/item/ENCHEN-Multi-purpose-Electric-Hair-Clipper-Trimmer-Black-424022.html?pmrm=best-sellers",
    price: "₹1334.09",
    strikeP: "₹1491.13",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-03-22/tronsmart-glary-virtual-7-1-gaming-headset-1571985014193._w280_.jpg",
    title:
      "Tronsmart Glary Gaming Headset 7.1 Virtual Surround Sound Stereo Sound with Colorful LED Lighting USB Interface Mic for PC Laptop",
    title_url:
      "https://www.geekbuying.com/item/Tronsmart-Glary-Virtual-7-1-Gaming-Headset-411240.html?pmrm=best-sellers",
    price: "₹2354.88",
    strikeP: "₹2904.53",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-02-20/stmagic-spt31-512g-mini-portable-m-2-ssd-gray-1571995742585._w280_.jpg",
    title:
      "STmagic SPT31 512GB Mini Portable M.2 SSD USB3.1 Solid State Drive Read Speed 500MB/s - Gray",
    title_url:
      "https://www.geekbuying.com/item/STmagic-SPT31-512G-Mini-Portable-M-2-SSD-Gray-413873.html?pmrm=best-sellers",
    price: "₹5495.76",
    strikeP: "₹7223.25",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2020-05-12/GameSir-T4-Pro-Bluetooth---2-4GHz-Wireless-Game-Controller-Black-904006-._w280_.jpg",
    title:
      "GameSir T4 Pro Multi-platform Bluetooth Game Controller 2.4GHz Wireless Gamepad for iOS 13.4 / Android / PC / Nintendo Switch",
    title_url:
      "https://www.geekbuying.com/item/GameSir-T4-Pro--Multi-platform-Bluetooth-Wireless-Gamepad-424726.html?pmrm=best-sellers",
    price: "₹2747.49",
    strikeP: "₹3140.10",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-mega-bluetooth-speaker-black-1571991584812._w280_.jpg",
    title:
      "Tronsmart Element Mega SoundPulse™ Bluetooth 5.0 Speaker with Powerful 40W Max Output 3D Digital Sound TWS Intuitive Touch Control - Black",
    title_url:
      "https://www.geekbuying.com/item/Tronsmart-Element-Mega-Bluetooth-Speaker-Black-388375.html?pmrm=best-sellers",
    price: "₹3454.19",
    strikeP: "₹5260.20",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-07-06/2-4g-controller-gamepad-1625560641219._w280_.jpg",
    title:
      "2.4G Wireless Game Controller with OTG Converter For PS3/Smart Phone Tablet PC Smart TV BOX",
    title_url:
      "https://www.geekbuying.com/item/2-4G-Game-Controller-for-PS3-Android-iOS-461132.html?pmrm=best-sellers",
    price: "₹1255.57",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2018-10-22/kingston-a400-ssd-480gb-sata-3-2-5-inch-solid-state-drive-dark-gray-1571984759547._w280_.jpg",
    title:
      "Kingston A400 SSD 480GB SATA 3 2.5 Inch Solid State Drive SA400S37/120G For Desktops And Notebooks - Dark Gray",
    title_url:
      "https://www.geekbuying.com/item/Kingston-A400-SSD-480GB-SATA-3-2-5-Inch-Solid-State-Drive-Dark-Gray-406481.html?pmrm=best-sellers",
    price: "₹7066.20",
    strikeP: "₹7851.42",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-04-18/mecool-km9-pro-amlogic-s905x2-android-tv-9-0-4gb-32b-tv-box-1571982172624._w280_.jpg",
    title:
      "MECOOL KM9 Pro Google Certified Amlogic S905X2 Android TV 9.0 OS 4GB DDR4 32GB eMMC YouTube 4K TV Box with Voice Remote Dual Band WiFi LAN Bluetooth USB 3.0",
    title_url:
      "https://www.geekbuying.com/item/MECOOL-KM9-Pro-Amlogic-S905X2-Android-TV-9-0-4GB-32B-TV-Box-415834.html?pmrm=best-sellers",
    price: "₹5495.76",
    strikeP: "₹6438.03",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2018-12-28/sg106-1080p-wifi-fpv-rc-drone-rtf-black-1574132216240._w280_.jpg",
    title:
      "ZLL SG106 Wifi FPV RC Drone with 1080P HD Camera Optical Flow Positioning RTF - Black",
    title_url:
      "https://www.geekbuying.com/item/SG106-1080P-WiFi-FPV-RC-Drone-RTF-Black-412346.html?pmrm=best-sellers",
    price: "₹3925.32",
    strikeP: "₹4710.54",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-10-10/tanix-tx3-amlogic-s905x3-8k-video-decode-android-9-0-tv-box-4gb-32gb--1574132449670._w280_.jpg",
    title:
      "TANIX TX3 ALICE UX Amlogic S905x3 8K Video Decode Android 9.0 TV Box 4GB/32GB Bluetooth 2.4G+5.8G WiFi LAN USB3.0 Youtube Netflix Google Play",
    title_url:
      "https://www.geekbuying.com/item/TANIX-TX3-Amlogic-S905x3-8K-Video-Decode-Android-9-0-TV-Box-4GB-32GB--420289.html?pmrm=best-sellers",
    price: "₹3611.23",
    strikeP: "₹4474.97",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-12-24/xiaomi-es3-so-white-3d-smart-floating-blade-head-razor-black-1577180518315._w280_.jpg",
    title:
      "So White (PINGJING)ES3 3D Smart Floating Blade Head Razor IPX7 Water Resistant USB Charging Electric Shaver for Man From Xiaomi Youpin - Black",
    title_url:
      "https://www.geekbuying.com/item/Xiaomi-ES3-SO-WHITE-3D-Smart-Floating-Blade-Head-Razor-Black-415235.html?pmrm=best-sellers",
    price: "₹1726.70",
    strikeP: "₹1883.75",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-02-09/gamebox-g5-32gb-video-game-console-with-2-gamepads-8fec60-1644387756223._w280_.jpg",
    title:
      "GAMEBOX G5 32GB Video Game Console with 2 Gamepads HDMI PSP/CPS/FC/GB/MD/SFC/N64/PS1/ATARI",
    title_url:
      "https://www.geekbuying.com/item/GAMEBOX-G5-game-console-458798.html?pmrm=best-sellers",
    price: "₹4710.54",
    strikeP: "₹5495.76",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-10-27/qcy-ht03-tws-earbuds-1635323027167._w280_.jpg",
    title:
      "QCY HT03 Bluetooth 5.1 ANC TWS Earbuds 35dB Noise Cancelling 4 Mic APP Control Pop Up Pairing",
    title_url:
      "https://www.geekbuying.com/item/QCY-HT03-TWS-Earbuds-475177.html?pmrm=best-sellers",
    price: "₹3140.10",
    strikeP: "₹3218.62",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2020-03-27/Enchen-Hummingbird-Electric-Hair-Clipper-Black-900148-._w280_.jpg",
    title:
      "Enchen Hummingbird Electric Hair Clipper USB Rechargeable Low Noise With 3 Hair Combs 1500mAh Lithium Battery From Xiaomi Youpin - Black",
    title_url:
      "https://www.geekbuying.com/item/Enchen-Hummingbird-Electric-Hair-Clipper-Black-423827.html?pmrm=best-sellers",
    price: "₹1962.27",
    strikeP: "₹2590.44",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-10-11/jjrc-x12-4k-gps-rc-drone-white-two-batteries-with-bag-1574132236117._w280_.jpg",
    title:
      "JJRC X12 AURORA 4K 5G WIFI 3KM FPV GPS Foldable RC Drone With 3Axis Gimbal 50X Digital Zoom Ultrasonic Positioning RTF - White Two Batteries with Bag",
    title_url:
      "https://www.geekbuying.com/item/JJRC-X12-4K-GPS-RC-Drone-White-Two-Batteries-with-Bag-420306.html?pmrm=best-sellers",
    price: "₹21985.40",
    strikeP: "₹25911.51",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2018-10-26/netac-p500-32gb-micro-sd-memory-card-tf-cards-blue-1571985799710._w280_.jpg",
    title: "Netac P500 32GB Micro SD Card TF Card Up To 80MB/S - Blue",
    title_url:
      "https://www.geekbuying.com/item/Netac-P500-32GB-Micro-SD-Memory-Card-TF-Cards-Blue-406940.html?pmrm=best-sellers",
    price: "₹548.87",
    strikeP: "₹784.44",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-09-11/xiaomi-youpin-60-in-1-household-toolkit-1571993979273._w280_.jpg",
    title:
      "JIUXUN TOOLS 60 in 1 Household Toolkit Repair Tool with Nail Hammer Movable Wrench Wire Cutter Phillips Screwdriver by Xiaomi Youpin",
    title_url:
      "https://www.geekbuying.com/item/Xiaomi-Youpin-60-in-1-Household-Toolkit-419633.html?pmrm=best-sellers",
    price: "₹1569.66",
    strikeP: "₹2354.88",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-03-30/xiaomi-mi-band-6-smart-bracelet-1-56-inch-screen-black-1617074128547._w280_.jpg",
    title:
      "Xiaomi Mi Band 6 Smart Bracelet Heart Rate Oximetry Monitor 1.56 inch Screen Bluetooth 5.0 50 Meters Water Resistance 30 Sports Modes CN Version - Black",
    title_url:
      "https://www.geekbuying.com/item/Xiaomi-Mi-Band-6-Smart-Bracelet-1-56-inch-Screen-Black-457731.html?pmrm=best-sellers",
    price: "₹3689.75",
    strikeP: "₹5417.24",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2018-04-13/logitech-c930e-1080p-hd-video-webcam-90-degree-extended-view-1571993532041._w280_.jpg",
    title:
      "Logitech C930c/C930e 1080P HD Video Webcam Auto Focus Dual Stereo 90-Degree Extended View Microsoft Lync 2013 And Skype Certified - Black",
    title_url:
      "https://www.geekbuying.com/item/Logitech-C930e-1080P-HD-Video-Webcam-90-Degree-Extended-View-396226.html?pmrm=best-sellers",
    price: "₹8401.08",
    strikeP: "₹15703.63",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-04-03/estrella-class10-micro-sd-memory-card-tf-for-phones-tablet-32g-1571984039891._w280_.jpg",
    title: "ESTRELLA Class10 SDHC 32GB Micro SD Card",
    title_url:
      "https://www.geekbuying.com/item/ESTRELLA-Class10-Micro-SD-Memory-Card-TF-for-Phones-Tablet-32G-397552.html?pmrm=best-sellers",
    price: "₹627.39",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2018-03-13/freesat-gtc-amlogic-s905d-2gb-16gb-tv-box--1571979491229._w280_.jpg",
    title:
      "GTMEDIA GTC DVB-T2/S2/C ISDB-T S905D DDR4 2GB eMMC 16GB 4K TV BOX Support Cccam Newcam Powervu Biss Key",
    title_url:
      "https://www.geekbuying.com/item/Freesat-GTC-Amlogic-S905D-2GB-16GB-TV-BOX--389145.html?pmrm=best-sellers",
    price: "₹6280.98",
    strikeP: "₹7851.42",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2020-01-07/Xiaomi-Mijia-LCD-Writing-Tablet-10-Inch-With-Pen-White-895504-._w280_.jpg",
    title: "Xiaomi Mijia XMXHB01WC LCD Writing Tablet 10 Inch With Pen - White",
    title_url:
      "https://www.geekbuying.com/item/Xiaomi-Mijia-LCD-Writing-Tablet-10-Inch-With-Pen-White-422868.html?pmrm=best-sellers",
    price: "₹1726.70",
    strikeP: "₹2826.01",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2020-04-22/sabbat-e12-bluetooth-5-0-tws-earphone-gunmetal-1587519936946._w280_.jpg",
    title:
      "Sabbat E12 Ultra Qualcomm QCC3020 CVC8.0 TWS Earbuds QI Wireless Charging Independent Use aptX/AAC/SBC Siri Google Assistant IPX5 - Gunmetal",
    title_url:
      "https://www.geekbuying.com/item/Sabbat-E12-Bluetooth-5-0-TWS-Earphone-Gunmetal-419981.html?pmrm=best-sellers",
    price: "₹3925.32",
    strikeP: "₹5181.67",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2018-11-09/gamesir-vx-e-sports-aimswitch-wireless-keyboard-mouse-combo-black-1571992487153._w280_.jpg",
    title:
      "GameSir VX E-sports AimSwitch Wireless Gaming 2.4G Keyboard Mouse Combo For PS4 / PS3 / Switch / Xbox One / PC - Black",
    title_url:
      "https://www.geekbuying.com/item/GameSir-VX-E-sports-AimSwitch-Wireless-Keyboard-Mouse-Combo-Black-405665.html?pmrm=best-sellers",
    price: "₹7066.20",
    strikeP: "₹9029.26",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2018-10-25/xiaomi-aqara-temperature-humidity-sensor-white-1574132919397._w280_.jpg",
    title:
      "2PCS Xiaomi Aqara Temperature Humidity Sensor Works with Apple Homekit, Other Aqara Smart Home Devices - White",
    title_url:
      "https://www.geekbuying.com/item/2PCS-Xiaomi-Aqara-Temperature-Humidity-Sensor-White-425369.html?pmrm=best-sellers",
    price: "₹2197.83",
    strikeP: "₹2904.53",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_.jpg",
    title:
      "Apods i500 Bluetooth 5.0 Pop-up Window TWS Earbuds Independent Usage Wireless Charging IPX5 - White",
    title_url:
      "https://www.geekbuying.com/item/Apods-i500-Bluetooth-5-0-Pop-up-Window-TWS-Earbuds--422056.html?pmrm=best-sellers",
    price: "₹1334.09",
    strikeP: "₹1962.27",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-04-12/4inch-32GB-Handheld-Portable-Game-Console-5000-Games-458415-1._w280_.jpg",
    title:
      "32GB Handheld Game Console 5000+ Games 4inch Screen Double Rocker MP3 EBook 4-Player Support NAME NES GBA SFC PSP MD 128Bit Arcade Games",
    title_url:
      "https://www.geekbuying.com/item/4inch-32GB-Handheld-Portable-Game-Console-5000-Games-458415.html?pmrm=best-sellers",
    price: "₹6280.98",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2020-11-02/QCY-T8-Bluetooth-5-0-TWS-Gaming-Earphones-426631-0._w280_.jpg",
    title:
      "QCY T8 Bluetooth 5.0 TWS Gaming Earphones AAC SBC Type C APP Control Pop Up Pairing Voice Assistant",
    title_url:
      "https://www.geekbuying.com/item/QCY-T8-Bluetooth-5-0-TWS-Gaming-Earphones-426631.html?pmrm=best-sellers",
    price: "₹1962.27",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-10-28/enchen-blackstone-3d-smart-electric-shaver-black-1574132742777._w280_.jpg",
    title:
      "Xiaomi Enchen BlackStone 3D Smart Floating Blade Head Electric Shaver Waterproof USB Charging For Men - Black",
    title_url:
      "https://www.geekbuying.com/item/Enchen-BlackStone-3D-Smart-Electric-Shaver-Black-420812.html?pmrm=best-sellers",
    price: "₹1491.13",
    strikeP: "₹2354.88",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-08-27/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994588089._w280_.jpg",
    title:
      "Tronsmart T2 Plus 20W Bluetooth 5.0 Speaker 24H Playtime NFC IPX7 Waterproof Soundbar with TWS,Siri,Micro SD",
    title_url:
      "https://www.geekbuying.com/item/Tronsmart-T2-Plus-20W--Bluetooth-5-0-Speaker-TWS-419179.html?pmrm=best-sellers",
    price: "₹2590.44",
    strikeP: "₹3297.14",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2018-11-09/xiaomi-airdots-tws-wireless-bluetooth-earphone-white-1574132356441._w280_.jpg",
    title:
      "Xiaomi Airdots TWS Wireless Bluetooth 5.0 In-ear Earphone Touch Control with Charging Box - White",
    title_url:
      "https://www.geekbuying.com/item/Xiaomi-Airdots-TWS-Wireless-Bluetooth-Earphone-White-408979.html?pmrm=best-sellers",
    price: "₹4553.50",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-05-19/MINISFORUM-EliteMini-X400-16GB-512GB-Ryzen5-Pro-4750G-Mini-PC-459798-0._w280_.jpg",
    title:
      "Minisforum EliteMini X400 16GB/512GB Ryzen7 Pro 4750G Mini PC Radeon Graphics 2100 MHz Windows 10 Pro Wifi 6 Gigabit LAN",
    title_url:
      "https://www.geekbuying.com/item/MINISFORUM-EliteMini-X400-16GB-512GB-Ryzen7-Pro-4750G-Mini-PC-459798.html?pmrm=best-sellers",
    price: "₹84017.86",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-03-18/tronsmart-element-t6-plus-bluetooth-speaker-black-1574132869322._w280_.jpg",
    title:
      "Tronsmart Element T6 Plus Portable Bluetooth 5.0 Speaker with 40W Max Output, Deep Bass, IPX6 Waterproof, TWS - Black",
    title_url:
      "https://www.geekbuying.com/item/Tronsmart-Element-T6-Plus-Bluetooth-Speaker-Black-414905.html?pmrm=best-sellers",
    price: "₹4710.54",
    strikeP: "₹6280.98",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-07-11/qcy-t3--bluetooth-5-0-tws-earphone-3d-stereo-1574132285489._w280_.jpg",
    title:
      "QCY T3 Bluetooth 5.0 TWS Earphones 3D Stereo 25 Hours Battery Life IPX5 Stereo/Mono Mode AAC/SBC Tech",
    title_url:
      "https://www.geekbuying.com/item/QCY-T3--Bluetooth-5-0-TWS-Earphone-3D-Stereo-417922.html?pmrm=best-sellers",
    price: "₹2354.88",
    strikeP: "₹2668.97",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-10-24/a95x-f3-air-amlogic-s905x3-android-9-0-8k-video-decode-tv-box-4gb-32gb-1574132894243._w280_.jpg",
    title:
      "A95X F3 Air Amlogic S905x3 4GB/32GB Android 9.0 8K Video Decode TV Box RGB Light 2.4G+5G MIMO WiFi Bluetooth LAN USB3.0 4K Youtube",
    title_url:
      "https://www.geekbuying.com/item/A95X-F3-Air-Amlogic-S905x3-Android-9-0-8K-Video-Decode-TV-Box-4GB-32GB-420716.html?pmrm=best-sellers",
    price: "₹3689.75",
    strikeP: "₹4710.54",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2020-05-09/Razer-Viper-Mini-RGB-Gaming-Mouse-61G-Ultra-Light-Black-903961-._w280_.jpg",
    title:
      "Razer Viper Mini RGB Gaming Mouse 8500 DPI Optical Sensor 6 Programmable Buttons 61G Ultra Light - Black",
    title_url:
      "https://www.geekbuying.com/item/Razer-Viper-Mini-RGB-Gaming-Mouse-61G-Ultra-Light-Black-424700.html?pmrm=best-sellers",
    price: "₹2983.05",
    strikeP: "₹3140.10",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-11-16/i100000-pro1-bluetooth-5-0-tws-earphones-used-independently-1574132876970._w280_.jpg",
    title:
      "Apods P300 Bluetooth 5.0 TWS Earphones Independent Usage Wireless Charging Real Battery Display - White",
    title_url:
      "https://www.geekbuying.com/item/Apods-P300-Bluetooth-5-0-TWS-Earphones-421313.html?pmrm=best-sellers",
    price: "₹2354.88",
    strikeP: "₹3140.10",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-01-14/MECOOL-KM6-Deluxe-4GB-64GB-Android-TV-10-0-TV-BOX-428277-0._w280_.jpg",
    title:
      "MECOOL KM6 Deluxe 4GB/64GB ROM Android TV 10.0 TV BOX Amlogic S905X4 2.5G+5G WIFI 6 Bluetooth 5.0 4K HDR",
    title_url:
      "https://www.geekbuying.com/item/MECOOL-KM6-Deluxe-4GB-64GB-Android-TV-10-0-TV-BOX-428277.html?pmrm=best-sellers",
    price: "₹7851.42",
    strikeP: "₹9421.87",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2020-09-16/PS3000-64GB-Gaming-Stick-10000--Games-426226-0._w280_.jpg",
    title:
      "PS3000 64GB 4K Retro Game Stick with 2 Wireless Gamepads 10000+ Games Pre-installed",
    title_url:
      "https://www.geekbuying.com/item/PS3000-64GB-Gaming-Stick-10000--Games-426226.html?pmrm=best-sellers",
    price: "₹3925.32",
    strikeP: "₹4710.54",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2017-08-11/xiaomi-yeelight-motion-sensor-night-light-white-1571990951696._w280_.jpg",
    title:
      "Xiaomi Yeelight YLYD01YL LED Sensor Night Light Body Motion IR Sensor Magnetic USB Rechargeable Lamp -White",
    title_url:
      "https://www.geekbuying.com/item/Xiaomi-Yeelight-Motion-Sensor-Night-Light-White-384340.html?pmrm=best-sellers",
    price: "₹1491.13",
    strikeP: "₹2354.88",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2018-04-12/dualshock-bluetooth-gamepad-for-playstation-3-black-1571983025673._w280_.jpg",
    title:
      "Six-Axis DualShock Wireless Bluetooth Gamepad for PlayStation 3 Controller - Black",
    title_url:
      "https://www.geekbuying.com/item/DualShock-Bluetooth-Gamepad-for-PlayStation-3-Black-396067.html?pmrm=best-sellers",
    price: "₹941.48",
    strikeP: "₹1020.00",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-12-09/3-7V-108-Lamp-Beads-Solar-Wall-Lamp-480326-0._w280_.jpg",
    title:
      "3.7V 108 Lamp Beads Three-head Solar Split Wall Lamp Three-speed Induction Mode witn One Controller",
    title_url:
      "https://www.geekbuying.com/item/3-7V-108-Lamp-Beads-Solar-Wall-Lamp-480326.html?pmrm=best-sellers",
    price: "₹1569.66",
    strikeP: "₹1726.70",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-11-03/one-netbook-4-platinum-laptop-i7-1160g7-16gb-ddr4-ram-1tb-black-1635931150152._w280_.jpg",
    title:
      'One Netbook 4 Platinum Laptop 360 Degree YOGA 10.1" Touch Screen Intel Core i7-1160G7 16GB DDR4 RAM 1TB PCI-E SSD WiFi 6 Windows 10 Fingerprint - Black',
    title_url:
      "https://www.geekbuying.com/item/One-Netbook-4-Platinum-Laptop-i7-1160G7-16GB-DDR4-RAM-1TB-Black-449719.html?pmrm=best-sellers",
    price: "₹115426.70",
    strikeP: "₹145108.06",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-10-14/pamu-slide-bluetooth5-0-earphones-qualcomm-qcc3020-black-1574132183623._w280_.jpg",
    title:
      "PaMu Slide Bluetooth5.0 Qualcomm QCC3020 Earphones Use Independently aptX/AAC/SBC IPX6 2000mAh Charging Box",
    title_url:
      "https://www.geekbuying.com/item/PaMu-Slide-Bluetooth5-0-Earphones-Qualcomm-QCC3020-Black-420385.html?pmrm=best-sellers",
    price: "₹8636.65",
    strikeP: "₹9421.87",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-03-22/tanix-tx6-allwinner-h6-android-9-0-4gb-64gb-tv-box-1571982459470._w280_.jpg",
    title:
      "TANIX TX6 Allwinner H6 Android 9.0 4GB/64GB 6K TV Box with LED Display Dual Band WiFi LAN Bluetooth USB3.0",
    title_url:
      "https://www.geekbuying.com/item/TANIX-TX6-Allwinner-H6-Android-9-0-4GB-64GB-TV-Box-415190.html?pmrm=best-sellers",
    price: "₹3925.32",
    strikeP: "₹4946.11",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2018-10-12/tronsmart-element-groove-bluetooth-speaker-black-1571990196258._w280_.jpg",
    title:
      "Tronsmart Element Groove(Force Mini) Portable Bluetooth 5.0 Speaker Voice Assistant IPX7 Water-resistant 24 Hours Playtime Superior Bass - Black",
    title_url:
      "https://www.geekbuying.com/item/Tronsmart-Element-Groove-Bluetooth-Speaker-Black-405448.html?pmrm=best-sellers",
    price: "₹1962.27",
    strikeP: "₹2511.92",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-10-24/tronsmart-element-t6-max-60w-bluetooth-5-0-nfc-speaker-black-1574132858241._w280_.jpg",
    title:
      "Tronsmart Element T6 Max 60W Bluetooth 5.0 NFC Speaker SoundPulse™ 20 Hours Playtime Siri Google Assistant Cortana USB-C Fast Charge",
    title_url:
      "https://www.geekbuying.com/item/Tronsmart-Element-T6-Max-60W-Bluetooth-5-0-NFC-Speaker-Black-420554.html?pmrm=best-sellers",
    price: "₹7851.42",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-force-portable-bluetooth-speaker-1571993707403._w280_.jpg",
    title:
      "Tronsmart Force SoundPulse™ 40W Bluetooth 5.0 Speaker IPX7 Water Resistant Siri TWS & NFC 15 Hours Playtime",
    title_url:
      "https://www.geekbuying.com/item/Tronsmart-Element-Force-Portable-Bluetooth-Speaker-407865.html?pmrm=best-sellers",
    price: "₹4003.84",
    strikeP: "₹5495.76",
  },
];

localStorage.setItem("bestSellers", JSON.stringify(BestS));
let recom = [
  {
    image:
      "https://img.gkbcdn.com/p/2019-09-24/kugoo-s1-pro-folding-electric-scooter-350w-motor-8-0-inch-tire-white-1574132522862._w280_.jpg",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2022-01-13/External-Hard-Drive-Seagate-BASIC-2-5-USB-3-2-960-MB-s-Black-493438-0._w280_.jpg",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-07-05/Hi96-V3-Android-9-0-Hi3798M-V310-1GB-8GB-TV-BOX-461096-0._w280_.jpg",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2019-07-05/tronsmart-element-force-portable-bluetooth-speaker-1571994482583._w280_.jpg",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-01-26/proscenic-m8-pro-smart-robot-vacuum-cleaner---dust-collector-black-1611657284151._w280_.jpg",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-09-01/NAVEE--N65-10in-48V-500W-65KM-Mileage-Electric-Scooter-471545-3._w280_.jpg",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2020-12-17/engwe-ep-2-pro-folding-fat-tire-electric-moped-bicycle-green-1608186539235._w280_.jpg",
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-12-27/kugookirin-g3-electric-scooter-1200w-motor-52v-18ah-battery-217364-1640589906322._w280_.jpg",
  },
];
localStorage.setItem("recom", JSON.stringify(recom));
