import React from 'react'
import { useState } from 'react';
import HighlightText from './HighlightText';
import { HomePageExplore } from "../../../data/homepage-explore";


const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];
const ExploreMore = () => {
    const [currentTab , setCurrentTab ] = useState(tabsName[0]);
    const [courses , setCourses] = useState()
  return (
    <div>
      
    </div>
  )
}

export default ExploreMore;
