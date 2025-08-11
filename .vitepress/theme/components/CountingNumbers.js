/**
 * 数字计数动画组件
 * 实现从初始值到目标值的平滑动画效果
 */

class CountingNumbers {
  constructor() {
    this.observers = new Map();
    this.animatedElements = new Set();
    this.init();
  }

  init() {
    // 等待 DOM 加载完成
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupObserver());
    } else {
      this.setupObserver();
    }
  }

  setupObserver() {
    // 创建 Intersection Observer 来检测元素进入视口
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
            // 延迟执行动画，确保元素完全可见
            setTimeout(() => {
              this.animateNumber(entry.target);
              this.animatedElements.add(entry.target);
            }, 200);
          }
        });
      },
      {
        threshold: 0.3, // 元素 30% 可见时触发
        rootMargin: '0px 0px -100px 0px' // 提前触发
      }
    );

    // 观察所有 .stat-number 元素
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(element => {
      observer.observe(element);
      this.observers.set(element, observer);
    });
  }

  animateNumber(element) {
    const text = element.textContent.trim();
    const hasPlus = text.includes('+');
    const hasPercent = text.includes('%');
    
    // 提取数字部分
    let targetValue = parseFloat(text.replace(/[^0-9.]/g, ''));
    
    // 处理 K 单位
    if (text.includes('K')) {
      targetValue = targetValue * 1000;
    }

    if (isNaN(targetValue)) return;

    // 如果用户偏好减少动效，直接显示最终值
    if (this.prefersReducedMotion()) {
      return;
    }

    // 动画参数
    const duration = Math.min(2500, Math.max(1500, targetValue * 2)); // 根据数值大小调整动画时长
    const startTime = performance.now();
    const startValue = 0;
    
    // 添加计数中的样式
    element.classList.add('counting');

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // 使用 easeOutQuart 缓动函数，更平滑的效果
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (targetValue - startValue) * easeProgress;
      
      // 格式化显示值
      let displayValue = this.formatNumber(currentValue, text);
      
      // 添加后缀
      if (text.includes('K')) {
        displayValue = this.formatWithK(currentValue);
      }
      if (hasPlus) displayValue += '+';
      if (hasPercent) displayValue += '%';
      
      element.textContent = displayValue;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // 动画完成
        element.classList.remove('counting');
        element.classList.add('completed');
        
        // 移除完成样式
        setTimeout(() => {
          element.classList.remove('completed');
        }, 600);
      }
    };

    requestAnimationFrame(animate);
  }

  formatNumber(value, originalText) {
    if (originalText.includes('%')) {
      return Math.round(value).toString();
    }
    
    if (value >= 1000 && !originalText.includes('K')) {
      return Math.round(value).toLocaleString();
    }
    
    return Math.round(value).toString();
  }

  formatWithK(value) {
    const kValue = value / 1000;
    if (kValue >= 10) {
      return Math.round(kValue) + 'K';
    } else if (kValue >= 1) {
      return (Math.round(kValue * 10) / 10) + 'K';
    } else {
      return Math.round(value).toString();
    }
  }

  // 检测用户是否偏好减少动效
  prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // 重新初始化（用于页面路由变化）
  reinit() {
    // 清理现有观察者
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    this.animatedElements.clear();
    
    // 重新设置
    this.setupObserver();
  }

  // 销毁实例
  destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    this.animatedElements.clear();
  }
}

// 创建全局实例
let countingNumbersInstance = null;

// 初始化函数
function initCountingNumbers() {
  if (countingNumbersInstance) {
    countingNumbersInstance.destroy();
  }
  countingNumbersInstance = new CountingNumbers();
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CountingNumbers, initCountingNumbers };
} else if (typeof window !== 'undefined') {
  window.CountingNumbers = CountingNumbers;
  window.initCountingNumbers = initCountingNumbers;
  
  // 自动初始化
  initCountingNumbers();
}