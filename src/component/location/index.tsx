import { Map } from "./map"
import { ReactComponent as CarIcon } from "../../image/car-icon.svg"
import { ReactComponent as BusIcon } from "../../image/bus-icon.svg"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS, LOCATION_FULL } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION_FULL}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            인천지하철 1호선 <b>계산역 1번출구</b> 바로 앞 위치
            <br />

          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - 간선: 24-1, 30, 79, 80
            <br />
            - 일반: 81, 88
            <br />
            - 광역: 1500, 9500
            <br />
            - 시외: 3000, 3030, 5000
            <br />
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">

            - 주차 요금은 2시간 무료입니다.
            <br />
            (주차장 이용 시 웨딩홀과 바로 연결)
          </div>
          <div />
          {/*<div className="content">*/}
          {/*  <b>*/}
          {/*    ※ 서울대학교 정, 후문을 통과할 경우 통행료가 발생하므로*/}
          {/*    유의바랍니다. 낙성대 방향으로 이용해주세요.*/}
          {/*  </b>*/}
          {/*</div>*/}
        </div>

        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">제천 전세버스 대절</div>
          <div />
          <div className="content">

            - 일시 : 11월 30일
            <br />
            - 기사님 연락처 : 010-4499-8884
            <br />
            - 출발 : 08시 (능강리 마을회관)
            <br />
            - 출발 : 09시 (제천역 광장)
            <br />

          </div>
        </div>

        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">제천 피로연</div>
          <div />
          <div className="content">

            - 일시 : 11월 21일(금) 오후 4시 ~ 6시
            <br />
            - 장소 : 청풍 황금송어
            <br />
            - 주소 : 제천시 금성면 성내리 173번지
            <br />

          </div>
        </div>

      </LazyDiv>
    </>
  )
}
