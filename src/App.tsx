import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Group from './components/Group';
import { GROUP_TYPES, INITIAL_DATA } from './data';
import './App.css';

// DndProviderのなかでドラッグ&ドロップができるようになる
function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <div className="board-wrap">
          {GROUP_TYPES.map((heading, i) => {
            const items = INITIAL_DATA.filter((e) => e.group === heading);

            return <Group key={i} heading={heading} items={items} />;
          })}
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
