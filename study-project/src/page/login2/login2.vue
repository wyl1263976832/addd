<template>
    <div class="login2-container">
        <div class="icon-back">
            <van-icon name="arrow-left" @click="goBack" class="back" />
        </div>
        <div class="login2-wrapper">
            <div class="identity">
                <van-field
                v-model="fieldValue"
                is-link
                readonly
                label="我的身份"
                placeholder="选择身份"
                @click="showPicker = true"
                class="identity-choose"
                />
                <van-popup v-model:show="showPicker" round position="bottom">
                <van-picker
                    :columns="columns"
                    @cancel="showPicker = false"
                    @confirm="onConfirm"
                />
                </van-popup>
            </div>
            <van-form @submit="onSubmit">
                <div class="username">
                    <!-- 可以使用 CellGroup 作为容器 -->
                    <van-cell-group inset>
                        <van-field v-model="username" 
                        class="username-input"
                        name="账号" 
                        label="账号" 
                        placeholder="请输入账号"       
                        :rules="[{ required: true, message: '请填写用户名' }]"
                        />
                    </van-cell-group>
                </div>
                <div class="password">
                    <van-cell-group inset>
                        <van-field v-model="password" 
                        type="password" 
                        class="password-input" 
                        name="密码"
                        label="密码" 
                        placeholder="请输入密码" 
                        :rules="[{ required: true, message: '请填写密码' }]"
                        />
                    </van-cell-group>
                </div>
                <div class="submit">
                <van-button native-type="submit" class="submit-button" color="#ECE8E8">提交</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    methods: {
        goBack() {
        this.$router.go(-1); // -1 表示返回上一页
        }
    },    
  setup() {
    const columns = [
      { text: '老师', value: 'teacher' },
      { text: '学生', value: 'student' },
    ];
    const fieldValue = ref('');
    const showPicker = ref(false);

    const onConfirm = ({ selectedOptions }) => {
      showPicker.value = false;
      fieldValue.value = selectedOptions[0].text;
    };

    const username = ref('');
    const password = ref('');
    const onSubmit = (values) => {
      console.log('submit', values);
    };

    return {
      columns,
      onConfirm,
      fieldValue,
      showPicker,
      
      username,
      password,
      onSubmit,
    };
  },
};
  

</script>

<style style="less" scoped>
.login2-container{
	position : absolute;
	width : 100%;
	height : 100%;
    background-color:#FDC942;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login2-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30vh;
}
.back{
    color: #763100;
    position: absolute;
    left: 3vw;
    top: 4vh;
}
.username{
    margin-bottom: 5vh;
}
.submit{
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.identity-choose{
    color: #763100 !important;
    border-radius: 25px;
    width: 50vw;
    height: 6vh;
    font-size: 3vw;
    background-color: #ECE8E8;
    margin-bottom: 5vh;
}
.van-cell-group{
    color: #763100 !important;
    border-radius: 25px;
    width: 50vw;
    height: 6vh;
    font-size: 3vw;
    background-color: #ECE8E8;
}
.username-input{
    color: #763100 !important;
    border-radius: 25px;
    width: 50vw;
    height: 6vh;
    font-size: 3vw;
    background-color: #ECE8E8;
}
.password-input{
    color: #763100 !important;
    border-radius: 25px;
    width: 50vw;
    height: 6vh;
    font-size: 3vw;
    background-color: #ECE8E8;
}
.login-button{
    color: #763100 !important;
    border-radius: 25px;
    width: 50vw;
    height: 6vh;
    font-size: 3vw;
}
.register-button{
    color: #763100 !important;
    border-radius: 25px;
    width: 50vw;
    height: 6vh;
    font-size: 3vw;
}
.submit-button{
    color: #763100 !important;
    border-radius: 25px;
    width: 50vw;
    height: 6vh;
    font-size: 3vw;
}

</style>

