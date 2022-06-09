import { ZuiOverlayPositionMeta } from '../models';
import { ZuiOverlayPosition } from './position';

export class ZuiOverlayFullscreenPosition extends ZuiOverlayPosition {
  public getPositions(): ZuiOverlayPositionMeta {
    return { top: 0, left: 0, width: '100%', height: '100%', position: 'fixed' };
  }
}