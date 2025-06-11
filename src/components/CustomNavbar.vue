<script setup>
import { ref, defineEmits } from 'vue'

let activeItem = ref('0')
const emit = defineEmits(['nav-click'])

const handleNavClick = (index) => {
    activeItem.value = index
    emit('nav-click', index)
}
</script>

<template>
    <div class="custom-navbar">
        <div class="navbar-title">重生门</div>
        <div class="navbar-list">
            <button :class="{ active: activeItem === '0' }" @click="handleNavClick('0')" type="button">大礼包</button>
            <button :class="{ active: activeItem === '1' }" @click="handleNavClick('1')" type="button">疯狂星期四</button>
            <button :class="{ active: activeItem === '2' }" @click="handleNavClick('2')" type="button">该死的周一</button>
        </div>
    </div>
</template>

<style scoped>
.custom-navbar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    box-shadow: 0 2px 8px 0 rgba(60, 60, 60, 0.05); /* 新增阴影 */
    padding: 10px 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    box-sizing: border-box;
}

.navbar-title {
    font-weight: bold;
    font-size: 20px;
}

.navbar-list {
    display: flex;
    gap: 20px;
}

.navbar-list button {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    background: #fff;
    color: #222;
    font-size: 16px;
    transition: background 0.5s, color 0.1s;
    user-select: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    /* 移动端去除点击高亮 */
}

.navbar-list button.active,
.navbar-list button:hover {
    background: #e0e0e0;
    /* 比 hover 稍深一点，过渡自然 */
    color: #3f51b5;
    transition: background 0.5s, color 0.1s;
}

@media (max-width: 600px) {
    .custom-navbar {
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
    }

    .navbar-list {
        width: 100%;
        justify-content: space-around;
        gap: 0;
    }

    .navbar-title {
        margin-bottom: 8px;
        font-size: 18px;
    }
}
</style>