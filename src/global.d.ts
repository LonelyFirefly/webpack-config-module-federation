interface IClassNames {
    [className: string]: string;
}

declare module "*.module.scss" {
    const classNames: IClassNames;
    export = classNames;
}
