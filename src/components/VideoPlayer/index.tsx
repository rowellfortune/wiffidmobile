import React , { useRef ,useState, useEffect }from 'react';
import {View, Text } from 'react-native';
import { Video } from 'expo-av';
// import {Episode } from '../../../types';
import styles from './style';
import { unloadAsync } from 'expo-font';
import { Playback } from 'expo-av/build/AV';

// interface VideoPlayerProps {
//     episode: Episode
// }

const VideoPlayer = (props) => {
    // const {  episode } = props;

    // const [status, setStatus ] = useState({});

    // const video = useRef<Playback>(null);

    // useEffect(() =>{
    //     if(!video){
    //         return;
    //     }
    //     (async () => {
    //         await video?.current?.unloadAsync();
    //         await video?.current?.loadAsync(
    //            {uri: episode.video}, 
    //            {},
    //            false
    //         );
    //     })();
    // }, [episode] )

    

    return(   
        <Video
            // ref={video}
            // style={styles.video}
            // source={{
            //     uri: episode.video,
            // }}
            // posterSource={{
            //     uri: episode.poster,
            // }}
            // usePoster={true}
            // useNativeControls
            // resizeMode="contain"
            // isLooping
            // onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
    )
}

export default VideoPlayer;