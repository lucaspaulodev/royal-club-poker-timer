export type BlindsDTO = {
    big: number;
    small: number;
    time: number;
};

export type StructureDTO<T extends string> = {
    title: string;
    blinds: BlindsDTO[];
};

export const structures: Record<string, StructureDTO<string>> = {
    big50: {
        title: "Royal BIG 50",
        blinds: [
            {
                big: 100,
                small: 50,
                time: 1
            },
            {
                big: 200,
                small: 100,
                time: 1
            },
            {
                big: 600,
                small: 300,
                time: 1
            },
            {
                big: 800,
                small: 400,
                time: 15
            },
        ]
    },
    big100: {
        title: "Royal BIG 50",
        blinds: [
            {
                big: 100,
                small: 50,
                time: 15
            },
            {
                big: 100,
                small: 50,
                time: 15
            },
            {
                big: 100,
                small: 50,
                time: 15
            },
            {
                big: 100,
                small: 50,
                time: 15
            },
        ]
    },
    ko: {
        title: "Royal BIG 50",
        blinds: [
            {
                big: 100,
                small: 50,
                time: 15
            },
            {
                big: 100,
                small: 50,
                time: 15
            },
            {
                big: 100,
                small: 50,
                time: 15
            },
            {
                big: 100,
                small: 50,
                time: 15
            },
        ]
    },
    last: {
        title: "Royal BIG 50",
        blinds: [
            {
                big: 100,
                small: 50,
                time: 15
            },
            {
                big: 100,
                small: 50,
                time: 15
            },
            {
                big: 100,
                small: 50,
                time: 15
            },
            {
                big: 100,
                small: 50,
                time: 15
            },
        ]
    },
};