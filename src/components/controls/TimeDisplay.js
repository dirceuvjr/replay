// @flow

import * as React from 'react';
import type { CommonProps } from '../common';
import { formatClockTime, formatTime, prefixClassNames } from '../common';
import type { PlayMode } from '../player/VideoStream/common';

type Props = CommonProps & {
	position: number,
	duration?: number,
	absolutePosition?: ?Date,
	playMode?: PlayMode,
	liveDisplayMode: 'clock-time' | 'live-offset',
	positionLabel?: string,
	durationLabel?: string,
	clockTimeLabel?: string
};

const className = 'time-display';
const positionClassName = 'time-display-position';
const durationClassName = 'time-display-duration';
const clockTimeClassName = 'time-display-clock-time';
const noDurationClassName = 'time-display-no-duration';

const isReasonableDateTime = date => date instanceof Date && !isNaN(date.getTime()) && date.getTime() > 1514761200000;

const formatAndLimitTime = (time?: number, zeroAndBelow: boolean = false) => formatTime(time == null ? 0 : Math[zeroAndBelow ? 'min' : 'max'](0, time));

const TimeDisplay = ({ position, duration, absolutePosition, playMode, liveDisplayMode, label, positionLabel, durationLabel, clockTimeLabel, classNamePrefix }: Props) => {
	if (playMode === 'ondemand') {
		return (
			<div className={prefixClassNames(classNamePrefix, className)} title={label}>
				<span className={prefixClassNames(classNamePrefix, positionClassName)} title={positionLabel}>{formatAndLimitTime(position)}</span>
				<span className={prefixClassNames(classNamePrefix, durationClassName)} title={durationLabel}>{formatAndLimitTime(duration)}</span>
			</div>
		);
	} else {
		if ((liveDisplayMode === 'live-offset' && playMode === 'livedvr') || !isReasonableDateTime(absolutePosition)) {
			return (
				<div className={prefixClassNames(classNamePrefix, className)} title={label}>
					<span className={prefixClassNames(classNamePrefix, positionClassName)} title={positionLabel}>{formatAndLimitTime(position - (duration || 0), true)}</span>
					{ playMode === 'livedvr' && <span className={prefixClassNames(classNamePrefix, durationClassName)} title={durationLabel}>{formatAndLimitTime(duration)}</span> }
				</div>
			);
		} else {
			return (
				<div className={prefixClassNames(classNamePrefix, className, noDurationClassName)} title={label}>
					<span className={prefixClassNames(classNamePrefix, clockTimeClassName)} title={positionLabel}>{formatClockTime(absolutePosition)}</span>
				</div>
			);
		}
	}
};
export default TimeDisplay;