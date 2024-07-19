import { RemoteCursorDecoratedRange } from '@xbeeant/plate-yjs-react';
import { BaseRange } from 'slate';
import { CursorData } from './types';

declare module 'slate' {
  interface CustomTypes {
    Range: BaseRange | RemoteCursorDecoratedRange<CursorData>;
  }
}
