<template>
    
    <main class="home-page">
        <div class="card">
            <div class="card__inner">
                <div class="card__content">
                    <div class="card__text">
                        <h2 class="title">
                            Get help with your water heater
                        </h2>
                        <p class="subtitle">
                            Choose how you’d like to get started
                        </p>
                    </div>

                    <div class="card__actions">
                        <button class="btn-primary" @click="goToTalkToAgent">
                            Talk to Agent
                        </button>
                        <span class="link" @click="goToScheduleCall">
                            Schedule a Call
                        </span>
                    </div>
                </div>

                <div class="card__bg"></div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import SmartTradeNavbar from '../components/SmartTradeNavbar.vue'

const router = useRouter()

const goToTalkToAgent = () => {
    router.push('/talk-to-agent')
}

const goToScheduleCall = () => {
    router.push('/schedule-call')
}
</script>

<style lang="scss" scoped>
.home-page {
    width: 100%;
    min-height: calc(100vh - 52px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 16px 24px;
    box-sizing: border-box;
}

.card {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    max-width: 680px;
    min-height: 556px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 0 0 12px 12px;
    box-sizing: border-box;
}

.card__inner {
    width: 100%;
    flex: 1;
    border: 1px solid #f3f4f6;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 16px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
}

.card__content {
    width: 100%;
    max-width: 648px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    text-align: center;
    z-index: 2;
    padding-top: 100px;
}

.card__text {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: 616px;
    align-items: center;
}

.title {
    margin: 0;
    font-family: 'Nunito', sans-serif;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.01em;
    line-height: 1.2;
    background: linear-gradient(90deg, #111827, #1f2937);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.subtitle {
    margin: 0;
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #6b7280;
    max-width: 400px;
}

.card__actions {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 100%;
}

.btn-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 296px;
    height: 52px;
    border-radius: 8px;
    background: #6d28d9;
    color: #fff;
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(109, 40, 217, 0.2);
    transition: all 0.2s ease;
}

.btn-primary:hover {
    background: #5b21b6;
    transform: translateY(-1px);
}

.link {
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #4f46e5;
    cursor: pointer;
    border-bottom: 1.5px solid transparent;
    transition: border-color 0.2s ease;
    text-decoration: underline;
}


</style>
