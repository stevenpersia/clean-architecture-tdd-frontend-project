export class Pokemon {
  constructor(
    private _number: string,
    private _name: string,
    private _description: string,
    private _weight: number,
    private _height: number,
    private _avatar: string
  ) {}

  get number(): string {
    return this._number;
  }

  get name(): string {
    return this._name;
  }

  get weight(): number {
    return this._weight;
  }

  get description(): string {
    return this._description;
  }

  get height(): number {
    return this._height;
  }

  get avatar(): string {
    return this._avatar;
  }
}
