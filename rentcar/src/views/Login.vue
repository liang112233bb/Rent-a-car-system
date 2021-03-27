<template>
    <div class="max">
        <div class="login-box">
            <div class="login-title">后台管理系统</div>

            <el-form  :model="formLabelAlign" :rules="rules" ref="ruleForm" class="form" >
                <el-form-item  prop="name">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item  prop="pass">
                    <el-input v-model="formLabelAlign.pass" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="btn" @click="submitForm()">登录</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
             formLabelAlign: {
                name: "admin",
                pass: "123456",
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                pass: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    {min: 6, max: 10, message: "长度在 6 到 10 个字符",trigger:"blur"},
                ],
            }
        };
    },
    methods: {
        submitForm(){
            this.$router.push("/home");
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
 *{
    margin: 0;
    padding: 0;
    // box-sizing: border-box;
}
.max{
    height: 100%;
    background:url("../assets/images/er1123.jpg") no-repeat;
    background-size: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;  
}
.login-box{
    width: 400px;
    height: 320px;
    border: 1px solid blue;
    background-color: #00000086;
    padding: 0 30px;
    .el-input{
        margin: 10px 0;
    }
}
.login-title{
    color: whitesmoke;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
}
.btn{
    width: 100%;
}
.form{
    margin-top: 20px;
}
</style>
