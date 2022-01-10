let data1 = [
  {
    title: "ยำอกไก่ฉีก",
    cal: 170,
  },
  {
    title: "อกไก่พริกไทยดำย่าง",
    cal: 120,
  },
  {
    title: "ยำไก่ย่างแตงกวา",
    cal: 240,
  },
  {
    title: "โจ๊กข้าวโอ๊ตใส่อกไก่สับและผัก",
    cal: 160,
  },
  {
    title: "สุกี้นำ้อกไก่",
    cal: 350,
  },
  {
    title: "สลัดปลาย่าง",
    cal: 200,
  },
  {
    title: "แกงส้มผักรวมกับปลา + ข้าวกล้อง",
    cal: 180,
  },
  {
    title: "โจ๊กหมู/ข้าวต้มหมู",
    cal: 160,
  },
  {
    title: "ปลานึ่งมะนาว/ปลาเผา",
    cal: 155,
  },
  {
    title: "ยำเห็ดฟาง",
    cal: 164,
  },
  {
    title: "เห็ดฟางผัดน้ำมันหอย",
    cal: 185,
  },
  {
    title: "ยำเห็ดเข็มทอง",
    cal: 100,
  },
  {
    title: "กะเพราอกไก่+ข้าวไรซ์เบอร์รี",
    cal: 450,
  },
  {
    title: "เกาเหลาหมูชิ้น ไม่ใส่กระเทียมเจียว",
    cal: 150,
  },
  {
    title: "ฟักทองผัดไข่+ข้าวกล้อง",
    cal: 220,
  },
  {
    title: "ยำวุ้นเส้นเน้นผัก",
    cal: 160,
  },
  {
    title: "ข้าวกล้องต้มใส่ผักและปลาแห้ง",
    cal: 250,
  },
  {
    title: "โจ๊กใส่ไข่ขาว เห็ดหอม และแครอท",
    cal: 190,
  },
  {
    title: "ข้าวมันอกไก่+แกงจืด",
    cal: 650,
  },
  {
    title: "ยำเห็ดรวมมิตร",
    cal: 160,
  },
  {
    title: "สปาเกตตีเส้นโฮลวีตอกไก่",
    cal: 550,
  },
  {
    title: "สลัดผัก+ไข่ต้ม 2 ฟอง",
    cal: 260,
  },
  {
    title: "ผัดผักกุ้ง+ข้าวกล้อง",
    cal: 310,
  },
  {
    title: "สเต๊กไก่เทริยากิ+ผักนึ่ง",
    cal: 420,
  },
  {
    title: "ส้มตำ+อกไก่ย่าง",
    cal: 280,
  },
  {
    title: "แกงจืดวุ้นเส้นไข่น้ำ+ข้าวกล้อง",
    cal: 310,
  },
  {
    title: "ข้าวต้มกุ้ง+น้ำส้ม",
    cal: 240,
  },
  {
    title: "เส้นหมี่ข้าวกล้องผัดซีอิ๊วอกไก่",
    cal: 450,
  },
  {
    title: "แซนด์วิชอกไก่ย่างพร้อมผัก",
    cal: 270,
  },
  {
    title: "ก๋วยเตี๋ยวลุยสวนหมูสับ+ผลไม้",
    cal: 400,
  },
  {
    title: "สเต๊กไก่พริกไทยดำ+ผักนึ่ง",
    cal: 370,
  },
  {
    title: "ซุปมันฝรั่งมะเขืออกไก่",
    cal: 130,
  },
  {
    title: "สุกี้น้ำเส้นบุกทะเล",
    cal: 280,
  },
  {
    title: "แซนด์วิชสลัดไข่",
    cal: 180,
  },
  {
    title: "ไข่ตุ๋นอกไก่+ฟักทองนึ่ง",
    cal: 360,
  },
  {
    title: "ข้าวไข่ข้นกุ้งสด",
    cal: 250,
  },
  {
    title: "ต้มยำกุ้งน้ำใส+ข้าวกล้อง",
    cal: 210,
  },
  {
    title: "น้ำพริก+ปลาทูทอด+ไข่ต้ม+ข้าวกล้อง",
    cal: 490,
  },
];
let data2 = [
  {
    title: "ทูน่าสลัด",
    cal: 153,
  },
  {
    title: "ยำไข่ต้ม 88/1ฟอง",
    cal: null,
  },
  {
    title: "ลาบอโวคาโด",
    cal: 196,
  },
  {
    title: "ขนมปังโฮลวีตทาอะโวคาโดบด",
    cal: 220,
  },
  {
    title: "ปลาเก๋าย่างสลัดมะม่วง",
    cal: 372,
  },
  {
    title: "สลัดปลาย่าง",
    cal: 281,
  },
  {
    title: "เบคอนกรอกไข่กวน",
    cal: 371,
  },
  {
    title: "เมี่ยงปลาเผา",
    cal: 200,
  },
  {
    title: "ขนมปังทาโยเกิร์ต โรยอัลมอนด์",
    cal: 300,
  },
  {
    title: "ยำลูกชิ้นปลา+ข้าวกล้อง",
    cal: 210,
  },
  {
    title: "ไข่กระทะ+ขนมปังโฮลวีตปิ้ง 1 แผ่น",
    cal: 500,
  },
  {
    title: "สลัดแซลมอน",
    cal: 300,
  },
  {
    title: "ข้าวหน้าปลาแซลมอนย่างเกลือ",
    cal: 250,
  },
  {
    title: "ข้าวปั้นไส้แซลมอน 1 ชิ้น",
    cal: 200,
  },
  {
    title: "ขนมปังปิ้งทาอะโวคาโด+แซลมอนรมควัน+น้ำส้ม 1แก้ว",
    cal: 380,
  },
];
var app = new Vue({
  el: "#app",
  data: {
    title: "Firm Fun Fit",
    height: null,
    weight: null,
    bmi_value: null,
    bmi_size: null,
    calorie_require: null,
    page: 1,
    data2: [
      {
        title: "ทูน่าสลัด",
        cal: 153,
      },
      {
        title: "ยำไข่ต้ม 88/1ฟอง",
        cal: null,
      },
      {
        title: "ลาบอโวคาโด",
        cal: 196,
      },
      {
        title: "ขนมปังโฮลวีตทาอะโวคาโดบด",
        cal: 220,
      },
      {
        title: "ปลาเก๋าย่างสลัดมะม่วง",
        cal: 372,
      },
      {
        title: "สลัดปลาย่าง",
        cal: 281,
      },
      {
        title: "เบคอนกรอกไข่กวน",
        cal: 371,
      },
      {
        title: "เมี่ยงปลาเผา",
        cal: 200,
      },
      {
        title: "ขนมปังทาโยเกิร์ต โรยอัลมอนด์",
        cal: 300,
      },
      {
        title: "ยำลูกชิ้นปลา+ข้าวกล้อง",
        cal: 210,
      },
      {
        title: "ไข่กระทะ+ขนมปังโฮลวีตปิ้ง 1 แผ่น",
        cal: 500,
      },
      {
        title: "สลัดแซลมอน",
        cal: 300,
      },
      {
        title: "ข้าวหน้าปลาแซลมอนย่างเกลือ",
        cal: 250,
      },
      {
        title: "ข้าวปั้นไส้แซลมอน 1 ชิ้น",
        cal: 200,
      },
      {
        title: "ขนมปังปิ้งทาอะโวคาโด+แซลมอนรมควัน+น้ำส้ม 1แก้ว",
        cal: 380,
      },
    ],
    data1: [
      {
        title: "ยำอกไก่ฉีก",
        cal: 170,
      },
      {
        title: "อกไก่พริกไทยดำย่าง",
        cal: 120,
      },
      {
        title: "ยำไก่ย่างแตงกวา",
        cal: 240,
      },
      {
        title: "โจ๊กข้าวโอ๊ตใส่อกไก่สับและผัก",
        cal: 160,
      },
      {
        title: "สุกี้นำ้อกไก่",
        cal: 350,
      },
      {
        title: "สลัดปลาย่าง",
        cal: 200,
      },
      {
        title: "แกงส้มผักรวมกับปลา + ข้าวกล้อง",
        cal: 180,
      },
      {
        title: "โจ๊กหมู/ข้าวต้มหมู",
        cal: 160,
      },
      {
        title: "ปลานึ่งมะนาว/ปลาเผา",
        cal: 155,
      },
      {
        title: "ยำเห็ดฟาง",
        cal: 164,
      },
      {
        title: "เห็ดฟางผัดน้ำมันหอย",
        cal: 185,
      },
      {
        title: "ยำเห็ดเข็มทอง",
        cal: 100,
      },
      {
        title: "กะเพราอกไก่+ข้าวไรซ์เบอร์รี",
        cal: 450,
      },
      {
        title: "เกาเหลาหมูชิ้น ไม่ใส่กระเทียมเจียว",
        cal: 150,
      },
      {
        title: "ฟักทองผัดไข่+ข้าวกล้อง",
        cal: 220,
      },
      {
        title: "ยำวุ้นเส้นเน้นผัก",
        cal: 160,
      },
      {
        title: "ข้าวกล้องต้มใส่ผักและปลาแห้ง",
        cal: 250,
      },
      {
        title: "โจ๊กใส่ไข่ขาว เห็ดหอม และแครอท",
        cal: 190,
      },
      {
        title: "ข้าวมันอกไก่+แกงจืด",
        cal: 650,
      },
      {
        title: "ยำเห็ดรวมมิตร",
        cal: 160,
      },
      {
        title: "สปาเกตตีเส้นโฮลวีตอกไก่",
        cal: 550,
      },
      {
        title: "สลัดผัก+ไข่ต้ม 2 ฟอง",
        cal: 260,
      },
      {
        title: "ผัดผักกุ้ง+ข้าวกล้อง",
        cal: 310,
      },
      {
        title: "สเต๊กไก่เทริยากิ+ผักนึ่ง",
        cal: 420,
      },
      {
        title: "ส้มตำ+อกไก่ย่าง",
        cal: 280,
      },
      {
        title: "แกงจืดวุ้นเส้นไข่น้ำ+ข้าวกล้อง",
        cal: 310,
      },
      {
        title: "ข้าวต้มกุ้ง+น้ำส้ม",
        cal: 240,
      },
      {
        title: "เส้นหมี่ข้าวกล้องผัดซีอิ๊วอกไก่",
        cal: 450,
      },
      {
        title: "แซนด์วิชอกไก่ย่างพร้อมผัก",
        cal: 270,
      },
      {
        title: "ก๋วยเตี๋ยวลุยสวนหมูสับ+ผลไม้",
        cal: 400,
      },
      {
        title: "สเต๊กไก่พริกไทยดำ+ผักนึ่ง",
        cal: 370,
      },
      {
        title: "ซุปมันฝรั่งมะเขืออกไก่",
        cal: 130,
      },
      {
        title: "สุกี้น้ำเส้นบุกทะเล",
        cal: 280,
      },
      {
        title: "แซนด์วิชสลัดไข่",
        cal: 180,
      },
      {
        title: "ไข่ตุ๋นอกไก่+ฟักทองนึ่ง",
        cal: 360,
      },
      {
        title: "ข้าวไข่ข้นกุ้งสด",
        cal: 250,
      },
      {
        title: "ต้มยำกุ้งน้ำใส+ข้าวกล้อง",
        cal: 210,
      },
      {
        title: "น้ำพริก+ปลาทูทอด+ไข่ต้ม+ข้าวกล้อง",
        cal: 490,
      },
    ],
  },
  methods: {
    bmiSubmit(e) {
      e.preventDefault();
      if (
        this.height == null ||
        this.weight == null ||
        this.height == "" ||
        this.weight == ""
      )
        return;
      this.bmi_value = (this.weight / (this.height / 100) ** 2).toFixed(2);
      if (this.bmi_value <= 15.0) {
        this.bmi_size = "Very severely underweight";
        this.calorie_require = "2500++";
      } else if (15.0 < this.bmi_value <= 16.0) {
        this.bmi_size = "Severely underweight";
        this.calorie_require = "2500++";
      } else if (16.0 < this.bmi_value <= 18.5) {
        this.bmi_size = "Underweight";
        this.calorie_require = "2500++";
      } else if (18.5 < this.bmi_value <= 25.0) {
        this.bmi_size = "Normal";
        this.calorie_require = "1600 - 2000";
      } else if (25.0 < this.bmi_value <= 30) {
        this.bmi_size = "Overweight";
        this.calorie_require = "1200 - 1400";
      } else if (30.0 < this.bmi_value <= 35.0) {
        this.bmi_size = "Moderately obese";
        this.calorie_require = "1200 - 1400";
      } else if (35.0 < this.bmi_value <= 40.0) {
        this.bmi_size = "Severely obese";
        this.calorie_require = "1200 - 1400";
      } else {
        this.bmi_size = "Die !!!!";
      }
      this.page = 2;
    },
    changPage(page, title) {
      this.page = page;
      this.title = title;
    },
  },
});
