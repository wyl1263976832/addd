<template>
    <div class="login1-container">
        <div class="app-icon">
            <img src="" alt="">
        </div>
        <div class="login-button-wrapper">
            <van-button class="login-button" color="#ECE8E8" to="login2">登录</van-button>
        </div>
        <div class="register-button-wrapper">
            <van-button class="register-button" color="#ECE8E8">注册</van-button>
        </div>
    </div>
</template>

<script>
export default {
}    

</script>

<style style="less" scoped>
.login1-container{
	position : absolute;
	width : 100%;
	height : 100%;
    background-color:#FDC942;
    display: flex;
    justify-content: center;
}
.app-icon{
    position: relative;
    top: 10%;
    background-color: white;
    width: 50vw;
    height: 33vh;
}
.login-button-wrapper{
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.register-button-wrapper{
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.login-button{
    color: #763100 !important;
    border-radius: 50px;
    width: 33vw;
    height: 6vh;
    font-size: 3vw;
}
.register-button{
    color: #763100 !important;
    border-radius: 50px;
    width: 33vw;
    height: 6vh;
    font-size: 3vw;
}


</style>

