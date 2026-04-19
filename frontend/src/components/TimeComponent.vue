<template>
    <div class="outter-container">
        <div class="nav">
            <div class="nav-wrapper">
                <p>Pick a Time that works for you</p>
                <span>Anahem,CA: Repair visit 1-3 hrs</span>
            </div>
        </div>
        <div class="content-wrapper">
            <div class="input">

                <span>Slot Available</span>

                <div class="single-container">
                    <span>Earliest Available</span>
                    <!-- <span class="tick"></span> -->
                    <input type="checkbox">
                </div>

                <div class="single-container">
                    <span>Earliest Available</span>
                    <!-- <span class="tick"></span> -->
                    <input type="checkbox" checked>
                </div>

                <div class="bottom-container">
                    <p>Available Time</p>
                    <div class="flex">
                        <div>9:00-11:00 AM</div>
                        <div>11:00-1:00 PM</div>
                        <div>2:00-4:00 PM</div>
                    </div>
                </div>

                <div class="txt-container">
                    <p style="font-weight: 600;">Need help sooner?</p>
                    <p><span style="text-decoration: underline; color: blueviolet;">Call us</span>
                        for urgent availability-we'll do our best to get someone out the same day
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.outter-container {
    width: 576px;
    height: 369px;
    background: #ffffff;
    border: 1px solid #e8e4ff;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 12px rgba(107, 78, 255, 0.07);
}

.nav {
    width: 574px;
    height: 69px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 16px;
    background: #6d28d9;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}

.nav-wrapper {
    display: flex;
    flex-direction: column;
    width: 208px;
    height: 37px;
    gap: 1px;
}

.nav-wrapper p {
    width: 208px;
    height: 20px;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 1;
    letter-spacing: 0;
    color: #ffffff;
}

.nav-wrapper span {
    width: 189px;
    height: 16px;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0;
    color: #e5e7eb;
}

.content-wrapper {
    display: flex;
    flex-direction: column;
    width: 574px;
    height: 299px;
    padding: 16px;
    gap: 14px;
}

.input {
    width: 542px;
    height: 16px;
    display: flex;
    flex-direction: column;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.02em;
    gap: 8px;
    /* 👈 2% → correct unit */

    color: #6b7280;
}

.single-container {
    width: 542px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    /* 👈 fixed */
    border: 1px solid #f3f4f6;
    border-radius: 8px;
}


.tick {
    height: 16px;
    width: 16px;

    width: 14px;
    height: 14px;

    border: 1.5px solid #c4b5fd;
    border-radius: 2px;

    box-shadow: 0px 1px 4px rgba(123, 103, 238, 0.4);

    display: flex;
    align-items: center;
    justify-content: center;

    background: #ffffff;
}

.bottom-container {
    width: 542px;
    height: 96px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 8px;

    background: #f9fafb;
    border-radius: 8px;

    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.15);
}

.bottom-container p {
    width: 510px;
    height: 16px;

    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.02em;

    color: #6b7280;
}

.bottom-container div {
    display: flex;
    gap: 8px;
    width: 510px;
    height: 40px;
}

.flex div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 164.67px;
    height: 40px;

    padding: 12px;
    gap: 8px;

    border: 1px solid #f3f4f6;
    border-radius: 8px;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 0.02em;

    text-align: center;

    color: #1f2937;
}
.txt-container{
    width: 522px;
    height: 38px;
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.txt-container p{
   width: 522px;
  height: 38px;

  font-family: 'Nunito', sans-serif;
  font-weight: 400; /* final applied */
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0;

}
</style>