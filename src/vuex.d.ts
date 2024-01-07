// vuex.d.ts
import { Store } from 'vuex';

// 定义你的 state 类型
export interface RootState {
  isLoading: boolean;
}

// 扩展 ComponentCustomProperties 接口
declare module '@vue/runtime-core' {
  // 在这里声明自定义的 $store 类型
  interface ComponentCustomProperties {
    $store: Store<RootState>;
  }
}
