<template>
  <dv-border-box-11 title="Stanley系列">
    <base-echart :options="options" />
  </dv-border-box-11>
</template>

<script>
// 导入基础的图
import BaseEchart from "@/common/echart"
export default {
  name: "LineChart5",
  components: {
    BaseEchart
  },
  data() {
    return {
      xData: ["2022-05", "2022-06", "2022-07", "2022-08", "2022-09", "2022-10"],
      defGoal: [0.4, 0.3, 0.2, 0.5, 0.5, 0.45],
      mdx: [0.2, 0.2, 0.6, 0.5, 0.4, 0.4],
      jux: [0.2, 0.5, 0.2, 0.4, 0.6, 0.5],
      mlx: [0.4, 0.5, 0.4, 0.6, 0.2, 0.3],
      mwx: [0.6, 0.4, 0.3, 0.2, 0.2, 0.4]
    }
  },
  computed: {
    options() {
      return {
        grid: {
          top: 80,
          right: 50,
          left: 80,
          bottom: 40 //图表尺寸大小
        },
        legend: [
          // MD-X
          {
            top: 50,
            right: 380,
            textStyle: {
              color: "#FFFFFF",
              fontSize: 12
            },
            data: ["Def Goal"]
          },
          // MD-X
          {
            top: 50,
            right: 300,
            textStyle: {
              color: "#FFFFFF",
              fontSize: 12
            },
            data: ["MD-X"]
          },
          // JU-X
          {
            top: 50,
            right: 190,
            textStyle: {
              color: "#FFFFFF",
              fontSize: 12
            },
            data: ["JU-X"]
          },
          // ML-X
          {
            top: 50,
            right: 90,
            textStyle: {
              color: "#FFFFFF",
              fontSize: 12
            },
            data: ["ML-X"]
          },
          // MW-X
          {
            top: 50,
            right: 8,
            textStyle: {
              color: "#FFF",
              fontSize: 12
            },
            data: ["MW-X"]
          }
        ],
        tooltip: {
          show: true,
          trigger: "axis", //axis , item
          backgroundColor: "RGBA(0, 49, 85, 1)",
          borderColor: "rgba(0, 151, 251, 1)",
          borderWidth: 1,
          borderRadius: 0,
          textStyle: {
            color: "#BCE9FC",
            fontSize: 16,
            align: "left"
          },
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          color: "#59588D",
          data: this.xData,
          axisLabel: {
            margin: 10,
            color: "#EEEEEE",
            textStyle: {
              fontSize: 14
            }
          },
          axisLine: {
            symbol: ["none", "arrow"],
            lineStyle: {
              color: "#ffffff",
              opacity: 1
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#ffffff",
              opacity: 0.3
            }
          }
        },
        yAxis: [
          {
            type: "value",
            min: () => 0, // 指定最小值
            max: (value) => value.max, // 指定最大值
            // position: "left",
            splitLine: {
              show: false
            },
            axisLabel: {
              color: "#EEEEEE",
              textStyle: {
                fontSize: 16
              },
              formatter: function (value) {
                return value + "%"
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              symbol: ["none", "arrow"],
              lineStyle: {
                color: "#fff",
                opacity: 0.8
              }
            }
          }
        ],
        series: [
          // 线数据 Def Goal
          {
            name: "Def Goal",
            type: "line",
            //yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            symbolSize: 8,
            smooth: true, // 设置拆线平滑
            itemStyle: {
              normal: {
                // color: "#52fea2"
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(90, 210, 250, 1)"
                  },
                  {
                    offset: 0.9,
                    color: "rgba(55, 89, 240, 1)"
                  }
                ])
              }
            },
            lineStyle: {
              width: 4
            },
            label: {
              show: true,
              formatter: (params) => params.value + "%"
            },
            data: this.defGoal
          },
          // 线数据 MD-X
          {
            name: "MD-X",
            type: "line",
            //yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            symbolSize: 8,
            smooth: true, // 设置拆线平滑
            itemStyle: {
              normal: {
                // color: "#1fedeb"
                color: "rgba(214, 235, 110, 1)"
              }
            },
            lineStyle: {
              width: 4
            },
            label: {
              show: true,
              formatter: (params) => params.value + "%"
            },
            data: this.mdx
          },
          // 线数据 JU-X
          {
            name: "JU-X",
            type: "line",
            //yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            symbolSize: 8,
            smooth: true, // 设置拆线平滑
            itemStyle: {
              normal: {
                // color: "#f7a35c"
                color: "rgba(194, 153, 242, 1)"
              }
            },
            lineStyle: {
              width: 4
            },
            label: {
              show: true,
              formatter: (params) => params.value + "%"
            },
            data: this.jux
          },
          // 线数据 ML-X
          {
            name: "ML-X",
            type: "line",
            //yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            symbolSize: 8,
            smooth: true, // 设置拆线平滑
            itemStyle: {
              normal: {
                // color: "#99ff66"
                color: "rgba(173, 247, 183, 1)"
              }
            },
            lineStyle: {
              width: 4
            },
            label: {
              show: true,
              formatter: (params) => params.value + "%"
            },
            data: this.mlx
          },
          // 线数据 MW-X
          {
            name: "MW-X",
            type: "line",
            //yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            symbolSize: 8,
            smooth: true, // 设置拆线平滑
            itemStyle: {
              normal: {
                // color: "#FFD700"
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(125, 245, 141, 1)"
                  },
                  {
                    offset: 0.9,
                    color: "rgba(26, 156, 44, 1)"
                  }
                ])
              }
            },
            lineStyle: {
              width: 4
            },
            label: {
              show: true,
              formatter: (params) => params.value + "%"
            },
            data: this.mwx
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
