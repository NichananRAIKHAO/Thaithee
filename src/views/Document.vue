<template>
      <div style="width: 1520px; height: 1125px;">
        <div class="w3-center" style="margin:100px; margin-left: 350px; color: white;">
          <div class="w3-bar" style="font-size: 20px;">
            <button class="w3-button w3-round-xxlarge" style="margin-right: 80px; background-color:#3D3C92;"><router-link to="/ใบขับขี่">ใบขับขี่</router-link></button>
            <button class="w3-button w3-round-xxlarge" style="margin-right: 80px; background-color:#3D3C92;"><router-link to="/บัตรประชาชน">บัตรประชาชน</router-link></button>
            <button class="w3-button w3-round-xxlarge" style="background-color:#3D3C92;"><router-link to="/หนังสือเดินทาง">หนังสือเดินทาง</router-link></button>
          </div>
          <div class="w3-bar" style="margin-top:100px; font-size: 20px;">
            <button class="w3-button w3-round-xxlarge" style="margin-right: 80px; background-color:#3D3C92;"><router-link to="/แจ้งเกิด">แจ้งเกิด</router-link></button>
            <button class="w3-button w3-round-xxlarge" style="margin-right: 80px; background-color:#3D3C92;"><router-link to="/แจ้งตาย">แจ้งตาย</router-link></button>
            <button class="w3-button w3-round-xxlarge" style="background-color:#3D3C92;"><router-link to="/แจ้งย้าย">แจ้งย้าย</router-link></button>
          </div>
          <div class="w3-bar" style="margin-top:100px; font-size: 20px;">
            <button class="w3-button w3-round-xxlarge" style="margin-right: 80px; background-color:#3D3C92;"><router-link to="/จดทะเบียนสมรส">จดทะเบียนสมรส</router-link></button>
            <button class="w3-button w3-round-xxlarge" style="margin-right: 80px; background-color:#3D3C92;"><router-link to="/จดทะเบียนหย่า">จดทะเบียนหย่า</router-link></button>
            <button class="w3-button w3-round-xxlarge" style="background-color:#3D3C92;"><router-link to="/พินัยกรรม">พินัยกรรม</router-link></button>
          </div>
          <div class="w3-bar" style="margin-top:100px; font-size: 20px;">
            <button class="w3-button w3-round-xxlarge" style="margin-right: 80px; background-color:#3D3C92;"><router-link to="/รับรองบุตร">รับรองบุตร</router-link></button>
            <button class="w3-button w3-round-xxlarge" style="margin-right: 80px; background-color:#3D3C92;"><router-link to="/ติดต่อรับศพ">ติดต่อรับศพ</router-link></button>
            <button class="w3-button w3-round-xxlarge" style="background-color:#3D3C92;"><router-link to="/บันทึกฐานะแห่งครอบครัว">บันทึกฐานะแห่งครอบครัว</router-link></button>
          </div>
          </div>
      </div>
</template>

<script>
export default {
    name:"document"
}
</script>

<style>
  .w3-button{
    background-color:#3D3C92;
    font-size: 25px;
    height: 150px;
    width: 200px;
  }
  a:link {text-decoration: none;} 

</style>
 
