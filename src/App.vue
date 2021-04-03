<template>
  <div class="sec1"> 
    <div>
      <table>
        <tr>
          <td width="200px"><a href="#"><b>เข้าสู่ระบบ</b></a></td>
          <td style="text-align:center"><img src="../src/assets/thaithee-darkblue.png" alt="Cinque Terre" width="300" height="170"></td>
          <td><a href="#"><img src="../src/assets/facebook.png" alt="Cinque Terre" width="30" height="30"></a></td>
          <td><a href="#"><img src="../src/assets/twitter.png" alt="Cinque Terre" width="30" height="30"></a></td>
          <td><a href="#"><img src="../src/assets/instagram.png" alt="Cinque Terre" width="30" height="30"></a></td>
        </tr>
      </table>
    </div>
  </div>
  
  <div class="nav">
    <ul>
      <li style="margin-left:350px;"><a href="#">หน้าแรก</a></li>
      <li><a href="#">เอกสาร</a></li>
      <li><a href="#">บอร์ด</a></li>
      <li><a href="#">ติดต่อ</a></li>
    </ul>
  </div>
  <router-view/>
</template>

<style>
div {
    float: left;
    font-family: 'Kanit';
    font-size: 20px;
}
.sec1{
    width: 100%;
    height: 170px;
}
.sec1 table{
    margin-left: 80px;
    width: 1400px;
}
.sec1 a{
    text-decoration: none;
    color: #1D1D36;
    display: block;
    font-size: 25px;
    transition: 0.4s;
}
body{
    float: left;
    font-family: 'Kanit';
    font-size: 20px;
}
.align3{  
    text-align: center;
}
.nav ul{
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: #1D1D36;
    text-align: left;
    width: 1500px;
}
.nav li {
    display:inline-block;
    margin-left: 150px;
}
.nav a{
    text-decoration: none;
    color: white;
    display: block;
    padding: 15px;
    font-size: 17px;
    transition: 0.4s;
}
footer{
    background-color: #1D1D36;
}
.footer table{
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 50px;
    width: 1400px;
    height: 200px;
    border-collapse: collapse;
}
.footer table td{
    font-size: 20px;
}
.footer a{
    text-decoration: none;
    color: white;
    display: block;
    font-size: 17px;
    transition: 0.4s;
}

.image { 
    position: relative; 
    width: 800px;
 }
 
h2 { 
    position: absolute; 
    top: 200px; 
    left: 50px; 
    width: 100%; 
}

</style>
