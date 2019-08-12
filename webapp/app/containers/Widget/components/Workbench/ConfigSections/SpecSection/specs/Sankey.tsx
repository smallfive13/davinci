import React from 'react'
import { Row, Col, Checkbox, InputNumber } from 'antd'

import { onSectionChange } from './util'
import { ISpecConfig } from '../types'

import styles from '../../../Workbench.less'

interface ISpecSectionSankeyProps {
  spec: ISpecConfig
  title: string
  onChange: (value: string | number, propPath: string | string[]) => void
}

function SpecSectionSankey (props: ISpecSectionSankeyProps) {
  const { spec, title, onChange } = props
  const { draggable, nodeWidth, nodeGap } = spec

  return (
    <div className={styles.paneBlock}>
      <h4>{title}</h4>
      <div className={styles.blockBody}>
        <Row gutter={8} type="flex" align="middle" className={styles.blockRow}>
          <Col span={18}>
            <Checkbox
              checked={draggable}
              onChange={onSectionChange(onChange, 'draggable')}
            >
              允许拖动
            </Checkbox>
          </Col>
        </Row>
        {/* TODO feature in echarts@4.2.0 */}
        {/* <Row gutter={8} type="flex" align="middle" className={styles.blockRow}>
        <Col span={10}>节点布局方向</Col>
        <Col span={10}>
          <Select
            placeholder="排列"
            className={styles.blockElm}
            value={orient}
            onChange={this.selectChange('orient')}
          >
            <Option key="horizontal" value="horizontal">水平排列</Option>
            <Option key="vertical" value="vertical">垂直排列</Option>
          </Select>
        </Col>
      </Row> */}
        <Row gutter={8} type="flex" align="middle" className={styles.blockRow}>
          <Col span={6}>节点宽度</Col>
          <Col span={6}>
            <InputNumber
              placeholder="nodeWidth"
              className={styles.blockElm}
              value={nodeWidth}
              min={0}
              onChange={onSectionChange(onChange, 'nodeWidth')}
            />
          </Col>
          <Col span={6}>节点间隔</Col>
          <Col span={6}>
            <InputNumber
              placeholder="nodeGap"
              className={styles.blockElm}
              value={nodeGap}
              min={0}
              onChange={onSectionChange(onChange, 'nodeGap')}
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SpecSectionSankey