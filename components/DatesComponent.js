import React from 'react';
import {dates} from './Dates.js';

export default function DatesComponent() {
  return (
    <div>
      <script charset='utf-8' src={dates}></script>
      <a
        target='_blank'
        class='bit-widget-initializer'
        data-artist-name='THE SATAN'
        data-display-local-dates='false'
        data-display-past-dates='true'
        data-auto-style='false'
        data-text-color='#FFFFFF'
        data-link-color='#ff253a'
        data-background-color='rgba(0,0,0,0)'
        data-display-limit='50'
        data-display-start-time='false'
        data-link-text-color='#ffffff'
        data-display-lineup='false'
        data-display-play-my-city='true'
        data-separator-color='rgba(124,124,124,0.25)'
      ></a>
    </div>
  );
}
