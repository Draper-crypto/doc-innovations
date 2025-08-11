// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import "./style.css";
import "./components/CountingNumbers.js";
import PasswordModal from './components/PasswordModal.vue'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // 将密码弹窗注入到布局顶部插槽，作为全局覆盖层
      'layout-top': () => h(PasswordModal),
    });
  },
  enhanceApp({ app, router, siteData }) {
    enhanceAppWithTabs(app);
  },
  
  /**
   * 初始化图片缩放和数字计数动画
   * https://welives.github.io/blog/misc/vitepress/image-zoom.html
   */
  setup() {
    const route = useRoute()
    const initZoom = () => {
      // 为所有图片增加缩放功能
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    
    const initCountingNumbers = () => {
      // 初始化数字计数动画
      if (typeof window !== 'undefined' && window.initCountingNumbers) {
        window.initCountingNumbers()
      }
    }
    
    onMounted(() => {
      initZoom()
      initCountingNumbers()
    })
    
    watch(
      () => route.path,
      () => nextTick(() => {
        initZoom()
        initCountingNumbers()
      })
    )
  }
};
