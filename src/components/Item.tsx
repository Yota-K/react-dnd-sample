import React from 'react';

// アイテムの表示だけを担当するコンポーネントを定義する
const Item: React.FC<{
  content: {
    heading: string;
    text: string;
  };
}> = ({ content }) => {
  return (
    <div className="item">
      <h3>{content.heading}</h3>
      <p>{content.text}</p>
    </div>
  );
};

export default Item;
