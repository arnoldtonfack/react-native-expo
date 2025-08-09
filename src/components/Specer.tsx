import React from 'react';
import { DimensionValue, View } from 'react-native';

interface SpecerProps {
  width?: DimensionValue ;
  height?:DimensionValue ;
}

const Specer:React.FC<SpecerProps> = ({ width ='100%', height = 40 }) => {
  return (
    <View style={{width, height}} />
  )
}

export default Specer