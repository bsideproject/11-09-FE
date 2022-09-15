const env = {
  apiURL: process.env.REACT_APP_API_URL,
  localURL: process.env.REACT_APP_LOCAL,
  kakaoKey: process.env.REACT_APP_KAKAO_API_KEY,
  kakaoLogin: `${process.env.REACT_APP_KAKAO_API_LOGIN_URL}&client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${process.env.REACT_APP_LOCAL}/login&prompt=login`,
  kakaoToken: process.env.REACT_APP_KAKAO_API_ACCESS_TOKEN,
  kakaoShareKey: process.env.REACT_APP_KAKAO_SHARE_API_KEY,
};

export default env;
