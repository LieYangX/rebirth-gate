<script setup>
import { ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeLoading = ref(false);
const { proxy } = getCurrentInstance()

const openLoading = (type) => {
    activeLoading.value = true
    proxy.$vs.loading({
        type: 'sound',
        text: '别急哦！让我假装加载一会儿！！！！'
    })
    setTimeout(() => {
        activeLoading.value = false
        proxy.$vs.loading.close()
        proxy.$vs.notify({
            title: '终于进来了！',
            text: '假装加载完成，欢迎来到重生门！',
            color: 'success',
            position: 'top-center'
        })
        router.replace('/home')
    }, 3000);
}


</script>

<template>
    <div class="container">
        <vs-card actionable class="cardx">
            <template #header>
                <h3>
                    欢迎来到重生门
                </h3>
                <span style="font-size: 12px; font-weight: bold;">Welcome to the Rebirth Gate.</span> <br>
                <span style="font-size: 12px;">General Manager Chen</span>
            </template>
            <template #media>
                <img src="https://img-s.msn.cn/tenant/amp/entityid/BB1msBaG?w=0&h=0&q=60&m=6&f=jpg&u=t">
            </template>
            <div>
                <span style="font-weight:900;">当我们在时光的裂缝中交出旧钥匙，重生门后等待的不仅是新的心跳，更是在对方的瞳孔里遇见第无数次初雪般纯净的相遇。</span> <br>
                <span style="font-weight:600;">给我进去别瞅啦陈总啊！！！😇</span> <br>
                <span style="font-weight:700;">When we hand over the old keys in the cracks of time, what awaits us
                    behind
                    the door
                    of rebirth is not
                    only a
                    new heartbeat, but also a meeting as pure as the first snowfall seen countless times in each other's
                    pupils.
                </span>
            </div>
            <template #footer>
                <vs-row vs-justify="flex-end">
                    <vs-button color="primary" type="relief" @click="openLoading">快点我✌️</vs-button>
                </vs-row>
            </template>
        </vs-card>
    </div>
</template>

<style scoped>
.container {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
