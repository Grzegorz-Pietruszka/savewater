export interface IBanner {
    id: number,
    title: string,
    pretitle: string,
    description: string,
    type: string,
    image: string,
    buttonText: string,
    buttonPath: string
}

// change to usage interface

export interface IUsages {
    id: number,
    description: string,
    type: string,
    icon: string,
    saving: { [key: string]: number | undefined }
}

export interface IChallenges {
    id: number,
    title: string,
    description: string,
    icon: string,
    saving: { [key: string]: number | undefined }
}

// change to challenge
export interface IContextProps {
    banner: IBanner,
    usages: IUsages[],
    challenges: IChallenges[]
}
