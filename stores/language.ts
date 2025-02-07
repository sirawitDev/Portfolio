import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLang: localStorage.getItem('lang') || 'th', // ดึงค่าจาก localStorage ถ้ามี
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
        year: 'ปี'
      },
      en: {
        home: 'Home',
        about: 'About',
        project: 'Project',
        portfolio: 'Portfolio',
        hello: "Hello, It's",
        im_a: "I'm a",
        web_developer: 'Web Developer',
        web_developerInfo: 'Web Developer with',
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
        year: 'year'
      }
    }
  }),
  
  actions: {
    setLanguage(lang: 'th' | 'en') {
      this.currentLang = lang
      localStorage.setItem('lang', lang)
    },
    
    t(key: string) {
      return this.translations[this.currentLang][key] || key
    }
  }
})
