const apiValue = process.env.REACT_APP_API_URL!.toString();

export class SERVICES {
  static readonly REACT_APP_API = new SERVICES(apiValue, 'REACT_APP_API');

  // private to disallow creating other instances of this type
  private constructor(private readonly key: string, public readonly value: any) {}

  toString() {
    return this.key;
  }
}
