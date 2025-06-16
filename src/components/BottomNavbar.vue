<script setup>
import { ref } from 'vue'

let activeItem = ref('0')
const emit = defineEmits(['nav-click'])

const handleNavClick = (index) => {
    activeItem.value = index
    emit('nav-click', index)
}
</script>

<template>
    <div class="custom-navbar">
        <div class="navbar-list">
            <div @click="handleNavClick('0')">
                <div class="navbar-list-icon">
                    <vs-icon icon="volunteer_activism" size="small" :color="activeItem === '0' ? 'primary' : ''"></vs-icon>
                </div>
                <span class="navbar-list-title">混沌</span>
            </div>
            <div @click="handleNavClick('1')">
                <div class="navbar-list-icon">
                    <vs-icon icon="looks" size="small" :color="activeItem === '1' ? 'primary' : ''"></vs-icon>
                </div>
                <span class="navbar-list-title">时空</span>
            </div>
            <div @click="handleNavClick('2')">
                <div class="navbar-list-icon">
                    <vs-icon icon="people" size="small" :color="activeItem === '2' ? 'primary' : ''"></vs-icon>
                </div>
                <span class="navbar-list-title">双人成行</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.navbar-list-icon {
    line-height: 1;
    text-align: center;
}

.navbar-list-title {
    font-size: 12px;
}

.custom-navbar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    box-shadow: 0 -2px 8px 0 rgba(60, 60, 60, 0.05);
    /* 新增阴影 */
    padding: 10px 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    box-sizing: border-box;
}

.navbar-list {
    display: flex;
    gap: 20px;
    max-width: 600px;
}

@media (max-width: 600px) {
    .custom-navbar {
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }

    .navbar-list {
        width: 100%;
        justify-content: space-around;
        gap: 0;
    }
}
</style>