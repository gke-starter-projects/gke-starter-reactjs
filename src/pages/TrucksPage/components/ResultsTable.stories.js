import React from 'react';

import ResultsTable from './ResultsTable';

export default {
  title: 'Dashboard/TrucksBody/ResultsTable',
  component: ResultsTable,
};

const sampleResponse = {
  closest_food_trucks: [
    {
      locationid: 1575190,
      applicant: "Park's Catering",
      coordinates: {
        latitude: 37.730906150359694,
        longitude: -122.37330257748522,
      },
      distance: 800.5262406070834,
    },
    {
      locationid: 1575191,
      applicant: "Park's Catering",
      coordinates: {
        latitude: 37.73213495192223,
        longitude: -122.37539807856734,
      },
      distance: 800.7441498445778,
    },
    {
      locationid: 963995,
      applicant: 'Singh Brothers Ice Cream',
      coordinates: {
        latitude: 37.72943828845401,
        longitude: -122.37665780072307,
      },
      distance: 800.7553519017798,
    },
    {
      locationid: 1575189,
      applicant: "Park's Catering",
      coordinates: {
        latitude: 37.726382932182176,
        longitude: -122.37843478266778,
      },
      distance: 800.7974281101061,
    },
    {
      locationid: 1337427,
      applicant: 'Liang Bai Ping',
      coordinates: {
        latitude: 37.72578913981244,
        longitude: -122.37897271962358,
      },
      distance: 800.8217204013047,
    },
  ],
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ResultsTable {...args} />;
}

export const Normal = Template.bind({});
Normal.args = {
  foodTrucks: sampleResponse.closest_food_trucks,
  searchedAtLeastOnce: true,
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  foodTrucks: [],
  searchedAtLeastOnce: false,
  isLoading: true,
};

export const Waiting = Template.bind({});
Waiting.args = {
  foodTrucks: [],
  searchedAtLeastOnce: false,
  isLoading: false,
};

export const EmptyResults = Template.bind({});
EmptyResults.args = {
  foodTrucks: [],
  searchedAtLeastOnce: true,
  isLoading: false,
};