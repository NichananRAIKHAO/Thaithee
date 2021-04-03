<template>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <title>THAITHEE: เอกสาร</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kanit">
  </head>
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
      <li style="margin-left:350px;"><router-link to="/">หน้าแรก</router-link></li>
      <li><router-link to="/document">เอกสาร</router-link></li>
      <li><a href="#">บอร์ด</a></li>
      <li><a href="#">ติดต่อ</a></li>
    </ul>
  </div>
  <router-view/>
  <div class="footer" style="width: 1520px; background-color: #1D1D36;">
    <div>
      <table>
        <tr style="color: #A4A3E7;">
          <td rowspan="5"><img src="../src/assets/thaithee-white.png" alt="Cinque Terre" width="300" height="170"></td>
          <td>QUICK NAVIGATION</td>
          <td>STAY CONNECTED</td>
          <td>GET IN TOUCH</td>
        </tr>
        <tr>
          <td><a href="homepage.html">หน้าแรก</a></td>
          <td><a href="#">Facebook</a></td>
          <td><a>Tel: 123-456-7890</a></td>
        </tr>
        <tr>
          <td><a href="document.html">เอกสาร</a></td>
          <td><a href="#">Twitter</a></td>
          <td><a href="#">thaithee@gmail.com</a></td>
        </tr>
        <tr>
          <td><a href="#">บอร์ด</a></td>
          <td><a href="#">Instagram</a></td>
          <td></td>
        </tr>
        <tr>
          <td><a href="#">ติดต่อ</a></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
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
    width: 1450px;
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
    width: 1520px;
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
