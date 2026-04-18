<template>
  <div class="box">
    <div class="inner">
      <div class="third">
        <div class="text-wrapper">
          <p class="title">In case we Disconnect</p>
          <p class="desc">
            Add your details so in case we get disconnected,<br />
            we'll use this to follow up with you.
          </p>
        </div>
        <div class="form">
          <div class="formName">
            <p>Full Name</p>
            <input type="text" placeholder="Eg. John Mayor">
          </div>

          <div class="formName">
            <p>Phone Number</p>
            <input type="text" placeholder="Eg. 125-56-23">
          </div>
        </div>
        <button @click="onStart()" class="button">Start Conversation</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const route=useRouter();

const onStart=()=>{
  route.push('/chat')
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  max-width: 680px;
  height: 556px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fff;
  border-radius: 0 0 12px 12px;
  box-sizing: border-box;
  margin: 0 auto;

  .inner {
    width: 648px;
    height: 524px;
    border: 1px solid #f3f4f6;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 23px 16px 0 16px;
    position: relative;
    overflow: hidden;
    gap: 10px;
    box-sizing: border-box;

    .third {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      flex: 1;
      padding: 40px 0 16px;
      gap: 20px;
      box-sizing: border-box;
      backdrop-filter: blur(73px);
      -webkit-backdrop-filter: blur(73px);

      .text-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        width: 100%;

        .title {
          margin: 0;
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 20px;
          text-align: center;
        }

        .desc {
          margin: 0;
          max-width: 616px;
          width: 100%;
          font-family: 'Nunito', sans-serif;
          font-size: 14px;
          line-height: 1.4;
          text-align: center;
          color: #9ca3af;
        }
      }

      .form {
        width: 100%;
        max-width: 354px;
        padding: 26px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        border-radius: 8px;
        background: #ffffff;
        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.08);
        box-sizing: border-box;
        margin: 0 auto;

        p {
          font-family: 'Nunito', sans-serif;
          font-size: 12px;
          margin: 0;
        }

        .formName {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 8px;

          input {
            width: 100%;
            height: 43px;
            padding: 12px;
            border-radius: 8px;
            border: 1px solid #f3f4f6;
            box-sizing: border-box;
          }
        }
      }

      .button {
        width: 100%;
        max-width: 354px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background: #6d28d9;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        margin: 0 auto;
      }
    }
  }
}
</style>