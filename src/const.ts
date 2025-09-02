import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"
import image1 from "./image/new/galary/1.jpg"
import image2 from "./image/new/galary/2.jpg"
import image3 from "./image/new/galary/3.jpg"
import image4 from "./image/new/galary/4.jpg"
import image5 from "./image/new/galary/5.jpg"
import image6 from "./image/new/galary/6.jpg"
import image7 from "./image/new/galary/7.jpg"
import image8 from "./image/new/galary/8.jpg"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2025-11-30 13:30", "Asia/Seoul")
export const HOLIDAYS = [15]

export const LOCATION = "인천 CN웨딩홀 (계산점)"
export const LOCATION_FULL = "인천 CN웨딩홀 (계산점), 5층"
export const LOCATION_ADDRESS = "인천 계양구 경명대로 1108"

export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

export const WEDDING_HALL_POSITION = [126.72994579017, 37.542915873776]

export const NMAP_PLACE_ID = 12813804
export const KMAP_PLACE_ID = 248149939

export const BRIDE_FULLNAME = "이충화"
export const BRIDE_FIRSTNAME = "충화"
export const BRIDE_TITLE = "딸"
export const BRIDE_FATHER = "이해영"
export const BRIDE_MOTHER = "최영옥"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-7197-3096",
    account: "국민 406602 04 286864",
  },
  // {
  //   relation: "신부 아버지",
  //   name: BRIDE_FATHER,
  //   phone: "010-0000-0000",
  //   account: "하나 00000000000",
  // },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-6291-7096",
    account: "신한 110 556 645032",
  },
]

export const GROOM_FULLNAME = "김명회"
export const GROOM_FIRSTNAME = "명회"
export const GROOM_TITLE = "아들"
export const GROOM_FATHER = "김재영"
export const GROOM_MOTHER = "최종석"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-9985-5516",
    account: "농협 30219 53257 671",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010-0000-0000",
    account: "농협 42107 85204 8610",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-2399-5516",
    account: "농협 42107 85101 7749",
  },
]

export const GALLERY_IMAGES = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8
]
