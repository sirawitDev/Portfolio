import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLang: localStorage.getItem('lang') || 'th',
    translations: {
      th: {
        home: 'หน้าแรก',
        about: 'เกี่ยวกับ',
        project: 'โปรเจค',
        portfolio: 'พอร์ตโฟลิโอ',
        hello: 'สวัสดี, ฉันชื่อ',
        im_a: 'ฉันเป็น',
        web_developer: 'นักพัฒนาเว็บไซต์',
        github: 'กดดู GitHub',
        facebook: 'กดดู Facebook',
        name: 'ศิรวิชญ์',
        profile: 'โปรไฟล์',
        education: 'ประวัติการศึกษา',
        highschool: 'มัธยมศึกษา',
        highschoolMe: 'โรงเรียนท่าวังผาพิทยาคม',
        university: 'มหาลัย',
        universityMe: 'มหาวิทยาลัยราชภัฏลำปาง',
        universityFacMe: 'วิศวกรรมคอมพิวเตอร์',
        personalinformation: 'ข้อมูลส่วนตัว',
        age: 'อายุ',
        location: 'ที่อยู่',
        locationMe: 'น่าน, ประเทศไทย',
        status: 'สถานะ',
        statusMe: 'กำลังฝึกสหกิจศึกษา',
        email: 'อีเมล',
        phonenumber: 'เบอร์โทรศัพท์',
        fullname: 'ชื่อ : ศิรวิชญ์ กำลังศรี',
        web_developerInfo: 'นักพัฒนาเว็บ',
        year: 'ปี',
        skill: 'ความสามารถ',
        more: 'ดูเพิ่มเติม',
        visitwebsite: 'เยี่ยมชมเว็บไซต์'
      },
      en: {
        home: 'Home',
        about: 'About',
        project: 'Project',
        portfolio: 'Portfolio',
        hello: "Hello, It's",
        im_a: "I'm a",
        web_developer: 'Web Developer',
        github: 'View GitHub',
        facebook: 'View Facebook',
        name: 'Sirawit',
        profile: 'Profile',
        education: 'Education',
        highschool: 'High School',
        highschoolMe: 'Thawangphapittayakhom School',
        university: 'University',
        universityMe: 'Lampang Rajabhat University',
        universityFacMe: 'Computer Engineering',
        personalinformation: 'Personal Information',
        age: 'Age',
        location: 'Location',
        locationMe: 'Nan, Thailand',
        status: 'Status',
        statusMe: 'Cooperative education',
        email: 'Email',
        phonenumber: 'PhoneNumber',
        fullname: 'Name : Sirawit Kumlangsri',
        year: 'year',
        skill: 'Skill',
        more: 'See More',
        visitwebsite: 'Visit Website'
      },
      ja: {
        home: 'ホーム',
        about: '私について',
        project: 'プロジェクト',
        portfolio: 'ポートフォリオ',
        hello: 'こんにちは, 私は',
        im_a: '私は',
        web_developer: 'Web Developer',
        github: 'GitHubを見る',
        facebook: 'Facebookを見る',
        name: 'Sirawit', //シラウィット
        profile: 'プロフィール',
        education: '教育',
        highschool: '高校',
        highschoolMe: 'Thawangphapittayakhom School',
        university: '大学',
        universityMe: 'Lampang Rajabhat University',
        universityFacMe: 'コンピュータ工学',
        personalinformation: '個人情報',
        age: '年齢',
        location: '所在地',
        locationMe: 'ナーン, タイ',
        status: '状態',
        statusMe: '協同教育',
        email: '電子メール',
        phonenumber: '電話番号',
        fullname: '名前 : Sirawit Kumlangsri',
        web_developerInfo: 'ウェブ開発者',
        year: '年',
        skill: 'スキル',
        more: 'もっと見る',
        visitwebsite: 'ウェブサイトを訪れる'
      },
      zh: {
        home: '主页',
        about: '关于',
        project: '项目',
        portfolio: '作品集',
        hello: '你好, 我是',
        im_a: '我是',
        web_developer: 'Web Developer',
        github: '查看 GitHub',
        facebook: '查看 Facebook',
        name: 'Sirawit', //西拉威
        profile: '个人简介',
        education: '教育',
        personalinformation: '个人信息',
        age: '年龄',
        location: '位置',
        more: '查看更多',
        visitwebsite: '访问网站'
      },
      ko: {
        home: '홈',
        about: '소개',
        project: '프로젝트',
        portfolio: '포트폴리오',
        hello: '안녕하세요, 저는',
        im_a: '저는',
        web_developer: 'Web Developer',
        github: 'GitHub 보기',
        facebook: 'Facebook 보기',
        name: 'Sirawit', //시라윗
        profile: '프로필',
        education: '교육',
        personalinformation: '개인 정보',
        age: '나이',
        location: '위치',
        more: '더보기',
        visitwebsite: '웹사이트 방문'
      }
    }
  }),
  
  actions: {
    setLanguage(lang) {
      this.currentLang = lang
      localStorage.setItem('lang', lang)
    },
    
    t(key) {
      return this.translations[this.currentLang][key] || key
    }
  }
})
