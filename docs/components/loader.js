import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import BounceTwist from '../../DEV/BounceTwist';
import FadeEffect from '../../DEV/FadeEffect';
import HingeEffect from '../../DEV/HingeEffect';
import FadeEffectApp from './FadeEffectApp';
import MovingEffectApp from './MovingEffectApp';
// import AppModelList from '../../packages/reactReduxFormBase/DEV/AppModelList';
// import AppFormState from '../../packages/reactReduxFormBase/DEV/AppFormState';

global.BounceTwist = BounceTwist;
global.FadeEffect = FadeEffect;
global.HingeEffect = HingeEffect;
global.FadeEffectApp = FadeEffectApp;
global.MovingEffectApp = MovingEffectApp;
