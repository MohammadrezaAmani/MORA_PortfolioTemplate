import {
  PiTelegramLogoThin,
  PiInstagramLogoThin,
  PiLinkedinLogoThin,
} from "react-icons/pi";
import { langs as languages } from "./langs";

export const profile = {
  image: "https://avatars.githubusercontent.com/u/47231161?v=4",
  email: "more.amani@yahoo.com",
  phone: "123-456-7890",
  langs: [
    {
      lang: languages.en.short,
      title: "Software Engineer",
      name: "Mohammadreza Amani",
      about:
        "Experienced Software Engineer with a passion for innovation and problem-solving. Dedicated to crafting high-quality software solutions that exceed expectations. Proficient in a wide range of technologies including React, Node.js, TypeScript, and GraphQL, with a strong foundation in DevOps practices such as Docker, Kubernetes, CI/CD, and serverless architecture. Skilled in Agile methodologies with a focus on TDD and DDD principles. Committed to continuous learning and staying updated with the latest industry trends. Excited to collaborate on challenging projects and contribute to the success of dynamic teams.",
      location: "Tehran, IR",
      favorites: [
        "React",
        "Node.js",
        "TypeScript",
        "GraphQL",
        "Docker",
        "Kubernetes",
        "AWS",
        "GCP",
        "CI/CD",
        "TDD",
        "DDD",
        "Microservices",
        "Serverless",
        "Agile",
        "Scrum",
        "Kanban",
        "Jira",
        "Confluence",
        "Git",
        "GitHub",
        "GitLab",
        "Bitbucket",
        "VS Code",
        "WebStorm",
        "Postman",
        "Insomnia",
      ],
    },
    {
      lang: languages.fa.short,
      title: "مهندس نرم افزار",
      name: "محمدرضا امانی",
      about:
        "مهندس نرم‌افزار با تجربه، با علاقه‌ی فراوان به نوآوری و حل مسائل. متعهد به ایجاد راه‌حل‌های نرم‌افزاری با کیفیت بالا که انتظارات را برآورده می‌کنند. ماهر در زمینه‌ی تکنولوژی‌های گوناگون از جمله ری‌اکت، نود.جی‌اس، تایپ‌اسکریپت و جی‌کیوال، با پایه‌ی استوار در روش‌های DevOps مانند داکر، کوبرنیتیز، CI/CD و معماری سرورلس. مسلط به روش‌های چابک با تمرکز بر اصول TDD و DDD. متعهد به یادگیری مداوم و دنبال کردن آخرین روندهای صنعت. مشتاق به همکاری در پروژه‌های چالش‌برانگیز و سهیم شدن در موفقیت تیم‌های پویا.",
      location: "تهران، ایران",
      favorites: [
        "ری‌اکت",
        "نود.جی‌اس",
        "تایپ‌اسکریپت",
        "جی‌کیو‌ال",
        "داکر",
        "کوبرنیتیز",
        "او‌او‌اس",
        "جی‌سی‌پی",
        "سی‌آی/سی‌دی",
        "تی‌دی‌دی",
        "معماری میکروسرویس",
        "سرورلس",
        "چابک",
        "اسکرام",
        "کانبان",
        "جیرا",
        "کانفلوئنس",
        "گیت",
        "گیت‌هاب",
        "گیت‌لب",
        "بیت‌باکت",
        "وی‌اس‌کد",
        "وب‌استورم",
        "پستمن",
        "اینسومنیا",
      ],
    },
  ],
  socials: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/mohammadreza-amani",
      icon: PiLinkedinLogoThin,
    },
    {
      name: "github",
      url: "https://github.com/MohammadrezaAmani",
      icon: PiTelegramLogoThin,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/more.amani",
      icon: PiInstagramLogoThin,
    },
    {
      name: "telegram",
      url: "https://t.me/Mohammadreza_amani",
      icon: PiTelegramLogoThin,
    },
  ],
};
