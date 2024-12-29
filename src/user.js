export default [
  {
    name: "Ahnaf Hasan Shifat",
    session: "2019-20",
    avatar: "ahnafshifat.jpeg",
    social: {
      github: "https://www.github.com/ah-naf",
      facebook: "https://www.facebook.com/ahnaf.hasan.144",
      linkedin: "https://www.linkedin.com/in/ahnafhasan144",
      codeforces: "https://codeforces.com/profile/Ah_naf",
    },
  },
  {
    name: "Md. Rakib Hossain",
    session: "2019-20",
    avatar: "rakibjoy.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/therakibjoy",
      codeforces: "https://codeforces.com/profile/RakibJoy",
      github: "https://github.com/TheRakibJoy",
      facebook: "https://www.facebook.com/therakibjoy",
    },
  },
  {
    name: "Rajib Chandra Pal",
    session: "2011-12",
    avatar: "rajib.png",
    social: {
      linkedin: "https://www.linkedin.com/in/rajib-chandra-pal-526890159/",
      codeforces: "https://codeforces.com/profile/rajib_119",
      facebook: "https://www.facebook.com/profile.php?id=61554084936485",
    },
  },
  {
    name: "Mohammad Mohsin",
    session: "2011-12",
    avatar: "mohsin.png",
    social: {
      linkedin: "https://www.linkedin.com/in/mohammad-mohsin-601527159/",
    },
  },
  {
    name: "Reajul Haque Reayz",
    session: "2012-13",
    avatar: "reayz.png",
    social: {
      linkedin: "https://www.linkedin.com/in/reayz/",
      codeforces: "https://codeforces.com/profile/Reayz",
      github: "https://github.com/Reayz",
      facebook: "https://www.facebook.com/reajul.haque",
    },
  },
  {
    name: "Ashraful Afruz",
    session: "2012-13",
    avatar: "afruz.png",
    social: {
      codeforces: "https://codeforces.com/profile/ashraful_afruz",
      facebook: "https://www.facebook.com/resoluteash.khan",
    },
  },
  {
    name: "Md Raihanul Islam",
    session: "2019-20",
    avatar: "raihan.png",
    social: {
      linkedin: "https://www.linkedin.com/in/md-raihanul-islam-10a60622a/",
      codeforces: "https://codeforces.com/profile/ArafRaihan",
      github: "https://github.com/MdRaihanulIslam",
      facebook: "https://www.facebook.com/md.raihanul.islam.158388",
    },
  },
  {
    name: "Ahsanul Anam Saboj",
    session: "2019-20",
    avatar: "ahsanulanam.png",
    social: {
      linkedin: "https://www.linkedin.com/in/ahsanulanam/",
      codeforces: "https://codeforces.com/profile/Ahsanul_Anam_4632",
      github: "https://github.com/AhsanulAnam-Saboj",
      facebook: "https://www.facebook.com/ahsanul.anam.92",
    },
  },
  {
    name: "Jakaria Hossain",
    session: "2019-20",
    avatar: "ahmedjaki.png",
    social: {
      linkedin: "https://www.linkedin.com/in/jakaria-hossain-82935020a/",
      codeforces: "https://codeforces.com/profile/ahmed_jaki",
      facebook: "https://www.facebook.com/innocent.jaki",
    },
  },
  {
    name: "Sheikh Sady",
    session: "2019-20",
    avatar: "sheikhsady.png",
    social: {
      codeforces: "https://codeforces.com/profile/Sheikh_Sady",
      github: "https://github.com/sheikh-sady",
      facebook: "https://www.facebook.com/mdsheikh.sady.77",
    },
  },
  {
    name: "Shah Jahan",
    session: "2019-20",
    avatar: "shahjahan.png",
    social: {
      linkedin: "https://www.linkedin.com/in/shah-jahan-9bb080249/",
      codeforces: "https://codeforces.com/profile/Bertho_codeer",
      facebook: "https://www.facebook.com/limelightboy.somratshahajahan",
    },
  },
  {
    name: "Nafeu Khan",
    session: "2019-20",
    avatar: "nafeu.png",
    social: {
      linkedin: "https://www.linkedin.com/in/nafeu-khan/",
      codeforces: "https://codeforces.com/profile/Nafeu",
      github: "https://github.com/nafeu-khan",
      facebook: "https://www.facebook.com/nafeu.khan.90",
    },
  },
  
].sort((a, b) => {
  // Compare sessions first:
  const sessionComparison = a.session.localeCompare(b.session);
  if (sessionComparison !== 0) {
    return sessionComparison;
  }
  // If sessions are the same, compare by name:
  return a.name.localeCompare(b.name);
});
