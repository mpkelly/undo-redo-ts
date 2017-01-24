export interface ICommand {
  name?: string;
  undo: () => any;
  redo: () => any;
}

export class UndoManager {
  private commands: ICommand[] = [];
  private index = -1;
  private limit: number;

  public constructor(limit = 0) {
    this.limit = limit;
  }

  public add(command: ICommand): UndoManager {
    this.commands = this.commands.slice(0, this.index+1);
    this.commands.push(command);
    if (this.limit > 0 && this.commands.length > this.limit) {
      this.commands.shift();
    } else {
      this.index++;
    }
    return this;
  }

  public redo(): boolean {
    if (this.index < this.commands.length -1) {
      this.index++;
      this.commands[this.index].redo();
      return true;
    }
    return false;
  }

  public undo(): boolean {
    if (this.index >= 0) {
      this.commands[this.index].undo();
      this.index--;
      return true;
    }
    return false;
  }

  public commandStack(): ICommand[] {
    return this.commands.slice(0);
  }
}