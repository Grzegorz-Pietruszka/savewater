import React, {createContext, FC, useContext, useEffect, useState} from "react";
import {IBanner, IContextProps, IChallenges, IUsages} from "./interfacesTS/interfaces";
import pageData from "./page.json";

const AppContext = createContext<IContextProps>({} as IContextProps);

const AppProvider: FC = ({children}: any) => {
    const [banner, setBanner] = useState<IBanner>({} as IBanner);
    const [usages, setUsages] = useState<IUsages[]>([] as IUsages[]);
    const [challenges, setChallenges] = useState<IChallenges[]>([] as IChallenges[]);

    const fetchData = () => {
        const data = pageData;
        setBanner(data.banner[0])
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
