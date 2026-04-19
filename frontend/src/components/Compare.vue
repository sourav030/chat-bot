<template>
    <div class="outer-box">
        <div class="nav">
            <span>Repair vs. Replace</span>
        </div>
        <div class="grid-container">

            <!-- Row 1 -->
            <div class="grid-item"></div>
            <div class="grid-item header">Repair</div>
            <div class="grid-item header">Replace</div>

            <!-- Row 2 -->
            <div class="grid-item">Estimated cost</div>
            <div class="grid-item price">$350 – $650<br><small>You save up to $170</small></div>
            <div class="grid-item price">$1,450 – $2,100<br><small>You save up to $500</small></div>

            <!-- Row 3 -->
            <div class="grid-item">Technician arrival</div>
            <div class="grid-item">Reaches you doorstep in an hour</div>
            <div class="grid-item">Reaches your doorstep in an hour</div>

            <!-- Row 4 -->
            <div class="grid-item">Service time</div>
            <div class="grid-item">3 - 5 hours</div>
            <div class="grid-item">1 - 3 hours</div>

            <!-- Row 5 -->
            <div class="grid-item">What we do</div>
            <div class="grid-item">We inspect and fix faulty parts if the issue is repairable</div>
            <div class="grid-item">We remove the old heater and install a brand new one</div>

            <!-- Row 6 -->
            <div class="grid-item">Pros and Cons</div>
            <div class="grid-item">
                ✔ Lower cost right now<br>
                ✔ Faster to get scheduled<br>
                ✖ May need repairs later
            </div>
            <div class="grid-item">
                ✔ No more repair surprises<br>
                ✔ Full 6-yearWarranty included<br>
                ✖ Higher upfront cost
            </div>

            <!-- Row 7 -->
            <div class="grid-item">Extra steps</div>
            <div class="grid-item">Usaually a Normal service visit</div>
            <div class="grid-item">May include permits inspection, and possible code-related updates</div>

            <!-- Row 8 -->
            <div class="grid-item"></div>
            <div class="grid-item">
                <div class="button">Get Repair Estimate</div>
            </div>
            <div class="grid-item">
                <div class="button">Get Replacement Estimate</div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.box {
    width: 576px;
    height: 617px;

    background: #ffffff;
    border: 1px solid #ede9fe;
    border-radius: 14px;

    box-shadow: 0px 2px 12px 0px rgba(107, 78, 255, 0.07);
}

.nav {
    width: 574px;
    height: 52px;

    display: flex;


    gap: 12px;

    padding-top: 16px;
    padding-right: 20px;
    padding-bottom: 16px;
    padding-left: 20px;

    background: #6d28d9;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}

.nav span {


    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 1;
    letter-spacing: -0.2px;

    color: #ffffff;
}
.grid-container {
  width: 574px;

  display: grid;
  grid-template-columns: 140px 217px 217px;
  grid-template-rows: repeat(8, auto);

  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px; /* 👈 important */
  letter-spacing: 0;

  border: 1px solid #f0eef8;
}

.grid-item {
  padding: 16px;
  display: flex;              
  flex-direction: column;
  
  justify-content: center;
  border-bottom: 1px solid #f0eef8;
  border-right: 1px solid #f0eef8;
}

/* last column */
.grid-item:nth-child(3n) {
  border-right: none;
}

/* last row */
.grid-item:nth-last-child(-n + 3) {
  border-bottom: none;
}

.header {
  font-weight: 600;
}

.price {
  font-weight: 600;
}

.button {
  width: 184px;
  height: 44px;

  display: flex;
  
  flex-direction: column;
  justify-content: center;
  padding: 12px;

  background: #6d28d9;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px; /* CTA stronger */
}
</style>