<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import welcomeData from '@/data/Welcome.json'

const router = useRouter()
const activeLoading = ref(false);
const { proxy } = getCurrentInstance()

const data = ref(welcomeData.data);

onMounted(() => {
    setTimeout(() => {
        proxy.$vs.notify({
            title: '等你好久了',
            text: '既然你不点，那我就直接请你进来吧！',
            color: 'success',
            position: 'top-center'
        })
        router.replace('/home')
    }, 10000)
});

const openLoading = () => {
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
    }, 3000)
}


</script>

<template>
    <div class="container">
        <vs-card actionable class="cardx">
            <template #header>
                <h3>
                    {{ data.title }}
                </h3>
                <span style="font-size: 12px; font-weight: bold;">{{ data.titleDescription1 }}</span> <br>
                <span style="font-size: 12px;">{{ data.titleDescription2 }}</span>
            </template>
            <template #media>
                <img src="https://img-s.msn.cn/tenant/amp/entityid/BB1msBaG?w=0&h=0&q=60&m=6&f=jpg&u=t">
            </template>
            <div>
                <span style="font-weight:900;">{{ data.mainDescriptionZh }}</span> <br>
                <span style="font-weight:600;">{{ data.mainTips }}</span> <br>
                <span style="font-weight:700;">{{ data.mainDescriptiontUs }}
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
