<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :append-to-body="true"
    :before-close="toClose"
    :close-on-click-modal="false"
    top="20vh"
    width="40%"
  >
    <dv-border-box-11 title="背景选择" :key="dialogKey">
      <svg-icon class="closeIcon" icon-class="close" @click="toClose" />
      <div class="container">
        <div class="img-container" v-for="(item, index) in $globalData.bgs" :key="index">
          <el-radio v-model="radio" class="radio" :label="index">背景{{ index + 1 }}</el-radio>
          <el-image class="image" :src="item" :preview-src-list="$globalData.bgs"></el-image>
          <!-- 遮罩层 -->
          <div class="mask">
            <span class="iconfont icon-yanjing eye"></span>
            <span class="text">预览</span>
          </div>
        </div>
      </div>
    </dv-border-box-11>
  </el-dialog>
</template>

<script>
// 导入设置localstorage的函数
import cache from "@/utils/cache.js"
export default {
  name: "bgs-dialog",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    dialogKey: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      radio: cache.getCache("bgUrl") ? cache.getCache("bgUrl").index : "",
      color: cache.getCache("bgUrl") ? cache.getCache("bgUrl").bg : ""
    }
  },
  watch: {
    radio: {
      handler(newVal) {
        this.$emit("radioChangeBg", this.$globalData.bgs[newVal])
        document.documentElement.setAttribute(
          "theme",
          this.$store.getters.theme == "dark" ? "light" : "dark"
        )
        this.$store.commit(
          "fullLoading/SET_THEME",
          this.$store.getters.theme == "dark" ? "light" : "dark"
        )
        this.$store.commit("fullLoading/SET_BGURL", {
          index: newVal,
          bg: `background:url(${this.$globalData.bgs[newVal]})`
        })
      }
    }
  },
  methods: {
    toClose() {
      this.$emit("update:dialogVisible", false)
    },
    changeColor(newColor) {
      // console.log("newColor", newColor)
      this.$emit("selectChangeBg", newColor)
      this.$store.commit("fullLoading/SET_BGURL", { index: 100, bg: `background:${newColor}` })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog__header {
  display: none;
}

::v-deep .el-dialog__body {
  padding: 10px 5px 5px 5px;
  background: #00132a;
  min-width: 758px;
}
::v-deep .border-box-content {
  padding: 60px 20px 20px 20px;
}
::v-deep .el-radio__label {
  color: #fff;
}
.container {
  padding: 10px;
  display: grid;
  gap: 20px 15px;
  color: #fff;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  text-align: center;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(2, 1fr);
  .img-container {
    text-align: center;
    height: 220px;
    position: relative;
    overflow: hidden;
    .mask {
      width: 100%;
      height: 220px;
      text-align: center;
      line-height: 200px;
      margin-top: 10px;
      pointer-events: none;
      background: rgba(127, 127, 127, 0.6);
      transition: 0.4s;
      position: absolute;
      left: -100%;
      top: 10px;
      z-index: 10;
      .eye {
        font-size: 20px;
        margin-right: 10px;
        font-weight: bold;
        margin-top: 4px;
        &:hover {
          color: #2d66e2;
        }
      }
      .text {
        font-size: 16px;
        font-weight: bold;
        display: inline-block;
        &:hover {
          color: #2d66e2;
        }
      }
    }
    .image {
      width: 100%;
      height: 200px;
      line-height: 200px;
      &:hover + .mask {
        transform: translateX(100%);
      }
    }
    .radio {
      height: 20px;
      line-height: 20px;
    }
  }
}
.closeIcon {
  position: absolute;
  right: 4px;
  top: 2px;
  width: 30px;
  height: 30px;
  color: #2d66e2;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: rotate(90deg);
  }
}
</style>
