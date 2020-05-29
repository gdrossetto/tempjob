import React from 'react';
import {View} from 'react-native';
import Svg, {Defs, Rect, Mask} from 'react-native-svg';
import {vw, vh} from '../util/Util';

const CameraOverlay = () => {
  const viewBox = `0 0 ${vw(100)} ${vh(100)}`;
  return (
    <View aspectRatio={1}>
      <Svg height={vh(100)} viewBox={viewBox}>
        <Defs>
          <Mask id="mask">
            <Rect
              height={vh(100)}
              width={vw(100)}
              fill="rgba(225, 225, 225,0.9)"
            />
            <Rect
              height={vh(60)}
              width={vw(90)}
              x={vw(5)}
              y={vh(25)}
              fill="#000"
            />
          </Mask>
        </Defs>
        <Rect
          height={vh(100)}
          width={vw(100)}
          fill="#262626"
          mask="url(#mask)"
        />
      </Svg>
    </View>
  );
};

export default CameraOverlay;
