import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Camera,
  CameraDevice,
  CameraDevices,
  PhotoFile,
  useCameraDevices,
} from 'react-native-vision-camera';

const App = () => {
  const devices: CameraDevices = useCameraDevices();
  const device: CameraDevice = devices.back!;

  const camera = useRef<Camera>(null);
  const [takePhoto, setTakePhoto] = useState<boolean>(false);
  const [imagePath, setImagePath] = useState('');
  const getPermission = async () => {
    try {
      const newCameraPermission = await Camera.requestCameraPermission();
      const newMicrophonePermission =
        await Camera.requestMicrophonePermission();
      const cameraPermission = await Camera.getCameraPermissionStatus();
      const microphonePermission = await Camera.getMicrophonePermissionStatus();
      console.log(cameraPermission);
    } catch (error) {
      console.log(error);
    }
  };

  const takePicture = async () => {
    const photo: PhotoFile = await camera.current!.takePhoto();
    setImagePath(photo.path);
    setTakePhoto(false);
    console.log(photo);
  };

  useEffect(() => {
    getPermission();

    return () => {};
  }, []);

  if (device == null) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{flex: 1}}>
      {takePhoto ? (
        <View style={{flex: 1}}>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo
          />
          <TouchableOpacity
            style={{
              height: 60,
              width: 60,
              borderRadius: 30,
              backgroundColor: '#ff0037',
              position: 'absolute',
              bottom: 50,
              alignSelf: 'center',
            }}
            onPress={takePicture}></TouchableOpacity>
        </View>
      ) : (
        <View>
          <Image
            source={{uri: `file://${imagePath}`}}
            height={300}
            width={300}
          />
          <TouchableOpacity
            onPress={() => setTakePhoto(true)}
            style={{backgroundColor: 'white', width: 50}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Click</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default App;
