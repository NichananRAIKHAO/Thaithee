<template>
    <div style="width: 1520px; height: 1000px;">
        <h1 style="font-family: 'Kanit'; font-size: 50px; margin-top: 60px; text-align: center;"><b>ใบขับขี่</b></h1>
        <p style="font-family: 'Kanit'; font-size: 20px; margin-top: 30px; margin-left:350px; text-indent: 5%">ใบอนุญาตให้สามารถขับรถยนต์ รถจักรยานยนต์ หรือรถประเภทอื่น ๆ ตามที่ได้รับอนุญาตถ้าไม่มีใบอนุญาตขับขี่ <br>แล้วกระทำการขับขี่รถจะถือว่าเป็นการกระทำผิดตามกฎหมาย จะมีทั้งหมด 4 กรณีดังต่อไปนี้</p>
        <div class="w3-center" style="margin:100px; margin-top:50px; margin-left: 525px; color: white;">
          <div class="w3-bar" style="font-size: 20px;">
            <button class="w3-button w3-round-xxlarge" style="margin-right: 100px; background-color: #3D3C92; height: 100px; width: 450px;"><router-link to="/ใบขับขี่รถยนต์ส่วนบุคคลชั่วคราว">ใบขับขี่รถยนต์ส่วนบุคคลชั่วคราว</router-link></button>
          </div>
          <div class="w3-bar" style="margin-top:80px; font-size: 20px;">
            <button class="w3-button w3-round-xxlarge" style="margin-right: 80px; background-color: #3D3C92;  height: 100px; width: 450px;"><router-link to="/ใบขับขี่รถยนต์ส่วนบุคคล">ใบขับขี่รถยนต์ส่วนบุคคล</router-link></button>
          </div>
          <div class="w3-bar" style="margin-top:80px; font-size: 20px;">
            <button class="w3-button w3-round-xxlarge" style="margin-right: 80px; background-color: #3D3C92;  height: 100px; width: 450px;"><router-link to="/ต่ออายุใบขับขี่รถยนต์ส่วนบุคคล">ต่ออายุใบขับขี่รถยนต์ส่วนบุคคล</router-link></button>
          </div>
          <div class="w3-bar" style="margin-top:80px; font-size: 20px;">
            <button class="w3-button w3-round-xxlarge" style="margin-right: 80px; background-color: #3D3C92;  height: 100px; width: 450px;"><router-link to="/ใบขับขี่ระหว่างประเทศ">ใบขับขี่ระหว่างประเทศ</router-link></button>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"document_1"
}
</script>

  <style>
  </style>