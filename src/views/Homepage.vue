<template>
    <div class="homepage" style="width: 1520px; height: 800px;">
      <h2 style="font-size: 80px; font-family: 'Kanit'; margin-top:250px;">ยินดีต้อนรับ</h2>
        <h2 style="margin-top:  90px; margin-left:  1px;  font-family: 'Kanit'; margin-top:340px;">เว็บไซต์รวบรวมการติดต่อราชการ</h2>
        <button class="button button4" style="margin-top:280px;"><router-link to="/สมัครสมาชิก">สมัครสมาชิก</router-link></button>
        <button class="button button4" style="transform:translate(-280%, -100%); background-color:white; color:#1D1D36; margin-top:280px;"><router-link to="/เข้าสู่ระบบ">เข้าสู่ระบบ</router-link></button>
    </div>
    
</template>

<script>
    export default {
        name:"homepage"
    }
</script>

<style>
    div{
      font-family: 'Kanit';
    }
    .homepage{
        background-image: url(../assets/homepage.png);
    }
   .button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-480%, -900%);
    -ms-transform: translate(-50%, -50%);
    display: inline-block;
    padding: 0.75rem 1.25rem;
    border-radius: 5rem;
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 0.15rem;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-393%, -100%);
    -ms-transform: translate(-50%, -50%);
    background-color: #1D1D36;
    color: white;
    font-size: 20px;
    padding: 15px;
    width: 180px;
    height: 55px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
  }
  
  .button4 {border-radius: 12px;}
</style>