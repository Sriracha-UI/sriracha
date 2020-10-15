export const entry: string;
export namespace module {
    const rules: ({
        test: RegExp;
        loader: string;
        exclude: RegExp;
        options?: undefined;
        use?: undefined;
        query?: undefined;
    } | {
        test: RegExp;
        loader: string;
        exclude: RegExp;
        options: {
            getCustomTransformers: () => {
                before: import("typescript").TransformerFactory<import("typescript").SourceFile>[];
            };
        };
        use?: undefined;
        query?: undefined;
    } | {
        test: RegExp;
        use: {
            loader: string;
        }[];
        loader?: undefined;
        exclude?: undefined;
        options?: undefined;
        query?: undefined;
    } | {
        test: RegExp;
        exclude: RegExp;
        loader: string;
        query: {
            presets: string[];
        };
        options?: undefined;
        use?: undefined;
    })[];
}
export namespace resolve {
    const extensions: string[];
}
export namespace output {
    const filename: string;
    const path: string;
}
export const externals: {
    react: {
        commonjs: string;
        commonjs2: string;
        amd: string;
        root: string;
    };
    "react-dom": {
        commonjs: string;
        commonjs2: string;
        amd: string;
        root: string;
    };
};
