<script setup>
import versionData from '@/data/Verion.json'
import giftpackData from '@/data/GiftPack.json'
import { ref, getCurrentInstance } from 'vue'
import CustomNavbar from '@/components/CustomNavbar.vue'
import { useRouter } from 'vue-router'

const { proxy } = getCurrentInstance()
const router = useRouter()

const clickPack = (index) => {
  let color = `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`
  proxy.$vs.notify({
    title: '中奖啦！',
    text: giftpackData.data[index],
    color: color,
    position: 'top-center'
  })
}

const handleNavClick = (index) => {
  console.log(index)
  let color = `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`
  proxy.$vs.notify({
    title: '施工中！！',
    text: '该功能正在施工中，敬请期待！别点要坏了！！！😞不行！！时空损坏哥给你送回来哈哈气死你！',
    color: color,
    position: 'top-right'
  })
  router.replace('/')
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}
</script>

<template>
  <CustomNavbar @nav-click="handleNavClick" />

  <div class="container">
    <vs-alert color="primary" title="请选择您的大礼包" active="true">
      陈总请选择您的大礼包，快选快选，机会难得哦！
      General Manager Chen, please choose your gift package. Hurry up and make a choice! It's a rare opportunity!
    </vs-alert>
  </div>
  <div class="container-buttons">
    <vs-button @click="clickPack('0')" style="margin-right: 10px;" type="relief">重生门</vs-button>
    <vs-button @click="clickPack('1')" style="margin-right: 10px;" color="success" type="relief">我要当仙人</vs-button>
    <vs-button @click="clickPack('2')" style="margin-right: 10px;" color="danger" type="relief">lovE不发音</vs-button>
    <vs-button @click="clickPack('3')" color="danger" type="relief">你不敢点</vs-button>
  </div>

  <div class="bottom">
    版本号：{{ versionData.version }}-{{ versionData.desc }}
  </div>
</template>

<style scoped>
.nabarx {
  width: 100%;
  text-align: center;
  padding: 5px;
}

.container {
  margin-top: 80px;
  padding: 20px;
  text-align: center;
}

.container-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
}

.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 5px;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
  font-size: 10px;
}
</style>
