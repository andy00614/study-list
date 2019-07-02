import React from 'react'
import styles from './index.module.scss';
import echarts from 'echarts';

export default class Bar extends React.Component {
  componentDidMount() {
    this.myChart = echarts.init(this.echartsWrapper);
    this.renderPie() 
  }

  renderPie = () => {
    
    const option = {
      // color:['#06d8ff','#168ffe'],
      color: ['#06d8ff','#168ffe','#579EF2','#145DB2','#1A8AE0','#3F81CE','#44C8B3','#7140CC','#5A78BF'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
    
      legend: {
        data: this.props.legends,
        textStyle:{
          color:'#fff'
        },
        top:30,
        right:'10%',
        width:500,
      },
      grid: {
        top: '25%',
        left: '10%',
        right: '10%',
        bottom: '15%',
        containLabel: true,
      },
      xAxis : [
        {
          type : 'category',
          axisTick: {
            alignWithLabel: true,
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: '#bfbfbf',
            },
          },
          axisLabel: {
            fontSize: 15,
            color: '#fff',
            interval: 0,
          },
          z: 10,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false,

            lineStyle: {
              color: '#1675E0',
            },
          },
          axisLabel: {
            fontSize: 15,
            color: '#fff',
          },
          splitLine: {
            // show: false,
            lineStyle: {
              type: 'dashed',
            },
          },
          axisTick: {
            show: false,
          },
          z: 1,
        },
      ],
      series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          barCategoryGap:'50%'
      },{
          data: [100, 80, 50, 50, 70, 110, 130],
          type: 'bar'
      }]
  };
  
    this.myChart.setOption(option);
  }
  componentDidUpdate() {
    this.renderPie()
  }
  render() {
    return (
      <div ref={node => {this.echartsWrapper = node}} className={styles.container}></div>
    ) 
  }
}

