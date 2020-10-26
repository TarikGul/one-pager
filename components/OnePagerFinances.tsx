import React from 'react';
import { Heading, Progress, Box } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerFinancesProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

/** Renders the Finances card. */
export const OnePagerFinances = ({
  onePagerData,
  isLoading,
}: OnePagerFinancesProps) => {

  // Format a number to include a dollar sign. This function
  // will be improved as part of task 2.
  const formatFinanceNumber = (financeNumber: number) => {
    // Regex is probably the cleanest way to implement this.
    const str = financeNumber.toString();
    const result = str.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    return '$' + result;
  };

  const fundingProgress = (raised: number, goal: number) => {
    return (raised/goal) * 100;
  }

  const progress = fundingProgress(
    onePagerData.fundsRaisedInStage,
    onePagerData.fundraisingStageGoal
  );

  // Below the conditionals for funds raised and StageGoal are used to avoid an 
  // undefined error happening when using toString() on financeNumber.. Seems like there is a timeout
  // on receiving the data, similar to a API request. Therefore the first render will be
  // without the data. Normally, i would fetch the data
  // in a useeffect and then do something based off a successfull promise
  // but here I am just writing in the conditional because we are mocking our data.
  return (
    <ContentCard title='Finances' isLoading={isLoading}>
      <Heading as='h1' size='lg' marginRight='10px'>
        Funding Stage: {onePagerData.fundraisingStage}
      </Heading>
      <SubHeading>
        Funds Raised: {formatFinanceNumber(onePagerData.fundsRaisedInStage ? 
                                           onePagerData.fundsRaisedInStage : 0)}
      </SubHeading>
      <SubHeading>
        Funding Goal: {formatFinanceNumber(onePagerData.fundraisingStageGoal ? 
                                           onePagerData.fundraisingStageGoal : 0)}
      </SubHeading>
      <SubHeading>
        Funding Details: {onePagerData.fundraisingDetails}
      </SubHeading>

      <Box as='h2' marginRight='10px' textAlign='center'>
        Raised {Math.floor(progress)}% of their current goal 
      </Box>
      <Progress color="green" height="32px" value={progress} />
    </ContentCard>
  );
};

/** Renders smaller heading. */
const SubHeading = ({ children }) => (
  <Heading as='h2' size='md' marginRight='10px'>
    {children}
  </Heading>
);
