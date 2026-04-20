<template>
  <div class="outer-box">
    <div class="inner-box">
      
      <!-- Header -->
      <div class="nav">
        <span>Review Your Appointment</span>
        <p class="checking">Confirm the details below before we book</p>
      </div>

      <!-- Content -->
      <div class="container">
        <div class="inner-container">

          <!-- Service -->
          <div class="bottom-box">
            <div class="icon">
              <img src="../assets/bag.png" />
            </div>
            <div class="bottom-box-content">
              <span>Service</span>
              <p>Water Heater Repair</p>
            </div>
          </div>

          <!-- Date -->
          <div class="bottom-box">
            <div class="icon">
              <img src="../assets/calendar.png" />
            </div>
            <div class="bottom-box-content">
              <span>Date & Time</span>
              <p>Tomorrow, Wed Mar 29 · 11:00 AM – 1:00 PM</p>
            </div>
          </div>

          <!-- Address -->
          <div class="bottom-box tall">
            <div class="icon">
              <img src="../assets/location.png" />
            </div>
            <div class="bottom-box-content">
              <span>Service Address</span>
              <p>1452 West Elm Street, Anaheim, CA 92801</p>
            </div>
          </div>

          <!-- Name -->
          <div class="bottom-box">
            <div class="icon">
              <img src="../assets/user.png" />
            </div>
            <div class="bottom-box-content">
              <span>Name</span>
              <p>John Carter</p>
            </div>
          </div>

          <!-- Phone -->
          <div class="bottom-box">
            <div class="icon">
              <img src="../assets/call.png" />
            </div>
            <div class="bottom-box-content">
              <span>Phone</span>
              <p>(555) 214-7812</p>
            </div>
          </div>

          <!-- Notes -->
          <div class="txt-area">
            <span>Anything our technician should know?</span>
            <textarea
              placeholder="Parking, gate code, access instructions, or anything else"
            ></textarea>
          </div>

        </div>
      </div>
    </div>

    <!-- Button -->
    <div class="but">
      <button>Confirm Appointment</button>
    </div>
  </div>
</template>

<style scoped>
.outer-box {
  width: 100%;
  max-width: 576px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Card */
.inner-box {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #ede9fe;
  border-radius: 14px;
  overflow: hidden;

  box-shadow: 0px 2px 12px rgba(107, 78, 255, 0.07);
}

/* Header */
.nav {
  padding: 12px 16px;
  display: flex;
  flex-direction: column;

  background: linear-gradient(90deg, #7C3AED, #6D28D9);
}

.nav span {
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #ffffff;
}

.checking {
  font-family: 'Nunito', sans-serif;
  font-size: 12px;
  color: #E5E7EB;
}

/* Content */
.container {
  padding: 16px;
}

.inner-container {
  display: flex;
  flex-direction: column;
}

/* Rows */
.bottom-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  height: 61px;
  border-bottom: 1px solid #F0EEF8;
}

.bottom-box:last-child {
  border-bottom: none;
}

.tall {
  padding: 16px 0;
}

/* Icon */
.icon {
  width: 32px;
  height: 32px;
  background: #f5f3ff;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* Text */
.bottom-box-content {
  display: flex;
  flex-direction: column;
}

.bottom-box-content span {
  font-family: 'Nunito', sans-serif;
  font-size: 12px;
  color: #9090b0;
}

.bottom-box-content p {
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #2a2a3e;
}

/* Notes */
.txt-area {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
}

.txt-area span {
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 13px;
}

.txt-area textarea {
  width: 100%;
  height: 82px;
  padding: 11px 14px;

  border-radius: 10px;
  border: 1px solid #D1D5DB;
  resize: none;

  font-family: 'Nunito', sans-serif;
}

/* Button */
.but {
  width: 100%;
}

.but button {
  width: 100%;
  height: 48px;

  border: none;
  border-radius: 12px;

  background: #6d28d9;
  color: white;

  font-weight: 600;
  cursor: pointer;
}
</style>