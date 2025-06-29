import React from 'react'
import { TodoCreateProvider } from './TodoCreateContext';
import TodoAppWithContext from './TodoAppWithContext';

function AppFinal() {
  return (
    <div>
        <TodoCreateProvider>
            <TodoAppWithContext />
        </TodoCreateProvider>
    </div>
  )
}

export default AppFinal;