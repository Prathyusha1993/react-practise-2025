import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const defaultWidgets = [
    {i: '1', x: 0, y: 0, w: 2, h: 2 },
    {i: '2', x: 2, y: 0, w: 2, h: 2}
];

function Dashboard() {
    const [layout, setLayout] = useState(() => {
        const saved = localStorage.getItem('dashboard-layout');
        return saved ? JSON.parse(saved) : defaultWidgets;
    });

    const handleLayoutChange = (newLayout) => {
        setLayout(newLayout);
        localStorage.setItem('dashboard-layout', JSON.stringify(newLayout));
    };

    const handleAddWidget = () => {
        const newId = Date.now().toString();
        const newWidget = {i: newId, x:0, y:Infinity, w:2, h:2};
        const updated = [...layout,newWidget];
        setLayout(updated);
        localStorage.setItem('dashboard-layout', JSON.stringify(updated));
    };

    const removeWidget = (id) => {
        const updated = layout.filter(item => item.id !== id);
        setLayout(updated);
        localStorage.setItem('dashboard-layout', JSON.stringify(updated));
    }
  return (
    <div>
        <h2>Customiable Widget</h2>
        <button onClick={handleAddWidget}>Add Widget</button>
        <GridLayout layout={layout} cols={6} rowHeight={100} width={800} onLayoutChange={handleLayoutChange} >
            {layout.map(item => (
                <div>
                    <div>
                        <span>widget #{item.i}</span>
                        <button onClick={() => removeWidget(item.i)}>Remove</button>
                    </div>
                    <div>
                        <p>Widget content</p>
                    </div>
                </div>
            ))}
        </GridLayout>
    </div>
  )
}

export default Dashboard;