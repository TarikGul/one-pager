import React from 'react';
import { Tabs, TabPanels, TabList, Tab, TabPanel } from '@chakra-ui/core';

import { ContentCard } from './ContentCard';
import { OnePagerData } from '../model/model';

type OnePagerChartTypes = {
    onePagerData: OnePagerData,
    isLoading: boolean
}

export const OnePagerCharts = ({onePagerData, isLoading}: OnePagerChartTypes) => {

    return (
        <ContentCard title='Current User Data' isLoading={isLoading}>
            <Tabs>
                <TabList>
                    <Tab>User Growth</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </ContentCard>
    )
}