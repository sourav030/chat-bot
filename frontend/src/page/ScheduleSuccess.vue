<template>
    <div class="outter-container">
        <div class="inner-container">
            <div class="content-area">
                <div class="wrapper">

                    <div class="success-box">
                        <img src="../assets/circleTick.png" alt="">

                        <div class="message-container">

                            <div class="success-message-wrapper">

                                <span class="success-message">
                                    Your form has been submitted successfully
                                </span>
                            </div>


                            <span class="message">
                                Our team will connect with you shortly
                            </span>
                        </div>
                        <div class="btn-wrapper">

                            <button class="submit-btn">View Booking</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.outter-container {
    width: 100%;
    height: 556px;
    opacity: 1;
    padding: 16px;
    display: flex;
    justify-content: center;
   
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
}

.inner-container {
    width: 680px;
    height: 524px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 8px;
    padding: 12px 16px 16px 16px;
    background: #FFFFFF;
    border: 1px solid #F3F4F6;
}

.content-area {
    width: 616px;
    height: 496px;
    opacity: 1;
    padding-top: 93px;
    padding-bottom: 72px;
}

.wrapper {
    width: 616px;
    height: 238px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 93px;
    padding-bottom: 72px;
}

.success-box {
    width: 616px;
    height: 152px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

}

.success-box img {
    width: 40px;
    height: 40px;
    opacity: 1;

}

.success-message {
    width: 616px;
    height: 96px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.success-message {
    width: 334px;
    height: 66px;
    opacity: 1;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0.02em;
    text-align: center;
}

.message {
    width: 616px;
    height: 22px;
    opacity: 1;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.02em;
    text-align: center;
    color: #6B7280;
}

.message-container {
    width: 616px;
    height: 96px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.success-message-wrapper {
    width: 616px;
    display: flex;
    justify-content: center;
}

.submit-btn {
    width: 296px;
    height: 54px;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 16px 8px;
    border-radius: 8px;
    background: #6D28D9;
}

.submit-btn:hover {
    background: #5b21b6;
}

.btn-wrapper{
width: 296px;
height: 54px;
opacity: 1;
display: flex;
align-items: center;
justify-content: center;
gap: 16px;
}
</style>