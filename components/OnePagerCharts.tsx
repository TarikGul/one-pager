import React from 'react';
import { Tabs, TabPanels, TabList, Tab, TabPanel } from '@chakra-ui/core';

import { UserGrowth } from './charts/UserGrowth';
import { ContentCard } from './ContentCard';
import { OnePagerData } from '../model/model';

type OnePagerChartTypes = {
    onePagerData: OnePagerData,
    isLoading: boolean
}

export const OnePagerCharts = ({onePagerData, isLoading}: OnePagerChartTypes) => {

    return (
        <ContentCard title='Current User Growth vs Successfull Pairs' isLoading={isLoading}>
            <UserGrowth onePagerData={onePagerData}/>
        </ContentCard>
    )
}