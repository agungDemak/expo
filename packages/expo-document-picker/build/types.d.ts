export declare type DocumentPickerOptions = {
    type?: string;
    copyToCacheDirectory?: boolean;
    multiple?: boolean;
};
export declare type DocumentResult = {
    type: 'cancel';
} | {
    type: 'success';
    name: string;
    size: number;
    uri: string;
    lastModified?: number;
    file?: File;
    output?: FileList | null;
};
