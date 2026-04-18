
<template>
  <div class="outer-container">
    <div class="inner-container">
      <div class="content-wrapper">

        <div class="heading-group">
          <h2 class="heading-title">Schedule a Call back</h2>
          <p class="heading-subtitle">
            Share your detail and we'll contact you shortly
          </p>
        </div>

        <div class="form-card">
          <div class="form-inputs">

            <div class="input-group">
              <label class="input-label">Full Name*</label>
              <div class="input-wrapper">
                <input type="text" placeholder="Eg: John Mayor" class="input-field">
              </div>
            </div>

            <div class="input-group">
              <label class="input-label">Phone Number*</label>
              <div class="input-wrapper">
                <input type="text" placeholder="Eg: +255-789" class="input-field">
              </div>
            </div>

            <div class="input-group">
              <label class="input-label">Service Address</label>
              <div class="input-wrapper">
                <input type="text" placeholder="Eg: 2458 Maple Ave, San Jose, CA" class="input-field">
              </div>
            </div>

            <div class="input-group">
              <label class="input-label">Available slot</label>
              <div class="input-wrapper">
                <input type="datetime-local" class="input-field">
              </div>
            </div>

            <div class="textarea-group">
              <label class="textarea-label">What do you need help with?</label>

              <div class="textarea-wrapper">
                <textarea class="textarea-field" placeholder="Briefly describe your issue"></textarea>
              </div>
            </div>

            <div class="checkBox-wrapper">
              <div class="checkBox">
                <input type="checkbox">
                <span>This is an Emergency</span>
              </div>
              <span>Mark if you are need fast attention</span>
            </div>

          </div>

        </div>
        <button @click="onSubmit" class="submit-btn">Submit</button>

      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router=useRouter();

const onSubmit=()=>{
  router.push('/schedulingSuccess')
}
</script>

<style scoped>
.outer-container * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  line-height: 1.2;
}

.outer-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
}

.inner-container {
  width: 100%;
  max-width: 680px;
  background: #ffffff;
  border: 1px solid #f3f4f6;
  border-radius: 12px;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  height: 556px;
}

.content-wrapper {
  width: 100%;
  max-width: 354px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

/* Typography */
.heading-group {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.heading-title {
  font-family: 'Nunito', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #111827;
}

.heading-subtitle {
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  color: #9ca3af;
}

.form-card {
  width: 100%;
  max-width: 354px;
  height: 347px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
}

.form-card::-webkit-scrollbar {
  display: none;
}

.form-inputs {
  width: 322px;
  height: 347px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.input-label {
  font-size: 13px;
  font-weight: 600;
  color: #4b5563;
}

.input-wrapper {
  height: 48px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background: #fafafa;
  transition: all 0.2s ease;
}

.input-wrapper:focus-within {
  border-color: #7c3aed;
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1);
}

.input-field {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: #111827;
  font-family: 'Nunito', sans-serif;
}

.input-field::placeholder {
  color: #d1d5db;
}

.textarea-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.textarea-label {
  font-size: 12px;
  color: #6b7280;
  font-family: 'Nunito', sans-serif;
  letter-spacing: 0.02em;
}

.textarea-wrapper {
  width: 100%;
  height: 100px;
  border-radius: 8px;
  border: 1px solid #f3f4f6;
  background: #ffffff;
  padding: 12px;
  display: flex;
  align-items: flex-start;
}

.textarea-field {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 14px;
  font-family: 'Nunito', sans-serif;
  color: #111827;
}

.textarea-field::placeholder {
  color: #d1d5db;
}

.textarea-wrapper:focus-within {
  border-color: #6d28d9;
  box-shadow: 0 0 0 2px rgba(109, 40, 217, 0.1);
}

.submit-btn {
  width: 100%;
  padding: 16px;
  background: #6d28d9;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #5b21b6;
}

.checkBox-wrapper {
  display: flex;
  flex-direction: column;
  width: 195px;
  height: 39px;
  gap: 4px;
}

.checkBox {
  display: flex;
  width: 163px;
  height: 19px;
  gap: 2px;
}

.checkBox span {
  width: 141px;
  height: 19px;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0.02em;
  text-align: center;
  display: inline-block;
  color: black;
}

.checkBox input {
  width: 14px;
  height: 14px;
  opacity: 1;
  border-radius: 1.75px;
  border: 0.88px solid #6D28D9;
  cursor: pointer;
}

.checkBox-wrapper span {
  width: 100%;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0.02em;
  text-align: center;
  color: #9CA3AF;
  display: inline-block;
}

.submit-btn {
  width: 330px;
  height: 47px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 8px;
  border-radius: 8px;
  background: #6D28D9;
}
</style>