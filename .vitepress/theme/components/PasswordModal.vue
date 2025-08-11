<template>
  <div v-if="!isAuthenticated" class="password-modal-overlay">
    <div class="password-modal">
      <div class="modal-header">
        <h2>🔒 访问验证</h2>
      </div>
      
      <div class="modal-content">
        <div class="notice-box">
          <div class="notice-icon">🚧</div>
          <p class="notice-text">
            网站内容正在持续完善中，部分功能和内容可能尚未完全编写完成。
            感谢您的理解与耐心！
          </p>
        </div>
        
        <div class="password-section">
          <label for="password" class="password-label">请输入访问密码：</label>
          <div class="password-input-group">
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="password-input"
              placeholder="请输入密码"
              @keyup.enter="checkPassword"
              @input="clearError"
              ref="passwordInput"
              autocomplete="off"
            />
            <button
              type="button"
              class="toggle-password"
              @mousedown.prevent
              @click="togglePassword"
              :aria-pressed="showPassword"
              :aria-label="showPassword ? '隐藏密码' : '显示密码'"
            >
              <span aria-hidden="true">{{ showPassword ? '🙈' : '👁️' }}</span>
            </button>
          </div>
          
          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>
          
          <button class="submit-button" @click="checkPassword" :disabled="!password.trim()">
            进入网站
          </button>
        </div>
      </div>
      
      <div class="modal-footer">
        <p class="footer-text">如需获取访问密码，请联系网站管理员</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const isAuthenticated = ref(false)
const password = ref('')
const showPassword = ref(false)
const errorMessage = ref('')

// 正确的密码（实际项目中应该使用更安全的验证方式）
const correctPassword = '151505'

const checkPassword = () => {
  if (password.value === correctPassword) {
    isAuthenticated.value = true
    // 保存认证状态到 sessionStorage（会话期间有效）
    sessionStorage.setItem('siteAuthenticated', 'true')
    errorMessage.value = ''
  } else {
    errorMessage.value = '密码错误，请重新输入'
    password.value = ''
  }
}

const clearError = () => {
  errorMessage.value = ''
}

// 检查是否已经认证过
onMounted(() => {
  const authenticated = sessionStorage.getItem('siteAuthenticated')
  if (authenticated === 'true') {
    isAuthenticated.value = true
  }
})

const togglePassword = async () => {
  // 记录当前光标位置，切换类型后恢复，避免“跳动/丢焦点”感觉异常
  const el = passwordInput.value
  let start = 0
  let end = 0
  if (el) {
    try {
      start = el.selectionStart ?? el.value.length
      end = el.selectionEnd ?? el.value.length
    } catch (e) {
      // 某些浏览器在 type=password 时读取选择会异常，忽略即可
    }
  }
  showPassword.value = !showPassword.value
  await nextTick()
  const el2 = passwordInput.value
  if (el2) {
    el2.focus()
    try {
      el2.setSelectionRange(start, end)
    } catch (e) {
      // Safari 在某些场景可能不允许设置选择区，忽略
    }
  }
}
</script>

<style scoped>
.password-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: fadeIn 0.3s ease;
}

.password-modal {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 0;
  max-width: 480px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  animation: slideUp 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.modal-header {
  padding: 24px 32px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  text-align: center;
}

.modal-header h2 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 1.5rem;
  font-weight: 600;
}

.modal-content {
  padding: 24px 32px;
}

.notice-box {
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.25);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.notice-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.notice-text {
  margin: 0;
  color: var(--vp-c-text-1);
  line-height: 1.6;
  font-size: 0.95rem;
}

.password-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.password-label {
  color: var(--vp-c-text-1);
  font-weight: 500;
  font-size: 1rem;
}

.password-input-group {
  position: relative;
  display: flex;
  align-items: center;
}

.password-input {
  width: 100%;
  padding: 12px 48px 12px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 1rem;
  transition: all 0.2s ease;
}

.password-input:focus {
  outline: none;
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.toggle-password {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  width: 32px; /* 固定尺寸避免不同表情宽度造成的抖动 */
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  user-select: none;
}

.toggle-password:hover {
  background: var(--vp-c-bg-soft);
}

.toggle-password:focus-visible {
  outline: 2px solid var(--vp-c-brand);
  outline-offset: 2px;
}

.error-message {
  color: #ef4444;
  font-size: 0.9rem;
  margin-top: -8px;
  padding-left: 4px;
}

.submit-button {
  background: var(--vp-c-brand);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
}

.submit-button:hover:not(:disabled) {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.modal-footer {
  padding: 16px 32px 24px;
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
}

.footer-text {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* 暗色模式适配 */
.dark .password-modal {
  background: var(--vp-c-bg-alt);
}

.dark .notice-box {
  background: rgba(245, 158, 11, 0.12);
  border-color: rgba(245, 158, 11, 0.35);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .password-modal {
    margin: 16px;
    max-width: none;
    width: calc(100% - 32px);
  }
  
  .modal-header,
  .modal-content,
  .modal-footer {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .modal-header h2 {
    font-size: 1.3rem;
  }
  
  .notice-box {
    padding: 16px;
  }
}
</style>