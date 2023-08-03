Vue.component("table-tabs", {
  template: `
          <div class="box">
            <ul>
                <li :class="activeTab=='tab1'?'li_active':''" @click="activeTab='tab1'">选项一</li>
                <li :class="activeTab=='tab2'?'li_active':''" @click="activeTab='tab2'">选项二</li>
                <li :class="activeTab=='tab3'?'li_active':''" @click="activeTab='tab3'">选项三</li>
            </ul>
            <a v-show="activeTab=='tab1'">1111</a>
            <a v-show="activeTab=='tab2'">22222222</a>
            <a v-show="activeTab=='tab3'">3333333333333333333</a>
        </div>
  `,
  data() {
    return {
      activeTab: "tab1",
    };
  },
});
Vue.component("lunbo", {
  template: `
 <div class="lunbo">
            <svg @click="shang" t="1691044796822" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="3910" width="50" height="50">
                <path
                    d="M966.656 567.296q0 43.008-20.48 58.368t-65.536 15.36l-64.512 0q-44.032 0-93.696 0.512t-96.768 0.512l-74.752 0q-38.912 0-61.952 7.68t-22.016 35.328q0 20.48-1.024 48.64t-1.024 49.664q0 35.84-19.456 45.568t-50.176-13.824q-30.72-24.576-72.704-57.856t-85.504-68.096-86.016-68.608-75.264-59.392q-30.72-24.576-31.232-46.592t28.16-45.568q28.672-24.576 68.608-56.832t82.944-66.56 84.48-68.096 74.24-60.416q35.84-28.672 58.88-22.016t23.04 43.52l0 25.6q0 14.336 0.512 29.696t1.024 30.208 0.512 26.112q1.024 25.6 16.384 32.256t41.984 6.656q29.696 0 77.824-0.512t100.352-0.512 101.376-0.512 79.872-0.512q13.312 0 27.648 2.048t26.112 9.728 19.456 21.504 7.68 36.352q0 27.648 0.512 53.248t0.512 57.344z"
                    p-id="3911" fill="#515151"></path>
            </svg>
            <img :src="arr[index]"
                alt="">
            <svg @click="xia" t="1691044822984" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4433" width="50" height="50">
                <path
                    d="M47.104 453.632q0-43.008 20.992-57.856t66.048-14.848q20.48 0 64.512 0.512t93.696 0.512 96.768 0.512 74.752 0.512q38.912 1.024 61.44-6.656t22.528-35.328q0-20.48 1.536-48.64t1.536-48.64q1.024-35.84 20.48-45.568t49.152 14.848q30.72 24.576 71.68 58.368t84.992 69.12 86.016 69.632 74.752 59.904q29.696 24.576 30.208 46.592t-28.16 45.568q-29.696 24.576-70.144 56.32t-83.968 65.536-85.504 67.072-74.752 58.88q-35.84 28.672-58.88 21.504t-22.016-44.032l0-24.576 0-29.696q0-15.36-0.512-30.208t-0.512-27.136q0-25.6-15.36-32.256t-41.984-6.656q-29.696 0-77.824-0.512t-100.352-0.512-101.376-0.512-79.872-0.512q-13.312 0-27.648-2.56t-26.112-9.728-18.944-20.992-7.168-37.376q0-27.648-0.512-53.248t0.512-57.344z"
                    p-id="4434" fill="#515151"></path>
            </svg>
        </div>
    `,
  data() {
    return {
      arr: [
        "https://img0.baidu.com/it/u=532615425,2992904859&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
        "https://img1.baidu.com/it/u=3750617966,2166234761&fm=253&fmt=auto&app=138&f=JPEG?w=747&h=500",
        "https://img0.baidu.com/it/u=4261876349,82525103&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=313",
        "https://img1.baidu.com/it/u=2463514011,1142503686&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500",
        "https://img1.baidu.com/it/u=1053843878,2320549886&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
        "https://img1.baidu.com/it/u=4159158149,2237302473&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
        "https://img0.baidu.com/it/u=2201629570,2926481703&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
      ],
      index: 0,
      timer: null,
    };
  },
  mounted() {
    if (this.timer == null) {
      this.fun();
    }
  },
  methods: {
    fun() {
      this.timer = setInterval(() => {
        this.xia();
      }, 1500);
    },
    shang() {
      this.timer = 0;
      if (this.index == 0) {
        this.index = this.arr.length;
      }
      this.index--;
      //   console.log(this.index);
    },
    xia() {
      this.timer = 0;
      this.index++;
      //   console.log(this.index);
      if (this.index == this.arr.length) {
        this.index = 0;
      }
    },
  },
});

new Vue({
  el: "#app",
});
