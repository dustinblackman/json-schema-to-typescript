export declare const input: {
    "title": string;
    'type': string;
    "extends": {
        "$ref": string;
    }[];
    properties: {
        "foo": {
            "type": string;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export declare const outputs: {
    options: {
        declareExternallyReferenced: boolean;
    };
    output: string;
}[];
