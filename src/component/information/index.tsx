import { BRIDE_FIRSTNAME, BRIDE_INFO, GROOM_FIRSTNAME, GROOM_INFO, WEDDING_DATE } from "../../const"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import { useModal } from "../store"
import { AttendanceInfo } from "./attendance"
import { useEffect, useMemo, useState } from "react"

export const Information = () => {
  const { openModal, closeModal } = useModal()
  const [tsDiff, setTsDiff] = useState(WEDDING_DATE.diff())

  const dayDiff = useMemo(() => {
    const dayOffset = WEDDING_DATE.diff(WEDDING_DATE.startOf("day"))
    return Math.ceil((tsDiff - dayOffset) / 1000 / 60 / 60 / 24)
  }, [tsDiff])


  const diffs = useMemo(() => {
    const tsDiff_ = Math.abs(tsDiff)
    const seconds = Math.floor((tsDiff_ % 60000) / 1000)
    const minutes = Math.floor((tsDiff_ % 3600000) / 60000)
    const hours = Math.floor((tsDiff_ % 86400000) / 3600000)
    const days = Math.floor(tsDiff_ / 86400000)
    const isAfter = tsDiff < 0

    return { days, hours, minutes, seconds, isAfter }
  }, [tsDiff])

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = WEDDING_DATE.diff()

      setTsDiff(diff)
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <LazyDiv className="card information">
      <h2 className="english">Information</h2>
      {/*<div className="info-card">*/}
      {/*  <div className="label">식사 안내</div>*/}
      {/*  <div className="content">*/}
      {/*    식사시간: 12시 30분 ~ 14시 30분*/}
      {/*    <br />*/}
      {/*    장소: 지하 1층 연회장*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="info-card">
        <div className="label">마음 전하기</div>
        <div className="content">
          참석이 어려워 직접 축하해주지 못하는
          <br />
          분들을 위해 계좌번호를 기재하였습니다.
          <br />
          넓은 마음으로 양해 부탁드립니다.
        </div>

        <div className="break" />

        <Button
          style={{ width: "100%" }}
          onClick={() => {
            openModal({
              className: "donation-modal",
              closeOnClickBackground: true,
              header: <div className="title">신랑측 계좌번호</div>,
              content: (
                <>
                  {GROOM_INFO.filter(({ account }) => !!account).map(
                    ({ relation, name, account }) => (
                      <div className="account-info" key={relation}>
                        <div>
                          <div className="name">
                            <span className="relation">{relation}</span> {name}
                          </div>
                          <div>{account}</div>
                        </div>
                        <Button
                          className="copy-button"
                          onClick={async () => {
                            if (account) {
                              try {
                                navigator.clipboard.writeText(account)
                                alert(account + "\n복사되었습니다.")
                              } catch {
                                alert("복사에 실패했습니다.")
                              }
                            }
                          }}
                        >
                          복사하기
                        </Button>
                      </div>
                    ),
                  )}
                </>
              ),
              footer: (
                <Button
                  buttonStyle="style2"
                  className="bg-light-grey-color text-dark-color"
                  onClick={closeModal}
                >
                  닫기
                </Button>
              ),
            })
          }}
        >
          신랑측 계좌번호 보기
        </Button>
        <div className="break" />
        <Button
          style={{ width: "100%" }}
          onClick={() => {
            openModal({
              className: "donation-modal",
              closeOnClickBackground: true,
              header: <div className="title">신부측 계좌번호</div>,
              content: (
                <>
                  {BRIDE_INFO.filter(({ account }) => !!account).map(
                    ({ relation, name, account }) => (
                      <div className="account-info" key={relation}>
                        <div>
                          <div className="name">
                            <span className="relation">{relation}</span> {name}
                          </div>
                          <div>{account}</div>
                        </div>
                        <Button
                          className="copy-button"
                          onClick={async () => {
                            if (account) {
                              try {
                                navigator.clipboard.writeText(account)
                                alert(account + "\n복사되었습니다.")
                              } catch {
                                alert("복사에 실패했습니다.")
                              }
                            }
                          }}
                        >
                          복사하기
                        </Button>
                      </div>
                    ),
                  )}
                </>
              ),
              footer: (
                <Button
                  buttonStyle="style2"
                  className="bg-light-grey-color text-dark-color"
                  onClick={closeModal}
                >
                  닫기
                </Button>
              ),
            })
          }}
        >
          신부측 계좌번호 보기
        </Button>
      </div>
      <AttendanceInfo />

      <div>
        <div className="countdown-wrapper">
          <div className="countdown">
            <div className="unit">DAY</div>
            <div />
            <div className="unit">HOUR</div>
            <div />
            <div className="unit">MIN</div>
            <div />
            <div className="unit">SEC</div>
            <div className="count">{diffs.days}</div>
            <span>:</span>
            <div className="count">{diffs.hours}</div>
            <span>:</span>
            <div className="count">{diffs.minutes}</div>
            <span>:</span>
            <div className="count">{diffs.seconds}</div>
          </div>
          <div className="message">
            {GROOM_FIRSTNAME} & {BRIDE_FIRSTNAME}의 결혼식이{" "}
            {dayDiff > 0 ? (
              <>
                <span className="d-day">{dayDiff}</span>일 남았습니다.
              </>
            ) : dayDiff === 0 ? (
              <>오늘입니다.</>
            ) : (
              <>
                <span className="d-day">{-dayDiff}</span>일 지났습니다.
              </>
            )}
          </div>
        </div>
      </div>

    </LazyDiv>
  )
}
