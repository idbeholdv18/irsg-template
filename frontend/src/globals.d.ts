declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.wav";

declare module "*.png" {
  const value: any;
  export default value;
}
