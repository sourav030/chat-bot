<template>
    <div class="outer-box">
        <div class="inner-box">
            <div class="nav">
                <span>Estimated Replacement Cost</span>
            </div>
            <div class="container">
                <div class="inner-container">
                    <div class="inner-cost">
                        <span class="estimated-cost">Estimated cost</span>
                        <span class="dollar">$1350-$2650</span>
                        <span class="final-price">Final price confirmed after on-site inspection</span>
                    </div>
                    <div class="bottom-container">
                        <div class="bottom-box">
                            <div class="icon">
                                <img src="../assets/calendar.png" alt="">
                            </div>
                            <div class="bottom-box-content">
                                <span>Appointment type</span>
                                <p>Replacement visit</p>
                            </div>
                        </div>

                        <div class="bottom-box">
                            <div class="icon">
                                <img src="../assets/clock.png" alt="">
                            </div>
                            <div class="bottom-box-content">
                                <span>Time at your home</span>
                                <p>About 3-5 hours</p>
                            </div>
                        </div>

                        <div class="bottom-box third">
                            <div class="icon">
                                <img src="../assets/tick-circle.png" alt="">
                            </div>
                            <div class="bottom-box-content">
                                <span>What's included</span>
                                <p>
                                    Removal of old unit and installation of new standard water heater
                                </p>
                            </div>
                        </div>

                        <div class="bottom-box">
                            <div class="icon">
                                <img src="../assets/info-circle.png" alt="">
                            </div>
                            <div class="bottom-box-content">
                                <span>What to expect</span>
                                <p>
                                 Permit and inspection may be needed depending on your city and heater type
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="alert-box">
                        <div>

                            <img src="../assets/danger.png" alt="">
                            <p>Final price may change if permit, code updates ,venting or plumbing changes are required</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="but">
            <button>Schedule Repair Visit</button>
        </div>
    </div>
</template>

<style scoped>
.outer-box {
    width: 576px;
    height: 573.27px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.inner-box {
    width: 576px;
    height: 513.27px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border: 1px solid #ede9fe;
    border-radius: 14px;

    box-shadow: 0px 2px 12px rgba(107, 78, 255, 0.07);
}

.nav {
    width: 574px;
    height: 52px;
    display: flex;
    align-items: center;

    gap: 12px;
    padding: 0 16px;
    /* 👈 better than full 16px */
    background: #6d28d9;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

}

.nav span {
    width: 200px;
    height: 20px;

    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 1;
    letter-spacing: -0.2px;

    color: #ffffff;
}

.container {
    width: 574px;
    height: 459.27px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
}

.inner-container {
    width: 535px;
    height: 427.27px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.inner-cost {
    display: flex;
    flex-direction: column;
    width: 535px;
    height: 70px;
}

.estimated-cost {
    display: flex;
    width: 239px;
    height: 18px;
    font-family: 'Nunito', sans-serif;
    font-weight: 500;
    font-size: 13px;
    line-height: 1;
    letter-spacing: 0;

    color: #6b7280;
}

.dollar {
    display: flex;
    flex-direction: column;
    width: 239px;
    height: 35px;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 1;
    letter-spacing: -0.5px;
    color: #1f2937;
}

.final-price {
    display: flex;
    flex-direction: column;
    width: 239px;
    height: 17px;
    padding-top: 1px;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0;
    color: #6b7280;
}

.bottom-container {
    width: 535px;
    height: 265.77px;

    border: 1px solid #f3f4f6;
    border-radius: 10px;
}

.bottom-box {
    width: 533px;
    height: 61.59px;

    display: flex;
    align-items: center;
    gap: 12px;

    padding-top: 12px;
    padding-right: 14px;
    padding-bottom: 12px;
    padding-left: 14px;
    border-bottom: 1px solid #f0eef8;
}
.third{
    height: 82.80px;
}

.icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f3ff;
    border-radius: 8px;
}

.alert-box {
    width: 535px;
    height: 59.5px;

    display: flex;
    align-items: center;
    gap: 12px;

    padding: 12px 14px;

    background: #ffffea;
    border: 1px solid #bb6d02;
    border-radius: 9px;
}

.alert-box div {
    display: flex;
    width: 521.89px;
    height: 41px;
    gap: 8px;
}

.alert-box div img {
    width: 12px;
    height: 12px;
    margin-top: 5px;
}

.alert-box div p {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    /* 👈 more readable */
    letter-spacing: 0;
    height: 47px;
    color: #7c440b;
}

.but {
    width: 576px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* title on left, action on right */
    gap: 9px;
    padding-top: 2px
}

.but button {
    width: 576px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    /* better than full 15px for vertical alignment */
    color: white;
    background: #6d28d9;
    border-radius: 12px;
}
.bottom-box-content p{
 font-family: 'Nunito', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 19.6px;
  letter-spacing: 0;
  color: #2a2a3e; 
}
.bottom-box-content span{
     font-family: 'Nunito', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0;

  color: #9090b0;
}
</style>