<template>
  <div class="outer-box">
    <div class="txt-container">
      <span class="heading">You're all set!</span>
      <span class="detail">
        Your technician visit has been scheduled
      </span>

      <div class="container">

        <!-- Row 1 -->
        <div class="row">
          <span class="img-container">
            <img src="../assets/bag.png" alt="">
          </span>
          <div class="content">
            <span class="label">Service</span>
            <span class="value">Water Heater Repair</span>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="row">
          <span class="img-container">
            <img src="../assets/calendar.png" alt="">
          </span>
          <div class="content">
            <span class="label">Date & Time</span>
            <span class="value">Tomorrow, Wed Mar 29 · 11:00 AM – 1:00 PM</span>
          </div>
        </div>

        <!-- Row 3 -->
        <div class="row">
          <span class="img-container">
            <img src="../assets/location.png" alt="">
          </span>
          <div class="content">
            <span class="label">Service Address</span>
            <span class="value">1452 West Elm Street, Anaheim, CA 92801</span>
          </div>
        </div>

        <!-- Row 4 -->
        <div class="row no-border">
          <span class="img-container">
            <img src="../assets/call.png" alt="">
          </span>
          <div class="content">
            <span class="label">Confirmation Sent To</span>
            <span class="value">(555) 214-7812</span>
          </div>
        </div>

        <!-- Bottom box -->
        <div class="bottom">
          You’ll receive a confirmation message with your appointment details shortly.
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.outer-box{
  display: flex;
  flex-direction: column;
  width: 616px;
  gap: 12px;
}

.txt-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.heading{
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: #111827;
}

.detail{
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  text-align: center;
  color: #6B7280;
}

.container{
  width: 576px;
  border-radius: 14px;
  background: #FFFFFF;
  border: 1px solid #E8E4FF;
  box-shadow: 0px 2px 12px rgba(107, 78, 255, 0.07);
  overflow: hidden;
}

/* Rows */
.row{
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid #F0EEF8;
}

.no-border{
  border-bottom: none;
}

/* Icon box */
.img-container{
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #F5F3FF;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-container img{
  width: 16px;
  height: 16px;
}

/* Text content */
.content{
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.label{
  font-family: 'Nunito', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #9090B0;
}

.value{
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #2A2A3E;
  line-height: 1.4;
}

/* Bottom message */
.bottom{
  margin: 12px;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #C4B5FD;
  background: #F5F3FF;
  font-family: 'Nunito', sans-serif;
  font-size: 13px;
  color: #4C1D95;
}
</style>