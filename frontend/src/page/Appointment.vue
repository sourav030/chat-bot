<script setup lang="ts">
import AppointmentComponent from '../components/AppointmentComponent.vue';
import RepairEstimated from '../components/RepairEstimated.vue';
import ReplaceEstimated from '../components/ReplaceEstimated.vue'
</script>

<template>
    <main>

        <div class="outer-container">
            <div class="inner-container">
                <div class="third">
                    <div class="toggle-wrapper">
                        <!-- button ke liye hai -->
                        <div>
                            <div class="btn-wrapper">
                                <div class="txt-mode">
                                    <button>Text Mode</button>
                                </div>
                                <div class="voice-mode">

                                    <button>Voice Mode</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="message-container">

                        <div>
                            <div class="circle">
                                <img src="../assets/Ring.png" alt="">
                            </div>
                            <div class="text-message">
                                <div class="msge">
                                    Almost done. Take a quick look and make sure everything looks right before i lock in your visit
                                </div>

                                <AppointmentComponent/>

                            </div>

                        </div>

                    </div>
                </div>




                <div class="prompt-send">
                    <div class="prompt-wrapper">

                        <!--message bejne ke liye-->
                        <div class="image">
                            <img src="../assets/paperclip.png" alt="">
                        </div>

                        <input type="text" placeholder="Describe your issue...">

                        <div class="talk-agent">
                            <img src="../assets/microphone.png" alt="">
                            <span>Talk to Agent</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    max-width: 100%;
    display: flex;
    justify-content: center;
}
.text-message {
    display: flex;
    flex-direction: column;
    
}

.text-message div {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.02em;
}

.outer-container {
    width: 100%;
    max-width: 680px;
    height: 870px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    background: #FFFFFF;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
}

.inner-container {
    width: 100%;
    max-width: 648px;
    height: 838px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 16px 16px 16px;
    border-radius: 8px;
    background: #FFFFFF;
    border: 1px solid #F3F4F6;

}

.third {
    width: 616px;
    height: 743px;
    
    display: flex;
    flex-direction: column;
    /* important for vertical stacking */
    gap: 8px;
}

.toggle-wrapper {
    width: 100%;
    max-width: 616px;
    height: 39px;
    opacity: 1;
    display: flex;
    justify-content: flex-end;
}

.message-container {
    width: 100%;
    max-width: 616px;
    height: 696px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 13px;
    gap: 20px;
    
}

.toggle-wrapper div {
    width: 100%;
    max-width: 164px;
    height: 39px;
    opacity: 1;
    display: flex;
    align-items: center;
    gap: 12px;
}

.btn-wrapper {
    width: 164px;
    height: 39px;
    opacity: 1;
    padding: 4px;
    border-radius: 100px;
    background: #F3F4F6;
    box-shadow: 0px 1px 2px 0px #0000000D;
    display: flex;
    align-items: center;
    gap: 4px;
    box-sizing: border-box;
}

.txt-mode {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background: #FFFFFF;
}

.txt-mode button {
    width: 100%;
    height: 100%;
    border: 0;
    padding: 0;
    border-radius: 100px;
    background: transparent;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0;
    color: #111827;
    cursor: pointer;
}

.voice-mode {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
}

.voice-mode button {
    width: 100%;
    height: 100%;
    border: 0;
    padding: 0;
    border-radius: 100px;
    background: transparent;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0;
    color: #6B7280;
    cursor: pointer;
}

.txt-mode button:hover,
.voice-mode button:hover {
    background: rgba(255, 255, 255, 0.65);
}

.txt-mode button:focus-visible,
.voice-mode button:focus-visible {
    outline: 2px solid #6d28d9;
    outline-offset: 2px;
}

.prompt-send {
    width: 100%;
    max-width: 612px;
    height: 58px;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 14px 8px;
    background: #FFFFFF;
    border: 1px solid #F3F4F6;
    border-radius: 100px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
    opacity: 1;
}

.image {
    width: 42px;
    height: 42px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    padding: 10px 12px;
    
    background: #FFFFFF;
    border: 1px solid #DDD6FE;
    border-radius: 60px;

    opacity: 1;
    cursor: pointer;
}

.prompt-send input {
    width: 380px;
    height: 28px;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.02em;
    border: none;
    outline: none;
    background: transparent;
    opacity: 1;
}

.talk-agent {
    width: 100%;
    max-width: 142px;
    height: 42px;
    display: flex;
    gap: 4px;
    padding: 10px 12px;
    background: #FFFFFF;
    border: 1px solid #DDD6FE;
    border-radius: 20px;
    opacity: 1;
    cursor: pointer;
}

.talk-agent span {
    width: 98px;
    height: 22px;
    font-family: 'Nunito', sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 1;
    /* 100% */
    letter-spacing: 0;
    text-align: center;
    color: #6D28D9;
    opacity: 1;
}

.prompt-wrapper {
    width: 100%;
    max-width: 596px;
    height: 42px;
    display: flex;
    align-items: center;
    gap: 16px;
    border-radius: 8px;
    opacity: 1;
}

.circle {
    width: 32px;
    height: 32px;
    opacity: 0.5;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    background:
    radial-gradient(circle at 42% 35%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.25) 24%, rgba(255, 255, 255, 0) 58%),
        radial-gradient(circle at 72% 76%, rgba(255, 251, 133, 0.42) 0%, rgba(255, 251, 133, 0) 58%),
        radial-gradient(circle at 18% 74%, rgba(109, 40, 217, 0.42) 0%, rgba(109, 40, 217, 0) 56%),
        linear-gradient(135deg, #ffffff 0%, #f3e8ff 42%, #ddd6fe 72%, #c4b5fd 100%);
    box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.8),
        inset 0 -3px 6px rgba(109, 40, 217, 0.15);
}

.circle img {
    width: 36px;
    height: 36px;
    max-width: none;
    position: absolute;
    top: -2px;
    left: -2px;
    pointer-events: none;
}

.message-container div {
    display: flex;
    gap: 10px;
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

.boxes {
    width: 577px;
    min-height: 66px;
    
    display: flex;
    align-items: center;
    gap: 10px;
    
    padding: 16px;
    border-radius: 16px;
}

.boxes p {
    width: 542px;
    height: 50px;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.02em;
    
}

.boxes p span {
    width: 542px;
    height: 50px;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-decoration: underline;
    color: rgb(134, 134, 228);
}
.msge{
     font-family: 'Nunito', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.02em;
}
</style>