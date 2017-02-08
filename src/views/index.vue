<template>
    <div id="index_content">
        <p class="index_welcome">Plugins Of Rainbow</p>
        <p v-link="{ path: '/dial'}">Dial</p>
        <p v-link="{ path: '/scratchCard'}">Scratch Card</p>
        <p v-link="{ path: '/redpacket'}">Red Packet</p>
        <p v-link="{ path: '/countdown'}">Count Down</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
    </div>
</template>
<script>
    
</script>
<style scoped lang='scss'>
#index_content {
    margin-top: 150px;
    p {
        text-align: center;
        color: #fff;
        font-size: 16px;
        margin: 20px auto;
    }
    .index_welcome {
        font-size: 30px;
        font-weight: 900;
        margin-bottom: 40px;
    }
}
</style>