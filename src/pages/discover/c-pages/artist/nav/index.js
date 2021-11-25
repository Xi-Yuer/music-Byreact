import React, { memo } from 'react';

import { Card } from 'antd';

import { StyleWrapper } from './style';

export default memo(function NavComponent(props) {

  const { title, area = [], setTypeId, setAreaId } = props;

  const typeItemClick = (area, type) => {
    setTypeId(type)
    setAreaId(area)
  }
  
  return (
    <StyleWrapper>
      {area.map(item => {
        return (
          <Card
            className='cardItem'
            size='small'
            title={item.name}
            style={{ width: 250 }}
            key={item.name}
          >
            <div className='areaContent'>
              {title.map(iten => {
                return (
                  <span
                    key={iten.name}
                    onClick={e => {
                      typeItemClick(item.area, iten.type);
                    }}
                  >
                    {item.name === iten.name
                      ? '全部'
                      : item.name + '' + iten.name}
                  </span>
                );
              })}
            </div>
          </Card>
        );
      })}
    </StyleWrapper>
  );
});
