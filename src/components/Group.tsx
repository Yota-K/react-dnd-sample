import { useDrag, useDrop } from 'react-dnd';
import React, { useRef } from 'react';
import Draggable from './Draggable';
import Item from './Item';
import { HEADINGS, ItemType, StatusType } from '../data';

// アイテムの表示だけを担当するコンポーネントを定義する
const Group: React.FC<{
  heading: StatusType;
  items: ItemType[];
}> = ({ heading, items }) => {
  return (
    <div className="group">
      <h2>{HEADINGS[heading]}</h2>
      <div>
        {items.map((item) => (
          <Draggable key={item.heading} index={item.id} content={{ heading: item.heading, text: item.text }}>
            <Item content={{ heading: item.heading, text: item.text }} />
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default Group;
