<script setup>
/**
 * Smart Trades AI Assistant Header Component
 */
</script>

<template>
  <header class="assistant-header">
    <div class="title-container">
      <b class="title-text">Smart Trades AI Assistant</b>
    </div>

    <button class="reset-button" @click="$emit('reset')">
      <div class="icon-wrapper">
        <img src="../assets/refresh.png" class="refresh-icon" alt="Refresh" />
      </div>
      <span class="reset-text">Reset Chat</span>
    </button>
  </header>
</template>

<style lang="scss" scoped>
// Variables
$color-primary: #111827;
$color-secondary: #1f2937;
$color-border: #f3f4f6;
$font-main: 'Nunito', sans-serif;

.assistant-header {
  width: 100%;
  max-width: 680px;
  height: 52px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px;
  gap: 20px;
  background-color: #fff;
  border-radius: 12px 12px 0 0;
  border-bottom: 1px solid $color-border;
  box-sizing: border-box;
  font-family: $font-main;
  margin-top: 2px;

  .title-container {
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    align-items: center;

    .title-text {
      font-size: 14px;
      letter-spacing: -0.02em;
      line-height: 16px;
      color: $color-primary;
    }
  }

  .reset-button {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;

    .icon-wrapper {
      height: 16px;
      width: 16px;
      display: flex;
      align-items: center;
      justify-content: center;

      .refresh-icon {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .reset-text {
      font-size: 12px;
      line-height: 16px;
      letter-spacing: -0.02em;
      font-weight: 600;

      // Gradient text effect from your original CSS
      background: linear-gradient(to right, $color-primary, $color-secondary);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>