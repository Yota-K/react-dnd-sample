import { useState, useEffect } from 'react';
import { StatusType, GROUP_TYPES, ItemType } from './data';

type GroupedItems = {
  [k in StatusType]?: ItemType[];
};

export const useGroupedItems = (items: ItemType[]) => {
  // 看板チャートに表示する配列を保持するstate
  const [list, setList] = useState<ItemType[]>(items);

  // グループごとに分類したオブジェクトを保持するstate
  const [groupedItems, setGroupedItems] = useState<GroupedItems>({});

  // 初回レンダリング時とlistが変化した時に、グループごとに配列を分割して、groupItemsにセットする
  useEffect(() => {
    setGroupedItems(
      GROUP_TYPES.reduce<GroupedItems>((prev, group) => {
        prev[group] = list.filter((v) => v.group === group);
        return prev;
      }, {})
    );
  }, [list]);

  return [list, setList, groupedItems];
};
