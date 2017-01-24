# undo-redo-ts

A simple undo/redo manager for typescript.

## Install

`
npm install undo-redo-ts
`

## Usage

```typescript
import {UndoManager} from 'undo-redo-ts';

const undoManager = new UndoManager();
undoManager.add({
  name: 'Undoable thing',
  undo: () => {console.log('undo')},
  redo: () => {console.log('redo')}
});

undoManager.undo();

undoManager.redo();
```
