<template>
    <div class="outer-box">
        <div class="nav">
            <div>
                <p>Where should we come?</p>
                <span>we'll use this to confirm availability in your area</span>
            </div>
        </div>
        <div class="form">
            <div class="input-cont">
                <p>Street Address *</p>
                <input type="text" placeholder="Eg: 1452 West Street Anghem, CA">
            </div>
            <div class="input-cont">
                <p>Zip Code</p>
                <input type="text" placeholder="Eg: 92801">
            </div>
            <div class="background">
                <input type="checkbox">
                <span>Billing address is the same</span>
            </div>
            <p>
                We'll use this address to check service availability and assign the technician
            </p>
        </div>
    </div>
</template>
<style scoped>
.outer-box {
    width: 576px;
    height: 335px;
    background: #ffffff;
    border: 1px solid #e8e4ff;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 12px 0px rgba(107, 78, 255, 0.07);
}

.nav {
    width: 574px;
    height: 69px;

    display: flex;
    align-items: center;
    gap: 12px;

    padding: 16px;

    background: #6d28d9;
    border-radius: 12px;
}

.nav div {
    width: 258px;
    height: 37px;

    display: flex;
    flex-direction: column;

    gap: 1px;
}

.nav div span {
    width: 258px;
    height: 16px;

    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0;

    color: #e5e7eb;
}

.nav div p {
    width: 170px;
    height: 20px;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 1;
    letter-spacing: 0;
    color: #ffffff;
}

.form {
    width: 574px;
    height: 264px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 16px;
}

.input-cont {
    width: 542px;
    height: 64px;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.input-cont p {
    width: 542px;
    height: 18px;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    letter-spacing: 0;
}

.input-cont input {
    width: 542px;
    height: 43px;

    padding-top: 11px;
    padding-right: 14px;
    padding-bottom: 11px;
    padding-left: 14px;

    border: 1px solid #e5e7eb;
    border-radius: 8px;
}

.input-cont input::placeholder {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 0;
    color: #d1d5db;
}
.background{
    width: 542px;
  height: 43px;

  display: flex;
  flex: direction;
  gap: 10px;

  padding-top: 11px;
  padding-right: 14px;
  padding-bottom: 11px;
  padding-left: 14px;

  background: #f5f3ff;
  border: 1px solid #c4b5fd;
  border-radius: 8px;
}
.background span{
  padding-top: 3px;
  width: 170px;
  height: 19px;
  font-family: 'Nunito', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0;

}
.form p{
  width: 435px;
  height: 16px;
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0;
  color: #9ca3af;
}
</style>