import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ROUTES from "routes/routes";
import styled from "styled-components";
const MobileGNB = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  return (
    <>
      <div>
        <Image
          src={"/img/icon/menu.svg"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          width={24}
          height={24}
        />
      </div>
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : "none"}`}>
        <span
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="close-btn"
        >
          <div>
            <Image src={"/img/icon/close.svg"} width={24} height={24} />
          </div>
        </span>
        <div className="m-login">
          <span>로그인하고 끼리끼리를 마음껏 투어하세요!</span>
          <Link href={ROUTES.LOGIN.url}>
            <LoginButton>로그인</LoginButton>
          </Link>
        </div>
        <div className="m-menu">
          <ul className="board">
            <li>공지사항</li>
            <li>자유게시판</li>
          </ul>
          <ul className="board">
            <h2>유형별 TEST</h2>
            <li>MBTI 유형</li>
            <li>색상 테스트</li>
            <li>?? 테스트</li>
            <li>?? 테스트</li>
          </ul>
        </div>
      </div>
      <div className={`dimmed ${mobileMenuOpen ? "active" : "none"}`}></div>
    </>
  );
};

const Header = () => {
  return (
    <SHeader>
      <div>
        {/* <MobileGNB /> */}
        {/* <div>
          <Image
            className="logo-mini"
            src={"/img/logo-mini.svg"}
            width={39}
            height={35}
            objectFit="fill"
          />
        </div> */}
        <Link href={ROUTES.LOGIN.url}>
          <LoginButton>로그인</LoginButton>
        </Link>
      </div>
    </SHeader>
  );
};
const SHeader = styled.nav`
  width: 1100px;
  display: flex;
  height: 76px;
  align-items: center;
  margin: 0 auto;
  justify-content: flex-end;
`;

const LoginButton = styled.button`
  height: 40px;
  width: 76px;
  border-radius: 10px;
  background: #eef6fa;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #2aa0e1;
`;
export default Header;
