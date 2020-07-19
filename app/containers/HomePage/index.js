/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import VideoEnVivo from './sections/Video/video';


export default function HomePage(props) {
  return (
    <div>
      
    <VideoEnVivo match={props.match}></VideoEnVivo>
    </div>
  );
}
