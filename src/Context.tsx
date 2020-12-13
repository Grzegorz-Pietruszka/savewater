import React, {createContext, FC, useContext, useEffect, useState} from "react";
import {IBanner, IChallenge, IContextProps, IServerResponse, IUsage} from "./interfacesTS/interfaces";
import pageData from "./page.json";

const url = 'https://cdn.getwaterfit.co.uk/static/files/test/page.json\n';

const AppContext = createContext<IContextProps>({} as IContextProps);

const AppProvider: FC = ({children}: any) => {
    const [banner, setBanner] = useState<IBanner>({} as IBanner);
    const [usages, setUsages] = useState<IUsage[]>([] as IUsage[]);
    const [challenges, setChallenges] = useState<IChallenge[]>([] as IChallenge[]);

    const fetchData = async () => {
        const data: IServerResponse = await fetch(url).then((response) => response.json());
        setBanner(pageData.banner[0])
        setUsages(data.usage);
        setChallenges(data.play)
    }

    useEffect(() => {
        // fetching data here
        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{banner, usages, challenges}}>
            {children}
        </AppContext.Provider>
    );
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext}
