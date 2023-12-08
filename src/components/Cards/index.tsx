import React from 'react'
import { Box, Card,  Grid, GridCol, Text } from '@mantine/core'
import variable from './card.module.scss'
import { CardInfo } from '@/utils/data'
import { CardProps } from '@/utils/types'


const Cards = () => {

const card = CardInfo.map((item: CardProps, index: number) => (
    <GridCol key={index} span={{lg: 3, md: 6, sm: 12}} >

    <Card  className={variable.card}>
            <Box className={variable.cardIcon} style={{backgroundColor: item.background}}>{item.icon}</Box>
            <Text className={variable.cardTitle}>{item.title}</Text>
            <Text className={variable.cardTotal}>{item.total}</Text>
    </Card>
    </GridCol>
))
  return (

    <Grid  justify={"space-between"}>
        {card}
    </Grid>

  )
}

export default Cards