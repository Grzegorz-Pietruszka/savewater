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

export interface IUsage {
    id: number,
    description: string,
    type: string,
    icon: string,
    saving: { [key: string]: number | undefined }
}

export interface IChallenge {
    id: number,
    title: string,
    description: string,
    icon: string,
    saving: { [key: string]: number | undefined }
}

export interface IContextProps {
    banner: IBanner,
    usages: IUsage[],
    challenges: IChallenge[]
}

export interface IIcons {
    [key: string]: string
}

export interface IServerResponse {
    banner: IBanner[],
    usage: IUsage[],
    play: IChallenge[]
}

export interface IUsageCardProps {
    usage: IUsage
}
