import * as echarts from '../../ec-canvas/echarts.js';
import mapJsonLocal from './北京城区.js';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataRegion : {
      type: Array,
      value: []
    },
    dataPoint: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    ec: {
      lazyLoad: true  //设置图表懒加载
    },
    mapJson: {},
  },

  /**
   * 组件的生命函数
   */
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.initMychart(this.data.dataRegion, this.data.dataPoint);
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
    ready: function () {

    }  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 设置图表所需的option
    setMychartOption(chart, dataRegion, dataPoint) {
      const option = {
        series: [{
          type: 'map',
          map: 'reg_map',
          animation: false,
          data: dataRegion
        }],
      };
      chart.setOption(option);
    },
    // 初始化图表
    initMychart(dataRegion, dataPoint) {  
      // 获取echarts组件，并赋值给变量，然后初始化图表
      this.oneComponent = this.selectComponent('#mychart-dom-area');
      this.oneComponent.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        canvas.setChart(chart);
        echarts.registerMap('reg_map', mapJsonLocal);
        // echarts.registerMap('beijing', this.data.mapJson);
        this.setMychartOption(chart, dataRegion, dataPoint)  //赋值给echart图表
        this.oneChart = chart;
      });
    },
  }
})
