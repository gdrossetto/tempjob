import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import Svg, {Circle, Defs, Rect, Mask} from 'react-native-svg';

const CameraOverlay = () => {
  const {height, width} = Dimensions.get('window');
  const circleRadius = width / 2.5;
  const viewBox = `0 0 ${width} ${height}`;
  return (
    <View aspectRatio={1}>
      <Svg height={height} viewBox={viewBox}>
        <Defs>
          <Mask id="mask">
            <Rect
              height={height}
              width={width}
              fill="rgba(225, 225, 225,0.9)"
            />
            <Rect
              height={height * 0.6}
              width={width * 0.9}
              x={width * 0.05}
              y={height * 0.25}
              fill="#000"
            />
          </Mask>
        </Defs>

        <Rect height={height} width={width} fill="#262626" mask="url(#mask)" />
      </Svg>
    </View>
  );
};

export default CameraOverlay;
