<template>
    <div class="main">
      <div class="content">
            <div class="back" @click="back">
                <a href="#">
                    <i class="el-icon-arrow-left"></i>
                    <span>返回</span>
                </a>
            </div>
            <div class="title">
                <span>xxx|已提交</span>
                <div class="right">
                    <router-link to="editor">
                        <span>新建</span>
                    </router-link>
                    |
                    <span>打印</span>
                </div>
            </div>
            <div class="page">
                <h2>劳动合同终止协议</h2>
                <p>是断开连接快乐圣诞放假啦深刻搭街坊拉萨扩大解放山卡拉地方就阿拉善离开是断开连接快乐圣诞放假啦深刻搭街坊拉萨扩大解放山卡拉地方就阿拉善离开</p>
                <p>啦大家看法拉斯达克警方了，爱上了雕刻技法卡里的房价快速搭建法律思考卡萨丁就flak圣诞节法律思考的快递放假阿历克斯大家flak圣诞节啊可是大家发牢骚</p>
                <p>是断开连接快乐圣诞放假啦深刻搭街坊拉萨扩大解放山卡拉地方就阿拉善离开</p>
                <p>啦大家看法拉斯达克警方了，爱上了雕刻技法卡里的房价快速搭建法律思考卡萨丁就flak圣诞节法律思考的快递放假阿历克斯大家flak圣诞节啊可是大家发牢骚</p>
                <p>是断开连接快乐圣诞放假啦深刻搭街坊拉萨扩大解放山卡拉地方就阿拉善离开</p>
                <p>啦大家看法拉斯达克警方了，爱上了雕刻技法卡里的房价快速搭建法律思考卡萨丁就flak圣诞节法律思考的快递放假阿历克斯大家flak圣诞节啊可是大家发牢骚</p>
                <p>是断开连接快乐圣诞放假啦深刻搭街坊拉萨扩大解放山卡拉地方就阿拉善离开</p>
            </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {},
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
    .main{
        height:100%;
        padding:30px;
        background-color: #fff;
        .content{
            .back{
                a:hover{
                    cursor: pointer;
                }
            }
            .title{
                padding:0 20px;
                height:50px;
                line-height:50px;
                border-radius: 10px;
                background-color: #c8e2f3;
                .right{
                    float:right;
                }
            }
            .page{
                min-height:650px;
                width:500px;
                // border:2px solid #bfa;
                border-radius: 10px;
                box-shadow: 3px 3px 24px 5px #b8b5b5;
                margin:20px auto;
                h2{
                    text-align:center;
                }
                p{
                    text-indent:2em;
                    line-height:2;
                }
            }
        }
    }
</style>
