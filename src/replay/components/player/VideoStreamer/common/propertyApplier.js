// @flow
import type { PlaybackProps } from '../types';
import type { AudioTrackManager, BitrateManager, StreamRangeHelper, TextTrackManager } from './types';

export const getPropertyApplier = (
  videoElement: HTMLVideoElement, // Abstract this away?
  streamRangeHelper: StreamRangeHelper,
  textTrackManager: TextTrackManager,
  audioTrackManager: AudioTrackManager,
  bitrateManager?: ?BitrateManager
) => (playbackProps: PlaybackProps) => {
  if ('isPaused' in playbackProps) {
    if (playbackProps.isPaused) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
  }
  if (playbackProps.volume != null) {
    videoElement.volume = playbackProps.volume;
  }
  if (playbackProps.isMuted != null) {
    videoElement.muted = playbackProps.isMuted;
  }
  if (playbackProps.position != null) {
    streamRangeHelper.setPosition(playbackProps.position);
  }
  if (playbackProps.isAtLivePosition) {
    streamRangeHelper.gotoLive();
  }
  if (textTrackManager && 'selectedTextTrack' in playbackProps) {
    textTrackManager.handleSelectedTextTrackChange(playbackProps.selectedTextTrack);
  }
  if (audioTrackManager && playbackProps.selectedAudioTrack) {
    audioTrackManager.handleSelectedAudioTrackChange(playbackProps.selectedAudioTrack);
  }
  if (bitrateManager) {
    if (playbackProps.lockedBitrate !== undefined) {
      // $FlowFixMe undefined is OK.
      bitrateManager.lockBitrate(playbackProps.lockedBitrate);
    }
    if (playbackProps.maxBitrate !== undefined) {
      // $FlowFixMe undefined is OK.
      bitrateManager.capBitrate(playbackProps.maxBitrate);
    }
  }
};