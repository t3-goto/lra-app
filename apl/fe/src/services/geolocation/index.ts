import { PositionInfo } from '../../interfaces/PositionInfo';

/**
 * Success Callback of the Get Current Position.
 */
const successCallback: PositionCallback = (
  position
): { payload: PositionInfo } => {
  const data = position.coords;
  const retObj: PositionInfo = {
    latitude: data.latitude,
    longitude: data.longitude,
    accuracy: data.accuracy,
  };
  return { payload: retObj };
};

/**
 * Error Callback of the Get Current Position.
 */
const errorCallback: PositionErrorCallback = (error): { error: any } => {
  const errorInfo = [
    '原因不明のエラーが発生しました。',
    '位置情報の取得が許可されませんでした。',
    '電波状況などで位置情報が取得できませんでした。',
    '位置情報の取得に時間がかかり過ぎてタイムアウトしました。',
  ];
  const errorNo = error.code;
  const errorMessage = `[エラー番号: ${errorNo}]\n${errorInfo[errorNo]}`;
  return { error: { message: errorMessage } };
};

/**
 * Position Options of the Get Current Position.
 */
const positionOptions: PositionOptions = {
  enableHighAccuracy: false,
  timeout: 8000,
  maximumAge: 2000,
};

/**
 * Get Current Position.
 */
export const getCurrentPosition = async () => {
  try {
    if (navigator.geolocation) {
      const position = await new Promise<Position>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          resolve,
          reject,
          positionOptions
        );
      });
      return successCallback(position);
    }
    const errorMessage = 'お使いの端末は、GeoLacation APIに対応していません。';
    return { error: { message: errorMessage } };
  } catch (positionError) {
    return errorCallback(positionError);
  }
};
