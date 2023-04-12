import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

// アイテムの表示だけを担当するコンポーネントを定義する
const Draggable: React.FC<{
  children: React.ReactNode;
  index: number;
  content: {
    heading: string;
    text: string;
  };
}> = ({ content, children }) => {
  // DOMの参照を定義
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging, canDrag }, dragRef] = useDrag({
    type: 'item',
    item: content,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      canDrag: monitor.canDrag(),
    }),
  });

  // ドラッグしている要素を話した時の処理をまとめたhooks
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: 'item',
    drop: (item, monitor) => {
      console.log(`Dropped item: ${JSON.stringify(item)}`);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  dragRef(dropRef(ref));

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.4 : 1,
        cursor: canDrag ? 'move' : 'default',
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
