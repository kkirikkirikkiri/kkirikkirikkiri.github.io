import Button from "components/common/atoms/Button";
import VerticalBlank from "components/common/atoms/VerticalBlank";
import Image from "next/image";
import NaverLogin from "react-naver-login";

export const Naver = () => {
  const NAVER_CLIENT_ID = "T1PLBkBiDziggLWWCwK_";
  const NAVER_CALLBACK_URL = "http://localhost:3000/login";

  return (
    <NaverLogin
      clientId={NAVER_CLIENT_ID}
      callbackUrl={NAVER_CALLBACK_URL}
      render={(props: any) => (
        <Button
          onClick={props.onClick}
          background={"#6bbe48"}
          color={"#ffffff"}
        >
          <Image src={"/img/icon/naver.svg"} width={14} height={12} />
          <VerticalBlank width={4} />
          네이버 로그인
        </Button>
      )}
      onSuccess={(naverUser: any) => console.log(naverUser)}
      onFailure={(result: any) => console.error(result)}
    />
  );
};

export default Naver;
