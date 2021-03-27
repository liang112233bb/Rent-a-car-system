<template>
    <div class="max" style="overflow-y:hidden">
       <el-container class="el-max">
           <!-- header -->
            <el-header class="header">
                <div class="header-title">租车后台管理系统</div>
                <div class="header-date">2020-3-27 16:34:12</div>
                <div class="header-week">星期五</div>
                <el-menu :default-active="activeIndex"  mode="horizontal" background-color="#00152A" text-color="whitesmoke"  @select="handleSelect">
                    <el-submenu index="2">
                        <template slot="title">admin 管理员</template>
                        <el-menu-item index="2-1"></el-menu-item>
                        <!-- <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item> -->
                     </el-submenu>
                </el-menu>
                
                <div class="header-home">首页</div>
            </el-header>
            <el-container>
                <el-aside width="200px" class="aside">
                    <!--aside  -->
                         <div class="home_left_top">
                            <div class="avatar" v-for="fit in fits" :key="fit">
                               
                                <el-avatar shape="circle" :size="80" :fit="fit" :src="url"></el-avatar>
                                 <div class="avatartext">{{ fit }}</div>
                            </div>
                           
                        </div>
                        <el-menu
                            class="aside left"
                            @open="handleOpen"
                            @close="handleClose"
                            text-color="#fff"
                            background-color="#314157"
                            active-text-color="#ffd04b"
                            :router="true"
                            :unique-opened="true">
                            <el-submenu index="1" >
                                <template slot="title">
                                <!-- <i class="el-icon-location"></i> -->
                                <span>系统管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="1-1" :route="{ path: '/home/users'}">用户管理</el-menu-item>
                                    <el-menu-item index="1-2" :route="{ path: '/home/roles'}">角色管理</el-menu-item>
                                    <el-menu-item index="1-3" :route="{ path: '/home/datas'}">数据字典</el-menu-item>
                                    <el-menu-item index="1-4" :route="{ path: '/home/handles'}">操作日志</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title">
                                <!-- <i class="el-icon-location"></i> -->
                                <span>客户管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="2-1" :route="{ path: '/home/members'}">会员管理</el-menu-item>
                                    <el-menu-item index="2-2" :route="{ path: '/home/grade'}">会员等级</el-menu-item>
                                    <el-menu-item index="2-3" :route="{ path: '/home/integral'}">积分日志</el-menu-item>
                                    <el-menu-item index="2-4" :route="{ path: '/home/discount'}">会员优惠券</el-menu-item>
                                    <el-menu-item index="2-5" :route="{ path: '/home/discountlog'}">优惠券记录</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                <!-- <i class="el-icon-location"></i> -->
                                <span>租赁管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="3-1" :route="{ path: '/home/allvehicles'}">所有车辆</el-menu-item>
                                    <el-menu-item index="3-2" :route="{ path: '/home/vehiclestype'}">车辆类型</el-menu-item>
                                    <el-menu-item index="3-3" :route="{ path: '/home/vehiclesconfig'}">车辆配置</el-menu-item>
                                    <el-menu-item index="3-4" :route="{ path: '/home/vehiclesbrand'}">汽车品牌</el-menu-item>
                                    <el-menu-item index="3-5" :route="{ path: '/home/agentstores'}">代理门店</el-menu-item>
                                    <el-menu-item index="3-6" :route="{ path: '/home/vehiclescommon'}">车辆评论</el-menu-item>
                                    <el-menu-item index="3-7" :route="{ path: '/home/ordermanagement'}">订单管理</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="4">
                                <template slot="title">
                                <!-- <i class="el-icon-location"></i> -->
                                <span>维护记录</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="4-1" :route="{ path: '/home/maintenanceshop'}">修理厂</el-menu-item>
                                    <el-menu-item index="4-2" :route="{ path: '/home/maintenancelog'}">维修记录</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="5">
                                <template slot="title">
                                <!-- <i class="el-icon-location"></i> -->
                                <span>统计处理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="5-1" :route="{ path: '/home/websiteincome'}">网站收入总计</el-menu-item>
                                    <el-menu-item index="5-2" :route="{ path: '/home/customerlogin'}">客户登录总计</el-menu-item>
                                    <el-menu-item index="5-3" :route="{ path: '/home/websiteconfig'}">网站操作记录统计</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="6">
                                <template slot="title">
                                <!-- <i class="el-icon-location"></i> -->
                                <span>营销管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="6-1" :route="{ path: '/home/service'}">客服问答</el-menu-item>
                                    <el-menu-item index="6-2" :route="{ path: '/home/advertising'}">广告管理</el-menu-item>
                                    <el-menu-item index="6-3" :route="{ path: '/home/advertisinglocation'}">广告位置</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                           
                        </el-menu>
                    
                </el-aside>
                <!--  -->
                <el-main class="main">
                     <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
             activeIndex: '1',
              fits: ['你好 ！管理员，欢迎回来'],
              url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
         console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
      
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.max{
    height: 100%;
}
.el-max{
    height: 100%;
}
.header{
    display: flex;
    // border: 1px solid blue;
    background-color: #00152A;
}
.aside{
    height: 100%;
    // border: 1px solid yellow;
    background-color: #314157;
}
.left{
    border: 1px solid #314157;
}
.main{
    height: 100%;
    // border: 1px solid red;
}
.header-title{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    color: whitesmoke;
}
.header-date{
    color: cornflowerblue;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header-week{
    color: cornflowerblue;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 100px;
}
.header-own{
    background-color: #00152A;
}
.header-home{
    color: whitesmoke;
    display: flex;
    align-items: center;
}
.avatar{
    // display: flex;
    // flex-direction:column;
    text-align: center;
    color: whitesmoke;
    padding: 20px 0;
    .avatartext{
        font-size: 14px;
        margin-top: 10px;
    }
}
</style>

