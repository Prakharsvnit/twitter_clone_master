import React from 'react'
import Card from "./Card"
import {CovidData} from "./news/Covid"
import {BusinessData} from "./news/Business"
import {TechnologyData} from "./news/Technology"
import {SportsData} from "./news/Sports"
import {PoliticsData} from "./news/Politics"


const Covid = () => {
    


      return (
        CovidData.map(item => {
          return <Card {...item} />
        })
      )


}

const Technology = () => {
    


    return (
      TechnologyData.map(item => {
        return <Card {...item} />
      })
    )

}

const Business = () => {
    


    return (
      BusinessData.map(item => {
        return <Card {...item} />
      })
    )


}

const Sports = () => {
    


    return (
      SportsData.map(item => {
        return <Card {...item} />
      })
    )

}

const Politics = () => {
    


    return (
      PoliticsData.map(item => {
        return <Card {...item} />
      })
      )
    }

export {Covid,Technology,Business,Sports,Politics} 
