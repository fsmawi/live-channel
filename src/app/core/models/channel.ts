/**
 * Channel Model
 */
export class Channel {
  /**
   * Channel id
   */
  id: string;

  /**
   * Creates a Channel object
   * @param obj {any} Base object to use
   */
  constructor(obj: any = {}) {
    Object.assign(this, obj);
  }
}
