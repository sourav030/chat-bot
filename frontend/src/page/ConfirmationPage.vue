<script setup lang="ts">
import ConfirmationMessage from '../components/ConfirmationMessage.vue';
</script>

<template>
    <main>

        <div class="outer-box">
            <div class="inner-box">
    
                <!-- Avatar + Check -->
                <div class="avatar-wrapper">
                    <img src="../assets/circle.png" alt="">
                </div>
    
                <!-- Content -->
                <div class="third">
                    <ConfirmationMessage />
                </div>
    
                <!-- Buttons -->
                <div class="actions">
                    <button class="btn primary">Done</button>
                    <button class="btn secondary">Reschedule</button>
                </div>
    
            </div>
        </div>
    </main>
</template>

<style scoped>
main{
    display: flex;
    justify-content: center;
}
.outer-box {
    width: 680px;
    padding: 16px;
    background: #FFFFFF;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
}

.inner-box {
    width: 648px;
    border-radius: 8px;
    padding: 16px;
    background: #FFFFFF;
    border: 1px solid #F3F4F6;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

/* Avatar */
.avatar-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 8px;
}

.avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #6B7280;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-family: 'Nunito', sans-serif;
}

/* Check badge */
.check {
    position: absolute;
    bottom: 0;
    right: -4px;
    width: 20px;
    height: 20px;
    background: #7C3AED;
    color: white;
    border-radius: 50%;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
}

/* Content */
.third {
    width: 100%;
    display: flex;
    justify-content: center;
}

/* Buttons */
.actions {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.btn {
    width: 100%;
    height: 44px;
    border-radius: 10px;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
}

/* Primary button */
.primary {
    background: linear-gradient(90deg, #6D28D9, #7C3AED);
    color: white;
    border: none;
}

/* Secondary button */
.secondary {
    background: white;
    color: #6D28D9;
    border: 1px solid #C4B5FD;
}
</style>