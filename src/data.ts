export type StatusType = 'TODO' | 'DONE';

export type ItemType = {
  id: number;
  heading: string;
  type: 'item';
  group: StatusType;
  text: string;
};

export const GROUP_TYPES = ['TODO', 'DONE'] as const;

export const HEADINGS = {
  TODO: '未着手',
  DONE: '完了',
} as const;

// サンプルデータ
export const INITIAL_DATA: ItemType[] = [
  {
    id: 1,
    heading: '歯を磨く',
    type: 'item',
    group: 'TODO',
    text: '歯磨きおじさん',
  },
  {
    id: 2,
    heading: '昼ごはん食べる',
    type: 'item',
    group: 'TODO',
    text: 'ラーメン美味しい',
  },
  {
    id: 3,
    heading: '朝ごはんを食べる',
    type: 'item',
    group: 'TODO',
    text: 'モンスターエナジーで十分',
  },
  {
    id: 4,
    heading: '寝る',
    type: 'item',
    group: 'DONE',
    text: '寝る子は育つ。目指せ大谷翔平',
  },
];
