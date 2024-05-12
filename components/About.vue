<template>
  <main class="flex flex-col h-auto p-16 ml-auto m-auto">
    <div class="container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img :src="`bg-3.png`" />
            <h3>עבודה מרחוק</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              פתרון גישה לעבודה מרחוק, עובדים מחוץ בית העסק שלכם עם כתובת IP לא
              מורשת למערכות העסק? עם תוכנית "VPN מכל מקום" שלנו תוכלו להתחבר
              מהמחשב, מהאייפון ומהאנדרואיד לרשת אחת סגורה עם כתובת IP פרטית שלכם
              ומשם תוכלו להתחבר למערכות העסק שלכם מבלי לפתוח גישה למקומות לא
              בטוחים באינטרנט, וכן, אפשר להתחבר בו זמנית עם כמה מכשירים שונים
              בהתאם לתכנית שבחרתם.
            </p>
            <a href="#">פרטיות ואמינות</a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content flex flex-col items-center justify-center">
            <img :src="`bg-2.png`" />
            <h3>פרטיות ואמינות</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              השירות שלנו פועל בתצורת IPVPN אשר איתו אתם "מסווים" את כתובת ה-IP
              המקורית שלכם בכל רגע נתון, המידע שלכם עובר בצורה מוצפנת דרך ה-VPN
              שלנו למניעת דליפה של מידע רגיש, השירות כרגע עובד עם כתובות IP
              מאירופה ומארצות הברית לבחירתכם.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.container {
  width: 1000px;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.container .card {
  position: relative;
  cursor: pointer;
}

.container .card .face {
  width: 400px;
  height: 200px;
  transition: 0.5s;
}

.container .card .face.face1 {
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(100px);
}

.container .card:hover .face.face1 {
  background: #0098df;
  transform: translateY(0);
}

.container .card .face.face1 .content {
  opacity: 0.4;
  transition: 0.5s;
}

.container .card:hover .face.face1 .content {
  opacity: 1;
}

.container .card .face.face1 .content img {
  max-width: 100px;
}

.container .card .face.face1 .content h3 {
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
}

.container .card .face.face2 {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-100px);
}

.container .card:hover .face.face2 {
  transform: translateY(0);
}

.container .card .face.face2 .content p {
  margin: 0;
  padding: 0;
}

.container .card .face.face2 .content a {
  margin: 15px 0 0;
  display: inline-block;
  text-decoration: none;
  font-weight: 900;
  color: #333;
  padding: 5px;
  border: 1px solid #333;
}

.container .card .face.face2 .content a:hover {
  background: #333;
  color: #fff;
}
</style>
