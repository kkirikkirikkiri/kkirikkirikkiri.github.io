import Button from "components/common/atoms/Button";
import VerticalBlank from "components/common/atoms/VerticalBlank";
import Image from "next/image";
import KakaoLogin from "react-kakao-login";

const token = "64d0c649f5b7e5a3ef9790587ee5f19b";
export const Kakao = () => {
  return (
    <KakaoLogin
      token={token}
      onSuccess={console.log}
      onFail={console.error}
      onLogout={console.info}
      render={({ onClick }: any) => {
        return (
          <Button onClick={onClick} background={"#f8d756"} color={"#050505"}>
            <Image src={"/img/icon/kakao.svg"} width={14} height={12} />
            <VerticalBlank width={4} />
            카카오 로그인
          </Button>
        );
      }}
    />
  );
};

export default Kakao;
